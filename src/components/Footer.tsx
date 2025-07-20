"use client"

import React from "react";
import { Phone, Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleCareersClick = () => {
    alert("Coming Soon");
  };

  return (
    <section id="footer" style={{ backgroundColor: "#fde2e2" }}>
      <footer className="bg-gray-900 text-white rounded-t-[50px] mx-2 sm:mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 flex flex-col justify-between h-full min-h-[200px] lg:min-h-[250px]">
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-wider">UDDAKA</h2>
                <div className="h-1 w-16 bg-white mt-2"></div>
              </div>

              {/* Description text */}
              <div className="mt-auto flex flex-col space-y-2 lg:max-w-[350px]">
                <p className="text-gray-400 text-xs sm:text-sm lg:text-sm leading-snug">
                  Fast and reliable delivery service connecting customers with local businesses for same-day and express delivery solutions
                </p>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Same-Day Delivery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Express Delivery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Scheduled Delivery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Business Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    API Integration
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Policies</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleCareersClick}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm text-left"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Contacts Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a
                    href="tel:+919634539981"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    +91 9634539981
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a
                    href="mailto:business@uddaka.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    business@uddaka.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0">📍</div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Address:</p>
                    <p className="text-gray-400 text-sm">
                      Uddaka Technologies, Aakash Vihar, Near SRM University, Modinagar, Ghaziabad(U.P.)-201204
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">© {currentYear} UDDAKA Technologies. All rights reserved.</div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://x.com/UddakaTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/uddaka-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/uddaka_com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;