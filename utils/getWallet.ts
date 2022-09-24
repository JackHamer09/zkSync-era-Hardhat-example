import { Provider, Wallet } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getDefaultProvider, utils } from "ethers";

export default async function (hre: HardhatRuntimeEnvironment) {
  const syncProvider = new Provider(hre.config.zkSyncDeploy.zkSyncNetwork);
  const ethProvider = getDefaultProvider(hre.config.zkSyncDeploy.ethNetwork);
  
  if (!process.env.WALLET_PRIVATE_KEY) {
    throw new Error("WALLET_PRIVATE_KEY env variable is not set");
  }

  // Initialize the wallet.
  const wallet = new Wallet(process.env.WALLET_PRIVATE_KEY as string, syncProvider, ethProvider);
  console.log(`Deploying using wallet: ${wallet.address}`);

  // Wallet ETH balance
  const ethBalance = await wallet.getBalance();
  console.log(`Wallet ETH balance: ${utils.formatUnits(ethBalance)} ETH\n`);

  return wallet;
}