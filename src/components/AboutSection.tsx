"use client";

import React from "react";
import {
   ArrowRight,
   Truck,
   Users
 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import aboutImage from "@/assets/about_image.png"; // Or use your uploaded image path

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-15 scroll-mt-24 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#fde2e2" }}>
      <div
        className="w-full mx-auto rounded-[40px] overflow-hidden shadow-xl"
        style={{ border: "3px solid black", backgroundColor: "#fffaf0" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="relative w-full h-full flex justify-center lg:justify-start">
              <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none">
                <Image
                  src={aboutImage} 
                  alt="About Uddaka"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-3">
                  🏢 About Uddaka
                </div>
                <h2 className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-3">
                  Helping businesses succeed through fast, dependable delivery.
                </h2>
                <div className="h-1 w-20 bg-black mb-3"></div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Delivery is the future of business in this digital-focused world. 
                  <strong> Uddaka</strong> uses a powerful combination of technology and expert logistics 
                  partners to change the way companies connect and deliver.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                {[
                  {
                    title: "Fast Delivery:",
                    desc: "Same-day and express delivery options to meet your urgent business needs across 500+ cities.",
                  },
                  {
                    title: "Reliable Service:",
                    desc: "Advanced tracking and real-time updates ensure transparency and peace of mind for every delivery.",
                  },
                  {
                    title: "Business Solutions:",
                    desc: "Scalable logistics solutions from small packages to enterprise-level distribution requirements.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <strong>{item.title}</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Stats */}
              <div className="pt-5">
                <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6">
                  <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-100">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-white mr-2 sm:mr-3">
                        <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">500+</span>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">Cities Covered</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 shadow-lg border border-blue-100">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mr-2 sm:mr-3">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">10K+</span>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">Happy Customers</p>
                  </div>
                </div>

                <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Start Your First Delivery
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;