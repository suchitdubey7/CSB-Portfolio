import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import clsx from 'clsx'

interface ProgramCardProps {
  icon: LucideIcon
  tag: string
  title: string
  description: string
  target: string
  coverage: string
  href: string
  accentColor?: 'navy' | 'teal' | 'gold'
  featured?: boolean
}

const colorMap = {
  navy: {
    tag:    'bg-navy-50 text-navy-700',
    icon:   'bg-navy-100 text-navy-700',
    border: 'border-navy-700',
    btn:    'bg-navy-700 hover:bg-navy-800 text-white',
    accent: 'bg-navy-700',
  },
  teal: {
    tag:    'bg-teal-50 text-teal-600',
    icon:   'bg-teal-100 text-teal-600',
    border: 'border-teal-500',
    btn:    'bg-teal-500 hover:bg-teal-600 text-white',
    accent: 'bg-teal-500',
  },
  gold: {
    tag:    'bg-gold-50 text-gold-600',
    icon:   'bg-gold-100 text-gold-600',
    border: 'border-gold-500',
    btn:    'bg-gold-500 hover:bg-gold-600 text-navy-700',
    accent: 'bg-gold-500',
  },
}

export default function ProgramCard({
  icon: Icon,
  tag,
  title,
  description,
  target,
  coverage,
  href,
  accentColor = 'teal',
  featured = false,
}: ProgramCardProps) {
  const c = colorMap[accentColor]

  return (
    <article
      className={clsx(
        'card card-hover flex flex-col h-full',
        featured && `border-t-4 ${c.border}`
      )}
    >
      <div className="p-8 flex-1 flex flex-col">
        {/* Icon */}
        <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center mb-5', c.icon)}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Tag */}
        <span className={clsx('tag mb-3', c.tag)}>{tag}</span>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-navy-700 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-csb-gray leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {/* Meta */}
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2 text-sm">
            <span className="font-semibold text-navy-700 min-w-[70px]">For:</span>
            <span className="text-csb-gray">{target}</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <span className="font-semibold text-navy-700 min-w-[70px]">Covers:</span>
            <span className="text-csb-gray">{coverage}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className={clsx(
            'mt-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md',
            c.btn
          )}
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}
