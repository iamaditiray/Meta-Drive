
# Meta Drive

This project develops a Decentralized application "Meta-drive" that allows users to store and view their files on the IPFS network as well as allows them to share it with other users using the MetaMask account. We have used PINATA-> which is an NFT media management service that allows users to pin their content on IPFS thereby giving a fast and easy way to both technical and non-technical creators to share and manage their files.
The files will be stored using content addressing, which assigns a unique content identifier (CID) to each file, making it easy for users to retrieve and access their files. The smart contract will manage the sharing process, ensuring that only authorized users can access the shared files. The system will use Ethereum blockchain technology to provide a secure and transparent sharing platform.

# Set-Up

The necessary resources needed for this project are: React.js, ethers, hardhat configuration, Solidity and IPFS.





## API Reference

#### PINATA API KEY

  https://www.pinata.cloud/
  

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `secret_api_key` | `string` | **Required**. Your Secret API key |



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

##### Now Run this on Terminal
```bash
npm run dev
```

    
