import React from "react"
import { Package, Truck, Shield, Globe, Clock, Target, CheckCircle } from "lucide-react"
import Image from "next/image"
import service from "@/assets/service_bg.png"

interface ServiceProps {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
}

const ServicesSection: React.FC = () => {
  const services: ServiceProps[] = [
    {
      icon: Package,
      title: "Same-Day Delivery",
      description: "Lightning-fast delivery for urgent packages within the same day across major cities.",
      features: ["2-4 hour delivery", "Real-time tracking", "Secure handling"],
    },
    {
      icon: Truck,
      title: "Scheduled Delivery",
      description: "Plan your deliveries in advance with our flexible scheduling system.",
      features: ["Flexible time slots", "Bulk scheduling", "Route optimization"],
    },
    {
      icon: Shield,
      title: "Secure Logistics",
      description: "End-to-end security with insurance coverage for high-value items.",
      features: ["Insurance coverage", "Secure packaging", "Verified drivers"],
    },
    {
      icon: Globe,
      title: "Multi-City Network",
      description: "Nationwide delivery network covering 500+ cities across India.",
      features: ["Pan-India coverage", "Local expertise", "Consistent quality"],
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Ultra-fast delivery for time-sensitive packages and documents.",
      features: ["1-2 hour delivery", "Priority handling", "Instant notifications"],
    },
    {
      icon: Target,
      title: "Business Solutions",
      description: "Comprehensive logistics solutions tailored for businesses of all sizes.",
      features: ["API integration", "Bulk pricing", "Dedicated support"],
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center py-24 px-4">
      {/* Background Image - Made smaller and positioned to the extreme right */}
      <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden opacity-80">
        <Image
          src={service || "/placeholder.svg"}
          alt="Abstract background image representing logistics services"
          fill
          className="object-cover object-right" // Changed to object-cover and object-right
          priority={false}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-700 mb-4">
            ⚡ Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Delivery Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From same-day delivery to enterprise logistics, we offer comprehensive solutions that scale with your
            business needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(service.icon, { className: "h-6 w-6" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
