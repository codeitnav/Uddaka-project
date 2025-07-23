import React from 'react';
import { 
  UserPlus, 
  MapPin, 
  Users, 
  Navigation, 
  CreditCard, 
  Star 
} from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Register with your mobile number and basic profile details.",
      icon: <UserPlus className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-500 to-red-600"
    },
    {
      id: 2,
      title: "Book a Delivery",
      description: "Enter pickup & drop locations, select vehicle and load type.",
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-400 to-red-500"
    },
    {
      id: 3,
      title: "Get Matched",
      description: "We assign the nearest available driver-partner.",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-600 to-red-700"
    },
    {
      id: 4,
      title: "Real-Time Tracking",
      description: "Monitor your consignment's live GPS location.",
      icon: <Navigation className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      title: "Secure Payment",
      description: "Pay via UPI, wallet, or cash on delivery.",
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-400 to-red-500"
    },
    {
      id: 6,
      title: "Rate & Review",
      description: "Provide feedback to help us continually improve.",
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-red-600 to-red-700"
    }
  ];

  return (
    <section id='process' className="py-15 scroll-mt-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-red-50 border border-red-100 rounded-full text-xs sm:text-sm font-semibold text-red-700 mb-4 sm:mb-6">
            🔄 How It Works
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Simple Steps to Get Started
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Experience seamless delivery service in just a few easy steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
                {step.id}
              </div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${step.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connecting Lines - Desktop Only */}
              {/* Horizontal line for lg screens (3 columns) */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-200 to-red-300 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
              )}
              
              {/* Vertical lines for mobile/tablet */}
              {index < steps.length - 1 && (
                <div className="block sm:hidden absolute -bottom-3 left-1/2 w-0.5 h-6 bg-gradient-to-b from-red-200 to-red-300 transform -translate-x-1/2">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
              )}
              
              {/* Vertical lines for tablet (2 columns) - between rows */}
              {index < steps.length - 2 && index % 2 === 1 && (
                <div className="hidden sm:block lg:hidden absolute -bottom-4 left-1/2 w-0.5 h-8 bg-gradient-to-b from-red-200 to-red-300 transform -translate-x-1/2">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
              )}
              
              {/* Horizontal line for tablet (2 columns) - within rows */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden sm:block lg:hidden absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-200 to-red-300 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-50 to-red-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-red-200 mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Ready to Experience Seamless Delivery?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
            Join thousands of satisfied customers who trust us with their delivery needs
          </p>
          <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-600 hover:to-red-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
            Get Started Now
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
