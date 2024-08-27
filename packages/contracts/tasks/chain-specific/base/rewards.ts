import { task } from "hardhat/config";
import { ION } from ".";
import { Address, parseEther } from "viem";
import { setupRewards } from "../../flywheel/setup";

task("base:add-rewards:epoch1:supply", "add rewards to a market").setAction(
  async (_, { viem, deployments, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts();
    type Reward = {
      rewardToken: Address;
      rewardTokenName: string;
      market: Address;
      rewardAmount: string;
    };
    const rewards: Reward[] = [
      {
        rewardToken: ION,
        rewardTokenName: "ION",
        market: "0xa900A17a49Bc4D442bA7F72c39FA2108865671f0", // USDC
        rewardAmount: "50000"
      },
      {
        rewardToken: ION,
        rewardTokenName: "ION",
        market: "0x49420311B518f3d0c94e897592014de53831cfA3", // WETH
        rewardAmount: "50000"
      }
    ];

    for (const { rewardToken, market, rewardAmount, rewardTokenName } of rewards) {
      // Sending tokens
      const _rewardToken = await viem.getContractAt("EIP20Interface", rewardToken);
      let balance = await _rewardToken.read.balanceOf([market]);
      console.log("balance: ", balance);
      if (balance < parseEther(rewardAmount)) {
        const tx = await _rewardToken.write.transfer([market, parseEther(rewardAmount) - balance]);
        console.log(`Sent ${rewardAmount} ${rewardTokenName} to ${market} - ${tx}`);
      } else {
        console.log(`Market already has enough ${rewardTokenName} - ${market}`);
      }

      await setupRewards(
        "supply",
        market,
        rewardTokenName,
        rewardToken,
        29 * (24 * 60 * 60) + 1 * (23 * 60 * 60), // 29 days 23 hours
        deployer as Address,
        viem,
        deployments
      );
    }
  }
);

task("base:add-rewards:epoch1:borrow", "add rewards to a market").setAction(
  async (_, { viem, deployments, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts();
    type Reward = {
      rewardToken: Address;
      rewardTokenName: string;
      market: Address;
      rewardAmount: string;
    };
    const rewards: Reward[] = [
      {
        rewardToken: ION,
        rewardTokenName: "ION",
        market: "0xa900A17a49Bc4D442bA7F72c39FA2108865671f0", // USDC
        rewardAmount: "65000"
      },
      {
        rewardToken: ION,
        rewardTokenName: "ION",
        market: "0x49420311B518f3d0c94e897592014de53831cfA3", // WETH
        rewardAmount: "65000"
      }
    ];

    for (const { rewardToken, market, rewardAmount, rewardTokenName } of rewards) {
      // Sending tokens
      const _rewardToken = await viem.getContractAt("EIP20Interface", rewardToken);
      let balance = await _rewardToken.read.balanceOf([market]);
      console.log("balance: ", balance);
      if (balance < parseEther(rewardAmount)) {
        const tx = await _rewardToken.write.transfer([market, parseEther(rewardAmount) - balance]);
        console.log(`Sent ${rewardAmount} ${rewardTokenName} to ${market} - ${tx}`);
      } else {
        console.log(`Market already has enough ${rewardTokenName} - ${market}`);
      }

      await setupRewards(
        "borrow",
        market,
        rewardTokenName,
        rewardToken,
        30 * (24 * 60 * 60), // 30 days
        deployer as Address,
        viem,
        deployments
      );
    }
  }
);