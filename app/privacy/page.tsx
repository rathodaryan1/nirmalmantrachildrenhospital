import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              At Nirmal Mantra Children Hospital, we are committed to protecting your privacy and maintaining the
              confidentiality of your personal and medical information.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8">Information Collection</h2>
            <p>
              We collect personal information necessary for providing healthcare services, including name, contact
              details, medical history, and treatment records.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8">Information Usage</h2>
            <p>
              Your information is used solely for medical care, appointment scheduling, and communication regarding your
              child's health. We do not share your information with third parties without consent, except as required by
              law.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal and medical information from
              unauthorized access, disclosure, or misuse.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
