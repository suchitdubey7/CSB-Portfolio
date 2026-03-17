import Link from 'next/link'
import { GraduationCap, Mail, Facebook, Globe, Heart, ArrowRight } from 'lucide-react'

const footerLinks = {
  Programs: [
    { label: 'Vidya Vritti',    href: '/programs#vidya-vritti' },
    { label: 'Pratibha Poshan', href: '/programs#pratibha-poshan' },
    { label: 'Baatein',         href: '/programs#baatein' },
    { label: 'Apply Now',       href: '/programs#apply' },
  ],
  'Get Involved': [
    { label: 'Donate',             href: '/get-involved#donate' },
    { label: 'Volunteer',          href: '/get-involved#volunteer' },
    { label: 'CSR Partnership',    href: '/get-involved#csr' },
    { label: 'Register as Alumni', href: '/get-involved#alumni' },
  ],
  About: [
    { label: 'Our Story',    href: '/about#story' },
    { label: 'Mission',      href: '/about#mission' },
    { label: 'Leadership',   href: '/about#team' },
    { label: 'Impact',       href: '/impact' },
    { label: 'Scholar Stories', href: '/stories' },
    { label: 'Contact',      href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white" role="contentinfo">
      {/* CTA Strip */}
      <div className="bg-gold-500">
        <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-xl text-navy-700">
              Ready to change a student&apos;s life?
            </p>
            <p className="text-navy-600 text-sm mt-0.5">
              50% tax deduction under 80G. Your donation makes an immediate difference.
            </p>
          </div>
          <Link
            href="/get-involved#donate"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
          >
            Donate Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <span className="block font-display font-bold text-white">
                  Chinmaya Smiles Back
                </span>
                <span className="block text-teal-300 text-xs">Since 2009</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Alumni-powered scholarships for meritorious students from low-income
              families in Bokaro Steel City, Jharkhand. 36+ lives transformed.
              17 years. Never missed a year.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['80G Accredited', '12A Certified', 'Registered Trust'].map((badge) => (
                <span
                  key={badge}
                  className="inline-block px-2.5 py-1 bg-white/10 text-teal-200 text-xs font-medium rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/chinmayasmilesback/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:chinmayasmilesback@gmail.com"
                className="w-9 h-9 bg-white/10 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email Chinmaya Smiles Back"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://chinmayasmiles.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Visit our website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-sm text-gold-400 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Chinmaya Smiles Back. Educational Charitable Trust.
            Bokaro Steel City, Jharkhand.
          </p>
          <p className="text-white/50 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-gold-400 fill-gold-400" /> by alumni, for scholars
          </p>
        </div>
      </div>
    </footer>
  )
}
