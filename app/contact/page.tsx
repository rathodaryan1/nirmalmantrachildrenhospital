import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { BottomActionBar } from "@/components/bottom-action-bar"

export default function ContactPage() {
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
<section id="enquiry" className="py-16">
  <div className="container mx-auto max-w-3xl px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Book an Appointment
      </h2>
      <p className="text-muted-foreground">
        Fill out the form below and our team will get back to you within 24 hours
      </p>
    </div>

    <Card className="border-2">
      <CardContent className="pt-6">

        {/* 🔑 IMPORTANT: action is already correct */}
        <form action={createAppointment} className="space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="parent-name" className="block text-sm font-medium mb-2">
                Parent Name *
              </label>
              <input
                type="text"
                id="parent-name"
                name="parent_name"   {/* ✅ ADDED */}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter parent name"
              />
            </div>

            <div>
              <label htmlFor="child-name" className="block text-sm font-medium mb-2">
                Child Name *
              </label>
              <input
                type="text"
                id="child-name"
                name="child_name"    {/* ✅ ADDED */}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter child name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"         {/* ✅ ADDED */}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label htmlFor="child-age" className="block text-sm font-medium mb-2">
                Child Age
              </label>
              <input
                type="text"
                id="child-age"
                name="child_age"     {/* ✅ ADDED */}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., 2 years"
              />
            </div>
          </div>

          <div>
            <label htmlFor="concern" className="block text-sm font-medium mb-2">
              Health Concern / Reason for Visit
            </label>
            <textarea
              id="concern"
              name="concern"        {/* ✅ ADDED */}
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Briefly describe your concern..."
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            Submit Enquiry
          </Button>

        </form>
      </CardContent>
    </Card>
  </div>
</section>


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
