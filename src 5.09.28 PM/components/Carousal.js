import React from "react";

import Slider from "react-slick";

export default function Carousal() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };
  return (
    <div className="min-h-screen" id="about">
      <div className="pt-2 sm:pt-4 lg:pt-16 bg-gray-900 w-full flex flex-col items-center">
        <div className="my-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-2 ring-primary/60 hover:ring-primary/100">
            Official Website of RayCoin
          </div>
        </div>
        <div className="text-center flex flex-col lg:flex-row gap-10 justify-center items-center pb-2 md:pb-24 md:w-11/12 w-full">
          <div className="md:w-1/2 w-2/3">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-left text-center">
              RayCoin $RAY
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 md:text-left text-center">
              RayCoin is not just any meme coin; it’s a cosmic adventure wrapped in the whimsy of a
              Space Cat named Ray, designed to bring fun, excitement, and value to the meme coin
              universe. As a proud ERC20 token on the innovative Ethereum network, RayCoin is ready
              to blast its coins into orbit!
            </p>
          </div>
          <Slider {...settings} className="md:w-1/4 md:h-1/4 w-1/2 h-1/2 mb-8">
            <div className="w-full h-full">
              <img src="/assets/ray1.webp" className="w-full h-full fit-cover" />
            </div>
            <div className="w-full h-full">
              <img src="/assets/ray3.webp" className="w-full h-full fit-cover" />
            </div>
            <div className="w-full h-full">
              <img src="/assets/ray2.jpg" className="w-full h-full fit-cover" />
            </div>
            <div className="w-full h-full">
              <img src="/assets/ray17.jpg" className="w-full h-full fit-cover" />
            </div>
          </Slider>
        </div>
        <div className="w-full px-6 lg:px-8 py-24 bg-features bg-cover">
          <h2 className="text-center text-3xl font-semibold leading-8 text-white bg-primary rounded-full py-2">
            Features trusted by the world
          </h2>
          <div
            className=" flex flex-col md:flex-row items-center justify-evenly w-full gap-4"
            id="features"
          >
            <div className="max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative w-100 h-100 bg-white bg-opacity-90 rounded">
                  <a
                    href="#"
                    className="group relative inline-block overflow-hidden rounded px-12 py-6 text-sm font-medium text-white hover:text-primary focus:outline-none focus:ring w-full h-full"
                  >
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-primary transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-primary transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-primary transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-primary transition-all duration-200 group-hover:h-full"></span>
                    <dt className="text-3xl flex font-bold items-center gap-4 text-primary">
                      <img
                        className=" max-h-12 object-contain "
                        src="/assets/lock.svg"
                        alt="Verified"
                        width="34"
                        height="34"
                      />
                      Verified
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      Our smart contract at (Coming Soon) is publicly verified, ensuring
                      transparency and security. With our contract open for community review and
                      audit, you can interact with confidence, knowing there are no hidden functions
                      or vulnerabilities.
                    </dd>
                  </a>
                </div>
                <div className="relative w-100 h-100 bg-white bg-opacity-90 rounded">
                  <a
                    href="#"
                    className="group relative inline-block overflow-hidden rounded px-12 py-6 text-sm font-medium text-white hover:text-primary focus:outline-none focus:ring w-full h-full"
                  >
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-primary transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-primary transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-primary transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-primary transition-all duration-200 group-hover:h-full"></span>
                    <dt className="text-3xl flex font-bold items-center gap-4 text-primary">
                      <img
                        className=" max-h-12 object-contain "
                        src="/assets/fire.svg"
                        alt="Burn"
                        width="34"
                        height="34"
                      />
                      Burn
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      As part of our commitment to enhancing value and stability, we’re planning a
                      liquidity token burn in the near future. By reducing the token supply, we aim
                      to increase scarcity and potentially boost the token’s value for our holders.
                      Stay tuned for more details on this exciting development!
                    </dd>
                  </a>
                </div>
                <div className="relative w-100 h-100 bg-white bg-opacity-90 rounded">
                  <a
                    href="#"
                    className="group relative inline-block overflow-hidden rounded px-12 py-6 text-sm font-medium text-white hover:text-primary focus:outline-none focus:ring  w-full h-full"
                  >
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-primary transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-primary transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-primary transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-primary transition-all duration-200 group-hover:h-full"></span>
                    <dt className="text-3xl flex font-bold items-center gap-4 text-primary">
                      <img
                        className=" max-h-12 object-contain "
                        src="/assets/roadmap.svg"
                        alt="Roadmap"
                        width="34"
                        height="34"
                      />
                      Roadmap
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      We have exciting ambitions ahead. Our primary focus as a community-driven
                      project is to nurture a dedicated group of enthusiasts who actively
                      participate in and champion our cause. Looking forward, our objective is to
                      create a decentralized application (dApp) that will greatly enhance and expand
                      our community. Here’s to propelling RayCoin to new heights!
                    </dd>
                  </a>
                </div>
                <div className="relative w-100 h-100 bg-white bg-opacity-90 rounded">
                  <a
                    href="#"
                    className="group relative inline-block overflow-hidden rounded px-12 py-6 text-sm font-medium text-white hover:text-primary focus:outline-none focus:ring w-full h-full"
                  >
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-primary transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-primary transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-primary transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-primary transition-all duration-200 group-hover:h-full"></span>
                    <dt className="text-3xl flex font-bold items-center gap-4 text-primary">
                      <img
                        className=" max-h-12 object-contain "
                        src="/assets/chart.svg"
                        alt="Chart"
                        width="34"
                        height="34"
                      />
                      Chart
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">Coming Soon</dd>
                  </a>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
