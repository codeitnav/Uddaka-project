"use client"

import type React from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number
  duration?: number
  distance?: string
  className?: string
  triggerOnce?: boolean
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  distance = "60px",
  className = "",
  triggerOnce = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ triggerOnce })

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance})`
        case "down":
          return `translateY(-${distance})`
        case "left":
          return `translateX(${distance})`
        case "right":
          return `translateX(-${distance})`
        case "fade":
          return "translateY(20px)"
        default:
          return `translateY(${distance})`
      }
    }
    return "translateY(0) translateX(0)"
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
