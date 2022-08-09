import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadConfig, saveConfig } from "./config";

export async function deployRelayHub(
  _taskArgs: any,
  hre: HardhatRuntimeEnvironment
) {
  const config = loadConfig(hre);
  if (!config.myStakeManagerAddress) {
    throw new Error("You should deploy stake manager.");
  }
  if (!config.myPenalizerAddress) {
    throw new Error("You should deploy penalizer.");
  }

  const MyRelayHub = await hre.ethers.getContractFactory("MyRelayHub");
  const myRelayHub = await MyRelayHub.deploy(
    config.myStakeManagerAddress,
    config.myPenalizerAddress,
    10, // maxWorkerCount
    100000, // gasReserve
    15066, // postOverhead
    33135, // gasOverhead
    '2000000000000000000', // maximumRecipientDeposit
    '1000', // minimumUnstakeDelay
    '1000000000000000000', // minimumStake
    13, // dataGasCostsPerByte
    22414, // externalCallDataCostOverhead
  );

  await myRelayHub.deployed();

  config.myRelayHubAddress = myRelayHub.address;
  saveConfig(hre, config);

  console.log("RelayHub deployed to:", myRelayHub.address);
}
