import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Activity, Brain, Heart } from "lucide-react"
import { BottomActionBar } from "@/components/bottom-action-bar"
import Image from "next/image"

export default function SpecialitiesPage() {
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Specialities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive pediatric care across multiple specializations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 space-y-16">
          {/* NICU */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Baby className="h-12 w-12 text-primary" />
                <div>
                  <CardTitle className="text-3xl text-primary">NICU</CardTitle>
                  <CardDescription className="text-lg">Neonatal Intensive Care Unit</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mb-6 rounded-xl overflow-hidden border-2 border-border">
                <Image
                  src="/neonatal-intensive-care-unit-nicu-medical-equipmen.jpg"
                  alt="NICU Care Area - Professional Stock Photo (Replace Later)"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our NICU is equipped with state-of-the-art technology and staffed by experienced neonatal specialists to
                provide comprehensive care for premature and critically ill newborns.
              </p>
              <div>
                <h4 className="font-bold text-lg mb-3">Conditions We Treat:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Prematurity and low birth weight</li>
                  <li>• Birth asphyxia</li>
                  <li>• Neonatal infections and sepsis</li>
                  <li>• Respiratory distress syndrome</li>
                  <li>• Neonatal jaundice</li>
                  <li>• Feeding difficulties</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* PICU */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Activity className="h-12 w-12 text-primary" />
                <div>
                  <CardTitle className="text-3xl text-primary">PICU</CardTitle>
                  <CardDescription className="text-lg">Pediatric Intensive Care Unit</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mb-6 rounded-xl overflow-hidden border-2 border-border">
                <Image
                  src="/pediatric-intensive-care-unit-picu-medical-monitor.jpg"
                  alt="Pediatric Intensive Care Unit - Professional Stock Photo (Replace Later)"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our PICU provides advanced critical care for children with severe illnesses and life-threatening
                conditions, with 24×7 monitoring and ventilator support.
              </p>
              <div>
                <h4 className="font-bold text-lg mb-3">Conditions We Treat:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Seizures and status epilepticus</li>
                  <li>• Severe pneumonia</li>
                  <li>• Acute asthma exacerbation</li>
                  <li>• Sepsis and septic shock</li>
                  <li>• Meningitis and encephalitis</li>
                  <li>• Multi-organ dysfunction</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Pediatric Neurology */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Brain className="h-12 w-12 text-primary" />
                <div>
                  <CardTitle className="text-3xl text-primary">Pediatric Neurology</CardTitle>
                  <CardDescription className="text-lg">Specialized Neurological Care</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mb-6 rounded-xl overflow-hidden border-2 border-border">
                <Image
                  src="/pediatric-neurology-diagnostic-equipment-eeg-emg-m.jpg"
                  alt="Diagnostic Setup - Professional Stock Photo (Replace Later)"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our pediatric neurology department specializes in diagnosing and treating neurological disorders in
                children with advanced diagnostic facilities including EEG, EMG, and NCV.
              </p>
              <div>
                <h4 className="font-bold text-lg mb-3">Conditions We Treat:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Epilepsy and seizure disorders</li>
                  <li>• Autism spectrum disorder</li>
                  <li>• ADHD (Attention Deficit Hyperactivity Disorder)</li>
                  <li>• Developmental delay</li>
                  <li>• Cerebral palsy</li>
                  <li>• Neurometabolic disorders</li>
                  <li>• Headaches and migraines</li>
                  <li>• Neuromuscular disorders</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Care */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Heart className="h-12 w-12 text-primary" />
                <div>
                  <CardTitle className="text-3xl text-primary">Emergency Pediatric Care</CardTitle>
                  <CardDescription className="text-lg">24×7 Emergency Services</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our emergency department is available round-the-clock to handle all pediatric emergencies with immediate
                response and expert care.
              </p>
              <div className="bg-destructive/10 border-2 border-destructive/20 p-4 rounded-lg">
                <p className="font-bold text-lg text-destructive mb-2">24×7 Emergency Hotline</p>
                <p className="text-2xl font-bold text-destructive">93745 13161</p>
              </div>
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
