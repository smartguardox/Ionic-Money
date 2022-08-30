import { task, types } from "hardhat/config";

task("plugin:deploy", "Deploy ERC4626 Strategy")
  .addParam("contractName", "Name of the ERC4626 strategy", undefined, types.string)
  .addParam("deploymentName", "Name of the ERC4626 contract", undefined, types.string)
  .addParam("underlying", "Address of the underlying token", undefined, types.string)
  .addParam("creator", "Deployer Address", "deployer", types.string)
  .addOptionalParam(
    "otherParams",
    "other params that might be required to construct the strategy",
    undefined,
    types.string
  )
  .setAction(async (taskArgs, hre) => {
    const signer = await hre.ethers.getNamedSigner(taskArgs.creator);

    const otherParams = taskArgs.otherParams ? taskArgs.otherParams.split(",") : null;
    let deployArgs;
    if (otherParams) {
      deployArgs = [taskArgs.underlying, ...otherParams];
    } else {
      deployArgs = [taskArgs.underlying];
    }

    const deployment = await hre.deployments.deploy(taskArgs.deploymentName, {
      contract: taskArgs.contractName,
      from: signer.address,
      args: deployArgs,
      log: true,
    });

    if (deployment.transactionHash) await hre.ethers.provider.waitForTransaction(deployment.transactionHash);

    console.log("ERC4626 Strategy: ", deployment.address);
    return deployment.address;
  });
