"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Truck } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
  ];

  // Close mobile menu when clicking on nav items
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/20 backdrop-blur-xl shadow-2xl border-b border-white/30"
            : "border-b border-transparent"
        }`}
        style={
          isScrolled
            ? {
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }
            : {
                backgroundColor: "#ef4444",
              }
        }
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
              isScrolled ? "py-3" : "py-4 sm:py-5"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3 z-50">
              <div
                className={`bg-gradient-to-r from-orange-500/90 to-pink-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 border border-white/20 ${
                  isScrolled ? "w-8 h-8" : "w-9 h-9 sm:w-10 sm:h-10"
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <Truck
                  className={`text-white transition-all duration-300 ${
                    isScrolled ? "h-4 w-4" : "h-5 w-5"
                  }`}
                />
              </div>
              <span
                className={`font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 ${
                  isScrolled ? "text-xl" : "text-xl sm:text-2xl"
                }`}
              >
                uddaka
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`relative px-4 lg:px-5 py-2 text-gray-800 hover:text-gray-900 transition-all duration-300 font-medium group backdrop-blur-sm rounded-lg hover:bg-white/20 border border-transparent hover:border-white/30 ${
                    isScrolled ? "text-sm" : "text-base"
                  }`}
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                className={`bg-white text-black font-semibold shadow-2xl transition-all duration-300 border border-white/30 backdrop-blur-sm hover:shadow-3xl hover:-translate-y-0.5 hover:border-gray-500 hover:bg-gradient-to-r hover:from-white hover:to-gray-200 ${
                  isScrolled
                    ? "px-4 py-2 text-sm rounded-xl"
                    : "px-6 py-2.5 text-base rounded-xl"
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 p-2 rounded-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visibility-visible"
            : "opacity-0 visibility-hidden"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
          }}
        ></div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/20 backdrop-blur-2xl shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-white/30 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
          }}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/30">
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 bg-gradient-to-r from-orange-500/90 to-pink-500/90 rounded-lg flex items-center justify-center border border-white/20"
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  <Truck className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  uddaka
                </span>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className="block px-4 py-3 text-lg font-medium text-gray-800 hover:text-gray-900 hover:bg-white/30 rounded-xl transition-all duration-200 backdrop-blur-sm border border-transparent hover:border-white/40"
                      style={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile CTA */}
            <div className="p-6 border-t border-white/30">
              <Button
                onClick={handleNavClick}
                className="w-full bg-gradient-to-r from-orange-500/90 to-pink-500/90 hover:from-orange-600/90 hover:to-pink-600/90 text-white font-semibold py-3 px-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/30 backdrop-blur-sm"
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
