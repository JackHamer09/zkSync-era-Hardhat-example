# zkSync Era Hardhat Example
This is a simple example of how to use zkSync Era with [Hardhat](https://v2-docs.zksync.io/api/hardhat/getting-started.html). It will help you to deploy your first zkSync smart contracts, interact with them, and automatically verify its source code on [zkSync Era Block Explorer](https://explorer.zksync.io/).


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

  - ERC20 Token - this is a multifile contract that will let you deploy your own custom token to zkSync 2.0.
    - Fill in the values for your token in `deploy/erc20.ts`
    - Deploy the contract
      ```bash
      npm run deploy erc20.ts
      ```

---


### Useful links
- [zkSync Era Hardhat Documentation](https://era.zksync.io/docs/api/hardhat/getting-started.html)
- [zkSync Era Block Explorer](https://explorer.zksync.io/)
- [zkSync Era Documentation](https://era.zksync.io/docs/)
