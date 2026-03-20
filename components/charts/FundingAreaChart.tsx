'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const yearData = [
  { year: '2009', scholars: 2,  cumulative: 2  },
  { year: '2010', scholars: 2,  cumulative: 4  },
  { year: '2011', scholars: 2,  cumulative: 6  },
  { year: '2012', scholars: 3,  cumulative: 9  },
  { year: '2013', scholars: 2,  cumulative: 11 },
  { year: '2014', scholars: 2,  cumulative: 13 },
  { year: '2015', scholars: 2,  cumulative: 15 },
  { year: '2016', scholars: 2,  cumulative: 17 },
  { year: '2017', scholars: 2,  cumulative: 19 },
  { year: '2018', scholars: 2,  cumulative: 21 },
  { year: '2019', scholars: 2,  cumulative: 23 },
  { year: '2020', scholars: 2,  cumulative: 25 },
  { year: '2021', scholars: 2,  cumulative: 27 },
  { year: '2022', scholars: 2,  cumulative: 29 },
  { year: '2023', scholars: 2,  cumulative: 31 },
  { year: '2024', scholars: 2,  cumulative: 33 },
  { year: '2025', scholars: 2,  cumulative: 35 },
  { year: '2026', scholars: 2,  cumulative: 37 },
]

export default function FundingAreaChart() {
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
    labels: yearData.map(d => d.year),
    datasets: [
      {
        label: 'Cumulative Scholars',
        data: yearData.map(d => d.cumulative),
        borderColor: '#028090',
        backgroundColor: 'rgba(2, 128, 144, 0.12)',
        borderWidth: 2.5,
        pointBackgroundColor: '#028090',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Scholars Per Year',
        data: yearData.map(d => d.scholars),
        borderColor: '#F0A500',
        backgroundColor: 'rgba(240, 165, 0, 0.08)',
        borderWidth: 2,
        pointBackgroundColor: '#F0A500',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5,
        fill: false,
        tension: 0.4,
        borderDash: [5, 3],
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: visible ? 1800 : 0,
      easing: 'easeInOutQuart' as const,
    },
    interaction: { mode: 'index' as const, intersect: false },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: { family: 'Inter', size: 12 },
          color: '#6B7280',
          usePointStyle: true,
          pointStyleWidth: 8,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: '#1D3557',
        titleColor: '#F0A500',
        bodyColor: '#fff',
        borderColor: '#028090',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 10,
        callbacks: {
          label: (ctx: any) => ` ${ctx.dataset.label}: ${ctx.parsed.y} scholars`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(0,0,0,0.04)', drawTicks: false },
        ticks: {
          font: { family: 'Inter', size: 11 },
          color: '#6B7280',
          maxRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { family: 'Inter', size: 11 },
          color: '#6B7280',
          stepSize: 5,
        },
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className="w-full transition-all duration-700"
      style={{ height: 320, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
    >
      {visible && <Line data={data} options={options} />}
    </div>
  )
}
