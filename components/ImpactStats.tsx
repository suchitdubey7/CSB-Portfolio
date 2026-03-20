'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface Stat {
  numericValue: number
  prefix?: string
  suffix?: string
  label: string
  sublabel?: string
  color?: string
}

const stats: Stat[] = [
  { numericValue: 36,  suffix: '+',  label: 'Scholars Transformed', sublabel: 'Lives changed since 2009',       color: 'text-gold-400'  },
  { numericValue: 17,               label: 'Years of Service',      sublabel: 'Never missed a single year',     color: 'text-teal-300'  },
  { numericValue: 200, suffix: '+',  label: 'Alumni Members',        sublabel: 'Contributing from across India', color: 'text-gold-400'  },
  { numericValue: 80,  suffix: 'G',  label: 'Tax Accredited',        sublabel: '50% deduction on all donations', color: 'text-teal-300'  },
]

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function StatItem({ stat, index, dark }: { stat: Stat; index: number; dark: boolean }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCounter(stat.numericValue, 1400, visible)

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
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={clsx('text-5xl lg:text-6xl font-bold font-display mb-2 tabular-nums', stat.color)}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className={clsx('font-semibold text-lg', dark ? 'text-white' : 'text-navy-700')}>{stat.label}</div>
      {stat.sublabel && (
        <div className={clsx('text-sm mt-1', dark ? 'text-white/55' : 'text-csb-gray')}>{stat.sublabel}</div>
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
  const isDark = variant === 'dark'

  return (
    <section
      className={clsx(
        'section-padding',
        isDark ? 'gradient-navy-teal' : 'bg-csb-bg',
        className
      )}
      aria-label="Impact statistics"
    >
      <div className="container-custom">
        {isDark && (
          <div className="text-center mb-12">
            <span className="tag-gold mb-3">Our Track Record</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mt-2">
              17 Years of Unbroken Commitment
            </h2>
            <p className="text-white/65 mt-3 text-lg max-w-xl mx-auto">
              Numbers that represent real people, real families, real futures changed.
            </p>
          </div>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} dark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}
