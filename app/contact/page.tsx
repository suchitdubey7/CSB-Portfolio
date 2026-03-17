import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Clock, ArrowRight, Facebook, Globe } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Chinmaya Smiles Back. Whether you want to donate, volunteer, or just learn more — we\'d love to hear from you.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'chinmayasmiles@gmail.com',
    sub: 'We respond within 3 working days',
    href: 'mailto:chinmayasmiles@gmail.com',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    icon: Globe,
    title: 'Website',
    value: 'chinmayasmiles.org',
    sub: 'Read our full story',
    href: 'https://chinmayasmiles.org',
    color: 'text-navy-700',
    bg: 'bg-navy-50',
  },
  {
    icon: Facebook,
    title: 'Facebook',
    value: 'Chinmaya Smiles Back',
    sub: 'Scholar updates & events',
    href: 'https://www.facebook.com/chinmayasmileback',
    color: 'text-gold-600',
    bg: 'bg-gold-50',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Bokaro Steel City, Jharkhand',
    sub: 'Operating since 2009',
    href: 'https://maps.google.com/?q=Bokaro+Steel+City+Jharkhand',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
]

const enquiryTypes = [
  {
    title: 'I want to donate',
    body: 'Write to us with the amount you\'re considering and whether you\'d like it to fund a named scholarship or general corpus.',
    subject: 'Donation Enquiry',
    cta: 'Email about Donation',
  },
  {
    title: 'I want to volunteer',
    body: 'Tell us your professional background, availability, and which volunteer role interests you. We\'ll match you appropriately.',
    subject: 'Volunteer Enquiry',
    cta: 'Email about Volunteering',
  },
  {
    title: 'I want to partner (CSR)',
    body: 'Share your organisation name, approximate CSR budget, and preferred programme. We\'ll prepare a bespoke proposal.',
    subject: 'CSR Partnership Enquiry',
    cta: 'Email about CSR',
  },
  {
    title: 'I am a scholar / parent',
    body: 'If you\'re a current or prospective scholar, or a parent wanting to understand the selection process, write to us directly.',
    subject: 'Scholar / Parent Enquiry',
    cta: 'Email as Scholar/Parent',
  },
  {
    title: 'I am a journalist / researcher',
    body: 'CSB welcomes media enquiries and academic research. We can arrange interviews with scholars, mentors, and trustees.',
    subject: 'Media / Research Enquiry',
    cta: 'Email for Media/Research',
  },
  {
    title: 'I am a CSB alumnus',
    body: 'Reconnect with the family. Share your story, register as a mentor, or simply let us know where life has taken you.',
    subject: 'Alumni Reconnect',
    cta: 'Email as Alumni',
  },
]

const faqs = [
  {
    q: 'How do I receive my 80G tax receipt?',
    a: 'Send your donation confirmation and PAN details to chinmayasmiles@gmail.com. We issue 80G receipts within 7 working days.',
  },
  {
    q: 'Can I donate outside India?',
    a: 'CSB currently accepts domestic donations only (INR). We are not FCRA-registered. For international supporters, we suggest connecting friends or family in India to donate on your behalf.',
  },
  {
    q: 'How are scholars selected?',
    a: 'Scholars are selected through a rigorous process: school recommendation, academic record review, home visit, and a written plus oral interview assessing potential and financial need. Selection is conducted by a panel of CSB trustees and alumni.',
  },
  {
    q: 'How do I apply for a scholarship?',
    a: 'Applications open in March each year for students entering Class XI. Contact us by email to receive the application form and criteria checklist.',
  },
  {
    q: 'Can I volunteer remotely?',
    a: 'Yes — academic mentoring and career guidance are conducted primarily over phone/video call. Baatein speaker slots can also be done virtually.',
  },
  {
    q: 'Is CSB audited?',
    a: 'Yes. CSB is subject to annual statutory audit as a registered charitable trust. Audited accounts are available to donors on request.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        tag="Contact"
        title="We're easy to reach. And we always reply."
        subtitle="Every message we receive comes from someone who cares. We treat every enquiry accordingly."
      />

      {/* ── CONTACT METHODS ──────────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg" aria-labelledby="contact-methods-heading">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactMethods.map(({ icon: Icon, title, value, sub, href, color, bg }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card p-6 flex flex-col items-start gap-3 group card-hover"
              >
                <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-csb-muted uppercase tracking-wide mb-0.5">{title}</p>
                  <p className="font-semibold text-navy-700 text-sm group-hover:text-teal-600 transition-colors">{value}</p>
                  <p className="text-xs text-csb-muted mt-0.5">{sub}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Response time note */}
          <div className="bg-white border border-teal-100 rounded-2xl p-5 flex items-center gap-4 max-w-lg mx-auto">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-teal-500" />
            </div>
            <div>
              <p className="font-semibold text-navy-700 text-sm">Response time: 1–3 working days</p>
              <p className="text-xs text-csb-muted mt-0.5">
                CSB is run entirely by volunteers. We appreciate your patience and always respond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY TYPES ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="enquiry-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="tag tag-teal mb-4">Get in Touch</span>
            <h2 id="enquiry-heading" className="text-3xl font-bold font-display text-navy-700 mb-3">
              What brings you here?
            </h2>
            <p className="text-csb-gray max-w-xl mx-auto">
              Click the button that matches your situation — it will open a pre-filled email to make things faster for both of us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {enquiryTypes.map(({ title, body, subject, cta }) => (
              <div key={title} className="card p-6 flex flex-col">
                <h3 className="font-bold text-navy-700 mb-2">{title}</h3>
                <p className="text-sm text-csb-gray leading-relaxed flex-1 mb-5">{body}</p>
                <a
                  href={`mailto:chinmayasmiles@gmail.com?subject=${encodeURIComponent(subject)}`}
                  className="btn-secondary text-sm justify-center"
                >
                  {cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg" aria-labelledby="faq-heading">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag tag-navy mb-4">FAQ</span>
            <h2 id="faq-heading" className="text-3xl font-bold font-display text-navy-700">
              Common questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card p-6">
                <h3 className="font-semibold text-navy-700 mb-2 text-sm">{q}</h3>
                <p className="text-sm text-csb-gray leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-csb-gray text-sm mb-4">
              Didn&apos;t find what you were looking for?
            </p>
            <a
              href="mailto:chinmayasmiles@gmail.com?subject=General Enquiry"
              className="btn-primary"
            >
              Email Us Directly <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div>
              <span className="tag tag-gold mb-4">Trust & Transparency</span>
              <h2 className="text-2xl font-bold font-display text-navy-700 mb-4 leading-tight">
                We publish everything.
              </h2>
              <p className="text-csb-gray leading-relaxed mb-6">
                CSB is a registered charitable trust subject to annual statutory audit. Fund allocation,
                scholar selection criteria, and programme outcomes are available to any donor or researcher
                on request. We have nothing to hide — because everything we do, we do for the scholars.
              </p>
              <a
                href="mailto:chinmayasmiles@gmail.com?subject=Accounts / Annual Report Request"
                className="btn-secondary"
              >
                Request Annual Report <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '80G Accredited', sub: '50% tax deduction on donations' },
                { label: '12A Certified', sub: 'Registered charitable trust' },
                { label: 'Annual Audit', sub: 'Statutory financial audit every year' },
                { label: 'Since 2009', sub: '17 years of documented operations' },
              ].map(({ label, sub }) => (
                <div key={label} className="card p-5 text-center">
                  <p className="font-bold text-navy-700 text-sm mb-1">{label}</p>
                  <p className="text-xs text-csb-muted leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
