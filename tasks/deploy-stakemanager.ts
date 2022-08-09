import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadConfig, saveConfig } from "./config";

export async function deployStakeManager(
  _taskArgs: any,
  hre: HardhatRuntimeEnvironment
) {
  const config = loadConfig(hre);
  const MyStakeManager = await hre.ethers.getContractFactory("MyStakeManager");
  const maxUnstakeDelay = 2000;
  const myStakeManager = await MyStakeManager.deploy(maxUnstakeDelay);

  await myStakeManager.deployed();

  config.myStakeManagerAddress = myStakeManager.address;
  saveConfig(hre, config);

  console.log("StakeManager deployed to:", myStakeManager.address);
}
