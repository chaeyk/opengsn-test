import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadConfig, saveConfig } from "./config";

export async function deployPaymaster(
  _taskArgs: any,
  hre: HardhatRuntimeEnvironment
) {
  const config = loadConfig(hre);
  const MyPaymaster = await hre.ethers.getContractFactory("MyPaymaster");
  const myPaymaster = await MyPaymaster.deploy();

  await myPaymaster.deployed();

  config.myPaymasterAddress = myPaymaster.address;
  saveConfig(hre, config);

  console.log("Paymaster deployed to:", myPaymaster.address);
}
