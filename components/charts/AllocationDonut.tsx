'use client'

import { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const slices = [
  { label: 'Vidya Vritti Scholarships', value: 70, color: '#028090' },
  { label: 'Pratibha Poshan',           value: 18, color: '#1D3557' },
  { label: 'Prerna Events',            value: 8,  color: '#F0A500' },
  { label: 'Administration',            value: 4,  color: '#CBD5E1' },
]

interface Props {
  variant?: 'light' | 'dark'
}

export default function AllocationDonut({ variant = 'light' }: Props) {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDark = variant === 'dark'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const data = {
    labels: slices.map(s => s.label),
    datasets: [{
      data: slices.map(s => s.value),
      backgroundColor: slices.map(s => s.color),
      borderColor: isDark ? '#1D3557' : '#ffffff',
      borderWidth: 3,
      hoverOffset: 8,
    }],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '68%',
    animation: {
      duration: visible ? 1600 : 0,
      easing: 'easeInOutQuart' as const,
      animateRotate: true,
      animateScale: true,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1D3557',
        titleColor: '#F0A500',
        bodyColor: '#fff',
        borderColor: '#028090',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 10,
        callbacks: {
          label: (ctx: any) => ` ${ctx.label}: ${ctx.parsed}%`,
        },
      },
    },
  }

  const labelColor = isDark ? 'text-white/80' : 'text-csb-dark'
  const subColor   = isDark ? 'text-white/50' : 'text-csb-muted'

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row items-center gap-8"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
    >
      {/* Chart */}
      <div className="relative flex-shrink-0" style={{ width: 200, height: 200 }}>
        {visible && <Doughnut data={data} options={options} />}
        {/* Centre label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className={`text-2xl font-bold font-display ${isDark ? 'text-gold-400' : 'text-teal-500'}`}>96%</span>
          <span className={`text-xs ${subColor}`}>to scholars</span>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3 flex-1 w-full">
        {slices.map(({ label, value, color }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className={`text-sm font-medium ${labelColor}`}>{label}</span>
                <span className={`text-sm font-bold ${isDark ? 'text-gold-400' : 'text-teal-600'}`}>{value}%</span>
              </div>
              <div className={`h-1.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: visible ? `${value}%` : '0%',
                    backgroundColor: color,
                    transitionDelay: '400ms',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
