import { HardhatRuntimeEnvironment } from "hardhat/types";
import { deployForwarder } from "./deploy-forwarder";
import { deployMyContract } from "./deploy-mycontract";
import { deployPaymaster } from "./deploy-paymaster";
import { deployPenalizer } from "./deploy-penalizer";
import { deployRelayHub } from "./deploy-relayhub";
import { deployStakeManager } from "./deploy-stakemanager";

export async function deployAll(
  _taskArgs: any,
  hre: HardhatRuntimeEnvironment
) {
  await deployForwarder(_taskArgs, hre);
  await deployPaymaster(_taskArgs, hre);
  await deployPenalizer(_taskArgs, hre);
  await deployStakeManager(_taskArgs, hre);
  await deployRelayHub(_taskArgs, hre);
  await deployMyContract(_taskArgs, hre);
}
