import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import { BottomActionBar } from "@/components/bottom-action-bar"
import Image from "next/image"

export default function DoctorsPage() {
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Doctors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Experienced pediatric specialists dedicated to your child's health
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-8">
            {/* Doctor 1 */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/professional-male-pediatric-doctor-in-white-coat-n.jpg"
                      alt="Dr. Ridhdhish D. Lania - Doctor Image (Replace Later)"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-primary mb-2">Dr. Ridhdhish D. Lania</CardTitle>
                    <CardDescription className="text-base mb-4">MD (Pediatrics), F.I.C.N. (Mumbai)</CardDescription>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-semibold">Specialization:</span> Consultant Neonatal & Pediatric
                        Intensivist, Pediatric Neurologist
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Lania specializes in neonatal and pediatric intensive care with expertise in pediatric neurology.
                  He is trained in advanced neonatal care and management of critically ill children.
                </p>
              </CardContent>
            </Card>

            {/* Doctor 2 */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/experienced-male-pediatric-neurologist-doctor-prof.jpg"
                      alt="Dr. Dhaval Solanki - Doctor Image (Replace Later)"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-primary mb-2">Dr. Dhaval Solanki</CardTitle>
                    <CardDescription className="text-base mb-4">MD (Pediatrics), F.I.C.N. (Mumbai)</CardDescription>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-semibold">Specialization:</span> Consultant Pediatric Neurologist &
                        Epileptologist
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Experience:</span> 12+ Years
                      </p>
                      <div className="flex items-start gap-2 mt-3">
                        <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">
                          <span className="font-semibold">Professional Memberships:</span> Indian Academy of Pediatrics,
                          Epilepsy Society of India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Solanki brings over 12 years of experience in pediatric neurology and epilepsy management. He
                  specializes in childhood epilepsy, developmental disorders, and neurological conditions in children.
                </p>
              </CardContent>
            </Card>

            {/* Doctor 3 */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/professional-pediatric-consultant-doctor-neutral-m.jpg"
                      alt="Dr. Bhupit K. Gadhia - Doctor Image (Replace Later)"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-primary mb-2">Dr. Bhupit K. Gadhia</CardTitle>
                    <CardDescription className="text-base mb-4">MBBS, DCH (Mumbai)</CardDescription>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-semibold">Specialization:</span> Consultant Pediatrician
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Gadhia is an experienced consultant pediatrician providing comprehensive healthcare for children.
                  He specializes in general pediatrics, preventive care, and childhood vaccination programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <BottomActionBar />
    </div>
  )
}
