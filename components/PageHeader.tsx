import { ReactNode } from 'react'
import clsx from 'clsx'

interface PageHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  children?: ReactNode
  variant?: 'navy' | 'teal' | 'gradient'
  centered?: boolean
}

export default function PageHeader({
  tag,
  title,
  subtitle,
  children,
  variant = 'navy',
  centered = true,
}: PageHeaderProps) {
  const bgClasses = {
    navy:     'gradient-navy-teal',
    teal:     'bg-teal-500',
    gradient: 'bg-gradient-to-br from-navy-700 via-navy-800 to-teal-600',
  }

  return (
    <section
      className={clsx(
        'relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden',
        bgClasses[variant]
      )}
      aria-labelledby="page-title"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gold-500/10 rounded-full pointer-events-none" />

      <div className={clsx('container-custom relative z-10', centered && 'text-center')}>
        {tag && (
          <span className="inline-block mb-4 px-3 py-1 bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest rounded-full">
            {tag}
          </span>
        )}
        <h1
          id="page-title"
          className={clsx(
            'font-display font-bold text-white mb-4',
            'text-4xl sm:text-5xl lg:text-6xl',
            'text-balance leading-tight',
            centered ? 'max-w-4xl mx-auto' : 'max-w-3xl'
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className={clsx(
            'text-lg text-white/75 leading-relaxed',
            centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
          )}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
