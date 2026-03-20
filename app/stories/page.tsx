import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Quote, MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import ImpactStats from '@/components/ImpactStats'
import siteData from '@/content/site-data.json'

export const metadata: Metadata = {
  title: 'Scholar Stories',
  description:
    'Real stories from CSB scholars — Shivani at IIT Bombay, Nitesh the state board topper, Akash in fintech. Talent meets opportunity.',
}

const stories = [
  {
    id: 'shivani',
    name: 'Shivani Mishra',
    year: '2015 Cohort',
    program: 'Vidya Vritti',
    achievement: 'IIT Bombay — Electrical Engineering Dual Degree',
    location: 'Bokaro Steel City → Mumbai',
    quote:
      'I remember the day I got the call that CSB had selected me. My father is a contract worker at BSL. We had never imagined IIT was a real possibility for someone like me — until CSB showed me it was.',
    body: [
      'Shivani grew up in one of Bokaro\'s BSL township quarters, the eldest of three siblings. Her father\'s contract labour income left no room for coaching classes or study materials beyond what the school provided. She was consistently the brightest student in her class — but bright students without resources rarely convert potential into outcomes.',
      'In Class XI, Shivani was selected for the Vidya Vritti scholarship. The support covered her tuition, books, and coaching material for JEE preparation. More importantly, a CSB mentor — an IIT alumnus himself — began weekly sessions with her over phone, walking through problem sets and sharing what IIT life actually looked like.',
      'She cleared JEE Advanced and secured admission to IIT Bombay\'s prestigious Electrical Engineering Dual Degree programme. Today she is in her final year, with a research internship at a Bangalore semiconductor firm already completed.',
      'Shivani now mentors two current CSB scholars over video call — closing the loop that defines the CSB model.',
    ],
    stats: [
      { label: 'JEE Advanced rank', value: 'Top 2%' },
      { label: 'IIT Bombay', value: 'EE Dual Degree' },
      { label: 'Research internship', value: 'Completed' },
      { label: 'Now mentors', value: '2 scholars' },
    ],
    color: 'text-gold-500',
    tagColor: 'tag-gold',
  },
  {
    id: 'nitesh',
    name: 'Nitesh Kr Mahato',
    year: '2017 Cohort',
    program: 'Vidya Vritti',
    achievement: '98% in Class XII · Bokaro District Topper · 3rd in Jharkhand',
    location: 'Bokaro Steel City → Engineering College, Jharkhand',
    quote:
      'People in my mohalla thought scoring above 80% was exceptional. I didn\'t know that 98 was possible — or that I was capable of it. CSB didn\'t just give me money. They gave me belief.',
    body: [
      'Nitesh came from a family where his parents had completed only primary school. His father ran a small tea stall near the BSL gate; his mother was a homemaker. The idea of a district topper emerging from their household was, in their own words, "something from a film."',
      'Selected by CSB in Class XI on the strength of his Class X results and a rigorous interview, Nitesh received not just financial support but structured academic mentoring. His CSB mentor — an engineer who had grown up in Bokaro — set him a study schedule, provided access to premium digital resources, and held him to account every fortnight.',
      'When Class XII board results were declared, Nitesh had scored 98% — topping not just Bokaro district but ranking 3rd in the entire state of Jharkhand. The local newspaper covered his story. His tea-stall-owner father framed the article.',
      'He is currently pursuing a B.Tech at a top Jharkhand engineering college on a full merit scholarship, and has returned to CSB to speak at the most recent Baatein event.',
    ],
    stats: [
      { label: 'Class XII score', value: '98%' },
      { label: 'Bokaro ranking', value: '#1 District' },
      { label: 'Jharkhand ranking', value: '#3 State' },
      { label: 'Current', value: 'B.Tech (Merit)' },
    ],
    color: 'text-teal-500',
    tagColor: 'tag-teal',
  },
  {
    id: 'akash',
    name: 'Akash Kumar',
    year: '2012 Cohort',
    program: 'Vidya Vritti',
    achievement: 'Fintech Professional at Intelliflo, Hyderabad',
    location: 'Bokaro Steel City → Hyderabad',
    quote:
      'I was the first person in my family to move out of Bokaro for work. I was the first to own a laptop. CSB was the first domino — everything else followed from that.',
    body: [
      'Akash is one of CSB\'s earliest scholars — part of the 2012 cohort, just three years after the programme launched. His father worked in a support role at SAIL; the family lived in a shared accommodation block with three other families. "Engineering was a dream people from our locality didn\'t say out loud," Akash recalls.',
      'The Vidya Vritti scholarship gave Akash two years of fully supported Class XI and XII education. He cleared his board exams with distinction, and went on to complete a B.Tech in Computer Science from a Jharkhand state university. His first job was at a Kolkata-based IT services firm.',
      'Over the next decade, Akash built a fintech career through persistence and continuous learning — clearing multiple certification exams while working full-time. He now works at Intelliflo, a UK-headquartered wealth management software company, from their Hyderabad office.',
      'More than his career, Akash is proud of something else: three of his younger cousins from Bokaro have now pursued higher education — all of them inspired, in part, by watching him. "That\'s the real CSB impact," he says.',
    ],
    stats: [
      { label: 'B.Tech', value: 'Computer Science' },
      { label: 'Years in fintech', value: '7+' },
      { label: 'Current employer', value: 'Intelliflo' },
      { label: 'Family inspired', value: '3 cousins' },
    ],
    color: 'text-navy-700',
    tagColor: 'tag-navy',
  },
]

export default function StoriesPage() {
  return (
    <>
      <PageHeader
        tag="Scholar Stories"
        title="The proof is in the people."
        subtitle="Numbers summarise. Stories explain. Here are three lives where talent finally met opportunity."
      />

      <ImpactStats variant="dark" />

      {/* ── STORY CARDS ──────────────────────────────────────────────── */}
      {stories.map((story, idx) => (
        <section
          key={story.id}
          id={story.id}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-csb-bg'} scroll-mt-nav`}
          aria-labelledby={`${story.id}-heading`}
        >
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Left column — story content */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={story.tagColor}>{story.program}</span>
                  <span className="tag bg-gray-100 text-csb-gray">{story.year}</span>
                </div>
                <h2
                  id={`${story.id}-heading`}
                  className="text-3xl lg:text-4xl font-bold font-display text-navy-700 mb-2 leading-tight"
                >
                  {story.name}
                </h2>
                <p className={`font-semibold mb-1 ${story.color}`}>{story.achievement}</p>
                <div className="flex items-center gap-1.5 text-csb-muted text-sm mb-8">
                  <MapPin className="w-3.5 h-3.5" />
                  {story.location}
                </div>

                {/* Pull quote */}
                <blockquote className="relative mb-8 pl-6 border-l-4 border-teal-400">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 text-teal-300" />
                  <p className="text-lg italic text-csb-dark leading-relaxed">&ldquo;{story.quote}&rdquo;</p>
                </blockquote>

                {/* Story paragraphs */}
                <div className="space-y-4">
                  {story.body.map((para, i) => (
                    <p key={i} className="text-csb-gray leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Right column — stats + icon panel */}
              <div className="space-y-5">
                {/* Stats grid — uses keyStats from site-data.json (editable via /admin) */}
                {(() => {
                  const jsonStory = siteData.stories.find(s => s.id === story.id)
                  const statsToShow = jsonStory?.keyStats ?? story.stats
                  return (
                    <div className="grid grid-cols-2 gap-4">
                      {statsToShow.map(({ label, value }) => (
                        <div key={label} className="card p-5 text-center">
                          <div className={`text-2xl font-bold font-display mb-1 ${story.color}`}>{value}</div>
                          <p className="text-xs text-csb-muted leading-snug">{label}</p>
                        </div>
                      ))}
                    </div>
                  )
                })()}

                {/* Journey panel */}
                <div className="bg-navy-700 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold text-gold-400 mb-4 text-sm uppercase tracking-wide">The Journey</h3>
                  <div className="space-y-3">
                    {[
                      { icon: MapPin,          text: `Grew up in Bokaro Steel City` },
                      { icon: GraduationCap,   text: `Selected for Vidya Vritti scholarship` },
                      { icon: Heart,           text: story.achievement },
                      { icon: Briefcase,       text: 'Giving back to the next generation' },
                    ].map(({ icon: Icon, text }, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-3 h-3 text-teal-400" />
                        </div>
                        <p className="text-sm text-white/80 leading-snug">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA to get involved */}
                <div className="card p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">Fund the next {story.name.split(' ')[0]}.</p>
                    <p className="text-xs text-csb-muted mt-0.5">₹30,000 funds a complete 2-year scholarship.</p>
                  </div>
                  <Link href="/get-involved#donate" className="btn-primary text-sm flex-shrink-0">
                    Donate <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── MORE STORIES CONTEXT ─────────────────────────────────────── */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <SectionLabel
            tag="36+ Scholars"
            title="Every name is a story."
            subtitle="Shivani, Nitesh, and Akash represent three outcomes. There are 33+ more — engineers, teachers, government officers, entrepreneurs — all from Bokaro, all from families who couldn't have done it alone."
            centered
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { field: 'Engineering', count: '15+', color: 'text-teal-500' },
              { field: 'Finance & Fintech', count: '5+', color: 'text-navy-700' },
              { field: 'Government & Civil Services', count: '4+', color: 'text-gold-500' },
              { field: 'Education & Teaching', count: '6+', color: 'text-teal-500' },
            ].map(({ field, count, color }) => (
              <div key={field} className="card p-6 text-center">
                <div className={`text-3xl font-bold font-display mb-2 ${color}`}>{count}</div>
                <p className="text-sm text-csb-gray">{field}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-csb-muted text-sm mb-6">
              Are you a CSB scholar or alumnus? We&apos;d love to share your story.
            </p>
            <a
              href="mailto:chinmayasmiles@gmail.com?subject=My CSB Story"
              className="btn-secondary"
            >
              Share Your Story <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 gradient-navy-teal">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-white mb-4">
            Write the next chapter.
          </h2>
          <p className="text-white/75 mb-8">
            The 19th cohort begins soon. One scholarship. One family. One story that changes everything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved#donate" className="btn-primary text-base px-8 py-4">
              Fund a Scholar <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/get-involved#volunteer" className="btn-outline-white text-base px-8 py-4">
              Become a Mentor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
