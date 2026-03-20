'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function ImpactComparisonChart() {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const data = {
    labels: ['Scholarship Cost', 'Lifetime Economic Impact'],
    datasets: [{
      label: '₹ Value',
      data: [30000, 5000000],
      backgroundColor: ['rgba(2, 128, 144, 0.85)', 'rgba(240, 165, 0, 0.85)'],
      borderColor: ['#028090', '#F0A500'],
      borderWidth: 2,
      borderRadius: 10,
      borderSkipped: false,
    }],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: visible ? 1800 : 0,
      easing: 'easeInOutQuart' as const,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1D3557',
        titleColor: '#F0A500',
        bodyColor: '#fff',
        borderColor: '#028090',
        borderWidth: 1,
        padding: 14,
        cornerRadius: 10,
        callbacks: {
          label: (ctx: any) => {
            const val: number = ctx.parsed.y
            if (val >= 100000) return ` ₹${(val / 100000).toFixed(0)} Lakh+`
            return ` ₹${val.toLocaleString('en-IN')}`
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { family: 'Inter', size: 13, weight: 'bold' as const },
          color: '#1D3557',
        },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { family: 'Inter', size: 11 },
          color: '#6B7280',
          callback: (v: any) => {
            if (v >= 100000) return `₹${v / 100000}L`
            if (v >= 1000) return `₹${v / 1000}K`
            return `₹${v}`
          },
        },
      },
    },
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: 260,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {visible && <Bar data={data} options={options} />}
      {visible && (
        <div className="flex justify-around mt-3">
          <div className="text-center">
            <div className="text-xl font-bold font-display text-teal-500">₹30,000</div>
            <div className="text-xs text-csb-muted">Scholarship cost</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold font-display text-gold-500">166×</div>
            <div className="text-xs text-csb-muted">Return on investment</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold font-display text-gold-500">₹50L+</div>
            <div className="text-xs text-csb-muted">Lifetime impact</div>
          </div>
        </div>
      )}
    </div>
  )
}
