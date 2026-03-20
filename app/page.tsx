import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  ArrowRight, BookOpen, Users, Heart, Star, Lightbulb,
  CheckCircle, GraduationCap, TrendingUp, Award, Target
} from 'lucide-react'
import ImpactStats from '@/components/ImpactStats'
import ProgramCard from '@/components/ProgramCard'
import StoryCard from '@/components/StoryCard'
import SectionLabel from '@/components/SectionLabel'
import siteData from '@/content/site-data.json'

// Dynamic import — chart.js is client-only
const AllocationDonut = dynamic(() => import('@/components/charts/AllocationDonut'), { ssr: false })

export const metadata: Metadata = {
  title: 'Chinmaya Smiles Back — Empowering Merit. Enabling Dreams.',
  description:
    'Community-powered scholarships for meritorious students from Bokaro. 36+ scholars, 17 years, 80G accredited. Donate today.',
}

const programs = [
  {
    icon: GraduationCap,
    tag: 'Flagship Scholarship',
    title: 'Vidya Vritti',
    description:
      'Full scholarship for Class XI–XII students from economically humble backgrounds. Fees, uniform, books — everything covered for 2 years. Now in its 18th consecutive edition.',
    target: 'Class XI–XII students',
    coverage: 'Full tuition, uniform & books for 2 years',
    href: '/programs#vidya-vritti',
    accentColor: 'teal' as const,
    featured: true,
  },
  {
    icon: BookOpen,
    tag: 'Merit Scholarship',
    title: 'Pratibha Poshan',
    description:
      'Monthly scholarship for bright students in Classes VII–X from economically backward families. Selected by CSB-conducted test — nurturing talent before it reaches the critical juncture.',
    target: 'Class VII–X students',
    coverage: 'Monthly fixed scholarship',
    href: '/programs#pratibha-poshan',
    accentColor: 'gold' as const,
    featured: true,
  },
  {
    icon: Lightbulb,
    tag: 'Inspiration Sessions',
    title: 'Prerna',
    description:
      "Alumni-led sessions where Chinmaya Vidyalaya graduates from every field — engineering, medicine, finance, arts — share their journeys with current students. Free. Powerful. Life-changing.",
    target: 'All Chinmaya Vidyalaya students',
    coverage: 'Free alumni-led sessions',
    href: '/programs#prerna',
    accentColor: 'navy' as const,
    featured: true,
  },
]

// Stories driven from site-data.json (editable via /admin)
const stories = siteData.stories.slice(0, 2).map(s => ({
  name:        s.name,
  achievement: s.achievement,
  year:        s.batch,
  quote:       s.quote,
  program:     s.program,
  href:        `/stories#${s.id}`,
}))

const whyUs = [
  { icon: Users,       text: '200+ alumni who give back because this scholarship once made a difference to someone like them' },
  { icon: Heart,       text: 'Mentors who sat in the same classroom, faced the same exams — their guidance is relatable, not just helpful' },
  { icon: TrendingUp,  text: 'A self-reinforcing cycle: scholars become mentors, who guide the next generation of scholars' },
  { icon: CheckCircle, text: '17 unbroken years — no corporate backing needed, no year missed, no scholar left without support' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background */}
        <div className="absolute inset-0 gradient-navy-teal" />
        <div className="absolute inset-0 pattern-dots opacity-30" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-900/30 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 pt-24 pb-16 text-center">
          {/* Trust signal */}
          {/* Announcement banner — controlled from Admin panel */}
          {siteData.announcement.active && (
            <Link
              href={siteData.announcement.link}
              className="inline-flex items-center gap-2 bg-gold-400/20 backdrop-blur-sm border border-gold-400/40 text-gold-200 text-sm px-4 py-1.5 rounded-full mb-4 hover:bg-gold-400/30 transition-colors"
            >
              <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400 flex-shrink-0" />
              <span>{siteData.announcement.text}</span>
              <span className="font-semibold underline">{siteData.announcement.linkText}</span>
            </Link>
          )}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-1.5 rounded-full mb-8">
            <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span>{siteData.stats.yearsActive} years • {siteData.stats.scholarsSupported} lives transformed • 80G accredited</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-display font-bold text-white text-balance leading-tight mb-6
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto"
          >
            Talented students deserve{' '}
            <span className="text-gold-400">a fair shot.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
            Since 2009, Chinmaya Smiles Back — started by alumni of Chinmaya Vidyalaya Bokaro,
            now a growing community — has funded meritorious students from low-income families
            through scholarships, mentorship, and community.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/donate" className="btn-primary text-base px-8 py-4">
              Donate Now — 80G Benefit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="btn-outline-white text-base px-8 py-4">
              Our Story
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { v: siteData.stats.scholarsSupported, l: 'Scholars' },
              { v: siteData.stats.currentBatch,      l: 'Annual Cycle' },
              { v: siteData.stats.successRate,        l: 'People-Funded' },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/15">
                <div className="text-2xl font-bold text-gold-400 font-display">{s.v}</div>
                <div className="text-xs text-white/65 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ──────────────────────────────────────────────── */}
      <ImpactStats />

      {/* ── THE PROBLEM ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="problem-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-csb-bg rounded-3xl p-8 lg:p-12">
                <div className="space-y-4">
                  {[
                    { pct: 47,  label: 'Dropout rate before secondary education in Jharkhand', color: 'bg-red-400' },
                    { pct: 26,  label: 'Rural students who don\'t complete Class X in India',    color: 'bg-orange-400' },
                    { pct: 6,   label: 'Low-income students who reach IIT/NIT level colleges',  color: 'bg-yellow-400' },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-csb-dark font-medium max-w-[80%]">{bar.label}</span>
                        <span className="font-bold text-navy-700">{bar.pct}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${bar.color}`}
                          style={{ width: `${bar.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-csb-muted mt-6">Sources: Govt. of India, ASER Report, NCERT Data</p>
              </div>
              {/* Inline highlight card — below the chart, no overlap */}
              <div className="mt-5 bg-teal-50 border border-teal-100 rounded-2xl p-4 flex items-center gap-4">
                <div className="text-2xl font-bold text-navy-700 font-display flex-shrink-0">₹{siteData.stats.scholarshipAmount}</div>
                <div className="text-sm text-csb-gray leading-snug">funds one complete two-year scholarship — fees, uniform, books & mentorship</div>
              </div>
            </div>

            {/* Right — Text */}
            <div className="order-1 lg:order-2">
              <span className="tag tag-teal mb-4">The Problem We Solve</span>
              <h2
                id="problem-heading"
                className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-5 leading-tight"
              >
                Talent is everywhere.{' '}
                <span className="text-teal-500">Access is not.</span>
              </h2>
              <p className="text-csb-gray leading-relaxed mb-5">
                Every year, brilliant students complete Class X at Chinmaya Vidyalaya Bokaro.
                For those from low-income families, this is where their academic journey often ends —
                not because they lack ability, but because their families cannot afford Class XI fees.
              </p>
              <p className="text-csb-gray leading-relaxed mb-8">
                Without support at this exact moment, the path to engineering, medicine, and IITs
                closes permanently. The potential is there. The access is not. CSB closes that gap.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/about" className="btn-secondary">
                  Learn Our Story
                </Link>
                <Link href="/impact" className="btn-teal">
                  See Our Impact <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg" aria-labelledby="programs-heading">
        <div className="container-custom">
          <SectionLabel
            tag="What We Do"
            title="Three programmes. One mission."
            subtitle="From Class VII to XII, we wrap scholarship, mentorship, and inspiration around every student who needs it most."
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <ProgramCard key={prog.title} {...prog} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programs" className="btn-secondary">
              Explore All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SCHOLAR STORIES ───────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="stories-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-2">
              <span className="tag tag-gold mb-4">Real Stories</span>
              <h2
                id="stories-heading"
                className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-5 leading-tight"
              >
                Behind every number is a life transformed.
              </h2>
              <p className="text-csb-gray leading-relaxed mb-6">
                Our scholars don't just graduate — they return. As mentors, as speakers, as proof
                that merit and hardship can coexist with success when a community stands behind you.
              </p>
              <Link href="/stories" className="btn-teal">
                All Scholar Stories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Story cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {stories.map((story) => (
                <StoryCard key={story.name} {...story} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CSB ───────────────────────────────────────────────────── */}
      <section className="section-padding gradient-navy-teal" aria-labelledby="why-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="tag mb-4 bg-white/20 text-white border border-white/20 text-xs tracking-widest uppercase">Why CSB Is Different</span>
              <h2
                id="why-heading"
                className="text-3xl lg:text-4xl font-bold font-display text-white mb-5 leading-tight"
              >
                Not just a scholarship fund.{' '}
                <span className="text-gold-400">An ecosystem.</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                CSB was started by alumni who remember what it was like to sit in those classrooms —
                and has since grown into a wider community of people who believe talent should never
                be held back by circumstance. Every element of our model — the mentorship, the
                sessions, the community — comes from caring about scholars deeply.
              </p>
              <Link href="/about" className="btn-outline-white">
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/15">
              <h3 className="font-bold text-white text-lg mb-1">Where every rupee goes</h3>
              <p className="text-white/55 text-sm mb-6">96% reaches scholars directly. Admin costs are kept under 4%.</p>
              <AllocationDonut variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="involved-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Join Us"
            title="Three ways to make a difference"
            subtitle="Whether you give money, time, or expertise — your contribution keeps a scholar in school."
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                color: 'bg-gold-50 text-gold-600',
                bar: 'bg-gold-500',
                title: 'Donate',
                body: '₹500/month covers a scholar\'s monthly needs. ₹2,00,000 funds a complete 2-year scholarship. All donations are 80G tax-deductible.',
                cta: 'Donate Now',
                href: '/donate',
              },
              {
                icon: Users,
                color: 'bg-teal-50 text-teal-600',
                bar: 'bg-teal-500',
                title: 'Volunteer',
                body: 'Mentor a scholar, coordinate events, or speak at a Prerna session. Just 2 hours/month changes a life.',
                cta: 'Register Now',
                href: '/get-involved#volunteer',
              },
              {
                icon: Award,
                color: 'bg-navy-50 text-navy-700',
                bar: 'bg-navy-700',
                title: 'Partner (CSR)',
                body: 'Name a scholarship, sponsor Pratibha Poshan, or fund Prerna. Full transparency, quarterly reports, 80G receipts.',
                cta: 'Partner With Us',
                href: '/get-involved#csr',
              },
            ].map((item) => (
              <div key={item.title} className="card p-8 text-center flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display text-navy-700 mb-3">{item.title}</h3>
                <p className="text-csb-gray text-sm leading-relaxed mb-6 flex-1">{item.body}</p>
                <Link
                  href={item.href}
                  className={`btn-primary text-sm py-2.5 px-6 ${item.bar === 'bg-teal-500' ? 'btn-teal' : item.bar === 'bg-navy-700' ? 'bg-navy-700 hover:bg-navy-800 text-white' : ''}`}
                >
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-20 bg-csb-bg border-t border-gray-100"
        aria-labelledby="final-cta-heading"
      >
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="text-5xl mb-6">🎓</div>
          <h2
            id="final-cta-heading"
            className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-4"
          >
            The next scholar is waiting.
          </h2>
          <p className="text-csb-gray text-lg leading-relaxed mb-8">
            Applications for the 18th Vidya Vritti scholarship are open. Your donation today
            could be the reason a brilliant student from Bokaro makes it to IIT, NIT,
            or their dream college.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary text-base px-8 py-4">
              Fund a Scholar Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/programs#apply" className="btn-secondary text-base px-8 py-4">
              Student? Apply Now
            </Link>
          </div>
          <p className="text-xs text-csb-muted mt-6">
            80G Accredited · 12A Certified · Registered Charitable Trust · Est. 2009
          </p>
        </div>
      </section>
    </>
  )
}
