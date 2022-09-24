import { HardhatRuntimeEnvironment, SolcUserConfig } from "hardhat/types";
import { Contract, utils } from "ethers";
import { ZkSyncArtifact } from "@matterlabs/hardhat-zksync-deploy/dist/types";

export default function ({hre, contract, contractConstructorArguments, artifact}: {hre: HardhatRuntimeEnvironment, contract: Contract, contractConstructorArguments: any[], artifact: ZkSyncArtifact}) {
  console.log(`\nVerify the contract: https://scan-v2.zksync.dev/contracts/verify?address=${contract.address}&network=${hre.userConfig.zkSyncDeploy!.ethNetwork}`);
  console.log(`Contract name: ${contract.address}`);
  console.log(`Solc Version: ${(hre.userConfig.solidity as SolcUserConfig).version}`);
  // @ts-ignore
  console.log(`Compiler Version: v${hre.userConfig.zksolc.version}`);
  // Get constructor arguments
  const contractInterface = new utils.Interface(artifact.abi);
  const constructorArgs = contractInterface.encodeDeploy(contractConstructorArguments);
  console.log(`Constructor arguments: ${constructorArgs}`);
}