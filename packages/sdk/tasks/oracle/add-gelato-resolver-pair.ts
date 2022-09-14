import { task, types } from "hardhat/config";

import { UniswapOracleV2ResolverPairParams } from "../../chainDeploy";

const uniswapTwapPriceOracleV2Resolver = "0x308ae65B466a063bE9f6BFf9D59feB43C3954DbF";

const twapOracleV2ResolverPairs: UniswapOracleV2ResolverPairParams[] = [
  {
    pair: "0x7F5Ac0FC127bcf1eAf54E3cd01b00300a0861a62", // STELLA/WGLMR
    baseToken: "0xAcc15dC74880C9944775448304B263D191c6077F",
    minPeriod: 1800,
    deviationThreshold: "10000000000000000", // 1%
  },
  {
    pair: "0xd47BeC28365a82C0C006f3afd617012B02b129D6", // CELR/WGLMR
    baseToken: "0xAcc15dC74880C9944775448304B263D191c6077F",
    minPeriod: 1800,
    deviationThreshold: "10000000000000000", // 1%
  },
];

task("oracle:add-gelato-resolver-pair", "Add resolver token pair for gelator task").setAction(
  async (params, { ethers }) => {
    const { deployer } = await ethers.getNamedSigners();

    const resolver = await ethers.getContractAt(
      "UniswapTwapPriceOracleV2Resolver",
      uniswapTwapPriceOracleV2Resolver,
      deployer
    );
    console.log(resolver.address);

    for (const pair of twapOracleV2ResolverPairs) {
      await resolver.addPair(pair);
      console.log("Add pair for lp token: ", pair.pair);
    }
  }
);
