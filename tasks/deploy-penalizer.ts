import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadConfig, saveConfig } from "./config";

export async function deployPenalizer(
  _taskArgs: any,
  hre: HardhatRuntimeEnvironment
) {
  const config = loadConfig(hre);
  const MyPenalizer = await hre.ethers.getContractFactory("MyPenalizer");
  const penalizeBlockDelay = 1000;
  const penalizeBlockExpiration = 1000;
  const myPenalizer = await MyPenalizer.deploy(penalizeBlockDelay, penalizeBlockExpiration);

  await myPenalizer.deployed();

  config.myPenalizerAddress = myPenalizer.address;
  saveConfig(hre, config);

  console.log("Penalizer deployed to:", myPenalizer.address);
}
