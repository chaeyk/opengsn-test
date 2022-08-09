import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadConfig, saveConfig } from "./config";

export async function deployMyContract(
  _taskArgs: any,
  hre: HardhatRuntimeEnvironment
) {
  const config = loadConfig(hre);
  if (!config.myForwarderAddress) {
    throw new Error("You should deploy forwarder.");
  }
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy(config.myForwarderAddress);

  await myContract.deployed();

  config.myContractAddress = myContract.address;
  saveConfig(hre, config);

  console.log("My contract deployed to:", myContract.address);
}
