import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { utils } from "ethers";
import getWallet from "../utils/getWallet";
import displayVerificationInfo from "../utils/displayVerificationInfo";

const TOKEN = {
  name: "Your Token Name",
  symbol: "YourTokenSymbol",
  decimals: 18,
  cap: utils.parseEther("1000000000").toString(), // total tokens supply
  initialBalance: utils.parseEther("10000").toString(), // balance you receive to the deployer account
}

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the ERC20 contract`);

  const wallet = await getWallet(hre);

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("ERC20Token");

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  const contractConstructorArguments = [TOKEN.name, TOKEN.symbol, TOKEN.decimals, TOKEN.cap, TOKEN.initialBalance];
  console.log(`Deploying contract with arguments: ${JSON.stringify(contractConstructorArguments)}`);
  const deployedContract = await deployer.deploy(artifact, contractConstructorArguments);

  // Show the contract info.
  console.log(`Contract "${artifact.contractName}" was deployed to ${deployedContract.address}`);

  displayVerificationInfo({hre, contract: deployedContract, contractConstructorArguments, artifact});
}