
import './App.css';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import Navigation from './com/Navigation';
import BuyRay from './com/BuyRay';

import config from "./config.json";
import PreRay from "./abis/PreRay.json";

function App() {

  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  const [preRay, setPreRay] = useState(null);

  const [rayPrice, setRayPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [rayBalance, setRayBalance] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);
  const [totalRay, setTotalRay] = useState(0);
  const [donated, setDonated] = useState(0);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();
    console.log(`Network Id: ${network.chainId}`);

    const preRay = new ethers.Contract(config[network.chainId].preRay.address, PreRay, provider);
    setPreRay(preRay);

    const rayPrice = await preRay.rayPrice();
    setRayPrice(rayPrice);
    console.log(`Ray Price: ${rayPrice}`);

    setCount(await preRay.count());
    console.log(`Count is: ${count}`);

    const contractBalance = await provider.getBalance(preRay.address);
    setContractBalance(contractBalance);
    console.log(`Contract Balance: ${contractBalance}`);

    const totalRay = await preRay.totalRay();
    setTotalRay(ethers.utils.formatUnits(totalRay, 0));
    console.log(`Total RAY: ${totalRay}`);


    preRay.on('Buy', async (buyer, value) => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account);

      const donated = await preRay.amountDonated(account);
      setDonated(ethers.utils.formatUnits(donated, 0));

      console.log(`Buy Event Hit`);

      setRayBalance(await preRay.rayBalance(account));
      setCount(await preRay.count());
      setContractBalance(await provider.getBalance(preRay.address));

      const totalRay = await preRay.totalRay();
      setTotalRay(ethers.utils.formatUnits(totalRay, 0));
    });

    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account);

      const donated = await preRay.amountDonated(account);
      setDonated(ethers.utils.formatUnits(donated, 0));

      setRayBalance(await preRay.rayBalance(account));
      setCount(await preRay.count());
      setContractBalance(await provider.getBalance(preRay.address));
    })
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div className="App">
      <br />
      <Navigation account={account} setAccount={setAccount} setRayBalance={setRayBalance} preRay={preRay} setDonated={setDonated} /> <br />
      <h3>Ray Price: {ethers.utils.formatUnits(rayPrice, 18)} Eth per FUEL</h3>
      <h4>We Have Raised: {ethers.utils.formatUnits(contractBalance, 18)} Eth</h4>
      <p>{ethers.utils.formatUnits(count, 0)} Buy Orders</p>
      <p>Total FUEL bought: {totalRay}</p>
      {account ? (
        <div>
          <p>FUEL Balance: {ethers.utils.formatUnits(rayBalance, 0)}</p>
          <BuyRay provider={provider} preRay={preRay} />
          <p>You Donated: {ethers.utils.formatEther(donated, 18)} Eth</p>
        </div>
      ) : (
        <h1>Connect MetaMask</h1>
      )}
    </div>
  );
}

export default App;
