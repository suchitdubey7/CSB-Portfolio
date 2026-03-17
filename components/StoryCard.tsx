import Link from 'next/link'
import { Quote, ArrowRight } from 'lucide-react'
import clsx from 'clsx'

interface StoryCardProps {
  name: string
  achievement: string
  year: string
  quote: string
  program: string
  href?: string
  compact?: boolean
}

export default function StoryCard({
  name,
  achievement,
  year,
  quote,
  program,
  href = '/stories',
  compact = false,
}: StoryCardProps) {
  return (
    <article className={clsx('card card-hover h-full flex flex-col', compact ? 'p-6' : 'p-8')}>
      {/* Scholar badge */}
      <div className="flex items-center justify-between mb-5">
        <span className="tag tag-teal">{program}</span>
        <span className="text-xs text-csb-muted">{year}</span>
      </div>

      {/* Quote */}
      <div className="relative mb-6 flex-1">
        <Quote className="absolute -top-1 -left-1 w-8 h-8 text-teal-100 fill-teal-100" />
        <p className="pl-6 text-csb-dark leading-relaxed italic relative z-10 text-sm lg:text-base">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Scholar info */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="font-display font-semibold text-navy-700">{name}</p>
          <p className="text-sm text-teal-500 font-medium">{achievement}</p>
        </div>
        {href && (
          <Link
            href={href}
            className="w-9 h-9 bg-csb-bg hover:bg-teal-50 rounded-full flex items-center justify-center text-navy-400 hover:text-teal-600 transition-colors"
            aria-label={`Read ${name}'s full story`}
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </article>
  )
}
