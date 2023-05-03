

# Meta Drive
 ![Meta-Drive-1](https://user-images.githubusercontent.com/103599179/235833837-3fd981be-8183-4071-a02b-e41c1aa9621d.png)
This project develops a Decentralized application "Meta-drive" that allows users to store and view their files on the IPFS network as well as allows them to share it with other users using the MetaMask account. We have used PINATA-> which is an NFT media management service that allows users to pin their content on IPFS thereby giving a fast and easy way to both technical and non-technical creators to share and manage their files.
The files will be stored using content addressing, which assigns a unique content identifier (CID) to each file, making it easy for users to retrieve and access their files. The smart contract will manage the sharing process, ensuring that only authorized users can access the shared files. The system will use Ethereum blockchain technology to provide a secure and transparent sharing platform.

# Set-Up

The necessary resources needed for this project are: React.js, ethers, hardhat configuration, Solidity and IPFS.





# Installation

## Smart Contract
To deploy your smart contract you have to install Hardhat:

### Write this cmd in your VS code IDE's terminal
```bash
  npm install hardhat --save-dev hardhat@2.12.4 
```
## Front-End
To deploy this project's Frontend You have to install Vite/React and Tailwind CSS

### Copy this cmd in your VS code IDE's terminal
### Vite/React

#### Go to this site

https://vitejs.dev/guide/

```bash
  npm create vite@latest
  npm install
```
### Tailwind CSS

#### Go to this site

https://tailwindcss.com/docs/guides/vite

##### Terminal
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
##### tailwind.config.js
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

##### index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Now Run this on Terminal to check functionality
```bash
npm run dev
```

# Starting Local Ethereum Network using Hardhat

The command below starts a local Ethereum network using the Hardhat development environment. This network is commonly used for testing and developing decentralized applications (DApps) without having to interact with the real Ethereum network, which can be expensive and time-consuming. The cmd below lists some accounts with their private keys in your terminal. We need to import those accounts in the browser's MetaMask wallet to use the test ether for performing the operations after deploying our smart contract.

```bash
npx hardhat node
```
After ruuning the above cmd we must deploy our smart contract by the deployment migration script "deploy.js" using the following cmd.

```bash
npx hardhat run --network localhost scripts/deploy.js
```
The above cmd will generate an output like:
Library deployed to:<hashcode>
The above hashcode must be pasted in App.js
```bash
let contractAddress = "Your Contract Address";
```

### Installing axios API
```bash
npm install axios
```
Generating an API KEY after making an account on PINATA.
The generated api key and secret api key must be pasted in FileUpload.js in the variable pinata_api_key and pinata_secret_api_key.






    
## API Reference

#### PINATA API KEY

Go to this Site
  https://www.pinata.cloud/


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `secret_api_key` | `string` | **Required**. Your Secret API key |



## Run Locally

#### 1. Clone the project

```bash
  git clone https://github.com/iamaditiray/Meta-Drive.git
```
#### 2. Install dependencies as mentioned earlier

#### 3. Start the local Ethereum network using Hardhat

```bash
  npx hardhat node
```
#### 4. Copy the contract address as paste in App.jsx

#### 5. Deploy Smart Contract

```bash
  npx hardhat run --network localhost scripts/deploy.js
```

#### 6. Start the server

```bash
  npm run dev
```




## Screenshots
  ### FileUpload Component

  ![Meta-Drive-1](https://user-images.githubusercontent.com/103599179/235833837-3fd981be-8183-4071-a02b-e41c1aa9621d.png)
  ### Display Component

  ![Meta-Drive-2](https://user-images.githubusercontent.com/103599179/235833852-fff44067-c674-4b1c-8f44-2918383d2188.png)
  ### Modal and Footer Component

  ![Meta-Drive-3](https://user-images.githubusercontent.com/103599179/235833860-273481d4-6b79-4b89-b0b4-fa8cbb3a27a5.png)

# Acknowledgements
### Books
- MASTERING ETHEREUM BUILDING SMART CONTRACTS AND DAPPS
- Hands-On Blockchain with Hyperledger: Building decentralized applications with Hyperledger Fabric and Composer
- Blockchain with Hyperledger Fabric: Build decentralized applications using Hyperledger Fabric 2
- Cryptocurrency Mining for Dummies 
- Mastering the Lightning Network: A Second Layer Blockchain Protocol for Instant Bitcoin Payments

### Youtube Channels
 - [Code-Eater Web3](https://www.youtube.com/@codeeaterweb3971)
 - [Javascript Mastery](https://www.youtube.com/@javascriptmastery)

## Authors
- [Aditi Ray](https://github.com/iamaditiray)
- [Mursalin Sheikh](https://github.com/mosabhai77)
- [Shagun Singh](https://www.github.com/octokatherine)
