import {
  AssetRiskIL,
  AssetRiskLiquidity,
  AssetRiskMktCap,
  AssetRiskSupply,
  ERC4626Strategy,
  PlatformRiskAdminWithTimelock,
  PlatformRiskAudit,
  PlatformRiskContractsVerified,
  PlatformRiskReputation,
  Strategy,
  StrategyComplexity,
  StrategyTimeInMarket,
} from "@midas-capital/types";

export const strategies: ERC4626Strategy[] = [
  // BNB CHAIN
  {
    address: "0x10C90bfCFb3D2A7ae814dA1548ae3a7fC31C35A0",
    strategy: Strategy.Bomb,
    name: "Bomb",
    complexity: StrategyComplexity.HIGH,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.CENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x6B8B935dfC9Dcd0754eced708b1b633BF73FE854",
    strategy: Strategy.Beefy,
    name: "Beefy BTCB-BOMB Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.SMALL,
    supplyCentralised: AssetRiskSupply.CENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x23bBcF59BF843cD55c4DA9bDB81429695C87f847",
    strategy: Strategy.DotDot,
    name: "DotDot 2brl",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.CENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xBE0cCFA6B09eB1f3C0c62D406aE00F528e20594b",
    strategy: Strategy.DotDot,
    name: "DotDot 3brl",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.CENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xe38A0F34DB15fCC47510cdB0519E149eC20c8806",
    strategy: Strategy.DotDot,
    name: "DotDot val3EPS",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xc2Af1451dBFbf564FB32E57f275d419395F5BC92",
    strategy: Strategy.DotDot,
    name: "DotDot valdai3EPS",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x628C6d2236fC1712D66Df5fbFf9041f7809C959C",
    strategy: Strategy.DotDot,
    name: "DotDot 3EPS",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x29b2aB4102d7aF1CDCF9c84D29D18dC2cFf11f1A",
    strategy: Strategy.Beefy,
    name: "Beefy JCHF-BUSD Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xcfB267a90974a172c38Af238b1010672DE4479Ad",
    strategy: Strategy.Beefy,
    name: "Beefy stkBNB-WBNB Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },

  {
    address: "0xCeB429c710D523d8243833018852Bbad2CEA9Bb4",
    strategy: Strategy.Beefy,
    name: "Beefy 3brl Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.CENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x643fd5AB2485dF7D9Ad43C4c210AbEc8Ae7e44D8",
    strategy: Strategy.Beefy,
    name: "Beefy EPS BNBx/BNB  Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x0b4444F3FB85264427397Fede0f94704aa3828b9",
    strategy: Strategy.Beefy,
    name: "Beefy ApeSwap BNBx/BNB  Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xBCAc816440f7ef66Fea896b307352b86a83F94E8",
    strategy: Strategy.Beefy,
    name: "Beefy 2brl",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.CENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xac99ced1a1310fB04618d4801888120ccDD7B87B",
    strategy: Strategy.Beefy,
    name: "Beefy BNBx-BNB LP vault Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xA331FaA3Bb84A70466c801E9b14523d8f15f328E",
    strategy: Strategy.Beefy,
    name: "Beefy eps BNBx-BNB LP vault Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x7B77E7713FB2950326B0dE483852da0e1d975d4C",
    strategy: Strategy.Beefy,
    name: "Beefy valdai 3EPS LP Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xDE1A82D80082e6b6E9cbe70002857716A09EA18b",
    strategy: Strategy.Beefy,
    name: "Beefy mai 3EPS LP Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x369ddC01E8feF7350Eb740f4a32647E8640F0A17",
    strategy: Strategy.HelioHAY,
    name: "HAY Staking Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.NEW,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  // POLYGON
  {
    address: "0xB6a8f36746BcCC1025Ec54eb2c6DCEF8EeE8df2f",
    strategy: Strategy.Beefy,
    name: "Beefy EURE-jEUR Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x509d5070088d1F789cD6BeAA88055ac93fF9bCeB",
    strategy: Strategy.Beefy,
    name: "Beefy agEUR-jEUR Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x9F82D802FB4940743C543041b86220A9096A7522",
    strategy: Strategy.Beefy,
    name: "Beefy jEUR-PAR Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xcDb7D4f4Dbe0DDd09F1De16aaA2eEcA6a590F725",
    strategy: Strategy.Beefy,
    name: "Beefy jJPY-JPYC Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x0FbFc75E7FAcEb8453f8F0F6938c4898C9Fcdcbd",
    strategy: Strategy.Beefy,
    name: "Beefy jCAD-CADC Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x8cA5151058aD6F5684287ca523194Faa79827B99",
    strategy: Strategy.Beefy,
    name: "Beefy jSGD-XSGD Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x90721EfE6b155052b9f9E99043A43fDAB521aeC1",
    strategy: Strategy.Beefy,
    name: "Beefy jEUR-EURt Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xc8E8B4A7E0F854Cf516A75fE742FC791dBec9F86",
    strategy: Strategy.Beefy,
    name: "Beefy jEUR-PAR Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xdE58CF12595e92ebB07D664eE59A642e360bea58",
    strategy: Strategy.Arrakis, // TODO should be called Mimo
    name: "Arrakis PAR-USDC Vault",
    complexity: StrategyComplexity.MEDIUM,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xd682451F627d54cfdA74a80972aDaeF133cdc15e",
    strategy: Strategy.Arrakis, // TODO should be called Mimo
    name: "Balancer LP MIMO80-PAR20",
    complexity: StrategyComplexity.MEDIUM,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.SMALL,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xdF23f2E94a322685DD4E967dE6165242cf00B85B",
    strategy: Strategy.Arrakis,
    name: "Arrakis PAR-USDC Vault",
    complexity: StrategyComplexity.MEDIUM,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xAe8a8253cd70A8Ad4749aAd850A99e2f30552f10",
    strategy: Strategy.Beefy,
    name: "Beefy am3CRV Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x11EE50FB7DB66d044C3342546C27457f958e1ceD",
    strategy: Strategy.Beefy,
    name: "Beefy MAI-USDC Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xa36dd65F8136ee16C739CdED196589628720699a",
    strategy: Strategy.Beefy,
    name: "Beefy Curve.fi stMATIC-WMATIC Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xeAA782fA732FEf5A5B127EA70d1b656216717353",
    strategy: Strategy.Beefy,
    name: "Beefy Curve.fi stMATIC-WMATIC Vault",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  // MOONBEAM
  {
    address: "0x0DaFF7aaaE63F1Fc30c1C40816257513D052b649",
    strategy: Strategy.Stella,
    name: "GLMR-ATOM",
    complexity: StrategyComplexity.HIGH,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xE9c4274341ab4Be0857476e84963b3c36787568D",
    strategy: Strategy.CurveGauge,
    name: "Curve xcDOT-stDOT Gauge",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.ESTABLISHED,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xe32f52f8172E3c75dacB3606e254275ab774d88f",
    strategy: Strategy.Stella,
    name: "DOT.xc-GLMR",
    complexity: StrategyComplexity.HIGH,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x5BF5B16130B90fB636A3b8a136da3944BAACaCAC",
    strategy: Strategy.Stella,
    name: "WBTC.wh-GLMR",
    complexity: StrategyComplexity.HIGH,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x2a7A88544270bbD181E147B1A1d88d0A78186dA6",
    strategy: Strategy.Stella,
    name: "WETH.wh-GLMR",
    complexity: StrategyComplexity.HIGH,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x7EbB783fA23b731c76017bB0656530337Ed31577",
    strategy: Strategy.Stella,
    name: "USDC.wh-GLMR",
    complexity: StrategyComplexity.HIGH,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x2b5387D1B552d50a08d1df2e8C1e77De6d681970",
    strategy: Strategy.Beefy,
    name: "wstDOT-DOT.xc",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.LOW,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x26511F5D5b91ADd0E36aAbd581E7E3fbaAF0008C",
    strategy: Strategy.Beefy,
    name: "base4pool",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.HIGH,
    mktCap: AssetRiskMktCap.LARGE,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x650B448D4Edb13D7355B9E79cB8DC6Cefdf28BEc",
    strategy: Strategy.Beefy,
    name: "STELLA-GLMR",
    complexity: StrategyComplexity.LOW,
    timeInMarket: StrategyTimeInMarket.BATTLE_TESTED,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.SMALL,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  // EVMOS
  {
    address: "0x55E9491C0dbfc01D86D68C2F50C3B3054FbF1b1E",
    strategy: Strategy.MiniChefV2,
    name: "WEVMOS-gUSDC",
    complexity: StrategyComplexity.MEDIUM,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0xac3a94DA16B99622744D39EABFa8a50787d91cc4",
    strategy: Strategy.MiniChefV2,
    name: "WEVMOS-gWETH",
    complexity: StrategyComplexity.MEDIUM,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x857248d02b11c7Cbf8a9Ddc026a0A59d396F1D8c",
    strategy: Strategy.MiniChefV2,
    name: "WEVMOS-ceUSDC",
    complexity: StrategyComplexity.MEDIUM,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.HIGH,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
  {
    address: "0x74f5280443c0Ab2A42eaa1ED0aEa6F4c45599b68",
    strategy: Strategy.MiniChefV2,
    name: "ceUSDC-ceUSDT",
    complexity: StrategyComplexity.MEDIUM,
    timeInMarket: StrategyTimeInMarket.EXPERIMENTAL,
    riskIL: AssetRiskIL.NONE,
    liquidity: AssetRiskLiquidity.LOW,
    mktCap: AssetRiskMktCap.MEDIUM,
    supplyCentralised: AssetRiskSupply.DECENTRALIZED,
    reputation: PlatformRiskReputation.NEW,
    audit: PlatformRiskAudit.AUDIT,
    contractsVerified: PlatformRiskContractsVerified.CONTRACTS_VERIFIED,
    adminWithTimelock: PlatformRiskAdminWithTimelock.ADMIN_WITH_TIMELOCK,
  },
];
