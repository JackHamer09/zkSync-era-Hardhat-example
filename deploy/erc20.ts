import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { utils } from "ethers";
import getWallet from "../utils/getWallet";
import verify from "../utils/verify";

const TOKEN = {
  name: "Your Token Name",
  symbol: "YourTokenSymbol",
  capitalization: utils.parseEther("1000000000").toString(), // total tokens supply
}

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the ERC20 contract`);

  const wallet = await getWallet(hre);

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("ERC20Token");

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  const contractConstructorArguments = [TOKEN.name, TOKEN.symbol, TOKEN.capitalization];
  console.log(`Deploying contract with arguments: ${JSON.stringify(contractConstructorArguments)}`);
  const deployedContract = await deployer.deploy(artifact, contractConstructorArguments);

  // Show the contract info.
  console.log(`Contract "${artifact.contractName}" was deployed to ${deployedContract.address}`);

  await verify({hre, contract: deployedContract, contractConstructorArguments, artifact});
}