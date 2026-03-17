import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Target, Eye, Users, CheckCircle } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Chinmaya Smiles Back was founded in 2009 by alumni of Chinmaya Vidyalaya Bokaro. Learn our story, mission, vision, and the team behind 36+ transformed lives.',
}

const milestones = [
  { year: '2009', event: 'CSB founded; first Vidya Vritti scholarship awarded to 2 scholars',          icon: '🎓' },
  { year: '2012', event: 'Alumni network expands beyond Bokaro — members join from across India',       icon: '🌍' },
  { year: '2015', event: 'Pratibha Poshan launched for Class VII–X merit students',                     icon: '📚' },
  { year: '2017', event: 'Registered as Educational Charitable Trust (December 2017)',                   icon: '⚖️' },
  { year: '2020', event: 'Nitesh Kr Mahato: 98% boards, Bokaro district topper, 3rd in Jharkhand',     icon: '🏆' },
  { year: '2021', event: 'Shivani Mishra admitted to IIT Bombay — Electrical Engineering dual degree', icon: '🚀' },
  { year: '2023', event: '80G accreditation and 12A certification obtained',                            icon: '✅' },
  { year: '2026', event: '18th consecutive Vidya Vritti scholarship cycle — 36+ cumulative scholars',  icon: '⭐' },
]

const values = [
  { icon: CheckCircle, title: 'Merit First',              body: 'Scholars are selected on ability and need — never on connections or chance. The most deserving get the scholarship.' },
  { icon: Heart,       title: 'Dignity in Support',       body: 'We give help that empowers, not help that diminishes. Every scholar is treated as a future colleague, not a charity case.' },
  { icon: Users,       title: 'Community Accountability', body: 'Alumni are the guardians — not just donors. Every member of CSB is personally responsible for the scholarships we fund.' },
  { icon: Target,      title: 'Compounding Impact',       body: "Today's scholar is tomorrow's mentor. The flywheel compounds — without additional cost — every single year." },
]

const team = [
  { name: 'Dr. Ashok Singh',              role: 'Faculty Coordinator', org: 'Chinmaya Vidyalaya Bokaro' },
  { name: 'Mrs. Vyjayanthi Ravindranath', role: 'Faculty Coordinator', org: 'Chinmaya Vidyalaya Bokaro' },
  { name: 'Shashank Jha',                role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Ishaan Anand',                role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Madhurima Das',               role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Saurav Guhakarta',            role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Chinmoyee Ojha',             role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Sanjeeo Mishra',             role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Hrishikesh Chawda',          role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Amrendra Narayan',           role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Manisha Chawda',             role: 'Core Committee',      org: 'CSB Alumni' },
  { name: 'Kumar Shilpi',               role: 'Core Committee',      org: 'CSB Alumni' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        tag="About Chinmaya Smiles Back"
        title="Built by alumni. Powered by love."
        subtitle="We were shaped by Chinmaya Vidyalaya Bokaro. Now it's our turn to shape others."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/get-involved#donate" className="btn-primary">
            Donate Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/programs" className="btn-outline-white">
            Our Programs
          </Link>
        </div>
      </PageHeader>

      {/* ── STORY ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" id="story" aria-labelledby="story-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag tag-teal mb-4">Our Founding Story</span>
              <h2 id="story-heading" className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-6 leading-tight">
                Where we came from
              </h2>
              <div className="space-y-4 text-csb-gray leading-relaxed">
                <p>
                  In 2009, a group of Chinmaya Vidyalaya Bokaro alumni reconnected around a
                  simple, powerful idea: the school shaped our futures. It&apos;s our turn to
                  shape others&apos;.
                </p>
                <p>
                  With encouragement from their former principal, Hema Mam, they founded
                  Chinmaya Smiles Back — a volunteer-driven initiative with one immediate goal:
                  fund two meritorious, economically humble students through Class XI and XII.
                  No corporate backing. No government grant. Just alumni pooling resources for
                  the next generation.
                </p>
                <p>
                  That decision, made with zero fanfare in 2009, has never been reversed.
                  Seventeen years later, CSB operates with the same alumni-funded, volunteer-driven
                  ethos — now formalized as a registered charitable trust with 80G and 12A
                  certification.
                </p>
                <p className="font-semibold text-navy-700">
                  In 17 years, we have never missed a scholarship cycle. Not once.
                </p>
              </div>
            </div>
            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { v: '2009',  l: 'Year Founded',          c: 'bg-teal-500 text-white' },
                { v: '2017',  l: 'Registered Trust',       c: 'bg-navy-700 text-white' },
                { v: '36+',   l: 'Scholars Supported',     c: 'bg-gold-500 text-navy-700' },
                { v: '200+',  l: 'Alumni Contributors',    c: 'bg-csb-bg text-navy-700 border border-gray-100' },
                { v: '80G',   l: 'Tax Accredited',          c: 'bg-csb-bg text-navy-700 border border-gray-100' },
                { v: '100%',  l: 'Alumni-Funded',           c: 'bg-teal-50 text-teal-700' },
              ].map((s) => (
                <div key={s.l} className={`rounded-2xl p-6 text-center ${s.c}`}>
                  <div className="text-3xl font-bold font-display mb-1">{s.v}</div>
                  <div className="text-xs font-medium opacity-80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg" id="mission" aria-labelledby="mission-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Mission & Vision"
            title="The north star that guides every decision"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                label: 'Mission',
                color: 'border-teal-500',
                bg: 'bg-teal-500',
                text:
                  'To identify meritorious students from economically humble backgrounds and empower them through scholarships, mentorship, and community to achieve their full academic potential.',
              },
              {
                icon: Eye,
                label: 'Vision',
                color: 'border-gold-500',
                bg: 'bg-gold-500',
                text:
                  'A world where every talented student from Bokaro and Jharkhand — regardless of family income — has an equal shot at academic excellence, professional success, and a life of dignity.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`card p-10 border-t-4 ${item.color}`}
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-display text-navy-700 mb-4 uppercase tracking-wider">
                  {item.label}
                </h3>
                <p className="text-csb-gray leading-relaxed text-lg italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="values-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Core Values"
            title="What we stand for"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-7 text-center">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="font-display font-bold text-navy-700 mb-2">{title}</h3>
                <p className="text-sm text-csb-gray leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg" aria-labelledby="timeline-heading">
        <div className="container-custom">
          <SectionLabel
            tag="17 Years"
            title="A timeline of unbroken commitment"
            className="mb-12"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 lg:-translate-x-0.5" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-navy-700 text-white rounded-full flex items-center justify-center font-bold text-sm lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    {m.icon}
                  </div>

                  {/* Content */}
                  <div className={`ml-6 lg:ml-0 lg:w-5/12 ${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16 lg:ml-auto'}`}>
                    <div className="card p-5">
                      <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">{m.year}</span>
                      <p className="text-sm text-csb-dark leading-relaxed mt-1">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" id="team" aria-labelledby="team-heading">
        <div className="container-custom">
          <SectionLabel
            tag="Our People"
            title="The volunteers who make it possible"
            subtitle="Every person on this team is an alumnus giving their time, expertise, and heart — with no salary, no titles that matter, just commitment."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} className="card p-5 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-navy-700 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-navy-700 text-sm">{member.name}</h3>
                <p className="text-xs text-teal-500 font-medium mt-0.5">{member.role}</p>
                <p className="text-xs text-csb-muted mt-0.5">{member.org}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-csb-gray text-sm">
              …and 200+ alumni contributing from across India and the world.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
