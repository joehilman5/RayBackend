import React, { useState } from "react";
import { TextField, colors } from "@mui/material";
import {ethers} from 'ethers';

export default function Hero({account, setAccount}) {
  const [info, setInfo] = useState({
    ethereumRaised: 2000,
    liveBuyOrders: 1000,
    fuelBought: 20000,
  });

  const [userInfo, setUserInfo] = useState({
    ethereumDonated: 1,
    fuelBought: 1000,
  });

  const [time, setTime] = useState({
    days: "00",
    hours: "12",
    minutes: "40",
    seconds: "12",
  });

  const [liveFuelPrice, setLiveFuelPrice] = useState(20);

  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
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
              Welcome to the Official Website of RayCoin—the Space Cat that’s ready to take you on
              an interstellar crypto journey!"
            </p>
          </blockquote>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-opacity-80 focus:ring-4 focus:ring-primary-300 "
          >
            BUY RAYCOIN ON UNISWAP (COMING SOON)
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="mt-24 lg:mt-0 lg:col-span-5 lg:flex place-self-center">
          <div
            className="border shadow-sm w-full max-w-md text-white rounded-xl bg-gradient-to-r from-primary/60 to-secondary/60"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-center text-2xl font-semibold leading-none tracking-tight">
                BUY NOW BEFORE PRICE RISE!
              </h3>
            </div>
            <div className="p-6 border-t border-white border-opacity-50 pt-4 pb-6">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-1">
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    Days
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {time.days}
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    Hours
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {time.hours}
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    Minutes
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {time.minutes}
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    Seconds
                  </div>
                  <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {time.seconds}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xl font-semibold border-2 rounded-lg text-center bg-primary py-2">
                Live Fuel Price: {liveFuelPrice} $
              </div>
              <div className="mt-4 text-xl font-semibold">
                <div>Ethereum Raised: {info.ethereumRaised}</div>
              </div>
              <div className="mt-2 text-xl font-semibold">
                <div>Live Buy Orders: {info.liveBuyOrders}</div>
              </div>
              <div className="mt-2 text-xl font-semibold">
                <div>Total Fuel Bought: {info.fuelBought}</div>
              </div>

              {account ? (
                <div>
                  <div className="mt-6 text-xl font-semibold border-t-white border-t-2 pt-4">
                    <div>You Bought Fuel: {userInfo.fuelBought}</div>
                    <div className="mb-3">You Donated Ethereum: {userInfo.ethereumDonated}</div>
                    <div><TextField size="small" color="secondary" className="rounded-md text-sm font-medium transition-colors px-4 py-2 w-full mt-4 bg-white text-primary" label="Amount of ETH" variant="filled" /></div>
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full mt-4 bg-white text-primary"
                    onClick={() => setIsWalletConnected(false)}
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
