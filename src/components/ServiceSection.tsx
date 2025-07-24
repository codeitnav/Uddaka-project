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

        {/* USP Section - Professional & Attractive Design */}
        <div className="mb-16 relative">
          <div className="relative z-10 px-6 py-16">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-bold shadow-lg shadow-red-500/25 mb-8 transform hover:scale-105 transition-all duration-300">
                <span className="animate-pulse mr-2">⚡</span>
                Why Choose Our Lightning Service?
              </div>
              <h3 className="text-4xl lg:text-5xl font-900 text-gray-900 mb-6 leading-tight">
                <span className="gradient-text">Unmatched Speed</span> &
                Reliability
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Experience our{" "}
                <span className="text-red-600 font-bold">
                  industry-leading speed
                </span>{" "}
                with guaranteed pickup and delivery times that set us apart from
                the competition
              </p>
            </div>

            {/* Professional Timeline Layout */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* Step 1 - Pickup */}
                <div className="lg:col-span-2 relative group">
                  <div className="bg-white rounded-2xl shadow-xl shadow-red-500/10 border border-red-100 p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50/50"></div>

                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"></div>

                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30 group-hover:shadow-xl group-hover:shadow-red-500/40 transition-all duration-300">
                        <span className="text-4xl">⚡</span>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-4">
                          <span className="text-red-700 font-bold text-sm tracking-wider">
                            STEP 1
                          </span>
                        </div>
                        <h4 className="text-5xl font-900 mb-3 gradient-text">
                          10
                        </h4>
                        <p className="text-lg font-bold text-gray-800 mb-2 tracking-wide">
                          MINUTES
                        </p>
                        <p className="text-2xl font-800 text-gray-900 mb-3">
                          Quick Pickup
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          <span className="font-semibold text-red-600">
                            Lightning-fast
                          </span>{" "}
                          collection directly from your doorstep
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center - Process Flow */}
                <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-6 py-8">
                  {/* Animated Truck */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-3xl shadow-lg shadow-red-500/30 transform hover:scale-110 transition-all duration-300">
                      <span className="animate-pulse scale-x-[-1] block">🚚</span>
                    </div>

                    {/* Animated Path Lines */}
                    <div className="hidden lg:block absolute -left-16 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        <div className="w-2 h-0.5 bg-red-400"></div>
                        <div className="w-2 h-0.5 bg-red-300"></div>
                        <div className="w-2 h-0.5 bg-red-200"></div>
                      </div>
                    </div>

                    <div className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-0.5 bg-red-200"></div>
                        <div className="w-2 h-0.5 bg-red-300"></div>
                        <div className="w-2 h-0.5 bg-red-400"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>

                  {/* Process Label */}
                  <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-bold">
                      <span className="animate-pulse mr-2">🔄</span>
                      In Transit
                    </div>
                  </div>
                </div>

                {/* Step 2 - Delivery */}
                <div className="lg:col-span-2 relative group">
                  <div className="bg-white rounded-2xl shadow-xl shadow-red-500/10 border border-red-100 p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50/50"></div>

                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700"></div>

                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-600/30 group-hover:shadow-xl group-hover:shadow-red-600/40 transition-all duration-300">
                        <span className="text-4xl">🎯</span>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-4">
                          <span className="text-red-700 font-bold text-sm tracking-wider">
                            STEP 2
                          </span>
                        </div>
                        <h4 className="text-5xl font-900 mb-3 gradient-text">
                          90
                        </h4>
                        <p className="text-lg font-bold text-gray-800 mb-2 tracking-wide">
                          MINUTES
                        </p>
                        <p className="text-2xl font-800 text-gray-900 mb-3">
                          Safe Delivery
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          <span className="font-semibold text-red-600">
                            Express guarantee
                          </span>{" "}
                          delivered right to the destination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h5 className="text-3xl font-900 gradient-text mb-2">99.8%</h5>
                <p className="text-gray-600 font-semibold">On-Time Delivery</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h5 className="text-3xl font-900 gradient-text mb-2">100%</h5>
                <p className="text-gray-600 font-semibold">Safe & Secure</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl">⭐</span>
                </div>
                <h5 className="text-3xl font-900 gradient-text mb-2">4.9/5</h5>
                <p className="text-gray-600 font-semibold">Customer Rating</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-bold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="mr-2">🚀</span>
                Experience Lightning Speed Today
                <span className="ml-2">→</span>
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
