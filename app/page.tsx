import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Heart, Shield, Activity, Baby, Brain, Users, CheckCircle, Mail } from "lucide-react"
import { BottomActionBar } from "@/components/bottom-action-bar"
import Image from "next/image"
import { neon } from "@neondatabase/serverless"
const sql = neon(process.env.DATABASE_URL!)
  
async function createAppointment(formData: FormData) {
  "use server"

  const parentName = formData.get("parent_name")
  const childName = formData.get("child_name")
  const phone = formData.get("phone")
  const childAge = formData.get("child_age")
  const concern = formData.get("concern")

  await sql(
    `
    INSERT INTO appointment_enquiries
    (parent_name, child_name, phone_number, child_age, health_concern)
    VALUES ($1, $2, $3, $4, $5)
    `,
    [parentName, childName, phone, childAge, concern]
  )
}




export default function HomePage() {
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-background py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4 border border-destructive/20">
                <Activity className="h-4 w-4" />
                <span className="text-sm font-bold">24×7 Pediatric Emergency</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">
                Nirmal Mantra Children Hospital
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-semibold mb-6">Hope Lives Here</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Kids Multi Speciality Hospital providing advanced neonatal care, pediatric intensive care and child
                neurology services in Bhavnagar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-lg">
                  <a href="tel:9374513161" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="shadow bg-transparent">
                  <a href="#location" className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    View Location
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <Image
                  src="/modern-pediatric-hospital-exterior-building-with-b.jpg"
                  alt="Modern Pediatric Hospital Building - Professional Stock Photo (Replace Later)"
                  width={700}
                  height={500}
                  className="rounded-2xl shadow-2xl border-4 border-white"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-2 border-primary/20">
                  <div className="flex items-center gap-3">
                    <Shield className="h-10 w-10 text-primary" />
                    <div>
                      <p className="font-bold text-primary text-lg">Safe & Hygienic</p>
                      <p className="text-sm text-muted-foreground">Child-Friendly Environment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPD Timings */}
      <section className="bg-accent/20 py-8 border-y border-border">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <p className="font-bold text-primary">Morning OPD</p>
                <p className="text-sm text-muted-foreground">9:00 AM – 1:00 PM</p>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-border"></div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <p className="font-bold text-primary">Evening OPD</p>
                <p className="text-sm text-muted-foreground">5:00 PM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Hospital */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Our Hospital</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Nirmal Mantra Children Hospital is a dedicated pediatric healthcare center offering compassionate and
              ethical medical care for newborns, infants, children and adolescents. The hospital is equipped with
              advanced NICU, PICU and pediatric neurology facilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our team of experienced pediatric specialists provides expert neonatal and pediatric critical care with a
              focus on evidence-based medicine. We combine advanced medical technology with a child-friendly approach to
              ensure the best outcomes for our young patients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to ethical medical practice, transparent communication with families, and creating a
              safe, hygienic environment where children receive the highest standard of care with compassion and
              dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl">Experienced Specialists</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground">
                  Highly trained pediatric experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Our team consists of qualified pediatric specialists with extensive experience in neonatal and
                  critical care
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Activity className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl">Advanced NICU & PICU</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground">
                  State-of-the-art intensive care units
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Equipped with modern ventilators, monitoring systems and advanced equipment for critical care
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl">24×7 Emergency Care</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground">
                  Immediate response for emergencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Round-the-clock emergency pediatric care services with prompt medical intervention
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl">Safe Environment</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground">
                  Child-friendly and hygienic facilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Maintaining highest standards of hygiene and safety protocols for child care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Centers of Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardHeader>
                <Baby className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl">NICU</CardTitle>
                <CardDescription>Neonatal Intensive Care Unit</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Advanced care for premature and critically ill newborns</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardHeader>
                <Activity className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl">PICU</CardTitle>
                <CardDescription>Pediatric Intensive Care Unit</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Comprehensive critical care for children</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl">Pediatric Neurology</CardTitle>
                <CardDescription>Specialized Neurological Care</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Expert care for neurological disorders in children</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl">Emergency Care</CardTitle>
                <CardDescription>24×7 Pediatric Emergency</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Immediate response for pediatric emergencies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Conditions We Treat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary">NICU Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prematurity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Low birth weight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Birth asphyxia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Neonatal infections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary">PICU Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Seizures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pneumonia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Asthma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sepsis & Meningitis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Pediatric Neurology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Epilepsy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Autism & ADHD</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Developmental delay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Neurometabolic disorders</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section id="doctors" className="py-16 scroll-mt-32">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">Meet Our Doctors</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our team of experienced pediatric specialists is dedicated to providing expert care for your child's health
            and well-being.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/professional-male-pediatric-doctor-in-white-coat-n.jpg"
                    alt="Dr. Ridhdhish D. Lania - Doctor Image (Replace Later)"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">Dr. Ridhdhish D. Lania</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground">
                  MD (Pediatrics), F.I.C.N. (Mumbai)
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consultant Neonatal & Pediatric Intensivist
                </p>
                <p className="text-sm text-primary font-bold">Pediatric Neurologist</p>
                <div className="pt-2 pb-2">
                  <p className="text-xs text-muted-foreground">Member: IAP, NNF, IMA</p>
                </div>
                <Button variant="default" size="sm" asChild className="w-full mt-4">
                  <a href="tel:9374513161" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call for Appointment
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/experienced-male-pediatric-neurologist-doctor-prof.jpg"
                    alt="Dr. Dhaval Solanki - Doctor Image (Replace Later)"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">Dr. Dhaval Solanki</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground">
                  MD (Pediatrics), F.I.C.N. (Mumbai)
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consultant Pediatric Neurologist & Epileptologist
                </p>
                <p className="text-sm text-primary font-bold">12+ Years Experience</p>
                <div className="pt-2 pb-2">
                  <p className="text-xs text-muted-foreground">Member: IAP, IAN, ISN</p>
                </div>
                <Button variant="default" size="sm" asChild className="w-full mt-4">
                  <a href="tel:9374513161" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call for Appointment
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/professional-pediatric-consultant-doctor-neutral-m.jpg"
                    alt="Dr. Bhupit K. Gadhia - Doctor Image (Replace Later)"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">Dr. Bhupit K. Gadhia</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground">MBBS, DCH (Mumbai)</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">Consultant Pediatrician</p>
                <p className="text-sm text-primary font-bold">Consultant Pediatrician</p>
                <div className="pt-2 pb-2">
                  <p className="text-xs text-muted-foreground">Member: IAP</p>
                </div>
                <Button variant="default" size="sm" asChild className="w-full mt-4">
                  <a href="tel:9374513161" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call for Appointment
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <a href="/doctors">View All Doctors</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">Insurance Partners</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We accept cashless insurance claims from major providers, making quality pediatric care accessible and
            stress-free for families.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Bajaj Allianz",
              "ICICI Lombard",
              "HDFC ERGO",
              "Star Health",
              "Care Health",
              "National Insurance",
              "United India",
              "Oriental Insurance",
            ].map((insurer) => (
              <Card key={insurer} className="flex items-center justify-center p-6 border-2">
                <p className="text-sm font-medium text-center text-foreground">{insurer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Book an Appointment</h2>
            <p className="text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form action={createAppointment} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parent-name" className="block text-sm font-medium mb-2">
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      id="parent-name"
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

      {/* Location Section */}
      <section id="location" className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Visit Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">Address</p>
                    <p className="text-muted-foreground">
                      Plot No. 11, Marine Society, Jail Road, Nilambaug, Bhavnagar, Gujarat, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">Phone</p>
                    <a href="tel:9374513161" className="text-primary font-bold hover:underline text-lg">
                      93745 13161
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-2">OPD Timings</p>
                    <p className="text-muted-foreground">Morning: 9:00 AM – 1:00 PM</p>
                    <p className="text-muted-foreground">Evening: 5:00 PM – 8:00 PM</p>
                    <p className="text-destructive font-bold mt-2">24×7 Emergency Services Available</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button asChild size="lg" className="w-full">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Plot+No.+11+Marine+Society+Jail+Road+Nilambaug+Bhavnagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MapPin className="h-5 w-5" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="w-full h-[400px] lg:h-full rounded-xl overflow-hidden border-2 border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5!2d72.15!3d21.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzM2LjAiTiA3MsKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
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

      {/* SEO Paragraph */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nirmal Mantra Children Hospital is a trusted pediatric hospital in Bhavnagar offering NICU, PICU,
              pediatric neurology, and emergency child care services. With experienced pediatric specialists,
              state-of-the-art intensive care units, and 24×7 emergency care, we provide compassionate and ethical
              medical treatment for newborns, infants, children, and adolescents. Our hospital accepts cashless
              insurance from leading providers and maintains the highest standards of child-friendly, hygienic
              healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <BottomActionBar />
    </div>
  )
}
