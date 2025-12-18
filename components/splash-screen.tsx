"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Run only on client
    setMounted(true)

    const hasShown = sessionStorage.getItem("hasShownSplash")

    if (hasShown) return

    // Show splash
    setVisible(true)
    sessionStorage.setItem("hasShownSplash", "true")

    // Start fade-out
    const fadeTimer = setTimeout(() => {
      setVisible(false)
    }, 1800)

    return () => clearTimeout(fadeTimer)
  }, [])

  // Prevent SSR / hydration mismatch
  if (!mounted || !visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white
                 transition-opacity duration-500 ease-in-out"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo + Name */}
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20">
            <Image
              src="/logo.jpg"   // must be inside /public
              alt="Nirmal Mantra Children Hospital Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              Nirmal Mantra
            </h1>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Children Hospital
            </p>
          </div>
        </div>

        {/* Loader */}
        <div className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]" />
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]" />
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" />
        </div>

        {/* Tagline */}
        <p className="text-sm italic text-gray-400">
          Hope Lives Here
        </p>
      </div>
    </div>
  )
}
