import { OracleTypes, SupportedAsset } from "@midas-capital/types";

import { assetSymbols } from "./index";

export const assets: SupportedAsset[] = [
  {
    symbol: assetSymbols.AAVE,
    underlying: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    name: "AAVE Token (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.ALCX,
    underlying: "0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89",
    name: "Alchemix Token (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.BAL,
    underlying: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
    name: "Balancer (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.oBNB,
    underlying: "0x7e9928aFe96FefB820b85B4CE6597B8F660Fe4F4",
    name: "Orbit Bridge BNB",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.BUSD,
    underlying: "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
    name: "Binance USD (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.CRV,
    underlying: "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
    name: "CRV (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.CVX,
    underlying: "0x4257EA7637c355F81616050CbB6a9b709fd72683",
    name: "CVX (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },

  {
    symbol: assetSymbols.DAI,
    underlying: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    name: "Dai Stablecoin (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.WETH,
    underlying: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    name: "Wrapped Ether",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.FRAX,
    underlying: "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",
    name: "Frax",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.FTM,
    underlying: "0xC9c1c1c20B3658F8787CC2FD702267791f224Ce1",
    name: "Fantom",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.FXS,
    underlying: "0x1a3acf6D19267E2d3e7f898f42803e90C9219062",
    name: "Frax Share",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.GHST,
    underlying: "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
    name: "Aavegotchi GHST Token (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.GRT,
    underlying: "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    name: "Graph Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.LINK,
    underlying: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
    name: "ChainLink Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.MAI,
    underlying: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
    name: "miMATIC",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.MKR,
    underlying: "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
    name: "Maker DAO",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.RAI,
    underlying: "0x00e5646f60AC6Fb446f621d146B6E1886f002905",
    name: "Rai Reflex Index (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.SNX,
    underlying: "0x50B728D8D964fd00C2d0AAD81718b71311feF68a",
    name: "Synthetix Network Token (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.SOL,
    underlying: "0xd93f7E271cB87c23AaA73edC008A79646d1F9912",
    name: "Wrapped SOL (Wormhole)",
    decimals: 9,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.SUSHI,
    underlying: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
    name: "SushiToken (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.YFI,
    underlying: "0xDA537104D6A5edd53c6fBba9A898708E465260b6",
    name: "yearn.finance (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.USDC,
    underlying: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    name: "USD Coin (PoS)",
    decimals: 6,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.USDT,
    underlying: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    name: "Tether USD (PoS)",
    decimals: 6,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.WBTC,
    underlying: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    name: "Wrapped BTC (PoS)",
    decimals: 8,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.WMATIC,
    underlying: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    name: "Wrapped Matic",
    decimals: 18,
    oracle: OracleTypes.FixedNativePriceOracle,
  },
  // QuickSwap LPs
  {
    symbol: assetSymbols["WMATIC-USDC"],
    underlying: "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827",
    name: "WMATIC-USDC LP Token",
    decimals: 18,
    oracle: OracleTypes.UniswapLpTokenPriceOracle,
  },
  {
    symbol: assetSymbols["WMATIC-USDT"],
    underlying: "0x604229c960e5CACF2aaEAc8Be68Ac07BA9dF81c3",
    name: "WMATIC-USDT LP Token",
    decimals: 18,
    oracle: OracleTypes.UniswapLpTokenPriceOracle,
  },
  {
    symbol: assetSymbols["WMATIC-ETH"],
    underlying: "0xadbF1854e5883eB8aa7BAf50705338739e558E5b",
    name: "WMATIC-ETH LP Token",
    decimals: 18,
    oracle: OracleTypes.UniswapLpTokenPriceOracle,
  },
  {
    symbol: assetSymbols["WETH-WBTC"],
    underlying: "0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D",
    name: "WETH-WBTC LP Token",
    decimals: 18,
    oracle: OracleTypes.UniswapLpTokenPriceOracle,
  },
  {
    symbol: assetSymbols["AGEUR-JEUR"],
    underlying: "0x2fFbCE9099cBed86984286A54e5932414aF4B717",
    name: "Jarvis agEUR-jEUR LP Token",
    decimals: 18,
    oracle: OracleTypes.CurveLpTokenPriceOracleNoRegistry,
  },
  {
    symbol: assetSymbols["JEUR-PAR"],
    underlying: "0x0f110c55EfE62c16D553A3d3464B77e1853d0e97",
    name: "Jarvis jEUR-PAR LP Token",
    decimals: 18,
    oracle: OracleTypes.CurveLpTokenPriceOracleNoRegistry,
  },
  {
    symbol: assetSymbols["JJPY-JPYC"],
    underlying: "0xaA91CDD7abb47F821Cf07a2d38Cc8668DEAf1bdc",
    name: "Jarvis jJPY-JPYC LP Token",
    decimals: 18,
    oracle: OracleTypes.CurveLpTokenPriceOracleNoRegistry,
  },
  {
    symbol: assetSymbols["JCAD-CADC"],
    underlying: "0xA69b0D5c0C401BBA2d5162138613B5E38584F63F",
    name: "Jarvis jCAD-CADC LP Token",
    decimals: 18,
    oracle: OracleTypes.CurveLpTokenPriceOracleNoRegistry,
  },
  {
    symbol: assetSymbols["JSGD-XSGD"],
    underlying: "0xeF75E9C7097842AcC5D0869E1dB4e5fDdf4BFDDA",
    name: "Jarvis jSGD-XSGD LP Token",
    decimals: 18,
    oracle: OracleTypes.CurveLpTokenPriceOracleNoRegistry,
  },
  {
    symbol: assetSymbols["JNZD-NZDS"],
    underlying: "0x976A750168801F58E8AEdbCfF9328138D544cc09",
    name: "Jarvis JNZD-NZDS LP Token",
    decimals: 18,
    oracle: OracleTypes.CurveLpTokenPriceOracleNoRegistry,
  },
  {
    symbol: assetSymbols["JEUR-EURT"],
    underlying: "0x2c3cc8e698890271c8141be9f6fd6243d56b39f1",
    name: "Jarvis JEUR-EURT LP Token",
    decimals: 18,
    oracle: OracleTypes.CurveLpTokenPriceOracleNoRegistry,
  },
  {
    symbol: assetSymbols.AGEUR,
    underlying: "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4",
    name: "agEUR Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JEUR,
    underlying: "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
    name: "Jarvis JEUR Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.PAR,
    underlying: "0x7b367a058f370c0057762280547d0b974cf3ac10",
    name: "PAR Stablecoin (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.EURT,
    underlying: "0x7BDF330f423Ea880FF95fC41A280fD5eCFD3D09f",
    name: "Euro Tether (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JJPY,
    underlying: "0x8343091F2499FD4b6174A46D067A920a3b851FF9",
    name: "Jarvis JJPY Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JPYC,
    underlying: "0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB",
    name: "JPY Coin",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JCAD,
    underlying: "0x8ca194A3b22077359b5732DE53373D4afC11DeE3",
    name: "Jarvis JCAD Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.CADC,
    underlying: "0x5d146d8B1dACb1EBBA5cb005ae1059DA8a1FbF57",
    name: "CAD Coin (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JSGD,
    underlying: "0xa926db7a4CC0cb1736D5ac60495ca8Eb7214B503",
    name: "Jarvis JSGD Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JCHF,
    underlying: "0xbD1463F02f61676d53fd183C2B19282BFF93D099",
    name: "Jarvis JCHF Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JMXN,
    underlying: "0xBD1fe73e1f12bD2bc237De9b626F056f21f86427",
    name: "Jarvis JMXN Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JGBP,
    underlying: "0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c",
    name: "Jarvis JGPB Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JCNY,
    underlying: "0x84526c812D8f6c4fD6C1a5B68713AFF50733E772",
    name: "Jarvis JCNY Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JAUD,
    underlying: "0xCB7F1Ef7246D1497b985f7FC45A1A31F04346133",
    name: "Jarvis JAUD Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JNZD,
    underlying: "0x6b526Daf03B4C47AF2bcc5860B12151823Ff70E0",
    name: "Jarvis JNZD Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JPLN,
    underlying: "0x08E6d1F0c4877Ef2993Ad733Fc6F1D022d0E9DBf",
    name: "Jarvis JPLN Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JSEK,
    underlying: "0x197E5d6CcfF265AC3E303a34Db360ee1429f5d1A",
    name: "Jarvis JSEK Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JKRW,
    underlying: "0xa22f6bc96f13bcC84dF36109c973d3c0505a067E",
    name: "Jarvis JKRW Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.JPHP,
    underlying: "0x486880FB16408b47f928F472f57beC55AC6089d1",
    name: "Jarvis JPHP Token",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.NZDS,
    underlying: "0xeaFE31Cd9e8E01C8f0073A2C974f728Fb80e9DcE",
    name: "NZD Stablecoin (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
  {
    symbol: assetSymbols.XSGD,
    underlying: "0x769434dcA303597C8fc4997Bf3DAB233e961Eda2",
    name: "StratisX Singapore Dollar (PoS)",
    decimals: 18,
    oracle: OracleTypes.ChainlinkPriceOracleV2,
  },
];

export default assets;
