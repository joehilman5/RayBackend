/* global BigInt */

import React, { useRef } from "react";
//import { TextField, colors } from "@mui/material";
import {ethers} from 'ethers';

export default function Hero({account, setAccount, preRay, count, contractBalance, totalRay,
   rayBalance, donated, provider, setRayBalance, setDonated, walletConnected, isMobile}) {

  const amountRef = useRef(null);

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);

    const rayBalance = await preRay.rayBalance(account);
      setRayBalance(rayBalance);

      const donated = await preRay.amountDonated(account);
      setDonated(donated);

}

  const buyHandler = async () => {
    try {
      
      const signer = provider.getSigner();
      let amount = amountRef.current.value;

      if(!isNaN(amount)) {
        let adjust_amount = amount * (10 ** 18);

        let action = await preRay.connect(signer).buyRay({value: BigInt(adjust_amount)});
        await action.wait();

      }else {
        console.log('Input Proper Value!');
      }

    }catch(err) {
      console.error(err);
    }
  }

  return (
    <section className="min-h-screen" id="home">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 bg-black bg-opacity-40 rounded-lg p-6 py-24">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl ">
            RayCoin $RAY
          </h1>
          <blockquote className="p-4 my-4 border-s-4 text-gray-200 ">
            <p className="text-xl italic font-medium leading-relaxed ">
              Welcome to the Official Website for RayFuel! Ray The Space Cat is ready to take you on
              an interstellar crypto journey! Buy your RayFuel to assist Ray's journey to the Moon! "
                         </p>
          </blockquote>
          {isMobile ? (
            <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-opacity-80 focus:ring-4 focus:ring-primary-300 "
          >
           🚀  BUY RAYFUEL BEFORE MAINNET LAUNCH 🚀
            
          </a>
          ) : (
            <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-opacity-80 focus:ring-4 focus:ring-primary-300 "
          >
           🚀  BUY RAYFUEL BEFORE MAINNET LAUNCH 🚀
            
          </a>
          )}
          
        </div>
        <div className="mt-24 lg:mt-0 lg:col-span-5 lg:flex place-self-center">
          <div
            className="border shadow-sm w-full max-w-md text-white rounded-xl bg-gradient-to-r from-primary/60 to-secondary/60"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-center text-2xl font-semibold leading-none tracking-tight">
                Buy RayFuel Here!
              </h3>
            </div>
            <div className="p-6 border-t border-white border-opacity-50 pt-4 pb-6">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-1">
                  
                </div>
              </div>
              {walletConnected ? (
                <div className="mt-4 text-xl font-semibold border-2 rounded-lg text-center bg-primary py-2">
                Live Fuel Price: ${'0.00001'}
              </div>
              ) : (
                <div className="mt-4 text-xl font-semibold border-2 rounded-lg text-center bg-primary py-2">
                Add Wallet Extension!
              </div>
              )}
              
              <div className="mt-4 text-xl font-semibold">
                <div>Ethereum Raised: {ethers.utils.formatUnits(contractBalance, 18)} Eth</div>
              </div>
              <div className="mt-2 text-xl font-semibold">
                <div>Live Buy Orders: {count}</div>
              </div>
              <div className="mt-2 text-xl font-semibold">
                <div>Total Fuel Bought: {ethers.utils.formatUnits(totalRay, 0)}</div>
              </div>

              {account ? (
                <div>
                  <div className="mt-6 text-xl font-semibold border-t-white border-t-2 pt-4">
                    <div>You Bought Fuel: {ethers.utils.formatUnits(rayBalance, 0)}</div>
                    <div className="mb-3">You Donated: {ethers.utils.formatUnits(donated, 18)} Eth</div>
                    <div><input type="text" placeholder="Amount in ETH" size="small" color="secondary" className="rounded-md text-sm font-medium transition-colors px-4 py-2 w-full mt-4 bg-white text-primary" label="Amount of ETH" variant="filled" ref={amountRef} /></div>
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full mt-4 bg-white text-primary"
                    onClick={buyHandler}
                  >
                    BUY FUEL
                  </button>
                </div>
              ) : (
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full mt-4 bg-white text-primary"
                  onClick={connectHandler}
                >
                  CONNECT WALLET
                </button>
              )}
            </div>
            <div className="items-center pb-6 flex justify-center">
              <p className="text-center text-xs flex items-center">
                powered by{" "}
                <img
                  src="assets/logo.png"
                  alt="Raycoin Logo"
                  width={"24px"}
                  height={"24px"}
                  className="px-1"
                />
                RayCoin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
