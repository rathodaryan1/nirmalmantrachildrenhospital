import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyBar() {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 sticky top-0 z-50 shadow-lg border-b-2 border-primary-foreground/20">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        <p className="text-sm md:text-base font-bold">24×7 Emergency Pediatric Care Available</p>
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="bg-white text-primary hover:bg-white/90 font-bold shadow-md"
        >
          <a href="tel:9374513161" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">Call Now:</span>
            <span className="font-bold">93745 13161</span>
          </a>
        </Button>
      </div>
    </div>
  )
}
