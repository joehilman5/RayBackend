import React, { useState } from "react";
import {ethers} from 'ethers';

function Navbar({account, setAccount}) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const connectHandler = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account);
  }

  return (
    <nav className="bg-gray-900 bg-opacity-60 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/logo.png" className="h-8" alt="RayCoin Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            RayCoin
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center">
            <a className="mr-2" href="https://telegram.org">
              <img className="w-6 h-6" src="/assets/telegram.svg" alt="Telegram Logo" />
            </a>
            <a href="https://twitter.com">
              <img className="w-6 h-6" src="/assets/twitter.svg" alt="Twitter Logo" />
            </a>
            {account ? (
              <button className="rounded-md text-sm font-medium border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 ml-4 bg-white text-primary"
              onClick={connectHandler}>
                {account.slice(0, 6) + '...' + account.slice(38, 42)}</button>
            ) : (
            <button className="rounded-md text-sm font-medium border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 ml-4 bg-white text-primary"
            onClick={connectHandler}>
            CONNECT NOW</button>
            )}
            
          </div>
          <button
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-cta"
            aria-expanded={isNavbarOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavbarOpen ? "" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg bg-transparent bg-opacity-60 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#features"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#gallery"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary "
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
