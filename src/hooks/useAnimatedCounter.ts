"use client"

import { useState, useEffect } from "react"

const useAnimatedCounter = (targetValue: number, animationDuration = 2000) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / animationDuration, 1) // Ensure progress doesn't exceed 1
      const currentValue = Math.floor(progress * targetValue)

      setCount(currentValue)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [targetValue, animationDuration])

  return count
}

export default useAnimatedCounter
