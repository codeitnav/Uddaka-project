import React from "react";
import { Package, Zap, MapPin, CheckCircle, ArrowRight } from "lucide-react";

interface StepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const HowItWorksSection: React.FC = () => {
  const steps: StepProps[] = [
    {
      step: "01",
      title: "Place Your Order",
      description:
        "Book your delivery through our app, website, or API integration.",
      icon: Package,
    },
    {
      step: "02",
      title: "Smart Matching",
      description:
        "Our AI matches your order with the best available delivery partner.",
      icon: Zap,
    },
    {
      step: "03",
      title: "Real-time Tracking",
      description: "Track your package in real-time from pickup to delivery.",
      icon: MapPin,
    },
    {
      step: "04",
      title: "Safe Delivery",
      description: "Your package is delivered safely with proof of delivery.",
      icon: CheckCircle,
    },
  ];

  return (
    <section
      id="process"
      className="relative w-full py-15 scroll-mt-24 px-4 md:px-6 lg:px-8"
    >
      <div
        className="w-full mx-auto rounded-[40px] overflow-hidden shadow-xl bg-[radial-gradient(ellipse_at_center,_#fde2e2_40%,_#ef4444_100%)]"
        style={{ border: "3px solid black", backgroundColor: "#fffaf0" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-3">
              🔄 How It Works
            </div>
            <h2 className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-3">
              Simple 4-Step Process
            </h2>
            <div className="h-1 w-20 bg-black mx-auto mb-4"></div>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures your packages reach their
              destination quickly and safely, every single time.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-200 to-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1 border border-gray-100 h-full flex flex-col min-h-[280px] lg:min-h-[320px]">
                    <div className="text-4xl lg:text-6xl font-bold text-gray-400 mb-3 lg:mb-4 group-hover:text-gray-500 transition-colors">
                      {step.step}
                    </div>
                    <div className="absolute top-3 lg:top-4 right-3 lg:right-4 p-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-white shadow-md">
                      <IconComponent className="h-4 w-4 lg:h-5 lg:w-5" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 px-2">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed flex-1 px-2">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="p-2 bg-white rounded-full shadow-md border border-gray-200">
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
