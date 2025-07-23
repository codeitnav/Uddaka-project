"use client";
import Image from "next/image";
import HeroImg from "@/assets/heroImg.png";
import Play from "@/assets/playStore.png";
import App from "@/assets/appStore.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Mobile gradient background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: "linear-gradient(to bottom, #fca5a5, #ffffff)",
        }}
      ></div>

      {/* Background div for md + lg screens */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f59d9d] rounded-br-[250px] hidden md:block">
        {/* Feature Cards */}
        {/* All-in-One Delivery Card */}
        <div className="absolute top-32 left-0 lg:left-2 bg-white rounded-full px-4 py-3 shadow-lg flex items-center space-x-3 z-20">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            {/* Delivery Truck with Multiple Items Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="8" width="12" height="8" rx="1" fill="#FF6B35" />
              <rect x="14" y="10" width="6" height="6" rx="1" fill="#FF6B35" />
              <circle cx="6" cy="18" r="2" fill="#4CAF50" />
              <circle cx="16" cy="18" r="2" fill="#4CAF50" />
              <rect x="4" y="4" width="2" height="2" fill="#FFB74D" />
              <rect x="7" y="4" width="2" height="2" fill="#FFB74D" />
              <rect x="10" y="4" width="2" height="2" fill="#FFB74D" />
              <path
                d="M4 6L4 8M7 6L7 8M10 6L10 8"
                stroke="#FF6B35"
                strokeWidth="1"
              />
            </svg>
          </div>
          <span className="text-gray-700 font-medium text-sm">
            All-in-One Delivery
          </span>
        </div>

        {/* Instant Booking & Tracking Card */}
        <div className="absolute top-50 left-0 lg:left-2 bg-white rounded-full px-4 py-3 shadow-lg flex items-center space-x-3 z-20">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="2" width="12" height="18" rx="2" fill="#FF6B35" />
              <rect x="7" y="4" width="10" height="12" fill="#FFF" />
              <circle cx="12" cy="17" r="1" fill="#FFF" />
              <path d="M12 6L14 9H10L12 6Z" fill="#4CAF50" />
              <circle cx="12" cy="8" r="1.5" fill="#4CAF50" />
              <path d="M10 10H14M10 11H13" stroke="#FF6B35" strokeWidth="0.5" />
            </svg>
          </div>
          <span className="text-gray-700 font-medium text-sm">
            Instant Booking & Tracking
          </span>
        </div>
      </div>

      {/* Main content wrapper - relative to section, centered, max-width, z-index to be above background */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between pt-8 pb-0 px-4 lg:px-8">
        {/* Left Section - Content */}
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
            <span className="text-red-500">One-Stop Delivery Solution</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tighter mb-6">
            Fastest <br />
            <span className="text-[#f06464] text-nowrap font-extrabold">
              Delivery &
            </span>{" "}
            <br />
            <span className="text-nowrap font-medium">
              Easy <span className="font-bold">Pickup</span>.
            </span>
          </h1>

          {/* Download App Section */}
          <p className="text-gray-700 text-lg mb-4 text-nowrap">
            For Better Service Download now
          </p>
          <div className="flex flex-row justify-center lg:justify-start space-x-4">
            <a href="#" className="inline-block">
              <Image
                src={Play || "/placeholder.svg"}
                alt="Google Play"
                width={160}
                height={50}
              />
            </a>
            <a href="#" className="inline-block">
              <Image
                src={App || "/placeholder.svg"}
                alt="App Store"
                width={150}
                height={50}
              />
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0 mb-0">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px] -mr-16 lg:-mr-16">
            <Image
              src={HeroImg || "/placeholder.svg"}
              alt="Delivery Person with box"
              fill
              className="object-contain object-bottom rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
