/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
};
require ("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  defaultNetwork : "infurasep",
  networks: {
    localhost:  {
      url: "http://127.0.0.1:8545/"

    },
    infurasep : {
      url: "https://sepolia.infura.io/v3/b7e68490b8214a29a9d5396121f26f83",
      accounts: ["c7d8c953fd169b5b98a6eb0e53c3b79a5fd5237d1b14a70311c6cb874ec8d3a6"]
    }
  },
  solidity: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,   // Enable the optimizer
      runs: 200        // Set the number of optimization runs (200 is a common choice)
    },
  },
  etherscan: {
    apiKey: "BSUZV8S1DUPSUBJGRX86SK1HX5QMB2S19I"  // Replace with your Etherscan API Key
  }
};