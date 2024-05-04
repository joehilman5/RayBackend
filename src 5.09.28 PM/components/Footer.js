import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary" id="footer">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/assets/logo.png" className="h-8" alt="PayCoin Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">
              RayCoin
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a href="https://telegram.org">
              <img className="w-6 h-6" src="/assets/telegram.svg" alt="Telegram Logo" />
            </a>
            <a href="https://twitter.com">
              <img className="w-6 h-6" src="/assets/twitter.svg" alt="Twitter Logo" />
            </a>
            <a href="https://discord.com">
              <img className="w-8 h-8" src="/assets/discord.svg" alt="Discord Logo" />
            </a>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center text-white">
          © 2024{" "}
          <a href="/" className="hover:underline">
            RayCoin™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
