'use client'

import { useEffect, useRef, useState } from 'react'

export default function ImpactComparisonChart() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="space-y-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {/* Two stat boxes + multiplier badge */}
      <div className="flex items-stretch gap-3">

        {/* LEFT — Cost */}
        <div className="flex-1 bg-teal-50 border border-teal-200 rounded-2xl p-4 text-center">
          <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
            You Invest
          </p>
          <p className="text-3xl font-bold font-display text-teal-600 leading-none">
            ₹2,00,000
          </p>
          <p className="text-xs text-teal-500 mt-1.5 font-medium">
            Full 2-year scholarship
          </p>
          <p className="text-xs text-csb-muted mt-1">
            Tuition · Books · Uniform · Mentorship
          </p>
        </div>

        {/* MIDDLE — multiplier arrow */}
        <div className="flex flex-col items-center justify-center gap-1 flex-shrink-0">
          <div className="text-2xl font-black font-display text-navy-700">25×</div>
          <div className="text-csb-muted text-lg">→</div>
          <div className="text-xs text-csb-muted font-medium text-center leading-tight">
            return
          </div>
        </div>

        {/* RIGHT — Lifetime Impact */}
        <div className="flex-1 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
            Lifetime Impact
          </p>
          <p className="text-3xl font-bold font-display text-amber-500 leading-none">
            ₹50L+
          </p>
          <p className="text-xs text-amber-500 mt-1.5 font-medium">
            Economic output generated
          </p>
          <p className="text-xs text-csb-muted mt-1">
            30-yr career · 3× income lift
          </p>
        </div>
      </div>

      {/* Proportional bar — visually shows the 25× ratio */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs text-csb-muted font-medium">Scholarship cost</span>
          <span className="text-xs text-csb-muted">vs</span>
          <span className="text-xs text-csb-muted font-medium">Lifetime economic output</span>
        </div>
        <div className="flex h-5 rounded-full overflow-hidden bg-slate-100">
          {/* Cost slice: 1 unit out of 26 total (1 cost + 25 impact) */}
          <div
            className="bg-teal-500 flex items-center justify-center text-white text-xs font-bold"
            style={{ width: `${(1/26)*100}%`, minWidth: 28 }}
          >
            1
          </div>
          {/* Impact slice: 25 units */}
          <div
            className="bg-amber-400 flex items-center justify-center text-navy-800 text-xs font-bold flex-1"
          >
            25×
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-teal-600 font-medium">₹2L invested</span>
          <span className="text-xs text-amber-600 font-medium">₹50L+ returned</span>
        </div>
      </div>

      {/* How we calculate */}
      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
        <p className="text-xs font-semibold text-navy-700 mb-1.5">How we calculate this</p>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-csb-muted">Avg. scholar monthly income (post-education)</span>
            <span className="font-semibold text-navy-700">₹40,000</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-csb-muted">vs. baseline without scholarship</span>
            <span className="font-semibold text-navy-700">₹12,000</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-csb-muted">Income uplift × 30-year career</span>
            <span className="font-semibold text-teal-600">₹28K × 360 = ₹1 Cr+</span>
          </div>
          <div className="border-t border-slate-200 pt-1 mt-1 flex justify-between text-xs">
            <span className="text-csb-muted">Conservative estimate used on site</span>
            <span className="font-bold text-amber-600">₹50 Lakh+</span>
          </div>
        </div>
      </div>
    </div>
  )
}
