import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { deployCYK } from "./tasks/deploy-CYK";
import { deployForwarder } from "./tasks/deploy-forwarder";
import { deployPaymaster } from "./tasks/deploy-paymaster";
import { deployPenalizer } from "./tasks/deploy-penalizer";
import { deployRelayHub } from "./tasks/deploy-relayhub";
import { deployStakeManager } from "./tasks/deploy-stakemanager";
import { deployAll } from "./tasks/deploy-all";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    local: {
      url: "http://localhost:8545",
      accounts: [
        "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e",
      ],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/449391f15f3444d08ea51a4d62141418",
      accounts: [
        "7e5271b14b7d1ad3a2eb0dd68328691295043989f0428ac647269e7e601257f5",
      ],
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/u7DMDKiz4qmQFpmv48RP76X-4qEp38S8",
      accounts: [
        "7e5271b14b7d1ad3a2eb0dd68328691295043989f0428ac647269e7e601257f5",
      ],
    },
  },
};

task("deployAll", "deploy every contract", deployAll);
task("deployCYK", "deploy CYK contract", deployCYK);
task("deployForwarder", "deploy forwarder contract", deployForwarder);
task("deployPaymaster", "deploy paymaster contract", deployPaymaster);
task("deployPenalizer", "deploy penalizer contract", deployPenalizer);
task("deployRelayHub", "deploy relay hub contract", deployRelayHub);
task("deployStakeManager", "deploy stake manager contract", deployStakeManager);

export default config;
