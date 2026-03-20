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

const outcomes = [
  { field: 'Engineering & Tech',        count: 15, color: '#028090' },
  { field: 'Teaching & Education',       count: 6,  color: '#1D3557' },
  { field: 'Finance & Fintech',          count: 5,  color: '#F0A500' },
  { field: 'Govt & Civil Services',      count: 4,  color: '#0369A1' },
  { field: 'Healthcare',                 count: 3,  color: '#059669' },
  { field: 'Other Professions',          count: 4,  color: '#94A3B8' },
]

export default function OutcomesBarChart() {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const data = {
    labels: outcomes.map(o => o.field),
    datasets: [{
      label: 'Number of Alumni',
      data: outcomes.map(o => o.count),
      backgroundColor: outcomes.map(o => o.color + 'CC'),
      borderColor: outcomes.map(o => o.color),
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
    }],
  }

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: visible ? 1600 : 0,
      easing: 'easeInOutQuart' as const,
      delay: (ctx: any) => ctx.dataIndex * 120,
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
          label: (ctx: any) => ` ${ctx.parsed.x}+ alumni in this field`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 20,
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { family: 'Inter', size: 11 },
          color: '#6B7280',
          stepSize: 5,
          callback: (v: any) => `${v}+`,
        },
      },
      y: {
        grid: { display: false },
        ticks: {
          font: { family: 'Inter', size: 12 },
          color: '#374151',
        },
      },
    },
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: 280,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {visible && <Bar data={data} options={options} />}
    </div>
  )
}
