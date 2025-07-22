import React from 'react';
import Image from 'next/image'; 
import ScooterImage from '@/assets/ScooterImage.png'; 
import Map from '@/assets/map-pin.svg'; 

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ef4444] to-[#FFFFFF] font-['Poppins', 'Inter', 'sans-serif'] text-[#333]">
      {/* Hero Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-20 lg:px-20 mt-20">
        {/* Left Section - Text and Buttons */}
        <div className="flex-1 text-center md:text-left z-10 mb-12 md:mb-0 ml-16 md:mr-10 ">
          <h1 className="text-4xl text-shadow-md sm:text-5xl lg:text-5xl font-bold leading-tight text-[#ffff] mb-4">
            Delivering Speed &amp; Trust to Your Doorstep
          </h1>
          <p className="text-lg sm:text-xl  text-shadow-md  text-[#fff] mb-8 max-w-lg mx-auto md:mx-0">
            Fast, reliable, and secure delivery at your fingertips
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 hover:scale-[105%] cursor-pointer rounded-full bg-[#ce6d6d] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Delivery
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent border border-[#ffff] text-[#ffff] font-semibold shadow-lg hover:shadow-xl hover:scale-[105%] cursor-pointer transition-all duration-300">
              Track Your Order
            </button>
          </div>
        </div>

        {/* Right Section - 3D Illustration */}
        <div className="flex-1 flex justify-center md:justify-end z-10">
          {/* Using next/image component */}
          <Image
            src={ScooterImage}
            alt="Delivery person on a scooter"
            width={500} // Specify intrinsic width
            height={400} // Specify intrinsic height
            className="max-w-full h-auto rounded-lg rotate-2"
            priority // Optional: prioritize loading for above-the-fold images
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;