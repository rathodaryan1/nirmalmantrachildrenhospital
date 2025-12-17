import { EmergencyBar } from "@/components/emergency-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Award, Users } from "lucide-react"
import { BottomActionBar } from "@/components/bottom-action-bar"
import { neon } from "@neondatabase/serverless"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Dedicated to providing compassionate and ethical pediatric healthcare
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Hospital</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Nirmal Mantra Children Hospital is a dedicated pediatric healthcare center in Bhavnagar, Gujarat,
              committed to providing compassionate and ethical medical care for newborns, infants, children, and
              adolescents.
            </p>
            <p>
              Our hospital is equipped with advanced NICU (Neonatal Intensive Care Unit), PICU (Pediatric Intensive Care
              Unit), and specialized pediatric neurology facilities to ensure comprehensive care for children of all
              ages.
            </p>
            <p>
              With a team of highly experienced pediatric specialists, we offer 24×7 emergency care and a wide range of
              specialized services to address the unique healthcare needs of children.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class pediatric healthcare services with compassion, integrity, and ethical
                  practices. We are committed to ensuring the well-being of every child through advanced medical care
                  and a child-friendly environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted pediatric healthcare provider in the region, known for excellence in neonatal
                  and pediatric intensive care, neurology services, and our commitment to ethical healthcare practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">Delivering the highest standards of pediatric care</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-sm text-muted-foreground">Treating every child with care and empathy</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Trust</h3>
                <p className="text-sm text-muted-foreground">Building lasting relationships with families</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ethics</h3>
                <p className="text-sm text-muted-foreground">Upholding the highest ethical standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment to Ethical Healthcare</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Nirmal Mantra Children Hospital, we believe in ethical healthcare marketing and transparent communication
            with parents. We focus on providing genuine medical advice and treatment without aggressive marketing
            tactics. Your child's health and well-being are our top priorities.
          </p>
        </div>
      </section>

      <Footer />
      <BottomActionBar />
    </div>
  )
}
