"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import contact_bg from "@/assets/contact_image.png";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
     {
      question: "How fast can Uddaka deliver my package?",
      answer: "We offer various delivery options ranging from 1-2 hours for express delivery to same-day delivery within 2-4 hours. Scheduled deliveries can be arranged for next-day or future dates based on your needs.",
    },
    {
      question: "Which cities does Uddaka serve?",
      answer: "Uddaka operates across 500+ cities in India, covering all major metropolitan areas and tier-2 cities. We're continuously expanding our network to reach more locations.",
    },
    {
      question: "How can I track my package?",
      answer: "Once your order is confirmed, you'll receive a tracking link via SMS and email. You can also track your package in real-time through our mobile app or website using your order ID.",
    },
    {
      question: "What if my package gets damaged or lost?",
      answer: "All packages are insured and handled with care by our trained delivery partners. In the rare event of damage or loss, we provide full compensation based on the declared value of your package.",
    },
    {
      question: "Can I schedule deliveries for my business?",
      answer: "Yes! We offer comprehensive business solutions including API integration, bulk scheduling, dedicated account managers, and special pricing for high-volume customers.",
    },
    {
      question: "What are your delivery charges?",
      answer: "Our pricing is distance and weight-based, starting from ₹49 for local deliveries. We offer transparent pricing with no hidden charges. Bulk customers and businesses get special discounted rates.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-24 px-4">
      {/* Left background image */}
      <div className="absolute left-0 top-0 w-1/2 h-full opacity-80 z-0">
        <Image
          src={contact_bg} 
          alt="Decorative background"
          fill
          className="object-cover object-left"
        />
      </div>
      <div className="max-w-4xl mx-auto z-50">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-4">
            ❓ FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our delivery services and processes.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  {openItems.includes(index) ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-8 pb-6">
                  <div className="h-px bg-orange-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;