import { chainIdToConfig } from "@ionicprotocol/chains";
import { assetFilter, assetSymbols, SupportedChains } from "@ionicprotocol/types";

import { PriceChangeVerifierAsset } from "../../types";

import { lsdPriceChangeDefaults, smallCapPriceChangeDefaults, stablePriceChangeDefaults } from "./defaults";

const chainAssets = chainIdToConfig[SupportedChains.fantom].assets.filter(
  (asset) => asset.disabled === undefined || asset.disabled == false
);

const assets: PriceChangeVerifierAsset[] = [
  {
    ...assetFilter(chainAssets, assetSymbols.MIMO),
    ...smallCapPriceChangeDefaults,
  },
  {
    ...assetFilter(chainAssets, assetSymbols.aFTMc),
    ...lsdPriceChangeDefaults,
  },
  {
    ...assetFilter(chainAssets, assetSymbols.PAR),
    ...stablePriceChangeDefaults,
  },
];

export default assets;
