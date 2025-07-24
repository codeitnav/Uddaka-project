"use client"

import React from "react";
import { Phone, Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleCareersClick = () => {
    alert("Coming Soon");
  };

  return (
    <section id="footer">
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
            {/* Brand Section - Pushed Left */}
            <div className="flex flex-col justify-between h-full min-h-[200px] lg:min-h-[250px] lg:flex-shrink-0 lg:w-[350px]">
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-wider">UDDAKA</h2>
                <div className="h-1 w-16 bg-white mt-2"></div>
              </div>

              {/* Description text */}
              <div className="mt-auto flex flex-col space-y-2">
                <p className="text-gray-400 text-xs sm:text-sm lg:text-sm leading-snug">
                  Fast and reliable delivery service connecting customers with local businesses.
                </p>
              </div>
            </div>

            {/* Right Side Container - Policies and Contacts closer together */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 lg:flex-shrink-0">
              {/* Policies Section */}
              <div className="lg:w-[200px]">
                <h3 className="text-lg font-semibold mb-4">Policies</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy-policy"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-conditions"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Terms and Conditions
                    </Link>
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

              {/* Contacts Section - Pushed Right */}
              <div className="lg:w-[280px]">
                <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <a
                      href="tel:+919315132367"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      +91 93151 32367
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <a
                      href="mailto:support@uddaka.com"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      support@uddaka.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0">📍</div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Address:</p>
                      <p className="text-gray-400 text-sm">
                        Logivance Logistics Limited<br/>Sk-III/6G-4, Indirapuram, Ghaziabad, (U.P.) 201014
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} UDDAKA Technologies. All rights reserved.
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com"
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