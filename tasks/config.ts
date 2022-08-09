import fs from 'fs';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

export interface INetworkConfig {
	cykAddress?: string,
	myContractAddress?: string,
	myForwarderAddress?: string,
	myPaymasterAddress?: string,
	myRelayHubAddress?: string,
	myStakeManagerAddress?: string,
	myPenalizerAddress?: string,
}

export interface IConfig {
	[key: string]: INetworkConfig,
}

const filename = 'config/result.conf';

function loadEntireConfig(): IConfig {
	if (fs.existsSync(filename)) {
		return JSON.parse(fs.readFileSync(filename, 'utf-8')) as IConfig;
	} else {
		return {};
	}
}

export function loadConfig(hre: HardhatRuntimeEnvironment): INetworkConfig {
	const config = loadEntireConfig();
	return config[hre.network.name] ?? {};
}

export function saveConfig(hre: HardhatRuntimeEnvironment, networkConfig: INetworkConfig) {
	const config = loadEntireConfig();
	config[hre.network.name] = networkConfig;

	fs.writeFileSync(filename, JSON.stringify(config, undefined, 2), { encoding: 'utf-8' });
}
