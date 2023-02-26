import { HardhatRuntimeEnvironment, SolcUserConfig } from "hardhat/types";
import { Contract, utils } from "ethers";
import { ZkSyncArtifact } from "@matterlabs/hardhat-zksync-deploy/dist/types";
import path from "path";

export default async function ({hre, contract, contractConstructorArguments, artifact}: {hre: HardhatRuntimeEnvironment, contract: Contract, contractConstructorArguments: any[], artifact: ZkSyncArtifact}) {
  const contractFullName = `${artifact.sourceName}:${artifact.contractName}`;
  console.log(`\nVerifying contract "${contractFullName}"...`);
  await hre.run("verify:verify", {
    address: contract.address,
    contract: contractFullName,
    constructorArguments: contractConstructorArguments
  });
  const ethNetworkName = ((hre.config as any).networks as any).zkTestnet.ethNetwork;
  const blockExplorerURL = `https://${ethNetworkName !== 'mainnet' ? ethNetworkName + '.' : ''}explorer.zksync.io`;
  console.log(`See the contract on the zkSync explorer: ${blockExplorerURL}/address/${contract.address}#contract`);
}