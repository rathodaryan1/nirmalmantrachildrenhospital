import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Microscope, Syringe, Monitor, CheckCircle } from "lucide-react"
import { BottomActionBar } from "@/components/bottom-action-bar"
import Image from "next/image"

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Facilities & Infrastructure</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Advanced medical facilities for comprehensive pediatric care
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Our Facilities in Pictures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/neonatal-intensive-care-nicu-area-medical-facility.jpg"
                  alt="NICU care area - Stock Photo (Replace Later)"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm font-bold text-center">NICU care area</p>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/pediatric-intensive-care-unit-picu-medical-facilit.jpg"
                  alt="Pediatric intensive care unit - Stock Photo (Replace Later)"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm font-bold text-center">Pediatric intensive care unit</p>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/medical-diagnostic-laboratory-equipment-hospital.jpg"
                  alt="Diagnostics - Stock Photo (Replace Later)"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm font-bold text-center">Diagnostics</p>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/patient-monitoring-systems-medical-equipment-hospi.jpg"
                  alt="Monitoring systems - Stock Photo (Replace Later)"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm font-bold text-center">Monitoring systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 space-y-12">
          {/* Intensive Care Units */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Activity className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-primary">Intensive Care Units</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "NICU with ventilator support and advanced monitoring",
                  "PICU equipped for critically ill children",
                  "Central line insertion and management",
                  "TPN (Total Parenteral Nutrition) facilities",
                  "Peritoneal dialysis",
                  "24×7 intensivist availability",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Diagnostic Services */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Microscope className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-primary">Diagnostic Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "EEG (Electroencephalography)",
                  "EMG (Electromyography)",
                  "NCV (Nerve Conduction Velocity)",
                  "24×7 Laboratory services",
                  "Digital X-ray",
                  "Ultrasound imaging",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Specialized Treatments */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Syringe className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-primary">Specialized Treatments</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Phototherapy for neonatal jaundice",
                  "Exchange transfusion",
                  "Vaccination services",
                  "Nebulization therapy",
                  "IV fluid management",
                  "Blood transfusion services",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Monitoring Systems */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Monitor className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-primary">Advanced Monitoring Systems</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Multi-parameter patient monitors",
                  "Continuous pulse oximetry",
                  "Cardiac monitoring",
                  "Respiratory monitoring",
                  "Temperature management systems",
                  "Infusion pump systems",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/30 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <p className="text-center text-sm text-muted-foreground">
            Content last reviewed by hospital doctors • Updated regularly for accuracy
          </p>
        </div>
      </section>

      <Footer />

      <BottomActionBar />
    </div>
  )
}
