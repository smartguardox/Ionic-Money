import { HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { FlywheelMarketRewardsInfo } from '@midas-capital/sdk/dist/cjs/src/modules/Flywheel';
import { assetSymbols } from '@midas-capital/types';
import { utils } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import { useEffect, useMemo, useState } from 'react';

import { ApyInformTooltip } from './ApyInformTooltip';

import { RewardsInfo } from '@ui/components/pages/Fuse/FusePoolPage/MarketsList/RewardsInfo';

import { TokenIcon } from '@ui/components/shared/TokenIcon';
import { aprDays } from '@ui/constants/index';
import { useSdk } from '@ui/hooks/fuse/useSdk';
import { useColors } from '@ui/hooks/useColors';
import { MarketData } from '@ui/types/TokensDataMap';
import { getABNBcContract } from '@ui/utils/contracts';
import { getBlockTimePerMinuteByChainId } from '@ui/utils/networkData';

interface SupplyApyProps {
  asset: MarketData;
  rewards: FlywheelMarketRewardsInfo[];
  poolChainId: number;
}

export const SupplyApy = ({ asset, rewards, poolChainId }: SupplyApyProps) => {
  const sdk = useSdk(poolChainId);
  const supplyAPY = useMemo(() => {
    if (sdk) {
      return sdk.ratePerBlockToAPY(
        asset.supplyRatePerBlock,
        getBlockTimePerMinuteByChainId(sdk.chainId)
      );
    }
  }, [sdk, asset.supplyRatePerBlock]);

  const { cCard } = useColors();
  const supplyApyColor = useColorModeValue('cyan.500', 'cyan');

  const rewardsOfThisMarket = useMemo(
    () => rewards.find((r) => r.market === asset.cToken),
    [asset.cToken, rewards]
  );

  const [aBNBcApr, setaBNBcApr] = useState('');

  useEffect(() => {
    const func = async () => {
      if (sdk) {
        const contract = getABNBcContract(sdk);

        const apr = await contract.callStatic.averagePercentageRate(aprDays);
        setaBNBcApr(utils.formatUnits(apr));
      }
    };

    if (asset.underlyingSymbol === assetSymbols.aBNBc && sdk) {
      func();
    }
  }, [asset, sdk]);

  return (
    <VStack alignItems={'flex-end'}>
      <Text color={supplyApyColor} fontWeight="bold" variant="smText">
        {supplyAPY !== undefined && supplyAPY.toFixed(2)}%
      </Text>

      {asset.underlyingSymbol === assetSymbols.aBNBc && (
        <Text color={cCard.txtColor} variant="smText">
          + {Number(aBNBcApr).toFixed(2)}%
        </Text>
      )}

      {rewardsOfThisMarket?.rewardsInfo && rewardsOfThisMarket?.rewardsInfo.length !== 0 ? (
        rewardsOfThisMarket?.rewardsInfo.map((info) => (
          <HStack key={info.rewardToken} justifyContent={'flex-end'} spacing={0}>
            <HStack mr={2}>
              <Text variant="smText" mr={-1}>
                +
              </Text>
              <TokenIcon address={info.rewardToken} chainId={poolChainId} size="xs" />
            </HStack>
            {info.formattedAPR ? (
              <Text
                variant="smText"
                ml={1}
                title={formatUnits(info.formattedAPR, 16).toString() + '%'}
              >
                {Number(formatUnits(info.formattedAPR, 16)).toFixed(2).toString() + '%'}
              </Text>
            ) : (
              <ApyInformTooltip pluginAddress={asset.plugin} poolChainId={poolChainId} />
            )}
          </HStack>
        ))
      ) : asset.plugin ? (
        <RewardsInfo
          pluginAddress={asset.plugin}
          poolChainId={poolChainId}
          underlyingAddress={asset.underlyingToken}
        />
      ) : null}
    </VStack>
  );
};
