import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import "./App.css";
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[100px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";



function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "Your Contract Address";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>

  <div className='min-h-screen'>
    <div className='gradient-bg-welcome'>
      <Navbar/>
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-20 px-4'>
      <div className='flex flex-1 justify-start flex-col mf:mr-10'>
  <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1 text-left'> {/* Add text-left here */}
    Decentralized <br/> Image Safeguarding
  </h1>
  <p className='text-left mt-5 text-white font-light text-base md:w-9/12 w-11/12'>
    Decentralizing Image Storage with Meta Drive:<br/> Powered by IPFS and Secured by Pinata.
  </p>
  <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
    <div className={`rounded-tl-2xl ${commonStyles}`}>
      Reliability
    </div>
    <div className={commonStyles}>
      Security
    </div>
    <div className={`rounded-tr-2xl ${commonStyles}`}>
      Ethereum
    </div>
    <div className={`rounded-bl-2xl ${commonStyles}`}>
      Web 3.0
    </div>
    <div className={commonStyles}>
      IPFS
    </div>
    <div className={`rounded-br-2xl ${commonStyles}`}>
      Pinata
    </div>
  </div>

        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
        <div className='p-1 justify-end items-start flex-col rounded-xl h-40 sm:w-90 w-full my-1 eth-card white-glassmorphism'>
  <div className='flex justify-between flex-col w-full h-full'>
    <div className='flex justify-between items-start'>
      <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
        <SiEthereum fontSize={21} color="#fff"/>
      </div>
      <BsInfoCircle fontSize={17} color='#fff' />
    </div>
    <div className="flex flex-col items-start justify-start"> {/* Add justify-start here */}
      <p className='text-white font-light text-lg items-start'>
        <b className="font-semibold items-start">Account : </b> <span className="text-xs text-blue-600 font-bold">{account ? account : "Not connected"}
      </span></p>
      <p className='text-white font-semibold text-lg mt-1'>
        Ethereum
      </p>
    </div>
  </div>
</div>      
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
       
      </div>
      </div>
      </div>
      </div>
      <div className="gradient-bg-display">
      <Display contract={contract} account={account} />
    </div>
    <div className="gradient-bg-modal">
    {!modalOpen && (
        <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full w-1/4 cursor-pointer hover:bg-[#2546bd] text-white mb-5" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      </div>
      <Footer />
      </div>
      
    </>
  );
}

export default App;