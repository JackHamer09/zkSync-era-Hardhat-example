import { HardhatRuntimeEnvironment, SolcUserConfig } from "hardhat/types";
import { Contract, utils } from "ethers";
import { ZkDeployConfig, ZkSyncArtifact } from "@matterlabs/hardhat-zksync-deploy/dist/types";
import path from "path";

export default function ({hre, contract, contractConstructorArguments, artifact}: {hre: HardhatRuntimeEnvironment, contract: Contract, contractConstructorArguments: any[], artifact: ZkSyncArtifact}) {
  console.log(`\nVerify the contract: https://scan-v2.zksync.dev/contracts/verify?address=${contract.address}&network=${((hre.config as any).zkSyncDeploy as ZkDeployConfig).ethNetwork}`);
  console.log(`Contract name: ${contract.address}`);
  console.log(`Solc Version: ${(hre.userConfig.solidity as SolcUserConfig).version}`);
  console.log(`Compiler Version: v${(hre.userConfig as any).zksolc.version}`);
  console.log(`Source code file path: ${path.join(__dirname, "../", artifact.sourceName)}`);
  // Get constructor arguments
  const contractInterface = new utils.Interface(artifact.abi);
  const constructorArgs = contractInterface.encodeDeploy(contractConstructorArguments);
  console.log(`Constructor arguments: ${constructorArgs}`);
}