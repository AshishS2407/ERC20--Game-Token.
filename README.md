# GameT Token (GT) - ERC20

This repository contains the smart contract for **GameT Token (GT)**, an ERC20 token deployed on the Ethereum blockchain. The contract allows for minting tokens and includes an admin role for minting control. It is verified and published on Etherscan.

## Contract Details 📜
- **Token Name**: GameT
- **Symbol**: GT
- **Decimals**: 18
- **Total Supply**: 100 GT (initially minted to the deployer/admin)
- **Verified and Published Contract**: [Etherscan](https://sepolia.etherscan.io/address/0x08b2B733Ccc70e51Bce22c076C79f8fe7049D619#code)

## Key Features ⭐
- **ERC20 Standard**: The contract follows the ERC20 standard, making it compatible with any ERC20-supporting wallet.
- **Admin Role**: The contract owner (deployer) has administrative control over token minting.
- **Minting Functionality**: Only the admin can mint new tokens by calling the `safeMint()` function.

## Contract Address 🏷️
The contract is deployed and verified at:  
**Address**: [0x08b2B733Ccc70e51Bce22c076C79f8fe7049D619 ](https://sepolia.etherscan.io/address/0x08b2B733Ccc70e51Bce22c076C79f8fe7049D619#code)

## Usecase

The admin can give GameT tokens to players as rewards for hitting milestones or achievements, encouraging them to play more and stay engaged.

## Examples:

### Milestone Rewards:

Players get tokens when they reach specific levels or complete tough challenges.
Example: Reach level 50 and get 1,000 GameT tokens.

### Achievement Rewards:

Players earn tokens by completing special tasks or achievements, like defeating a powerful boss.
Example: Defeat a legendary boss and get 500 GameT tokens.

### Leaderboard Rewards:

The top players on weekly or monthly leaderboards get rewarded with tokens to keep competition high.
Example: The top 3 players of the week get 1,000, 750, and 500 GameT tokens.

### Loyalty Rewards:

Players who log in every day or play regularly can earn tokens for being consistent.
Example: Log in daily for a month and receive 100 GameT tokens.

## Prerequisites ⚙️

To interact with the contract, you’ll need:

- **Metamask or any Ethereum wallet**: Install a wallet to interact with the Ethereum blockchain.
- **Ether**: You need some ETH in your wallet to pay for gas fees when interacting with the contract.

## License 📜

This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for details.
