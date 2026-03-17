import type { Metadata } from 'next'
import Link from 'next/link'
import {
  GraduationCap, BookOpen, Lightbulb, CheckCircle,
  ArrowRight, Calendar, Users, BookMarked
} from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'CSB runs three programs: Vidya Vritti (Class XI-XII scholarship), Pratibha Poshan (Class VII-X merit scholarship), and Baatein (alumni inspiration sessions).',
}

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        tag="Our Programs"
        title="From Class VII to XII — we have you covered."
        subtitle="Three programmes, one shared mission: no talented student should be left behind because of money."
      >
        <Link href="#apply" className="btn-primary">
          Apply for Scholarship <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHeader>

      {/* ── VIDYA VRITTI ──────────────────────────────────────────────── */}
      <section
        className="section-padding bg-white"
        id="vidya-vritti"
        aria-labelledby="vv-heading"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <span className="tag tag-teal">Flagship Programme</span>
                  <h2 id="vv-heading" className="text-2xl font-bold font-display text-navy-700 mt-1">
                    Vidya Vritti
                  </h2>
                </div>
              </div>
              <p className="text-csb-gray leading-relaxed mb-5">
                Vidya Vritti — meaning &ldquo;Education Subsistence&rdquo; — is CSB&apos;s flagship annual
                scholarship. Every year since 2009, we have selected two meritorious students
                from economically humble backgrounds and funded their complete education for
                Class XI and XII at Chinmaya Vidyalaya Bokaro.
              </p>
              <p className="text-csb-gray leading-relaxed mb-8">
                Now in its 18th consecutive edition, the programme has transformed 36+ lives.
                Scholars have gone on to IIT Bombay, topped district board exams, and built
                careers across industries — before returning to mentor the next cohort.
              </p>

              {/* What's covered */}
              <div className="bg-csb-bg rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-navy-700 mb-4">What the scholarship covers</h3>
                {[
                  'Monthly tuition fees (full, for 2 years)',
                  'School uniform (provided at start of scholarship)',
                  'Textbooks and study materials',
                  'Bus fee waived by Chinmaya Vidyalaya',
                  'Dedicated CSB mentor throughout Class XI–XII',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 mb-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-csb-dark">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-700 text-white rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold font-display text-gold-400">36+</div>
                  <div className="text-sm text-white/75 mt-1">Scholars since 2009</div>
                </div>
                <div className="bg-teal-500 text-white rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold font-display">18th</div>
                  <div className="text-sm text-white/75 mt-1">Edition (2026–27)</div>
                </div>
              </div>
            </div>

            {/* Selection process */}
            <div>
              <h3 className="text-xl font-bold font-display text-navy-700 mb-6">
                How scholars are selected
              </h3>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Application Opens',      body: 'Applications invited each January–February. Open to students completing Class X from Chinmaya Vidyalaya Bokaro.', icon: Calendar },
                  { step: '02', title: 'Eligibility Review',     body: 'CSB reviews Class X marks and verifies household income. Students must meet school admission eligibility.', icon: BookMarked },
                  { step: '03', title: 'Selection Committee',    body: 'A committee of alumni reviews applications. Two scholars are selected based on merit and financial need.', icon: Users },
                  { step: '04', title: 'Scholarship Begins',     body: 'Selected scholars join Class XI at Chinmaya Vidyalaya. Scholarship activates from day one of the academic year.', icon: GraduationCap },
                  { step: '05', title: 'Mentor Assigned',        body: 'Each scholar is paired with a dedicated CSB mentor for monthly guidance throughout the two-year period.', icon: CheckCircle },
                ].map(({ step, title, body, icon: Icon }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-10 h-10 bg-navy-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step}
                    </div>
                    <div className="flex-1 pb-5 border-b border-gray-100 last:border-0">
                      <h4 className="font-semibold text-navy-700 mb-1">{title}</h4>
                      <p className="text-sm text-csb-gray">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRATIBHA POSHAN ───────────────────────────────────────────── */}
      <section
        className="section-padding bg-csb-bg"
        id="pratibha-poshan"
        aria-labelledby="pp-heading"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Right side first on desktop for visual variety */}
            <div className="order-2 lg:order-1">
              <div className="card p-8">
                <h3 className="font-bold text-navy-700 mb-5 text-lg">Programme Details</h3>
                <div className="space-y-4">
                  {[
                    { l: 'Eligible Classes',   v: 'VII through X' },
                    { l: 'School',             v: 'Chinmaya Vidyalaya Bokaro' },
                    { l: 'Support',            v: 'Fixed monthly scholarship' },
                    { l: 'Selection',          v: 'CSB-conducted written test + income verification' },
                    { l: 'Purpose',            v: 'Sustain merit students through Classes VII–X so they can qualify for Vidya Vritti at Class XI' },
                  ].map(({ l, v }) => (
                    <div key={l} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                      <span className="text-sm font-semibold text-navy-700 min-w-[140px]">{l}:</span>
                      <span className="text-sm text-csb-gray">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 bg-gold-50 border border-gold-200 rounded-2xl p-6">
                <h4 className="font-bold text-navy-700 mb-2">Why this programme matters</h4>
                <p className="text-sm text-csb-gray leading-relaxed">
                  Many students who would qualify for Vidya Vritti can&apos;t economically survive
                  to Class XI without earlier support. Pratibha Poshan closes that gap, building
                  the talent pipeline that feeds into our flagship scholarship.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <span className="tag tag-gold">Merit Scholarship</span>
                  <h2 id="pp-heading" className="text-2xl font-bold font-display text-navy-700 mt-1">
                    Pratibha Poshan
                  </h2>
                </div>
              </div>
              <p className="text-csb-gray leading-relaxed mb-5">
                Pratibha Poshan — meaning &ldquo;Merit Nourishment&rdquo; — targets the critical years
                before Class XI. A fixed monthly scholarship is awarded to academically strong
                students from economically backward families in Classes VII through X.
              </p>
              <p className="text-csb-gray leading-relaxed mb-6">
                Selection is based on a CSB-conducted written test combined with income
                verification — ensuring that the most deserving students receive support
                precisely when they need it, before the system loses them.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Sustains bright students through the critical Class VII–X years',
                  'Reduces dropout risk due to economic pressure',
                  'Builds talent pipeline for the Vidya Vritti programme',
                  'CSB-administered merit test ensures fair selection',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-csb-dark">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BAATEIN ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" id="baatein" aria-labelledby="baatein-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-navy-700" />
                </div>
                <div>
                  <span className="tag tag-navy">Inspiration Sessions</span>
                  <h2 id="baatein-heading" className="text-2xl font-bold font-display text-navy-700 mt-1">
                    Baatein
                  </h2>
                </div>
              </div>
              <p className="text-csb-gray leading-relaxed mb-5">
                Baatein — meaning &ldquo;Conversations&rdquo; — brings successful Chinmaya Vidyalaya alumni
                from every professional field back to the school to share their journeys with
                current students. Engineers, doctors, finance professionals, civil servants,
                entrepreneurs — all alumni, all telling honest stories.
              </p>
              <p className="text-csb-gray leading-relaxed mb-6">
                For many students in Bokaro, Baatein sessions are the first time they see
                someone from their own background who made it. That visibility — &ldquo;someone like
                me did this&rdquo; — is one of the most powerful forces in education.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { l: 'Open to', v: 'All Chinmaya Vidyalaya students' },
                  { l: 'Format', v: 'In-person & online' },
                  { l: 'Cost', v: 'Free' },
                  { l: 'Duration', v: '1–2 hours per session' },
                ].map(({ l, v }) => (
                  <div key={l} className="bg-csb-bg rounded-xl p-4">
                    <div className="text-xs text-csb-muted mb-1">{l}</div>
                    <div className="text-sm font-semibold text-navy-700">{v}</div>
                  </div>
                ))}
              </div>
              <Link href="/get-involved#volunteer" className="btn-secondary">
                Volunteer to Speak at Baatein <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-navy-700 mb-6">Who speaks at Baatein?</h3>
              <div className="space-y-4">
                {[
                  { field: 'Technology & Engineering',   example: 'Software engineers, IITians, researchers at tech giants', icon: '💻' },
                  { field: 'Medicine & Healthcare',      example: 'Doctors, healthcare administrators, medical researchers',   icon: '⚕️' },
                  { field: 'Finance & Business',         example: 'Bankers, fintech professionals, entrepreneurs, CAs',        icon: '📊' },
                  { field: 'Civil Services & Law',       example: 'IAS/IPS officers, lawyers, policy professionals',           icon: '⚖️' },
                  { field: 'Arts, Media & Culture',      example: 'Journalists, designers, content creators, educators',       icon: '🎨' },
                ].map(({ field, example, icon }) => (
                  <div key={field} className="flex gap-4 p-4 bg-csb-bg rounded-xl">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <h4 className="font-semibold text-navy-700 text-sm">{field}</h4>
                      <p className="text-xs text-csb-gray mt-0.5">{example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY ─────────────────────────────────────────────────────── */}
      <section
        className="section-padding gradient-navy-teal"
        id="apply"
        aria-labelledby="apply-heading"
      >
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 id="apply-heading" className="text-3xl lg:text-4xl font-bold font-display text-white mb-4">
            Applications for Vidya Vritti 2026–27 are open.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            If you are completing Class X at Chinmaya Vidyalaya Bokaro this year and your
            family finds Class XI fees a challenge, CSB wants to hear from you. Merit and
            need are the only criteria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chinmayasmilesback@gmail.com?subject=Vidya Vritti Application 2026"
              className="btn-primary text-base px-8 py-4"
            >
              Apply via Email <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/contact" className="btn-outline-white text-base px-8 py-4">
              Contact Us
            </Link>
          </div>
          <p className="text-white/50 text-sm mt-6">
            Application deadline: March 2026 · Selection announced: April 2026
          </p>
        </div>
      </section>
    </>
  )
}
