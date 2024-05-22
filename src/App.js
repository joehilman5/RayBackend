
import Carousal from "./components/Carousal";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Phases from "./components/Phases";

import config from './config.json';
import PreRay from './abis/PreRay.json';

import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

function App() {

  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [preRay, setPreRay] = useState(null);

  const [count, setCount] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);
  const [totalRay, setTotalRay] = useState(0);
  const [rayBalance, setRayBalance] = useState(0);
  const [donated, setDonated] = useState(0);
  const [rayPrice, setRayPrice] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [chain, setChain] = useState(11155111);

  const [walletConnected, setWalletConnected] = useState(false);

  const getProvider = () => {
    if(walletConnected && !isMobile) {
      return new ethers.providers.Web3Provider(window.ethereum);
    } else {
      return new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/d7ac5c18f13a425da61e943d35d390ee');
    }
  }

  const loadBlockchainData = async () => {


    if(await window.ethereum) {
      setWalletConnected(true);
    }
    console.log(`Connected: ${walletConnected}`);
    
    const provider = getProvider();
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/d7ac5c18f13a425da61e943d35d390ee');
    setProvider(provider);
    const network = await provider.getNetwork();
    const chain = network.chainId;
    console.log(`ChainId: ${chain}`);
    setChain(chain);
    console.log(`New Chain: ${chain}`);
    const preRay = new ethers.Contract(config[chain].preRay.address, PreRay, provider);
    setPreRay(preRay);

    //console.log(`Mobile: ${isMobile}`);

    const contractBalance = await provider.getBalance(preRay.address);
    setContractBalance(contractBalance);
  
    const count = await preRay.count();
    setCount(count);
  
    const totalRay = await preRay.totalRay();
    setTotalRay(totalRay);

    const rayPrice = await preRay.rayPrice();
    setRayPrice(rayPrice);

    preRay.on('Buy', async () => {

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);

      const rayBalance = await preRay.rayBalance(account);
      setRayBalance(rayBalance);

      const donated = await preRay.amountDonated(account);
      setDonated(donated);

      const count = await preRay.count();
      setCount(count);

    const contractBalance = await provider.getBalance(preRay.address);
    setContractBalance(contractBalance);

    const rayPrice = await preRay.rayPrice();
    setRayPrice(rayPrice);

    const totalRay = await preRay.totalRay();
    setTotalRay(totalRay);

    });

    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);

      const rayBalance = await preRay.rayBalance(account);
      setRayBalance(rayBalance);

      const donated = await preRay.amountDonated(account);
      setDonated(donated);

    });

  }

  const updateInfo = async () => {
    try {
      //console.log(`PreRay Address: ${preRay.address}`);
      const contractBalance = await provider.getBalance(preRay.address);
      setContractBalance(contractBalance);
  
      const count = await preRay.count();
      setCount(count);
  
      const totalRay = await preRay.totalRay();
      setTotalRay(totalRay);
    }catch(err) {
      console.error(err);
    }

  }

  useEffect(() => {
    loadBlockchainData();
    if(walletConnected) {
      updateInfo();
    }
    
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      setTimeLeft(timeLeft-1);
      await updateInfo();

    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (

    <div>
      <div className="bg-hero bg-cover min-h-screen">
        <Navbar account={account} setAccount={setAccount} preRay={preRay} setRayBalance={setRayBalance} setDonated={setDonated} setRayPrice={setRayPrice} />
        <Hero account={account} setAccount={setAccount} preRay={preRay} count={count} contractBalance={contractBalance}
         totalRay={totalRay} rayBalance={rayBalance} donated={donated} provider={provider} setDonated={setDonated}
          setRayBalance={setRayBalance} walletConnected={walletConnected} isMobile={isMobile} />
      </div>
      <Carousal />
      <Phases />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
