import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadConfig, saveConfig } from "./config";

export async function deployCYK(
  _taskArgs: any,
  hre: HardhatRuntimeEnvironment
) {
  const config = loadConfig(hre);
  if (!config.myForwarderAddress) {
    throw new Error('You should deploy forwarder first.');
  }
  const initialSupply = hre.ethers.utils.parseEther("1");
  const CYK = await hre.ethers.getContractFactory("CYK");
  const cyk = await CYK.deploy(initialSupply, config.myForwarderAddress);

  await cyk.deployed();

  config.cykAddress = cyk.address;
  saveConfig(hre, config);

  console.log("CYK with 1 ETH deployed to:", cyk.address);
}
