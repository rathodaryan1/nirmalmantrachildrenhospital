"use client"

import type React from "react"

import { Phone, MapPin, Calendar, Heart, Stethoscope } from "lucide-react"
import Link from "next/link"
import { smoothScrollToSection } from "@/lib/smooth-scroll"

export function BottomActionBar() {
  const handleCallUs = () => {
    window.location.href = "tel:9374513161"
  }

  const handleLocateUs = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Plot+No.+11+Marine+Society+Jail+Road+Nilambaug+Bhavnagar",
      "_blank",
    )
  }

  const handleBookAppointment = (e: React.MouseEvent) => {
    e.preventDefault()
    smoothScrollToSection("enquiry")
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg md:hidden">
      <div className="grid grid-cols-5 gap-0">
        <Link
          href="/doctors"
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-accent transition-colors"
        >
          <Stethoscope className="h-5 w-5 text-primary mb-1" />
          <span className="text-xs font-medium text-foreground">Doctors</span>
        </Link>

        <button
          onClick={handleBookAppointment}
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-accent transition-colors"
        >
          <Calendar className="h-5 w-5 text-primary mb-1" />
          <span className="text-xs font-medium text-foreground">Book Appt</span>
        </button>

        <Link
          href="/specialities"
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-accent transition-colors"
        >
          <Heart className="h-5 w-5 text-primary mb-1" />
          <span className="text-xs font-medium text-foreground">Health Checks</span>
        </Link>

        <button
          onClick={handleCallUs}
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-accent transition-colors bg-primary/5"
        >
          <Phone className="h-5 w-5 text-destructive mb-1" />
          <span className="text-xs font-medium text-destructive font-bold">Call Us</span>
        </button>

        <button
          onClick={handleLocateUs}
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-accent transition-colors"
        >
          <MapPin className="h-5 w-5 text-primary mb-1" />
          <span className="text-xs font-medium text-foreground">Locate Us</span>
        </button>
      </div>
    </div>
  )
}
