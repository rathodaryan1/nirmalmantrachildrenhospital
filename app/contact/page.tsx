import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { BottomActionBar } from "@/components/bottom-action-bar"
import { neon } from "@neondatabase/serverless"
import { redirect } from "next/navigation"
import { Resend } from "resend"
const sql = neon(process.env.DATABASE_URL!)

async function createAppointment(formData: FormData) {
  "use server"

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is missing")
  }

  await sql.query(
    `
    INSERT INTO appointment_enquiries
    (parent_name, child_name, phone_number, child_age, health_concern)
    VALUES ($1, $2, $3, $4, $5)
    `,
    [
      formData.get("parent_name") || formData.get("name"),
      formData.get("child_name"),
      formData.get("phone") || formData.get("mobile"),
      formData.get("child_age") || formData.get("age"),
      formData.get("concern") || formData.get("message"),
    ]
  )

  // Read form values
  const parentName = formData.get("parent_name") as string
  const childName = formData.get("child_name") as string
  const phone = formData.get("phone") as string
  const childAge = formData.get("child_age") as string
  const concern = formData.get("concern") as string

  // Send email to hospital
  const resend = new Resend(process.env.RESEND_API_KEY!)
  await resend.emails.send({
    from: "Nirmal Mantra Children Hospital <onboarding@resend.dev>",
    to: ["nmch2023@gmail.com"],
    subject: "New Appointment Enquiry",
    html: `
      <h2>New Appointment Enquiry</h2>
      <p><strong>Parent Name:</strong> ${parentName}</p>
      <p><strong>Child Name:</strong> ${childName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Child Age:</strong> ${childAge || "N/A"}</p>
      <p><strong>Concern:</strong> ${concern || "N/A"}</p>
    `,
  })

  // redirect back with success flag
  redirect("/contact?submitted=true#enquiry")
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>
}) {
  const params = await searchParams
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">Get in touch with us for appointments and enquiries</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>

              <Card className="border-2">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Address</h3>
                      <address className="not-italic text-muted-foreground leading-relaxed">
                        Plot No. 11, Marine Society,
                        <br />
                        Opp. Adarsh Complex,
                        <br />
                        Jail Road, Nilambaug,
                        <br />
                        Bhavnagar – 364001, Gujarat
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>0278-2423111</p>
                        <p>8488023838</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-destructive">24×7 Emergency</h3>
                      <p className="text-2xl font-bold text-destructive">93745 13161</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <a href="mailto:nmch2023@gmail.com" className="text-primary hover:underline">
                        nmch2023@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">OPD Timings</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Morning: 9:00 AM – 1:00 PM</p>
                        <p>Evening: 5:00 PM – 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enquiry Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Request an Appointment</h2>

              {/* ✅ SUCCESS MESSAGE */}
              {params?.submitted === "true" && (
                <div className="mb-6 rounded-md bg-green-100 border border-green-400 text-green-800 px-4 py-3 text-center font-medium">
                  ✅ Appointment submitted successfully! We will contact you shortly.
                </div>
              )}

              <Card className="border-2">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Fill in the details below and our team will contact you shortly.
                  </p>
                  <form action={createAppointment} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Parent / Patient Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="parent_name"
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                        Mobile Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium mb-2">
                        Child's Age (Optional)
                      </label>
                      <input
                        type="text"
                        id="age"
                        name="child_age"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="concern"
                        rows={4}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Submit Enquiry
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Your information will be kept confidential.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Location</h2>
            <div className="bg-muted rounded-lg overflow-hidden border-2 border-border h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d72.15!3d21.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzM2LjAiTiA3MsKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BottomActionBar />
    </div>
  )
}
