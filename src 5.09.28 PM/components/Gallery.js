import React from "react";

export default function Gallery() {
  return (
    <div className="py-16 bg-gray-900 overflow-hidden" id="gallery">
      <div className="container m-auto px-6 space-y-8 md:px-12">
        <div>
          <h2 className="mt-4 text-2xl text-white font-bold md:text-4xl">Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray1.webp" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray2.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray3.webp" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray21.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray4.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray5.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray6.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray17.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray20.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray14.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray8.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray9.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray18.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray22.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray10.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray11.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray15.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray19.jpg" alt="" />
            </div>
            <div className="opacity-100 hover:opacity-75 transform hover:scale-110 transition-all duration-300">
              <img className="h-auto max-w-full rounded-lg" src="/assets/ray23.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
