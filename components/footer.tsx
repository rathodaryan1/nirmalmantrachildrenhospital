import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nirmal Mantra Children Hospital</h3>
            <p className="text-sm text-primary-foreground/90 leading-relaxed mb-4">
              Hope Lives Here - A trusted pediatric hospital providing compassionate neonatal care, PICU services, and
              pediatric neurology in Bhavnagar.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Morning OPD: 9 AM – 1 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Evening OPD: 5 PM – 8 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/specialities" className="hover:underline">
                  Specialities
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:underline">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:underline">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>9737424111</div>
                  <div>0278-2424111</div>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-destructive/20 p-2 rounded border border-destructive/30">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
                <div>
                  <div className="font-bold text-white">24×7 Emergency:</div>
                  <div className="text-base font-bold text-white">93745 13161</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:nmch2023@gmail.com" className="hover:underline">
                  nmch2023@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Address</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <address className="not-italic leading-relaxed">
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
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <div className="space-x-4 mb-4">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:underline">
              Medical Disclaimer
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Nirmal Mantra Children Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
