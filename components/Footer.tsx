import Link from 'next/link'
import { GraduationCap, Mail, Facebook, Heart, ArrowRight } from 'lucide-react'

const footerLinks = {
  Programs: [
    { label: 'Vidya Vritti',    href: '/programs#vidya-vritti' },
    { label: 'Pratibha Poshan', href: '/programs#pratibha-poshan' },
    { label: 'Prerna',         href: '/programs#prerna' },
    { label: 'Apply Now',       href: '/programs#apply' },
  ],
  'Get Involved': [
    { label: 'Donate',             href: '/donate' },
    { label: 'Volunteer',          href: '/get-involved#volunteer' },
    { label: 'CSR Partnership',    href: '/get-involved#csr' },
    { label: 'Join the Community', href: '/get-involved#community' },
  ],
  About: [
    { label: 'Our Story',       href: '/about#story' },
    { label: 'Mission',         href: '/about#mission' },
    { label: 'Leadership',      href: '/about#team' },
    { label: 'Impact',          href: '/impact' },
    { label: 'Scholar Stories', href: '/stories' },
    { label: 'Contact',         href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white" role="contentinfo">

      {/* ── CTA Strip ─────────────────────────────────────────────────── */}
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
            href="/donate"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
          >
            Donate Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Main Footer ───────────────────────────────────────────────── */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
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
              Community-powered scholarships for meritorious students from low-income
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

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/chinmayasmilesback/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Follow Chinmaya Smiles Back on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919930287551?text=Hi%21%20I%20came%20across%20Chinmaya%20Smiles%20Back%20and%20would%20like%20to%20know%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Chat with Chinmaya Smiles Back on WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:chinmayasmiles@gmail.com"
                className="w-9 h-9 bg-white/10 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email Chinmaya Smiles Back"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
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

      {/* ── Bottom bar ────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Chinmaya Smiles Back. Educational Charitable Trust.
            Bokaro Steel City, Jharkhand.
          </p>
          <p className="text-white/50 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-gold-400 fill-gold-400" /> by the community, for scholars
          </p>
        </div>
      </div>

    </footer>
  )
}
