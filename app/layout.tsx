import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SplashScreen } from "@/components/splash-screen"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nirmal Mantra Children Hospital | Pediatric Care in Bhavnagar",
  description:
    "Kids Multi Speciality Hospital providing advanced neonatal care, pediatric intensive care and child neurology services in Bhavnagar, Gujarat.",
  generator: "v0.app",
  keywords: "pediatric hospital, children hospital, NICU, PICU, pediatric neurology, Bhavnagar",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning is added here because browser extensions 
    // or the SplashScreen might modify attributes before React takes over.
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <SplashScreen />
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}