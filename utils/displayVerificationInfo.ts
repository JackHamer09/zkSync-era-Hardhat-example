import { HardhatRuntimeEnvironment, SolcUserConfig } from "hardhat/types";
import { Contract, utils } from "ethers";
import { ZkSyncArtifact } from "@matterlabs/hardhat-zksync-deploy/dist/types";
import path from "path";

export default function ({hre, contract, contractConstructorArguments, artifact}: {hre: HardhatRuntimeEnvironment, contract: Contract, contractConstructorArguments: any[], artifact: ZkSyncArtifact}) {
  console.log(`\nVerify the contract: https://explorer.zksync.io/contracts/verify?address=${contract.address}&network=${((hre.config as any).networks as any).zkTestnet.ethNetwork}`);
  console.log(`Contract name: ${artifact.contractName}`);
  console.log(`zkSolc Version: v${(hre.userConfig as any).zksolc.version}`);
  console.log(`Solc Version: ${(hre.userConfig.solidity as SolcUserConfig).version}`);
  console.log(`Source code file path: ${path.join(__dirname, "../", artifact.sourceName)}`);
  // Get constructor arguments
  const contractInterface = new utils.Interface(artifact.abi);
  const constructorArgs = contractInterface.encodeDeploy(contractConstructorArguments);
  console.log(`Constructor arguments: ${constructorArgs}`);
}