"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import faq_bg from "@/assets/faqBg.png";

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
      question: "What is Uddaka?",
      answer:
        "A logistics app connecting you to trusted local transport partners.",
    },
    {
      question: "How do I book a delivery?",
      answer: "Input pickup/drop details, choose a vehicle, and confirm.",
    },
    {
      question: "Are payments secure?",
      answer:
        "Yes, payments use industry-standard encryption via our partners.",
    },
    {
      question: "What if the driver-partner cancels?",
      answer:
        "We'll auto-assign another driver or offer you a free cancellation.",
    },
    {
      question: "Can I schedule a delivery in advance?",
      answer: "Yes, select 'Schedule for Later' and pick your date/time.",
    },
    {
      question: "How do I become a driver-partner?",
      answer:
        "Tap 'Join as Driver' in the app or visit our website, upload documents, and await approval.",
    },
    {
      question: "How can I reach support?",
      answer: "Email: support@uddaka.com\nPhone: +91 93151 32367",
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-15 scroll-mt-24 px-4">
      {/* Left background image */}
      <div className="absolute left-0 top-0 w-1/2  h-full overflow-hidden opacity-80 hidden md:block">
        <Image
          src={faq_bg}
          alt="Decorative background"
          fill
          className="object-contain object-left"
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
            Find answers to common questions about our delivery services and
            processes.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden"
            >
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
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-orange-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
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
