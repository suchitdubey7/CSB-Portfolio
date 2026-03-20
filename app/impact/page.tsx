import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Award, Users, BookOpen } from 'lucide-react'
import dynamic from 'next/dynamic'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import ImpactStats from '@/components/ImpactStats'
import siteData from '@/content/site-data.json'

// Dynamic imports — chart.js is client-only
const FundingAreaChart      = dynamic(() => import('@/components/charts/FundingAreaChart'),      { ssr: false })
const AllocationDonut       = dynamic(() => import('@/components/charts/AllocationDonut'),       { ssr: false })
const OutcomesBarChart      = dynamic(() => import('@/components/charts/OutcomesBarChart'),      { ssr: false })
const ImpactComparisonChart = dynamic(() => import('@/components/charts/ImpactComparisonChart'), { ssr: false })

export const metadata: Metadata = {
  title: 'Impact',
  description:
    '36+ scholars transformed, IIT Bombay admissions, state board toppers. See the measurable impact of Chinmaya Smiles Back since 2009.',
}

const outcomes = [
  { icon: Award,      title: 'IIT Bombay',                 sub: 'Shivani Mishra — Electrical Engineering Dual Degree',          color: 'text-gold-500'  },
  { icon: TrendingUp, title: '98% in Class XII Boards',    sub: 'Nitesh Kr Mahato — Bokaro District Topper, 3rd in Jharkhand', color: 'text-teal-500'  },
  { icon: Users,      title: 'Fintech Professional',       sub: 'Akash Kumar — now at Intelliflo Fintech',                     color: 'text-navy-500'  },
  { icon: BookOpen,   title: 'Scholar-to-Mentor Pipeline', sub: 'Former scholars now mentoring the next generation',           color: 'text-gold-500'  },
]

const ripple = [
  { title: 'Family Income',    body: 'An educated CSB scholar earns 3× more over a lifetime — supporting parents, siblings, and the entire household.' },
  { title: 'Next Generation',  body: 'Scholars ensure their children complete education — breaking the cycle of poverty permanently across generations.' },
  { title: 'Peer Inspiration', body: 'Classmates see what\'s possible. A CSB scholar raises the aspiration ceiling for every student in the school.' },
  { title: 'Mentor Network',   body: 'Each scholar returns as a mentor — compounding CSB\'s impact without any additional cost or infrastructure.' },
]

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        tag="Our Impact"
        title={`${siteData.stats.yearsActive} years of proof. Not promises.`}
        subtitle="Every number on this page represents a real student, a real family, and a future that almost didn't happen."
      />

      {/* ── ANIMATED STATS ───────────────────────────────────────────── */}
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

      {/* ── 17-YEAR GROWTH CHART ──────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg" aria-labelledby="growth-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Growth Over Time"
            title="18 consecutive scholarship cycles"
            subtitle="From 2 scholars in 2009 to 37+ supported cumulatively. Every year, without exception."
            className="mb-10"
          />
          <div className="card p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="font-bold text-navy-700 text-lg">Scholar Growth (2009 – 2026)</h3>
                <p className="text-sm text-csb-muted mt-0.5">Solid teal = cumulative · Dashed gold = annual intake</p>
              </div>
              <div className="flex gap-4 text-xs text-csb-muted">
                <span className="flex items-center gap-1.5"><span className="w-8 h-0.5 bg-teal-500 inline-block rounded" />Cumulative</span>
                <span className="flex items-center gap-1.5"><span className="w-8 h-0.5 bg-gold-400 inline-block rounded border-dashed border-t border-gold-400" />Annual</span>
              </div>
            </div>
            <FundingAreaChart />
          </div>
        </div>
      </section>

      {/* ── OUTCOMES BAR CHART ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="careers-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="tag tag-teal mb-4">Alumni Careers</span>
              <h2 id="careers-heading" className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-5 leading-tight">
                Where CSB scholars end up.
              </h2>
              <p className="text-csb-gray leading-relaxed mb-4">
                From IIT Bombay to government service, our alumni span every professional field —
                a testament to the diversity of talent that exists in every classroom, waiting only for access.
              </p>
              <p className="text-csb-gray leading-relaxed mb-6">
                Engineering dominates because Bokaro is an engineering town — but we see scholars
                succeeding across finance, education, civil services, and healthcare too.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-2xl font-bold font-display text-teal-500">37+</div>
                  <div className="text-xs text-csb-muted">Total scholars</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-gold-500">6</div>
                  <div className="text-xs text-csb-muted">Career fields</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-navy-700">100%</div>
                  <div className="text-xs text-csb-muted">Completed Class XII</div>
                </div>
              </div>
            </div>
            <div className="card p-6 lg:p-8">
              <h3 className="font-bold text-navy-700 mb-5">Alumni by Career Field</h3>
              <OutcomesBarChart />
            </div>
          </div>
        </div>
      </section>

      {/* ── RIPPLE EFFECT + COMPARISON CHART ─────────────────────────── */}
      <section className="section-padding bg-csb-bg" aria-labelledby="ripple-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="tag tag-teal mb-4">The Multiplier Effect</span>
              <h2 id="ripple-heading" className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-5 leading-tight">
                One scholarship.<br />Concentric rings of change.
              </h2>
              <p className="text-csb-gray leading-relaxed mb-4">
                When CSB funds a student, the impact doesn&apos;t stop with that student.
                It ripples outward — to family, peers, community — and then doubles back as
                the scholar becomes a mentor who changes the next scholar.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {ripple.map(({ title, body }) => (
                  <div key={title} className="card p-5">
                    <h3 className="font-bold text-navy-700 mb-1.5 text-sm">{title}</h3>
                    <p className="text-xs text-csb-gray leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="card p-6 lg:p-8">
                <h3 className="font-bold text-navy-700 mb-2">Cost vs Lifetime Impact</h3>
                <p className="text-sm text-csb-muted mb-6">
                  Every ₹30,000 scholarship generates an estimated ₹50 lakh+ in lifetime economic output.
                </p>
                <ImpactComparisonChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCIAL TRANSPARENCY + DONUT ────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="finance-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Financial Transparency"
            title="Every rupee accounted for"
            subtitle="CSB publishes its fund allocation and is subject to annual audit as a registered charitable trust."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Donut chart */}
            <div className="card p-8">
              <h3 className="font-bold text-navy-700 mb-6">Fund Allocation</h3>
              <AllocationDonut variant="light" />
              <p className="text-xs text-csb-muted mt-6 text-center">
                Annual audit conducted · Full accounts available to donors on request
              </p>
            </div>

            {/* Cost table */}
            <div className="space-y-4">
              {[
                { l: 'Cost per scholar (2 years)',        v: '₹2,00,000', note: 'Full tuition, uniform, books'     },
                { l: 'Monthly scholarship (Pratibha)',     v: '₹500',    note: 'Per student, per month'            },
                { l: '80G tax deduction',                 v: '50%',     note: 'On all contributions'              },
                { l: 'Annual operating budget (approx)',  v: '₹2–3L',   note: 'Fully community-funded to date'   },
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
                <p className="text-xs text-white/65 mt-1">Registered Trust · Annual Audit · Full Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-csb-bg border-t border-gray-100">
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
