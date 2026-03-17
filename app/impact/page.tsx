import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Award, Users, BookOpen } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import ImpactStats from '@/components/ImpactStats'

export const metadata: Metadata = {
  title: 'Impact',
  description:
    '36+ scholars transformed, IIT Bombay admissions, state board toppers. See the measurable impact of Chinmaya Smiles Back since 2009.',
}

const outcomes = [
  { icon: Award,     title: 'IIT Bombay',                  sub: 'Shivani Mishra — Electrical Engineering Dual Degree',          color: 'text-gold-500' },
  { icon: TrendingUp,title: '98% in Class XII Boards',     sub: 'Nitesh Kr Mahato — Bokaro District Topper, 3rd in Jharkhand', color: 'text-teal-500' },
  { icon: Users,     title: 'Fintech Professional',        sub: 'Akash Kumar — now at Intelliflo Fintech',                     color: 'text-navy-500' },
  { icon: BookOpen,  title: 'Scholar-to-Mentor Pipeline',  sub: 'Former scholars now mentoring the next generation',           color: 'text-gold-500' },
]

const ripple = [
  { title: 'Family Income',       body: 'An educated CSB scholar earns 3× more over a lifetime — supporting parents, siblings, and the entire household.' },
  { title: 'Next Generation',     body: 'Scholars ensure their children complete education — breaking the cycle of poverty permanently across generations.' },
  { title: 'Peer Inspiration',    body: 'Classmates see what\'s possible. A CSB scholar raises the aspiration ceiling for every student in the school.' },
  { title: 'Mentor Network',      body: 'Each scholar returns as a mentor — compounding CSB\'s impact without any additional cost or infrastructure.' },
]

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        tag="Our Impact"
        title="17 years of proof. Not promises."
        subtitle="Every number on this page represents a real student, a real family, and a future that almost didn't happen."
      />

      {/* Stats */}
      <ImpactStats variant="dark" />

      {/* ── SCHOLAR OUTCOMES ──────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="outcomes-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Scholar Achievements"
            title="What happens when a scholar gets their shot"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map(({ icon: Icon, title, sub, color }) => (
              <div key={title} className="card p-7 text-center">
                <Icon className={`w-10 h-10 mx-auto mb-4 ${color}`} />
                <h3 className="font-bold text-navy-700 mb-2">{title}</h3>
                <p className="text-sm text-csb-gray leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YEAR BY YEAR ──────────────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg" aria-labelledby="yearly-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Consistency"
            title="18 consecutive scholarship cycles"
            subtitle="Not one year missed. Not one scholar left without support. Here's the record."
            className="mb-12"
          />
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-3">
            {Array.from({ length: 18 }, (_, i) => 2009 + i).map((year) => (
              <div
                key={year}
                className="bg-navy-700 text-white rounded-xl p-3 text-center"
              >
                <div className="text-xs text-teal-300 font-bold">{year}</div>
                <div className="text-xs text-white/60 mt-0.5">2 scholars</div>
              </div>
            ))}
          </div>
          <p className="text-center text-csb-gray text-sm mt-6">
            {/* Note */}
            36+ students supported in total. Each year, two new lives begin their CSB journey.
          </p>
        </div>
      </section>

      {/* ── RIPPLE EFFECT ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="ripple-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag tag-teal mb-4">The Multiplier Effect</span>
              <h2 id="ripple-heading" className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-5 leading-tight">
                One scholarship.<br />Concentric rings of change.
              </h2>
              <p className="text-csb-gray leading-relaxed mb-6">
                When CSB funds a student, the impact doesn&apos;t stop with that student.
                It ripples outward — to family, peers, community — and then doubles
                back as the scholar becomes a mentor who changes the next scholar.
              </p>
              <p className="text-csb-gray leading-relaxed mb-8">
                Every ₹30,000 invested in one scholar generates a lifetime economic
                output estimated at ₹50 lakh+ — a return that compounds across generations.
              </p>
              <div className="bg-navy-700 text-white rounded-2xl p-6 inline-block">
                <div className="text-3xl font-bold text-gold-400 font-display">₹30,000</div>
                <div className="text-sm text-white/75 mt-1">funds a complete 2-year scholarship</div>
                <div className="text-xs text-teal-300 mt-2">= ₹50L+ estimated lifetime economic impact</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {ripple.map(({ title, body }) => (
                <div key={title} className="card p-6">
                  <h3 className="font-bold text-navy-700 mb-2 text-sm">{title}</h3>
                  <p className="text-sm text-csb-gray leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCIAL TRANSPARENCY ────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg" aria-labelledby="finance-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Financial Transparency"
            title="Every rupee accounted for"
            subtitle="CSB publishes its fund allocation and is subject to annual audit as a registered charitable trust."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card p-8">
              <h3 className="font-bold text-navy-700 mb-6">Fund Allocation</h3>
              {[
                { pct: 70, label: 'Vidya Vritti — direct scholar education costs', color: 'bg-teal-500' },
                { pct: 18, label: 'Pratibha Poshan — junior merit scholarships',   color: 'bg-navy-700' },
                { pct: 8,  label: 'Baatein events & outreach programmes',          color: 'bg-gold-500' },
                { pct: 4,  label: 'Administration, compliance & banking',          color: 'bg-gray-300' },
              ].map(({ pct, label, color }) => (
                <div key={label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-csb-dark">{label}</span>
                    <span className="font-bold text-navy-700">{pct}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full">
                    <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
              <p className="text-xs text-csb-muted mt-4">
                Annual audit conducted · Full accounts available to donors on request
              </p>
            </div>
            <div className="space-y-4">
              {[
                { l: 'Cost per scholar (2 years)',          v: '₹30,000', note: 'Full tuition, uniform, books' },
                { l: 'Monthly scholarship (Pratibha)',       v: '₹500',    note: 'Per student, per month' },
                { l: '80G tax deduction',                   v: '50%',     note: 'On all contributions' },
                { l: 'Annual operating budget (approx)',    v: '₹2–3L',   note: 'Fully alumni-funded to date' },
              ].map(({ l, v, note }) => (
                <div key={l} className="card p-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-navy-700">{l}</div>
                    <div className="text-xs text-csb-muted mt-0.5">{note}</div>
                  </div>
                  <div className="text-2xl font-bold text-teal-500 font-display flex-shrink-0">{v}</div>
                </div>
              ))}
              <div className="bg-navy-700 text-white rounded-2xl p-5 text-center">
                <p className="text-sm font-semibold text-gold-400">80G Accredited · 12A Certified</p>
                <p className="text-xs text-white/65 mt-1">
                  Registered Trust · Annual Audit · Full Transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-navy-700 mb-4">
            Be part of the next 17 years.
          </h2>
          <p className="text-csb-gray mb-8">
            Your contribution today becomes a scholar&apos;s story tomorrow.
            Every amount matters. Every mentor matters. Every year matters.
          </p>
          <Link href="/get-involved#donate" className="btn-primary text-base px-8 py-4">
            Fund a Scholar <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
