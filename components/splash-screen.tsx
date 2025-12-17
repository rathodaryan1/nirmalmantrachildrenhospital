"use client"

import { useEffect, useState } from "react"
import { Hospital } from "lucide-react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Check if splash screen has already been shown in this session
    const hasShownSplash = sessionStorage.getItem("hasShownSplash")

    if (hasShownSplash) {
      // Don't show splash screen again in this session
      setShouldRender(false)
      return
    }

    // Mark that splash screen has been shown
    sessionStorage.setItem("hasShownSplash", "true")

    // Start fade out after 1.8 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false)
    }, 1800)

    // Remove from DOM after fade animation completes (2.3 seconds total)
    const removeTimer = setTimeout(() => {
      setShouldRender(false)
    }, 2300)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  // Don't render if already shown in this session
  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="flex flex-col items-center gap-6 motion-reduce:animate-none">
        {/* Hospital Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-xl">
            <Hospital className="h-10 w-10 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Nirmal Mantra</h1>
            <p className="text-sm text-blue-600 font-semibold">Children Hospital</p>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-500 font-medium">Hope Lives Here</p>
      </div>
    </div>
  )
}
