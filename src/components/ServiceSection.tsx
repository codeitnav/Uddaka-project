"use client";
import React from "react";
import Image from "next/image";
import service from "@/assets/service.png";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Personal Items",
      description:
        "Send documents, gifts, and personal belongings with our secure delivery network",
      icon: "📦",
      features: ["Secure packaging", "Real-time tracking", "Same-day delivery"],
      gradient: "from-red-500 to-red-600",
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
      gradient: "from-red-600 to-red-700",
    },
    {
      title: "Business Goods",
      description:
        "Commercial deliveries for SMEs and enterprises with bulk discounts",
      icon: "🏢",
      features: ["Bulk pricing", "Scheduled deliveries", "Priority handling"],
      gradient: "from-red-700 to-red-800",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-white py-15 scroll-mt-24 px-4 relative"
    >
      <style jsx global>{`
        .service-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(239, 68, 68, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.3);
          border-color: rgba(239, 68, 68, 0.3);
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          border-radius: 16px 16px 0 0;
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

        .icon-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 font-semibold">
          <div className="inline-flex items-center px-6 py-3 bg-red-50 border border-red-100 rounded-full text-sm font-semibold text-red-700 mb-6">
            ⭐ Our Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-800 mb-6 text-gray-900 px-4">
            <span className="gradient-text">One-Stop</span> Delivery Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Professional delivery services for{" "}
            <span className="text-red-600">personal items</span>,
            <span className="text-red-600"> home shifting</span>, and
            <span className="text-red-600"> business goods</span>
          </p>
        </div>

        {/* Modern Services Cards Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card relative rounded-2xl overflow-hidden group"
              >
                {/* Card Header with Gradient */}
                <div
                  className={`bg-gradient-to-br ${service.gradient} px-8 py-8 text-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 icon-bounce group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-800 text-white mb-2">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-8 py-8">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-700 text-red-600 uppercase tracking-wide mb-4 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      Key Features
                    </h4>
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="feature-item flex items-center space-x-3 p-3 rounded-lg bg-red-50/50 hover:bg-red-50 transition-colors duration-300"
                      >
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex-shrink-0"></div>
                        <span className="text-base text-gray-700 font-500">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* USP Section - Now Below Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-red-50 border border-red-100 rounded-full text-sm font-semibold text-red-700 mb-6">
              ⚡ Why Choose Us?
            </div>
            <h3 className="text-3xl lg:text-4xl font-800 text-gray-900 mb-4">
              <span className="gradient-text">Lightning Fast</span> Delivery
              Promise
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience our{" "}
              <span className="text-red-600">industry-leading speed</span> with
              guaranteed pickup and delivery times
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 px-4">
            {/* USP 1 - Enhanced Design */}
            <div className="relative w-full max-w-sm">
              <div className="bg-white border-4 border-red-500 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-700 bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
                    ⚡
                  </div>
                  <h4 className="text-4xl font-800 mb-2 gradient-text">
                    10 MIN
                  </h4>
                  <p className="text-xl font-700 text-gray-800 mb-2">PICKUP</p>
                  <p className="text-sm text-gray-600">
                    <span>Lightning-fast</span> collection from your location
                  </p>
                </div>
              </div>

              {/* Enhanced Arrow for Desktop */}
              <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                <div className="flex items-center">
                  <div className="w-16 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                  <div className="w-4 h-4 bg-red-600 rounded-full ml-2 relative">
                    <div className="w-0 h-0 border-l-4 border-l-red-600 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Arrow for Mobile */}
              <div className="block lg:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-90">
                <div className="flex items-center">
                  <div className="w-12 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full ml-1"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Truck Animation */}
            <div className="flex items-center justify-center my-8 lg:my-0">
              <div className="w-28 h-28 rounded-2xl border-4 border-red-500 flex items-center justify-center text-4xl transform scale-x-[-1] bg-gradient-to-br from-red-50 to-white shadow-xl">
                🚚
              </div>
            </div>

            {/* USP 2 - Enhanced Design */}
            <div className="relative w-full max-w-sm">
              {/* Enhanced Arrow for Desktop */}
              <div className="hidden lg:block absolute top-1/2 -left-8 transform -translate-y-1/2 z-20">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-2 relative">
                    <div className="w-0 h-0 border-r-4 border-r-red-600 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute left-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                  <div className="w-16 h-2 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Enhanced Arrow for Mobile */}
              <div className="block lg:hidden absolute -top-6 left-1/2 transform -translate-x-1/2 rotate-90 z-20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-1"></div>
                  <div className="w-12 h-2 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white border-4 border-red-500 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-700 bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
                    🎯
                  </div>
                  <h4 className="text-4xl font-800 mb-2 gradient-text">
                    90 MIN
                  </h4>
                  <p className="text-xl font-700 text-gray-800 mb-2">
                    DELIVERY
                  </p>
                  <p className="text-sm text-gray-600">
                    <span>Express delivery</span> guarantee to destination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Description */}
        <div className="glass-effect text-center p-8 rounded-3xl mx-4 sm:mx-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
          <div className="relative z-10">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We offer{" "}
              <span className="text-red-600 font-700">
                affordable delivery solutions
              </span>{" "}
              for both personal and business needs, along with a{" "}
              <span className="text-red-600 font-700">variety of vehicles</span>{" "}
              to accommodate parcels of all sizes.{" "}
              <span className="text-red-600">Experience the difference</span>{" "}
              with our premium service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
