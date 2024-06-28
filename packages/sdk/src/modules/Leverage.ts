import { LeveredBorrowable, NewPosition, OpenPosition, PositionInfo, SupportedChains } from "@ionicprotocol/types";

import EIP20InterfaceABI from "../../artifacts/EIP20Interface.sol/EIP20Interface.json";

import { CreateContractsModule } from "./CreateContracts";
import { ChainSupportedAssets } from "./Pools";
import { Address, erc20Abi, getContract, Hex, parseEther } from "viem";

export function withLeverage<TBase extends CreateContractsModule = CreateContractsModule>(Base: TBase) {
  return class Leverage extends Base {
    async getAllLeveredPositions(
      account: Address
    ): Promise<{ openPositions: OpenPosition[]; newPositions: NewPosition[] }> {
      if (this.chainId === SupportedChains.chapel || SupportedChains.polygon) {
        try {
          const openPositions: OpenPosition[] = [];
          const newPositions: NewPosition[] = [];

          const leveredPositionLens = this.createLeveredPositionLens();
          const ionicFlywheelLensRouter = this.createIonicFlywheelLensRouter();
          const [
            poolOfMarket,
            collateralCTokens,
            collateralUnderlyings,
            collateralUnderlyingPrices,
            ,
            collateralsymbols,
            collateralDecimals,
            collateralTotalSupplys,
            supplyRatePerBlock
          ] = await leveredPositionLens.read.getCollateralMarkets();
          const positions = await this.getPositionsByAccount(account);

          const rewards = await ionicFlywheelLensRouter.simulate.getMarketRewardsInfo([collateralCTokens]);

          await Promise.all(
            collateralCTokens.map(async (collateralCToken, index) => {
              const collateralAsset = ChainSupportedAssets[this.chainId].find(
                (asset) => asset.underlying === collateralUnderlyings[index]
              );
              const [
                borrowableMarkets,
                borrowableUnderlyings,
                borrowableUnderlyingPrices,
                ,
                borrowableSymbols,
                borrowableRates,
                borrowableDecimals
              ] = await leveredPositionLens.read.getBorrowableMarketsAndRates([collateralCToken]);

              // get rewards
              const reward = rewards.result.find((rw) => rw.market === collateralCToken);

              //get borrowable asset
              const leveredBorrowable: LeveredBorrowable[] = [];
              borrowableMarkets.map((borrowableMarket, i) => {
                const borrowableAsset = ChainSupportedAssets[this.chainId].find(
                  (asset) => asset.underlying === borrowableUnderlyings[i]
                );
                const position = positions.find(
                  (pos) =>
                    pos.collateralMarket === collateralCToken && pos.borrowMarket === borrowableMarket && !pos.isClosed
                );

                const borrowable = {
                  underlyingDecimals: borrowableDecimals[i],
                  cToken: borrowableMarket,
                  underlyingToken: borrowableUnderlyings[i],
                  underlyingPrice: borrowableUnderlyingPrices[i],
                  symbol: borrowableAsset
                    ? borrowableAsset.originalSymbol
                      ? borrowableAsset.originalSymbol
                      : borrowableAsset.symbol
                    : borrowableSymbols[i],
                  rate: borrowableRates[i]
                };

                leveredBorrowable.push({
                  ...borrowable
                });
                if (position) {
                  openPositions.push({
                    chainId: this.chainId,
                    collateral: {
                      cToken: collateralCToken,
                      underlyingToken: collateralUnderlyings[index],
                      underlyingDecimals: collateralAsset
                        ? BigInt(collateralAsset.decimals)
                        : BigInt(collateralDecimals[index]),
                      totalSupplied: collateralTotalSupplys[index],
                      symbol: collateralAsset
                        ? collateralAsset.originalSymbol
                          ? collateralAsset.originalSymbol
                          : collateralAsset.symbol
                        : collateralsymbols[index],
                      supplyRatePerBlock: supplyRatePerBlock[index],
                      reward,
                      pool: poolOfMarket[index],
                      plugin: this.marketToPlugin[collateralCToken],
                      underlyingPrice: collateralUnderlyingPrices[index]
                    },
                    borrowable,
                    address: position.position,
                    isClosed: position.isClosed
                  });
                }
              });

              newPositions.push({
                chainId: this.chainId,
                collateral: {
                  cToken: collateralCToken,
                  underlyingToken: collateralUnderlyings[index],
                  underlyingDecimals: BigInt(collateralAsset ? collateralAsset.decimals : collateralDecimals[index]),
                  totalSupplied: collateralTotalSupplys[index],
                  symbol: collateralAsset
                    ? collateralAsset.originalSymbol
                      ? collateralAsset.originalSymbol
                      : collateralAsset.symbol
                    : collateralsymbols[index],
                  supplyRatePerBlock: supplyRatePerBlock[index],
                  reward,
                  pool: poolOfMarket[index],
                  plugin: this.marketToPlugin[collateralCToken],
                  underlyingPrice: collateralUnderlyingPrices[index]
                },
                borrowable: leveredBorrowable
              });
            })
          );

          return { newPositions, openPositions };
        } catch (error) {
          this.logger.error(`get levered positions error in chain ${this.chainId}:  ${error}`);

          throw Error(
            `Getting levered position failed in chain ${this.chainId}: ` +
              (error instanceof Error ? error.message : error)
          );
        }
      } else {
        return { newPositions: [], openPositions: [] };
      }
    }

    async getPositionsByAccount(account: Address) {
      const leveredPositionFactory = this.createLeveredPositionFactory();
      const [positions, states] = await leveredPositionFactory.read.getPositionsByAccount([account]);
      return await Promise.all(
        positions.map(async (position, index) => {
          const positionContract = this.createLeveredPosition(position);
          const state = states[index];
          const [collateralMarket, borrowMarket] = await Promise.all([
            positionContract.read.collateralMarket(),
            positionContract.read.stableMarket()
          ]);

          return { collateralMarket, borrowMarket, position, isClosed: state };
        })
      );
    }

    async getPositionSupplyApy(cTokenAddress: Address, amount: bigint) {
      const cToken = this.createICErc20(cTokenAddress);

      return await cToken.read.supplyRatePerBlockAfterDeposit([amount]);
    }

    async getPositionBorrowApr(
      collateralMarket: Address,
      borrowMarket: Address,
      leverageRatio: bigint,
      amount: bigint
    ) {
      const leveredPositionLens = this.createLeveredPositionLens();

      return await leveredPositionLens.read.getBorrowRateAtRatio([
        collateralMarket,
        borrowMarket,
        amount,
        leverageRatio
      ]);
    }

    async leveredFactoryApprove(collateralUnderlying: Address) {
      const token = getContract({ address: collateralUnderlying, abi: erc20Abi, client: this.walletClient });
      const tx = await token.write.approve(
        [this.chainDeployment.LeveredPositionFactory.address as Address, 2n ** 256n - 1n],
        {
          account: this.walletClient.account!.address,
          chain: this.walletClient.chain
        }
      );

      return tx;
    }

    async leveredPositionApprove(positionAddress: Address, collateralUnderlying: Address) {
      const token = getContract({ address: collateralUnderlying, abi: erc20Abi, client: this.walletClient });

      const tx = await token.write.approve([positionAddress, 2n ** 256n - 1n], {
        account: this.walletClient.account!.address,
        chain: this.walletClient.chain
      });

      return tx;
    }

    async createAndFundPosition(
      collateralMarket: Address,
      borrowMarket: Address,
      fundingAsset: Address,
      fundingAmount: bigint
    ) {
      const leveredPositionFactory = this.createLeveredPositionFactory(this.publicClient, this.walletClient);

      return await leveredPositionFactory.write.createAndFundPosition(
        [collateralMarket, borrowMarket, fundingAsset, fundingAmount],
        {
          account: this.walletClient.account!.address,
          chain: this.walletClient.chain
        }
      );
    }

    async createAndFundPositionAtRatio(
      collateralMarket: Address,
      borrowMarket: Address,
      fundingAsset: Address,
      fundingAmount: bigint,
      leverageRatio: bigint
    ) {
      const leveredPositionFactory = this.createLeveredPositionFactory(this.publicClient, this.walletClient);

      return await leveredPositionFactory.write.createAndFundPositionAtRatio(
        [collateralMarket, borrowMarket, fundingAsset, fundingAmount, leverageRatio],
        {
          account: this.walletClient.account!.address,
          chain: this.walletClient.chain
        }
      );
    }

    async getRangeOfLeverageRatio(address: Address) {
      const leveredPosition = this.createLeveredPosition(address);

      return await Promise.all([
        leveredPosition.read.getMinLeverageRatio(),
        leveredPosition.read.getMaxLeverageRatio()
      ]);
    }

    async isPositionClosed(address: Address) {
      const leveredPosition = this.createLeveredPosition(address);

      return await leveredPosition.read.isPositionClosed();
    }

    async closeLeveredPosition(address: Address, withdrawTo?: Address) {
      const isPositionClosed = await this.isPositionClosed(address);
      const leveredPosition = this.createLeveredPosition(address, this.publicClient, this.walletClient);

      if (!isPositionClosed) {
        let tx: Hex;

        if (withdrawTo) {
          tx = await leveredPosition["closePosition(address)"](withdrawTo);
        } else {
          tx = await leveredPosition["closePosition()"]();
        }

        return tx;
      } else {
        return null;
      }
    }

    async adjustLeverageRatio(address: Address, ratio: number) {
      const leveredPosition = this.createLeveredPosition(address, this.publicClient, this.walletClient);

      const tx = await leveredPosition.write.adjustLeverageRatio([parseEther(ratio.toString())], {
        account: this.walletClient.account!.address,
        chain: this.walletClient.chain
      });

      return tx;
    }

    async fundPosition(positionAddress: Address, underlyingToken: Address, amount: bigint) {
      const leveredPosition = this.createLeveredPosition(positionAddress, this.publicClient, this.walletClient);

      const tx = await leveredPosition.write.fundPosition([underlyingToken, amount], {
        account: this.walletClient.account!.address,
        chain: this.walletClient.chain
      });

      return tx;
    }

    async getNetAPY(
      supplyApy: bigint,
      supplyAmount: bigint,
      collateralMarket: Address,
      borrowableMarket: Address,
      leverageRatio: bigint
    ) {
      const leveredPositionLens = this.createLeveredPositionLens();

      return await leveredPositionLens.read.getNetAPY([
        supplyApy,
        supplyAmount,
        collateralMarket,
        borrowableMarket,
        leverageRatio
      ]);
    }

    async getCurrentLeverageRatio(positionAddress: Address) {
      const leveredPosition = this.createLeveredPosition(positionAddress);

      return await leveredPosition.read.getCurrentLeverageRatio();
    }

    async getEquityAmount(positionAddress: Address) {
      const leveredPosition = this.createLeveredPosition(positionAddress);

      return await leveredPosition.read.getEquityAmount();
    }

    async removeClosedPosition(positionAddress: Address) {
      const leveredPositionFactory = this.createLeveredPositionFactory(this.publicClient, this.walletClient);

      const tx = await leveredPositionFactory.write.removeClosedPosition([positionAddress], {
        account: this.walletClient.account!.address,
        chain: this.walletClient.chain
      });

      return tx;
    }

    async getPositionInfo(positionAddress: Address, supplyApy: bigint): Promise<PositionInfo> {
      const leveredPositionLens = this.createLeveredPositionLens();

      return await leveredPositionLens.read.getPositionInfo([positionAddress, supplyApy]);
    }

    async getNetApyForPositionAfterFunding(positionAddress: Address, supplyApy: bigint, newFunding: bigint) {
      const leveredPositionLens = this.createLeveredPositionLens();

      return await leveredPositionLens.read.getNetApyForPositionAfterFunding([positionAddress, supplyApy, newFunding]);
    }

    async getLeverageRatioAfterFunding(positionAddress: Address, newFunding: bigint) {
      const leveredPositionLens = this.createLeveredPositionLens();

      return await leveredPositionLens.read.getLeverageRatioAfterFunding([positionAddress, newFunding]);
    }
  };
}
