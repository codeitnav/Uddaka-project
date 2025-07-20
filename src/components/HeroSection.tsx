"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Apple, PlayCircle } from "lucide-react"
import Image from "next/image"
import icon1 from "@/assets/bike.png"
import icon2 from "@/assets/delivery.png"  
import icon3 from "@/assets/car.png"
import icon4 from "@/assets/location.png"

const HeroSection: React.FC = () => {
  // Create separate refs for each line of text
  const textRef1 = useRef<SVGTextPathElement>(null)
  const textRef2 = useRef<SVGTextPathElement>(null)

  useEffect(() => {
    // Simple fade-in animation without GSAP dependency
    const textElements = [textRef1.current, textRef2.current]
    textElements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0"
        el.style.transition = "opacity 2s ease-out"
        setTimeout(() => {
          el.style.opacity = "1"
        }, index * 200)
      }
    })
  }, [])

  return (
    <section
      className="relative min-h-[150vh] flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ backgroundImage: "linear-gradient(to bottom, #fca5a5, #fde2e2)" }}
    >
      {/* Curved Heading for all screen sizes */}
      <div className="w-full max-w-4xl mx-auto text-center mt-24">
        <div className="mb-8 md:mb-10">
          {/* Mobile optimized SVG */}
          <svg viewBox="0 0 400 180" className="w-full h-auto sm:hidden">
            <defs>
              <path id="curve1-mobile" d="M20,100 Q200,40 380,100" fill="transparent" />
              <path id="curve2-mobile" d="M60,150 Q200,95 340,150" fill="transparent" />
            </defs>
            <text className="text-2xl font-sans font-bold fill-[#1f2937]" style={{ fontSize: '24px' }}>
              <textPath ref={textRef1} href="#curve1-mobile" startOffset="50%" textAnchor="middle">
                Electric vehicles
              </textPath>
            </text>
            <text className="text-xl font-sans font-bold fill-[#1f2937]" style={{ fontSize: '20px' }}>
              <textPath ref={textRef2} href="#curve2-mobile" startOffset="50%" textAnchor="middle">
                on-demand
              </textPath>
            </text>
          </svg>
          {/* Desktop/Tablet SVG */}
          <svg viewBox="0 0 800 220" className="w-full h-auto hidden sm:block">
            <defs>
              <path id="curve1-desktop" d="M60,130 Q400,60 740,130" fill="transparent" />
              <path id="curve2-desktop" d="M160,190 Q400,130 640,190" fill="transparent" />
            </defs>
            <text className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold fill-[#1f2937]">
              <textPath href="#curve1-desktop" startOffset="50%" textAnchor="middle">
                Electric vehicles
              </textPath>
            </text>
            <text className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold fill-[#1f2937]">
              <textPath href="#curve2-desktop" startOffset="50%" textAnchor="middle">
                on-demand
              </textPath>
            </text>
          </svg>
        </div>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-pink-700 text-center font-medium max-w-xl mx-auto">
          Get the app for a fast, flexible<br />
          and cost effective way to rent vehicles in Bermuda.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full px-6 py-3 font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-200 text-base flex items-center gap-2"
          >
            <Apple className="w-5 h-5 mr-2" />
            App store
          </Button>
          <Button
            size="lg"
            className="rounded-full px-6 py-3 font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-200 text-base flex items-center gap-2"
          >
            <PlayCircle className="w-5 h-5 mr-2" />
            Play store
          </Button>
        </div>

        {/* Main Image and Decorative Elements */}
        <div className="mt-12 relative flex justify-center items-center">
          {/* Main phone image (replace src with your asset) */}
          <Image src="/assets/phone.png" alt="App preview" height={20} width={20} className="w-64 h-auto z-10 drop-shadow-xl" />
          {/* Decorative icons (example, replace src as needed) */}
          <Image src={icon1} alt="icon1" height={20} width={20} className="absolute left-0 top-8 w-12 h-12" />
          <Image src={icon2} alt="icon2" height={20} width={20} className="absolute right-0 top-16 w-12 h-12" />
          <Image src={icon3} alt="icon3" height={20} width={20} className="absolute left-1/4 bottom-0 w-12 h-12" />
          <Image src={icon4} alt="icon4" height={20} width={20} className="absolute right-1/4 bottom-0 w-12 h-12" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection