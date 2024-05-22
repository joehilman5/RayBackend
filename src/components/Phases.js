import React from "react";

export default function Phases() {
  return (
    <div className="py-16 bg-gray-900 overflow-hidden">
      <div className="container m-auto px-6 space-y-8 md:px-12">
        <div>
          <h2 className="mt-4 text-2xl text-white font-bold md:text-4xl">Phases of the Project</h2>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
          <div className="relative group hover:bg-secondary bg-primary transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="/assets/announce.svg"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-2xl text-white font-bold transition">Phase 1</h5>
                <ul>
                  <li className="text-lg text-white text-semibold">Reach 500 Holders</li>
                  <li className="text-lg text-white text-semibold">Launch our website</li>
                  <li className="text-lg text-white text-semibold">
                    Get listed on decentralized exchanges
                  </li>
                  <li className="text-lg text-white text-semibold">Build trading partners</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative group hover:bg-secondary bg-primary transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="/assets/news.svg"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-2xl text-white font-bold transition">Phase 2</h5>
                <ul>
                  <li className="text-lg text-white text-semibold">Grow to 2,000 Holders</li>
                  <li className="text-lg text-white text-semibold">
                    Implement Dexscreener and Dextools for enhanced trading analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative group hover:bg-secondary bg-primary transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="/assets/goal.svg"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-2xl text-white font-bold transition">Phase 3</h5>
                <ul>
                  <li className="text-lg text-white text-semibold">Collaborate with influencers</li>
                  <li className="text-lg text-white text-semibold">Post advertisements</li>
                  <li className="text-lg text-white text-semibold">Reach 5,000 Holders</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative group hover:bg-secondary bg-primary transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="/assets/mobile.svg"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-2xl text-white font-bold transition">Phase 4</h5>
                <ul>
                  <li className="text-lg text-white text-semibold">Develop a mobile app</li>
                  <li className="text-lg text-white text-semibold">Reach 10,000 Holders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
