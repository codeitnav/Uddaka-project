"use client"
import Image from "next/image"
import test from "@/assets/heroImg.png"
import Play from "@/assets/playStore.png"
import App from "@/assets/playStore.png" // Assuming this should be for App Store

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background div - absolute, full height of section, right half, rounded bottom-right */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f59d9d] rounded-br-[250px]"></div>
      {/* Main content wrapper - relative to section, centered, max-width, z-index to be above background */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between pt-8 pb-0 px-4 lg:px-8">
        {/* Le  ft Section - Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-16">
          {/* Top Tag */}
          <div className="inline-flex items-center bg-red-300/30 w-80 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-6">
            {/* Keeping original SVG for specific path, but generally prefer Lucide */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-red-500">Food Deliver Service & Restaurant</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tighter mb-6">
            Fastest <br />
            <span className="text-[#f06464] text-nowrap font-extrabold">Delivery &</span> <br />
            <span className="text-nowrap font-medium">
              Easy <span className="font-bold">Pickup</span>.
            </span>
          </h1>
          {/* Download App Section */}
          <p className="text-gray-700 text-lg mb-4 text-nowrap">For Better Service Download now</p>
          <div className="flex flex-row justify-center lg:justify-start space-x-4">
            <a href="#" className="inline-block">
              <Image src={Play || "/placeholder.svg"} alt="Google Play" width={160} height={50} />
            </a>
            <a href="#" className="inline-block">
              <Image src={App || "/placeholder.svg"} alt="App Store" width={150} height={50} />
            </a>
          </div>
        </div>
        {/* Right Section - Image */}
        {/* This div is now part of the flex layout. Use negative margin to pull it right. */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0 mb-0">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px] -mr-16 lg:-mr-32">
            <Image
              src={test || "/placeholder.svg"}
              alt="Delivery Person with Pizza"
              fill // Use fill to make image fill its parent
              className="object-contain object-bottom rounded-lg" // object-contain to fit, object-bottom to align bottom
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
