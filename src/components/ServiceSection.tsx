"use client";
import React, { useState } from "react";
import Image from "next/image";
import service from "@/assets/service1.png";

const ServicesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Personal Items",
      description:
        "Send documents, gifts, and personal belongings with our secure delivery network",
      icon: "📦",
      features: ["Secure packaging", "Real-time tracking", "Same-day delivery"],
    },
    {
      title: "Home Shifting",
      description:
        "Complete household relocation services with professional moving teams",
      icon: "🏠",
      features: [
        "Professional packing",
        "Furniture assembly",
        "Insurance coverage",
      ],
    },
    {
      title: "Business Goods",
      description:
        "Commercial deliveries for SMEs and enterprises with bulk discounts",
      icon: "🏢",
      features: ["Bulk pricing", "Scheduled deliveries", "Priority handling"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="min-h-screen bg-white py-15 scroll-mt-24 px-4 relative">
      <style jsx global>{`
        .service-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.25);
        }

        .feature-item {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .feature-item:nth-child(1) {
          animation-delay: 0.1s;
        }
        .feature-item:nth-child(2) {
          animation-delay: 0.2s;
        }
        .feature-item:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-enter {
          opacity: 0;
          transform: translateX(100px);
        }

        .slide-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.6s ease-out;
        }

        @media (max-width: 768px) {
          .service-card:hover {
            transform: translateY(-4px) scale(1.01);
          }
        }
      `}</style>
      
      {/* Background Image - Hidden on mobile, visible on larger screens */}
      <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-80 hidden lg:block">
        <Image
          src={service || "/placeholder.svg"}
          alt="Abstract background image representing logistics services"
          fill
          className="object-contain object-right"
          priority={false}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 font-semibold">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-red-50 border border-red-100 rounded-full text-sm font-semibold text-red-700 mb-4 sm:mb-6">
            ⭐ Why Us?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-800 mb-4 sm:mb-6 text-gray-900 px-4">
            One-Stop Delivery Solution
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Send personal items, shift homes, move business goods.
          </p>
        </div>

        {/* USP Flowchart */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 sm:space-y-8 lg:space-y-0 lg:space-x-12 px-4">
            {/* USP 1 */}
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div
                className="bg-white border-4 rounded-2xl p-6 sm:p-8 text-center shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ borderColor: "#ef4444" }}
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl sm:text-2xl font-700"
                  style={{ backgroundColor: "#ef4444", color: "white" }}
                >
                  ⚡
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-700 mb-2"
                  style={{ color: "#ef4444" }}
                >
                  10 MIN
                </h3>
                <p className="text-base sm:text-lg font-600 text-gray-800">PICKUP</p>
                <p className="text-sm text-gray-600 mt-2">
                  Lightning-fast collection
                </p>
              </div>
              
              {/* Desktop Arrow */}
              <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: "#ef4444" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full absolute -right-1 top-1/2 transform -translate-y-1/2"
                  style={{ backgroundColor: "#ef4444" }}
                ></div>
              </div>

              {/* Mobile Arrow */}
              <div className="block lg:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 rotate-90">
                <div
                  className="w-8 h-1 rounded-full"
                  style={{ backgroundColor: "#ef4444" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full absolute -right-0.5 top-1/2 transform -translate-y-1/2"
                  style={{ backgroundColor: "#ef4444" }}
                ></div>
              </div>
            </div>

            {/* Process Flow with flipped truck */}
            <div className="flex items-center justify-center my-4 lg:my-0">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded border-4 flex items-center justify-center text-2xl sm:text-3xl transform scale-x-[-1]"
                style={{ borderColor: "#ef4444", color: "#ef4444" }}
              >
                🚚
              </div>
            </div>

            {/* USP 2 */}
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Desktop Arrow */}
              <div className="hidden lg:block absolute top-1/2 -left-6 transform -translate-y-1/2">
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: "#ef4444" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full absolute -left-1 top-1/2 transform -translate-y-1/2"
                  style={{ backgroundColor: "#ef4444" }}
                ></div>
              </div>

              {/* Mobile Arrow */}
              <div className="block lg:hidden absolute -top-3 left-1/2 transform -translate-x-1/2 rotate-90">
                <div
                  className="w-8 h-1 rounded-full"
                  style={{ backgroundColor: "#ef4444" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full absolute -right-0.5 top-1/2 transform -translate-y-1/2"
                  style={{ backgroundColor: "#ef4444" }}
                ></div>
              </div>

              <div
                className="bg-white border-4 rounded-2xl p-6 sm:p-8 text-center shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ borderColor: "#ef4444" }}
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl sm:text-2xl font-700"
                  style={{ backgroundColor: "#ef4444", color: "white" }}
                >
                  🎯
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-700 mb-2"
                  style={{ color: "#ef4444" }}
                >
                  90 MIN
                </h3>
                <p className="text-base sm:text-lg font-600 text-gray-800">DELIVERY</p>
                <p className="text-sm text-gray-600 mt-2">
                  Express delivery guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Card-Based Carousel */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-700 text-center mb-8 sm:mb-12 text-gray-900 font-semibold px-4">
            Our Services
          </h3>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-0">
            {/* Service Cards Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="service-card rounded-2xl sm:rounded-3xl overflow-hidden mx-auto max-w-2xl">
                      {/* Card Header */}
                      <div
                        className="px-6 sm:px-8 py-4 sm:py-6 text-center"
                        style={{
                          background: `linear-gradient(135deg, #ef4444 0%, #dc2626 100%)`,
                        }}
                      >
                        <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">{service.icon}</div>
                        <h4 className="text-xl sm:text-2xl font-700 text-white">
                          {service.title}
                        </h4>
                      </div>

                      {/* Card Body */}
                      <div className="px-6 sm:px-8 py-6 sm:py-8">
                        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-2 sm:space-y-3">
                          <h5 className="text-xs sm:text-sm font-600 text-gray-500 uppercase tracking-wide mb-3 sm:mb-4">
                            Key Features
                          </h5>
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="feature-item flex items-center space-x-3"
                            >
                              <div
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: "#ef4444" }}
                              ></div>
                              <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Navigation Controls - Hidden on small screens */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl shadow-xl items-center justify-center text-white font-700 text-lg lg:text-xl hover:scale-110 transition-all duration-300 z-10"
              style={{ backgroundColor: "#ef4444" }}
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl shadow-xl items-center justify-center text-white font-700 text-lg lg:text-xl hover:scale-110 transition-all duration-300 z-10"
              style={{ backgroundColor: "#ef4444" }}
            >
              →
            </button>

            {/* Mobile Navigation Controls */}
            <div className="flex sm:hidden justify-between items-center mt-6 px-4">
              <button
                onClick={prevSlide}
                className="flex w-12 h-12 rounded-xl shadow-lg items-center justify-center text-white font-700 text-lg active:scale-95 transition-all duration-200"
                style={{ backgroundColor: "#ef4444" }}
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="flex w-12 h-12 rounded-xl shadow-lg items-center justify-center text-white font-700 text-lg active:scale-95 transition-all duration-200"
                style={{ backgroundColor: "#ef4444" }}
              >
                →
              </button>
            </div>

            {/* Enhanced Carousel Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-6 sm:w-8 h-2 sm:h-3 opacity-100"
                      : "w-2 sm:w-3 h-2 sm:h-3 opacity-50 hover:opacity-75 active:opacity-100"
                  }`}
                  style={{ backgroundColor: "#ef4444" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div
          className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl mx-4 sm:mx-0"
          style={{
            background: `linear-gradient(135deg, #ef444410 0%, white 50%, #ef444410 100%)`,
            border: `2px solid #ef444420`,
          }}
        >
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We offer <strong>affordable delivery solutions</strong> for both
            personal and business needs, along with a{" "}
            <strong>variety of vehicles</strong> to accommodate parcels of all
            sizes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
