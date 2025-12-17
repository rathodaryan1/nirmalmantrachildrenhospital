import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">Medical Disclaimer</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              The information provided on this website is for general informational purposes only and should not be
              considered as medical advice.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8">Professional Medical Advice</h2>
            <p>
              Always seek the advice of your physician or other qualified health provider with any questions you may
              have regarding a medical condition. Never disregard professional medical advice or delay in seeking it
              because of something you have read on this website.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8">Emergency Situations</h2>
            <p>
              If you think you may have a medical emergency, call our emergency number (93745 13161) or your local
              emergency number immediately.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8">No Doctor-Patient Relationship</h2>
            <p>
              The use of this website does not establish a doctor-patient relationship. Please visit our hospital for
              proper consultation and treatment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
