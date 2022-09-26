# zkSync 2.0 Hardhat Example
This is a simple example of how to use zkSync 2.0 with [Hardhat](https://v2-docs.zksync.io/api/hardhat/getting-started.html). It will help you to deploy your first zkSync smart contracts and interact with them, and will help you to verify its source code on [zkSync 2.0 Block Explorer](https://scan-v2.zksync.dev/).


## Setup
1. Install dependencies
    ```bash
    npm install
    ```
2. Rename or copy file `.env.example` to `.env` and fill in the private key of the account you want to use for deployment.

---


## Deploying contracts
1. Compile contracts
    ```bash
    npm run compile
    ```

2. Deploy contracts:
  - Greeter - this is a simple contract that allows you to set a greeting message and read it. It will also log SetGreeting event when you set a new greeting message.
    ```bash
    npm run deploy greeter.ts
    ```

  - ERC20 Token - this contract will let you deploy your own custom token to zkSync 2.0.
    - Fill in the values for your token in `deploy/erc20.ts`
    - Deploy the contract
      ```bash
      npm run deploy erc20.ts
      ```

---


### Verify the contract (optional)
After the deployment, the link for the contract verification, contract address, constructor arguments and other information will be printed in the console. You can use this information to verify the contract on [zkSync 2.0 Block Explorer](https://scan-v2.zksync.dev/).


### Useful links
- [zkSync 2.0 Hardhat Documentation](https://v2-docs.zksync.io/api/hardhat/getting-started.html)
- [zkSync 2.0 Block Explorer](https://scan-v2.zksync.dev/)
- [zkSync 2.0 Documentation](https://v2-docs.zksync.io/)