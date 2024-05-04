
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

function App() {

  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [preRay, setPreRay] = useState(null);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();
    console.log(`Network ID: ${network.chainId}`);

    const preRay = new ethers.Contract(config[network.chainId].preRay.address, PreRay, provider);
    setPreRay(preRay);

    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });

  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (

    <div>
      <div className="bg-hero bg-cover min-h-screen">
        <Navbar account={account} setAccount={setAccount} />
        <Hero account={account} setAccount={setAccount} preRay={preRay} />
      </div>
      <Carousal />
      <Phases />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
