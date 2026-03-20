import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users, Briefcase, ArrowRight, CheckCircle, Star, Building2, GraduationCap } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    'Fund a scholar, volunteer as a mentor, or bring CSB to your company\'s CSR portfolio. Three ways to change a student\'s story.',
}

const donationTiers = [
  {
    amount: '₹500',
    label: 'Sustaining Gift',
    tag: 'Monthly',
    description: "Sponsor a scholar for one month — covering stationery, transport, and incidentals.",
    perks: ['Digital impact certificate', 'Scholar update newsletter', '80G tax receipt'],
    color: 'border-teal-200',
    tagColor: 'tag-teal',
    cta: 'Start Monthly Gift',
  },
  {
    amount: '₹25,000',
    label: 'Semester Sponsor',
    tag: 'One-Time',
    description: "Fund one semester of a Vidya Vritti scholar's education — tuition, uniform, and books.",
    perks: ['Personalised scholar letter', 'Photo update twice a year', '80G tax receipt', 'Name on annual report'],
    color: 'border-navy-200',
    tagColor: 'tag-navy',
    cta: 'Give ₹25,000',
  },
  {
    amount: '₹2,00,000',
    label: 'Full Scholarship',
    tag: 'Complete 2-Year',
    description: "Fund an entire Vidya Vritti scholarship — fees, uniform, books, and mentorship from Class XI through Class XII results.",
    perks: [
      'Named scholarship certificate',
      'Two scholar update letters per year',
      'Invitation to annual Baatein event',
      '80G tax receipt',
      'Name on website & annual report',
    ],
    color: 'border-gold-400',
    tagColor: 'tag-gold',
    cta: 'Fund a Full Scholar',
    featured: true,
  },
]

const volunteerRoles = [
  {
    icon: GraduationCap,
    title: 'Academic Mentor',
    commitment: '2 hrs/month · Remote or Bokaro',
    description:
      'Guide a Vidya Vritti scholar through subject challenges, college entrance preparation, and career goal-setting. No teaching degree required — just lived experience and patience.',
    skills: ['Science / Math / Commerce background', 'Career guidance', 'Strong communication'],
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    icon: Users,
    title: 'Baatein Speaker',
    commitment: '1 session/year · Bokaro (or virtual)',
    description:
      'Share your professional journey with 50+ scholars and students at our annual inspiration event. Every field is welcome — what matters is your authentic story.',
    skills: ['Any professional background', 'Willingness to share your journey', 'English or Hindi comfortable'],
    color: 'text-navy-700',
    bg: 'bg-navy-50',
  },
  {
    icon: Heart,
    title: 'Alumni Volunteer',
    commitment: 'Flexible · Remote',
    description:
      'Former CSB scholars are the backbone of our mentor network. If CSB changed your trajectory, come back and multiply that for the next generation.',
    skills: ['CSB alumni status', 'Any professional field', 'Passion for giving back'],
    color: 'text-gold-600',
    bg: 'bg-gold-50',
  },
]

const csrTiers = [
  {
    title: 'Impact Partner',
    investment: '₹2,00,000 / year',
    description: '1 full scholarship annually',
    perks: [
      'Named sponsorship of 2 scholars',
      'Quarterly impact reports',
      '80G CSR documentation',
      'Logo on CSB website',
      'Certificate of CSR impact',
    ],
    color: 'bg-csb-bg border-teal-200',
    textColor: 'text-teal-600',
  },
  {
    title: 'Education Champion',
    investment: '₹6,00,000 / year',
    description: '3 full scholarships annually',
    perks: [
      'Named sponsorship of 5 scholars',
      'Monthly impact updates',
      '80G CSR documentation',
      'Feature in annual report',
      'Invitation to Baatein event',
      'Co-branded impact story',
    ],
    color: 'bg-navy-700 border-navy-600',
    textColor: 'text-gold-400',
    featured: true,
  },
  {
    title: 'Founding Patron',
    investment: 'Custom',
    description: 'Programme-level partnership',
    perks: [
      'Programme naming rights',
      'Bespoke impact reporting',
      'Employee volunteer programme',
      'Board engagement opportunity',
      'All documentation for CSR filing',
      'PR and media support',
    ],
    color: 'bg-csb-bg border-gold-300',
    textColor: 'text-gold-600',
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        tag="Get Involved"
        title="Three ways to change a student's story."
        subtitle="Whether you give money, time, or expertise — every contribution compounds. Pick the path that fits you."
      />

      {/* ── QUICK LINKS ──────────────────────────────────────────────── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '#donate',    icon: Heart,     label: 'Donate',           color: 'btn-primary' },
              { href: '#volunteer', icon: Users,     label: 'Volunteer',        color: 'btn-secondary' },
              { href: '#csr',       icon: Briefcase, label: 'Corporate / CSR',  color: 'btn-secondary' },
            ].map(({ href, icon: Icon, label, color }) => (
              <a key={href} href={href} className={color}>
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATE ──────────────────────────────────────────────────── */}
      <section id="donate" className="section-padding bg-csb-bg scroll-mt-nav" aria-labelledby="donate-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Donate"
            title="Fund a scholar. Earn 50% tax benefit."
            subtitle="CSB is an 80G-accredited charitable trust. Every contribution — monthly or one-time — is tax-deductible at 50%."
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {donationTiers.map((tier) => (
              <div
                key={tier.label}
                className={`card p-7 border-2 flex flex-col ${tier.color} ${tier.featured ? 'ring-2 ring-gold-400 ring-offset-2' : ''}`}
              >
                {tier.featured && (
                  <div className="flex items-center gap-1.5 text-gold-600 text-xs font-bold uppercase tracking-wide mb-3">
                    <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    Most Impactful
                  </div>
                )}
                <span className={`${tier.tagColor} self-start mb-3`}>{tier.tag}</span>
                <div className="text-3xl font-bold font-display text-navy-700 mb-1">{tier.amount}</div>
                <div className="text-base font-semibold text-navy-700 mb-3">{tier.label}</div>
                <p className="text-sm text-csb-gray leading-relaxed mb-5 flex-1">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-csb-dark">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:chinmayasmiles@gmail.com?subject=Donation Enquiry"
                  className={tier.featured ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* 80G info strip */}
          <div className="bg-navy-700 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-gold-400 mb-1">80G Accredited · 12A Certified</p>
              <p className="text-sm text-white/70">
                Your donation qualifies for 50% tax deduction under Section 80G of the Income Tax Act.
                Receipts issued within 7 working days.
              </p>
            </div>
            <a
              href="mailto:chinmayasmiles@gmail.com?subject=80G Receipt Request"
              className="btn-outline-white flex-shrink-0 text-sm"
            >
              Request Receipt
            </a>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER ────────────────────────────────────────────────── */}
      <section id="volunteer" className="section-padding bg-white scroll-mt-nav" aria-labelledby="volunteer-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Volunteer"
            title="Your time is someone's turning point."
            subtitle="CSB runs on the expertise of professionals who give back. One conversation can open a world a scholar never knew existed."
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {volunteerRoles.map(({ icon: Icon, title, commitment, description, skills, color, bg }) => (
              <div key={title} className="card p-7 flex flex-col">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-bold text-navy-700 text-lg mb-1">{title}</h3>
                <p className="text-xs text-csb-muted font-medium mb-3">{commitment}</p>
                <p className="text-sm text-csb-gray leading-relaxed mb-4 flex-1">{description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-navy-700 mb-2 uppercase tracking-wide">Ideal if you have:</p>
                  <ul className="space-y-1">
                    {skills.map((s) => (
                      <li key={s} className="text-xs text-csb-gray flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:chinmayasmiles@gmail.com?subject=Volunteer Enquiry"
              className="btn-teal text-base px-8 py-4"
            >
              Register as a Volunteer <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-csb-muted mt-3">We'll respond within 3 working days</p>
          </div>
        </div>
      </section>

      {/* ── CSR / CORPORATE ──────────────────────────────────────────── */}
      <section id="csr" className="section-padding bg-csb-bg scroll-mt-nav" aria-labelledby="csr-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Corporate / CSR"
            title="Make CSR count — verifiably."
            subtitle="CSB's documented outcomes, annual audits, and 80G accreditation make us a clean, compliant choice for your CSR portfolio."
            className="mb-12"
          />

          {/* Why CSR with CSB */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: CheckCircle,
                title: 'Fully Compliant',
                body: '12A registered, 80G accredited, annual audit, FCRA-free (domestic only). Zero compliance risk for your team.',
              },
              {
                icon: Star,
                title: 'Measurable Outcomes',
                body: 'Every rupee mapped to a real scholar. We provide scholar profiles, academic performance data, and post-graduation tracking.',
              },
              {
                icon: Building2,
                title: 'Deep Local Impact',
                body: 'Bokaro Steel City — an underserved industrial town. Clear geographies, clear beneficiaries, clear attribution.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6 flex gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-700 mb-1.5 text-sm">{title}</h3>
                  <p className="text-sm text-csb-gray leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {csrTiers.map((tier) => (
              <div
                key={tier.title}
                className={`rounded-2xl p-7 border-2 flex flex-col ${tier.color} ${tier.featured ? 'ring-2 ring-gold-400 ring-offset-2' : ''}`}
              >
                {tier.featured && (
                  <div className="flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wide mb-3">
                    <Star className="w-3.5 h-3.5 fill-gold-400" />
                    Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-bold font-display mb-1 ${tier.featured ? 'text-white' : 'text-navy-700'}`}>
                  {tier.title}
                </h3>
                <div className={`text-2xl font-bold font-display mb-1 ${tier.textColor}`}>{tier.investment}</div>
                <p className={`text-sm mb-5 ${tier.featured ? 'text-white/70' : 'text-csb-gray'}`}>{tier.description}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {tier.perks.map((perk) => (
                    <li key={perk} className={`flex items-start gap-2 text-sm ${tier.featured ? 'text-white/85' : 'text-csb-dark'}`}>
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? 'text-teal-400' : 'text-teal-500'}`} />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:chinmayasmiles@gmail.com?subject=CSR Partnership Enquiry"
                  className={tier.featured ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
                >
                  Explore Partnership <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-csb-muted">
            All CSR partnerships include full documentation package for Schedule VII compliance filing.
          </p>
        </div>
      </section>

      {/* ── ALUMNI REGISTRATION ──────────────────────────────────────── */}
      <section className="section-padding bg-white border-t border-gray-100" aria-labelledby="alumni-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <span className="tag tag-navy mb-4">CSB Alumni</span>
              <h2 id="alumni-heading" className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-5 leading-tight">
                Once a scholar,<br />always part of the family.
              </h2>
              <p className="text-csb-gray leading-relaxed mb-4">
                If you received support from CSB — as a Vidya Vritti scholar, a Pratibha Poshan recipient, or a Baatein
                attendee — you are part of a community that spans 17 years and 36+ careers.
              </p>
              <p className="text-csb-gray leading-relaxed mb-6">
                Register to stay connected, receive updates on current scholars, and — when you're ready — become the
                mentor whose story inspires the next generation.
              </p>
              <a
                href="mailto:chinmayasmiles@gmail.com?subject=Alumni Registration"
                className="btn-primary text-base px-8 py-4"
              >
                Register as Alumni <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '36+', label: 'Scholars supported since 2009' },
                { num: '17',  label: 'Years of unbroken scholarships' },
                { num: '100%', label: 'Alumni-funded operations' },
                { num: '∞',  label: 'Scholar-to-mentor pipeline' },
              ].map(({ num, label }) => (
                <div key={label} className="card p-6 text-center">
                  <div className="text-3xl font-bold font-display text-teal-500 mb-2">{num}</div>
                  <p className="text-xs text-csb-gray leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 gradient-navy-teal">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/75 mb-8">
            Write to us. Tell us your interests and capacity — we'll find the right fit, whether it's ₹500 a month or
            a Baatein speaker slot once a year.
          </p>
          <a href="mailto:chinmayasmiles@gmail.com" className="btn-primary text-base px-8 py-4">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
