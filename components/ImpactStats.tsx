'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface Stat {
  value: string
  label: string
  sublabel?: string
  color?: string
}

const stats: Stat[] = [
  { value: '36+',  label: 'Scholars Transformed', sublabel: 'Lives changed since 2009',       color: 'text-gold-400' },
  { value: '17',   label: 'Years of Service',      sublabel: 'Never missed a single year',     color: 'text-teal-300' },
  { value: '200+', label: 'Alumni Members',         sublabel: 'Contributing from across India', color: 'text-gold-400' },
  { value: '80G',  label: 'Tax Accredited',          sublabel: '50% deduction on all donations', color: 'text-teal-300' },
]

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={clsx(
        'text-center transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={clsx('text-5xl lg:text-6xl font-bold font-display mb-2', stat.color)}>
        {stat.value}
      </div>
      <div className="text-white font-semibold text-lg">{stat.label}</div>
      {stat.sublabel && (
        <div className="text-white/55 text-sm mt-1">{stat.sublabel}</div>
      )}
    </div>
  )
}

export default function ImpactStats({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  if (variant === 'light') {
    return (
      <section
        className={clsx('section-padding bg-csb-bg', className)}
        aria-label="Impact statistics"
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold font-display text-navy-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-navy-600 font-semibold text-lg">{stat.label}</div>
                {stat.sublabel && (
                  <div className="text-csb-gray text-sm mt-1">{stat.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className={clsx('section-padding gradient-navy-teal', className)}
      aria-label="Impact statistics"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="tag-gold mb-3">Our Track Record</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mt-2">
            17 Years of Unbroken Commitment
          </h2>
          <p className="text-white/65 mt-3 text-lg max-w-xl mx-auto">
            Numbers that represent real people, real families, real futures changed.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
