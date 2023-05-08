import { Box, Button, Divider, HStack, Text } from '@chakra-ui/react';
import {
  getPoolFeeForUniV3,
  getSwapAndXcallAddress,
  getXCallCallData,
  prepareSwapAndXCall,
} from '@connext/chain-abstraction';
import type { DestinationCallDataParams } from '@connext/chain-abstraction/dist/types';
import { Swapper } from '@connext/chain-abstraction/dist/types';
import { FundOperationMode } from '@midas-capital/types';
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import { chainIdToConfig } from 'chains/dist';
import { chakraComponents, Select } from 'chakra-react-select';
import type { BigNumber } from 'ethers';
import { constants, utils } from 'ethers';
import { formatEther, formatUnits, getAddress } from 'ethers/lib/utils.js';
import { useEffect, useMemo, useState } from 'react';
import { useSwitchNetwork } from 'wagmi';

import { StatsColumn } from '@ui/components/pages/PoolPage/MarketsList/AdditionalInfo/FundButton/StatsColumn';
import { AmountInput } from '@ui/components/pages/PoolPage/MarketsList/AdditionalInfo/FundButton/XSupplyModal/AmountInput';
import { Balance } from '@ui/components/pages/PoolPage/MarketsList/AdditionalInfo/FundButton/XSupplyModal/Balance';
import { EnableCollateral } from '@ui/components/pages/PoolPage/MarketsList/AdditionalInfo/FundButton/XSupplyModal/EnableCollateral';
import { PendingTransaction } from '@ui/components/pages/PoolPage/MarketsList/AdditionalInfo/FundButton/XSupplyModal/PendingTransaction';
import { Banner } from '@ui/components/shared/Banner';
import { EllipsisText } from '@ui/components/shared/EllipsisText';
import { Column, Row } from '@ui/components/shared/Flex';
import { MidasModal } from '@ui/components/shared/Modal';
import { TokenIcon } from '@ui/components/shared/TokenIcon';
import {
  SUPPLY_STEPS,
  SUPPORTED_CHAINS_BY_CONNEXT,
  SUPPORTED_CHAINS_XMINT,
} from '@ui/constants/index';
import { useMultiMidas } from '@ui/context/MultiMidasContext';
import { useColors } from '@ui/hooks/useColors';
import { useConnextSdk } from '@ui/hooks/useConnextSdk';
import { useMaxSupplyTokenAmount } from '@ui/hooks/useMaxSupplyAmount';
import { useSupplyCap } from '@ui/hooks/useSupplyCap';
import { useErrorToast, useSuccessToast } from '@ui/hooks/useToast';
import { useTokenData } from '@ui/hooks/useTokenData';
import { useTokens } from '@ui/hooks/useTokens';
import type { TokenData, TxStep } from '@ui/types/ComponentPropsType';
import type { MarketData } from '@ui/types/TokensDataMap';
import { smallFormatter } from '@ui/utils/bigUtils';
import { handleGenericError } from '@ui/utils/errorHandling';

interface SupplyModalProps {
  asset: MarketData;
  assets: MarketData[];
  comptrollerAddress: string;
  isOpen: boolean;
  onClose: () => void;
  poolChainId: number;
}

export const XSupplyModal = ({
  isOpen,
  asset,
  assets,
  comptrollerAddress,
  onClose,
  poolChainId,
}: SupplyModalProps) => {
  const {
    address: _address,
    currentChain,
    currentSdk,
    connextSdk,
    getAvailableFromChains,
  } = useMultiMidas();
  const address = _address ?? constants.AddressZero;
  const addRecentTransaction = useAddRecentTransaction();
  if (!currentChain || !currentSdk) {
    throw new Error("SDK doesn't exist");
  }

  const availableFromChains = useMemo(() => {
    if (poolChainId) {
      return [poolChainId, ...getAvailableFromChains(poolChainId)];
    }
    return [];
  }, [getAvailableFromChains, poolChainId]);

  const { switchNetworkAsync } = useSwitchNetwork();
  const handleSwitch = async (chainId: number) => {
    if (switchNetworkAsync) {
      await switchNetworkAsync(chainId);
    }
  };
  const ixXSupply = useMemo(() => currentChain.id !== poolChainId, [currentChain, poolChainId]);
  if (!ixXSupply && isOpen) {
    throw new Error('Not XSupply!');
  }

  const { data: tokens } = useTokens(currentChain.id);
  const [fromAsset, setFromAsset] = useState<TokenData | undefined>();
  const { estimateSupplyAmount, relayerFee, swapAssets } = useConnextSdk(asset, poolChainId);
  const [supplyAmount, setSupplyAmount] = useState<BigNumber>(constants.Zero);

  const errorToast = useErrorToast();
  const { data: tokenData } = useTokenData(asset.underlyingToken, poolChainId);
  const [amount, setAmount] = useState<BigNumber>(constants.Zero);
  const [enableAsCollateral, setEnableAsCollateral] = useState(!asset.membership);
  const { cCard } = useColors();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSupplying, setIsSupplying] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [failedStep, setFailedStep] = useState<number>(0);
  const [btnStr, setBtnStr] = useState<string>('Supply');
  const [isAmountValid, setIsAmountValid] = useState<boolean>(false);
  const [steps, setSteps] = useState<TxStep[]>([...SUPPLY_STEPS(asset.underlyingSymbol)]);
  const [confirmedSteps, setConfirmedSteps] = useState<TxStep[]>([]);
  const successToast = useSuccessToast();
  const nativeSymbol = currentChain.nativeCurrency?.symbol;
  const optionToWrap = false;

  const { data: supplyCap } = useSupplyCap({
    chainId: poolChainId,
    comptroller: comptrollerAddress,
    market: asset,
  });

  const { data: maxSupplyAmount, isLoading } = useMaxSupplyTokenAmount(
    asset,
    fromAsset,
    comptrollerAddress,
    poolChainId
  );

  useEffect(() => {
    if (!fromAsset && tokens?.length) {
      setFromAsset(tokens[0]);
    }
  }, [tokens, fromAsset]);

  useEffect(() => {
    if (amount.isZero() || !maxSupplyAmount) {
      setIsAmountValid(false);
    } else {
      const max = maxSupplyAmount.number;
      setIsAmountValid(+formatUnits(amount, fromAsset?.decimals) <= max);
      if (fromAsset) {
        estimateSupplyAmount(fromAsset, amount).then((res) =>
          setSupplyAmount(res ? res.bigNumber : constants.Zero)
        );
      }
    }
  }, [amount, estimateSupplyAmount, fromAsset, maxSupplyAmount]);

  useEffect(() => {
    if (!maxSupplyAmount) {
      setIsAmountValid(false);
    } else {
      setIsAmountValid(supplyAmount.lte(maxSupplyAmount.cap));
    }
  }, [supplyAmount, maxSupplyAmount]);

  useEffect(() => {
    if (amount.isZero() || !fromAsset) {
      setBtnStr('Enter a valid amount to supply');
    } else if (isLoading) {
      setBtnStr(`Loading your balance of ${fromAsset?.symbol}...`);
    } else {
      if (isAmountValid) {
        setBtnStr('Supply');
      } else {
        setBtnStr(`You don't have enough ${fromAsset?.symbol}`);
      }
    }
  }, [amount, isLoading, isAmountValid, fromAsset]);

  const onConfirm = async () => {
    if (!currentSdk || !address) return;

    handleXSupply();
  };

  const handleXSupply = async () => {
    if (!connextSdk || !fromAsset || !maxSupplyAmount || !swapAssets) return;

    const origin = SUPPORTED_CHAINS_BY_CONNEXT[currentChain.id].domainId;
    const destination = SUPPORTED_CHAINS_BY_CONNEXT[poolChainId].domainId;

    const connext = await connextSdk.getConnext(origin);
    const sourceSwapAddress = getSwapAndXcallAddress(origin);

    if (!connext || !sourceSwapAddress) {
      return;
    }

    const sentryProperties = {
      asset: fromAsset,
      chainId: currentSdk.chainId,
      comptroller: comptrollerAddress,
      connext: connext,
    };

    setIsConfirmed(true);
    setConfirmedSteps([...steps]);
    const _steps = [...steps];

    setIsSupplying(true);
    setActiveStep(0);
    setFailedStep(0);

    try {
      setActiveStep(optionToWrap ? 2 : 1);

      const token = currentSdk.getEIP20TokenInstance(fromAsset.address, currentSdk.signer);
      const hasApprovedEnough = (await token.callStatic.allowance(address, sourceSwapAddress)).gte(
        amount
      );

      if (!hasApprovedEnough) {
        const tx = await currentSdk.approve(sourceSwapAddress, fromAsset.address);

        addRecentTransaction({
          description: `Approve ${fromAsset.symbol}`,
          hash: tx.hash,
        });
        _steps[optionToWrap ? 1 : 0] = {
          ..._steps[optionToWrap ? 1 : 0],
          txHash: tx.hash,
        };
        setConfirmedSteps([..._steps]);

        await tx.wait();

        _steps[optionToWrap ? 1 : 0] = {
          ..._steps[optionToWrap ? 1 : 0],
          done: true,
          txHash: tx.hash,
        };
        setConfirmedSteps([..._steps]);
        successToast({
          description: 'Successfully Approved!',
          id: 'approved',
        });
      } else {
        _steps[optionToWrap ? 1 : 0] = {
          ..._steps[optionToWrap ? 1 : 0],
          desc: 'Already approved!',
          done: true,
        };
        setConfirmedSteps([..._steps]);
      }
    } catch (error) {
      const sentryInfo = {
        contextName: 'Supply - Approving',
        properties: sentryProperties,
      };
      handleGenericError({ error, sentryInfo, toast: errorToast });
      setFailedStep(optionToWrap ? 2 : 1);
    }

    try {
      setActiveStep(
        optionToWrap && enableAsCollateral ? 4 : optionToWrap || enableAsCollateral ? 3 : 2
      );

      const signerAddress = await currentSdk.signer.getAddress();
      // Calculate relayer fee
      const estimateRelayerFeeParams = {
        destinationDomain: destination,
        isHighPriority: true,
        originDomain: origin,
      };
      const relayerFee = await connextSdk.estimateRelayerFee(estimateRelayerFeeParams);

      // Params for calldata generation
      const destinationRpc =
        chainIdToConfig[poolChainId].specificParams.metadata.rpcUrls.default.http[0];
      const swapper = Swapper.UniV3;
      const poolFee = await getPoolFeeForUniV3(
        destination,
        destinationRpc,
        swapAssets.destination.underlying,
        asset.underlyingToken
      );

      const params: DestinationCallDataParams = {
        fallback: signerAddress,
        swapForwarderData: {
          swapData: {
            amountOutMin: '0',
            poolFee: poolFee,
          },
          toAsset: asset.underlyingToken,
        },
      };
      const forwardCallData = utils.defaultAbiCoder.encode(
        ['address', 'address', 'address'],
        [asset.cToken, asset.underlyingToken, signerAddress]
      );
      const callDataForMidasProtocolTarget = await getXCallCallData(
        destination,
        swapper,
        forwardCallData,
        params
      );
      const swapAndXCallParams = {
        amountIn: amount.toString(),
        callData: callDataForMidasProtocolTarget,
        destinationDomain: destination,
        fromAsset: fromAsset.address,
        originDomain: origin,
        relayerFeeInNativeAsset: relayerFee.toString(),
        to: SUPPORTED_CHAINS_XMINT[poolChainId].targetAddress, // Midas Target address
        toAsset: swapAssets.origin.underlying,
      };

      const xcall_request = await prepareSwapAndXCall(swapAndXCallParams, signerAddress);
      if (!xcall_request) {
        throw new Error('Failed to generate xcall data');
      }

      const tx = await currentSdk.signer.sendTransaction(xcall_request);

      addRecentTransaction({
        description: `${asset.underlyingSymbol} Token Supply`,
        hash: tx.hash,
      });
      _steps[optionToWrap && enableAsCollateral ? 3 : optionToWrap || enableAsCollateral ? 2 : 1] =
        {
          ..._steps[
            optionToWrap && enableAsCollateral ? 3 : optionToWrap || enableAsCollateral ? 2 : 1
          ],
          txHash: tx.hash,
        };
      setConfirmedSteps([..._steps]);

      await tx.wait();

      //await queryClient.refetchQueries();

      _steps[optionToWrap && enableAsCollateral ? 3 : optionToWrap || enableAsCollateral ? 2 : 1] =
        {
          ..._steps[
            optionToWrap && enableAsCollateral ? 3 : optionToWrap || enableAsCollateral ? 2 : 1
          ],
          done: true,
          txHash: tx.hash,
        };
      setConfirmedSteps([..._steps]);
    } catch (error) {
      const sentryInfo = {
        contextName: 'XSupply - Minting',
        properties: sentryProperties,
      };
      handleGenericError({ error, sentryInfo, toast: errorToast });
      setFailedStep(
        optionToWrap && enableAsCollateral ? 4 : optionToWrap || enableAsCollateral ? 3 : 2
      );
    }

    setIsSupplying(false);
  };

  const onModalClose = () => {
    onClose();

    if (!isSupplying) {
      setAmount(constants.Zero);
      setIsConfirmed(false);
      let _steps = [...SUPPLY_STEPS(asset.underlyingSymbol)];

      if (!enableAsCollateral) {
        _steps.splice(1, 1);
      }

      if (optionToWrap) {
        _steps = [
          { desc: 'Wrap Native Token', done: false, title: 'Wrap Native Token' },
          ..._steps,
        ];
      }

      setSteps(_steps);
    }
  };

  useEffect(() => {
    let _steps = [...SUPPLY_STEPS(asset.underlyingSymbol)];

    if (!enableAsCollateral) {
      _steps.splice(1, 1);
    }

    if (optionToWrap) {
      _steps = [{ desc: 'Wrap Native Token', done: false, title: 'Wrap Native Token' }, ..._steps];
    }

    setSteps(_steps);
  }, [optionToWrap, enableAsCollateral, asset.underlyingSymbol]);

  return (
    <MidasModal
      body={
        <Column
          bg={cCard.bgColor}
          borderRadius={16}
          color={cCard.txtColor}
          crossAxisAlignment="flex-start"
          id="fundOperationModal"
          mainAxisAlignment="flex-start"
        >
          {isConfirmed ? (
            <PendingTransaction
              activeStep={activeStep}
              amount={amount}
              asset={asset}
              failedStep={failedStep}
              isSupplying={isSupplying}
              isXSupply={ixXSupply}
              poolChainId={currentChain.id}
              steps={confirmedSteps}
            />
          ) : (
            <>
              <HStack justifyContent="center" my={4} width="100%">
                <Text variant="title">Supply</Text>
                <Box height="36px" mx={2} width="36px">
                  <TokenIcon address={asset.underlyingToken} chainId={poolChainId} size="36" />
                </Box>
                <EllipsisText
                  maxWidth="100px"
                  tooltip={tokenData?.symbol || asset.underlyingSymbol}
                  variant="title"
                >
                  {tokenData?.symbol || asset.underlyingSymbol}
                </EllipsisText>
              </HStack>
              <HStack justifyContent="center" mb={2} width="100%">
                <Text variant="title">From</Text>
                <Select
                  defaultValue={{
                    label: SUPPORTED_CHAINS_BY_CONNEXT[currentChain.id].name,
                    value: currentChain.id,
                  }}
                  isMulti={false}
                  onChange={(d) => {
                    if (d?.value) handleSwitch(d.value);
                  }}
                  options={availableFromChains.map((chainId: number) => ({
                    label: SUPPORTED_CHAINS_BY_CONNEXT[chainId].name,
                    value: chainId,
                  }))}
                  placeholder="From Chain"
                  size="sm"
                />
                {currentChain.id !== poolChainId ? (
                  <Select
                    components={{
                      Option: ({ children, ...props }) => (
                        <chakraComponents.Option {...props}>
                          <img
                            src={props.data.icon}
                            style={{ height: 15, marginRight: 3, width: 15 }}
                          />{' '}
                          {children}
                        </chakraComponents.Option>
                      ),
                    }}
                    defaultValue={{
                      icon: (fromAsset ?? tokens?.[0])?.logoURL,
                      label: (fromAsset ?? tokens?.[0])?.symbol,
                      value: (fromAsset ?? tokens?.[0])?.address,
                    }}
                    onChange={(option) => {
                      setFromAsset(
                        tokens?.find(
                          (t: TokenData) =>
                            getAddress(t.address) === getAddress(option?.value || '')
                        )
                      );
                    }}
                    options={(tokens || []).map((token: TokenData) => ({
                      icon: token.logoURL,
                      label: token.symbol,
                      value: token.address,
                    }))}
                    placeholder=""
                    size="sm"
                  />
                ) : (
                  <>
                    <Box height="36px" mx={2} width="36px">
                      <TokenIcon address={asset.underlyingToken} chainId={poolChainId} size="36" />
                    </Box>
                    <EllipsisText
                      maxWidth="100px"
                      tooltip={tokenData?.symbol || asset.underlyingSymbol}
                      variant="title"
                    >
                      {tokenData?.symbol || asset.underlyingSymbol}
                    </EllipsisText>
                  </>
                )}
              </HStack>

              <Divider />

              <Column
                crossAxisAlignment="center"
                gap={4}
                height="100%"
                mainAxisAlignment="flex-start"
                p={4}
                width="100%"
              >
                {!supplyCap || asset.totalSupplyFiat < supplyCap.usdCap ? (
                  <>
                    <Column gap={1} w="100%">
                      {fromAsset && (
                        <AmountInput
                          asset={asset}
                          comptrollerAddress={comptrollerAddress}
                          optionToWrap={optionToWrap}
                          poolChainId={poolChainId}
                          setAmount={setAmount}
                          token={fromAsset}
                        />
                      )}

                      {fromAsset && <Balance asset={fromAsset} />}
                    </Column>
                    <StatsColumn
                      amount={supplyAmount}
                      asset={asset}
                      assets={assets}
                      comptrollerAddress={comptrollerAddress}
                      enableAsCollateral={enableAsCollateral}
                      mode={FundOperationMode.SUPPLY}
                      poolChainId={poolChainId}
                    />
                    {!asset.membership && !ixXSupply && (
                      <EnableCollateral
                        enableAsCollateral={enableAsCollateral}
                        setEnableAsCollateral={setEnableAsCollateral}
                      />
                    )}
                    {ixXSupply && (
                      <Column
                        crossAxisAlignment="flex-start"
                        mainAxisAlignment="flex-start"
                        width="100%"
                      >
                        <Row crossAxisAlignment="center" mainAxisAlignment="flex-end" width="100%">
                          <Text mr={2} size="sm">
                            Relayer Fee:
                          </Text>
                          <Text
                            maxWidth="300px"
                            overflow="hidden"
                            textOverflow={'ellipsis'}
                            whiteSpace="nowrap"
                          >
                            {(+formatEther(relayerFee)).toFixed(6)}{' '}
                            {currentChain ? currentChain.nativeCurrency.symbol : 'ETH'}
                          </Text>
                        </Row>
                      </Column>
                    )}
                    <Button
                      height={16}
                      id="confirmFund"
                      isDisabled={!isAmountValid}
                      onClick={onConfirm}
                      width="100%"
                    >
                      {optionToWrap ? `Wrap ${nativeSymbol} & ${btnStr}` : btnStr}
                    </Button>
                  </>
                ) : (
                  <Banner
                    alertDescriptionProps={{ fontSize: 'lg' }}
                    alertProps={{ status: 'info' }}
                    descriptions={[
                      {
                        text: `${smallFormatter(supplyCap.tokenCap)} ${
                          asset.underlyingSymbol
                        } / ${smallFormatter(supplyCap.tokenCap)} ${asset.underlyingSymbol}`,
                        textProps: { display: 'block', fontWeight: 'bold' },
                      },
                      {
                        text: 'The maximum supply of assets for this asset has been reached. Once assets are withdrawn or the limit is increased you can again supply to this market.',
                      },
                    ]}
                  />
                )}
              </Column>
            </>
          )}
        </Column>
      }
      isOpen={isOpen}
      modalCloseButtonProps={{ hidden: isSupplying }}
      onClose={onModalClose}
    />
  );
};