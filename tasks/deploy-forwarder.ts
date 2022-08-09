import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadConfig, saveConfig } from "./config";

export async function deployForwarder(
  _taskArgs: any,
  hre: HardhatRuntimeEnvironment
) {
  const config = loadConfig(hre);
  const MyForwarder = await hre.ethers.getContractFactory("MyForwarder");
  const myForwarder = await MyForwarder.deploy();

  await myForwarder.deployed();

  config.myForwarderAddress = myForwarder.address;
  saveConfig(hre, config);

  console.log("Forwader deployed to:", myForwarder.address);
}
