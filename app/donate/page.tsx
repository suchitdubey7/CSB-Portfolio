'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Copy, Check, Shield, Heart, Star, BadgeCheck } from 'lucide-react'

const tiers = [
  {
    amount: '₹500',
    amountRaw: '500',
    period: '/month',
    label: 'Sustaining Gift',
    description: "Covers a scholar's monthly stationery, transport, and incidentals for one month.",
    color: 'border-slate-200',
    badge: null,
    featured: false,
  },
  {
    amount: '₹5,000',
    amountRaw: '5000',
    period: 'one-time',
    label: 'Book Fund',
    description: 'Covers the complete textbook and study material set for one full academic year.',
    color: 'border-slate-200',
    badge: null,
    featured: false,
  },
  {
    amount: '₹25,000',
    amountRaw: '25000',
    period: 'one-time',
    label: 'Semester Sponsor',
    description: "Funds tuition fees, uniform, and books for one semester of a scholar's education.",
    color: 'border-teal-400',
    badge: 'Popular',
    featured: false,
  },
  {
    amount: '₹2,00,000',
    amountRaw: '200000',
    period: 'one-time',
    label: 'Full Scholarship',
    description: "Fully funds one student's entire Class XI–XII journey — fees, uniform, books, and mentorship for 2 complete years.",
    color: 'border-gold-400',
    badge: 'Transform a Life',
    featured: true,
  },
]

const bankDetails = [
  { label: 'Account Name', value: 'Chinmaya Smiles Back' },
  { label: 'Account Number', value: '6647579907' },
  { label: 'IFSC Code', value: 'IDIB000S178' },
  { label: 'Bank', value: 'Indian Bank, Allahabad' },
]

const UPI_ID = 'csb@indianbk'
const UPI_DEEP_LINK = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent('Chinmaya Smiles Back')}&cu=INR`
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=14&color=1D3557&data=${encodeURIComponent(UPI_DEEP_LINK)}`

// ── What your amount covers ────────────────────────────────────────────────
function getImpactLabel(amount: number): string {
  if (!amount || amount <= 0) return 'Enter an amount to see your impact'
  if (amount < 500)  return `Every rupee matters — ₹${amount.toLocaleString('en-IN')} goes directly to a scholar`
  if (amount < 1000) return 'Covers one month of a scholar\'s stationery, transport & incidentals'
  if (amount < 2500) return `Covers ${Math.floor(amount / 500)} months of a scholar's monthly needs`
  if (amount < 5000) return 'Covers a scholar\'s complete textbook set for one subject area'
  if (amount < 10000) return 'Covers all textbooks and study material for a full academic year'
  if (amount < 25000) return 'Covers half a semester — tuition or uniform and books'
  if (amount < 50000) return 'Funds one complete semester — tuition, uniform, and books'
  if (amount < 100000) return `Covers ${Math.round((amount / 200000) * 100)}% of a full 2-year scholarship`
  if (amount < 200000) return 'Funds half a complete 2-year Vidya Vritti scholarship'
  if (amount === 200000) return '🎓 Funds one complete 2-year scholarship — transforms a life'
  return `🎓 Funds ${(amount / 200000).toFixed(1).replace('.0', '')} complete scholarships — extraordinary impact`
}

const PRESETS = [
  { label: '₹1,000',    value: 1000 },
  { label: '₹2,500',    value: 2500 },
  { label: '₹5,000',    value: 5000 },
  { label: '₹10,000',   value: 10000 },
  { label: '₹25,000',   value: 25000 },
  { label: '₹1,00,000', value: 100000 },
]

function CustomDonation({ onPay }: { onPay: (amount: number) => void }) {
  const [rawInput, setRawInput] = useState('')
  const [selected, setSelected] = useState<number | null>(null)

  const numericAmount = selected ?? (rawInput ? parseInt(rawInput.replace(/\D/g, ''), 10) || 0 : 0)
  const impactLabel   = getImpactLabel(numericAmount)

  function handlePreset(val: number) {
    setSelected(val)
    setRawInput(val.toLocaleString('en-IN'))
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, '')
    setSelected(null)
    setRawInput(digits)
  }

  const displayAmount = numericAmount > 0
    ? `₹${numericAmount.toLocaleString('en-IN')}`
    : 'an amount'

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-navy-900 px-8 py-5">
        <h3 className="font-bold text-white text-lg">Choose your own amount</h3>
        <p className="text-white/55 text-sm mt-0.5">Any amount, any time — every rupee reaches a scholar</p>
      </div>

      <div className="p-8 space-y-6">
        {/* Quick-pick presets */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Quick pick</p>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => handlePreset(p.value)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                  selected === p.value
                    ? 'bg-navy-900 border-navy-900 text-white shadow-md scale-105'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-teal-400 hover:text-teal-700'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Custom input */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Or type your amount</p>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400 select-none">₹</span>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="0"
              value={rawInput}
              onChange={handleInput}
              onFocus={() => setSelected(null)}
              className="w-full pl-10 pr-4 py-4 text-2xl font-bold text-navy-900 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Impact label */}
        <div className={`rounded-2xl px-5 py-3.5 text-sm font-medium transition-colors ${
          numericAmount >= 200000
            ? 'bg-gold-50 border border-gold-200 text-gold-800'
            : numericAmount > 0
            ? 'bg-teal-50 border border-teal-100 text-teal-800'
            : 'bg-slate-50 border border-slate-100 text-slate-400'
        }`}>
          {impactLabel}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* UPI button */}
          <button
            type="button"
            disabled={numericAmount === 0}
            onClick={() => numericAmount > 0 && onPay(numericAmount)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all ${
              numericAmount > 0
                ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M5.5 2h13A2.5 2.5 0 0121 4.5v15a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 19.5v-15A2.5 2.5 0 015.5 2zm6.5 3L7 10h3.5v7h2V10H16L12 5z"/>
            </svg>
            Pay {displayAmount} via UPI
          </button>

        </div>

        <p className="text-xs text-slate-400 text-center -mt-2">
          Tap "Pay via UPI" on mobile · Scan QR with PhonePe, GPay, BHIM or Paytm
        </p>
      </div>
    </div>
  )
}

// ── Donor Details Modal ────────────────────────────────────────────────────
function DonorModal({ amount, onClose }: { amount: number; onClose: () => void }) {
  const [name,   setName]   = useState('')
  const [pan,    setPan]    = useState('')
  const [mobile, setMobile] = useState('')
  const [email,  setEmail]  = useState('')
  const [step,   setStep]   = useState<'form' | 'pay'>('form')

  const panValid    = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan.toUpperCase())
  const mobileValid = /^\d{10}$/.test(mobile.replace(/[\s\-+]/g, '').replace(/^91/, ''))
  const emailValid  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isValid     = name.trim().length >= 2 && panValid && mobileValid && emailValid

  const upiLink = `upi://pay?pa=${UPI_ID}&pn=Chinmaya%20Smiles%20Back&am=${amount}&cu=INR`
  const qrUrl   = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=12&color=1D3557&data=${encodeURIComponent(upiLink)}`

  function handleProceed() {
    const msg = [
      '🎓 New CSB Donation Details',
      '',
      `Name:   ${name}`,
      `PAN:    ${pan.toUpperCase()}`,
      `Mobile: ${mobile}`,
      `Email:  ${email}`,
      `Amount: ₹${amount.toLocaleString('en-IN')}`,
      '',
      'Please issue 80G receipt.',
    ].join('\n')
    window.open(`https://wa.me/919930287551?text=${encodeURIComponent(msg)}`, '_blank')
    setStep('pay')
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[92vh] overflow-y-auto">

        {step === 'form' ? (
          <>
            {/* ── Form header ── */}
            <div className="bg-navy-900 rounded-t-3xl px-8 py-6">
              <p className="text-white/55 text-xs uppercase tracking-widest mb-1">Donating</p>
              <p className="text-3xl font-bold text-gold-400">₹{amount.toLocaleString('en-IN')}</p>
              <p className="text-white/55 text-xs mt-1.5">
                Required for your 80G tax certificate
              </p>
            </div>

            <div className="p-8 space-y-4">
              {/* Full Name */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="As per PAN card"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-navy-900 focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-300"
                />
              </div>

              {/* PAN */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                  PAN Card Number *
                </label>
                <input
                  type="text"
                  value={pan}
                  onChange={(e) => setPan(e.target.value.toUpperCase())}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                  className={`w-full px-4 py-3 border-2 rounded-xl font-mono tracking-widest text-navy-900 focus:outline-none focus:border-teal-500 transition-colors placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-300 ${
                    pan && !panValid ? 'border-red-300 bg-red-50' : 'border-slate-200'
                  }`}
                />
                {pan && !panValid && (
                  <p className="text-xs text-red-500 mt-1">Format: 5 letters · 4 digits · 1 letter — e.g. ABCDE1234F</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-navy-900 focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="For 80G receipt delivery"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-navy-900 focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-300"
                />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Your details are used <strong>only</strong> to issue your 80G tax certificate and send donation
                updates — never shared with third parties.
              </p>

              <button
                type="button"
                disabled={!isValid}
                onClick={handleProceed}
                className={`w-full py-4 rounded-2xl font-bold text-base transition-all ${
                  isValid
                    ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:-translate-y-0.5'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                Confirm &amp; Proceed to Payment
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            {/* ── Payment step ── */}
            <div className="bg-teal-600 rounded-t-3xl px-8 py-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold text-sm">Details sent to CSB via WhatsApp</span>
              </div>
              <p className="text-white/70 text-sm">
                Now complete your{' '}
                <strong className="text-white">₹{amount.toLocaleString('en-IN')}</strong> payment
              </p>
            </div>

            <div className="p-8 space-y-5">
              {/* UPI button */}
              <a
                href={upiLink}
                className="flex items-center justify-center gap-2 w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-base shadow-lg transition-all hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M5.5 2h13A2.5 2.5 0 0121 4.5v15a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 19.5v-15A2.5 2.5 0 015.5 2zm6.5 3L7 10h3.5v7h2V10H16L12 5z"/>
                </svg>
                Pay ₹{amount.toLocaleString('en-IN')} via UPI App
              </a>

              {/* QR code */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrUrl} alt={`QR to pay ₹${amount.toLocaleString('en-IN')}`} width={160} height={160} className="rounded-lg" />
                </div>
                <p className="text-xs text-slate-400">Scan with PhonePe · GPay · BHIM · Paytm</p>
              </div>

              {/* Bank transfer note */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Prefer bank transfer? Your details have already been sent to CSB — just use the{' '}
                  account details in the <strong>Payment Methods</strong> section below and mention
                  your name in the transfer remarks.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
        copied
          ? 'bg-green-100 text-green-700'
          : 'bg-teal-50 hover:bg-teal-100 text-teal-700'
      }`}
      aria-label={`Copy ${label ?? value}`}
      type="button"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? 'Copied!' : (label ?? 'Copy')}
    </button>
  )
}

export default function DonatePage() {
  const [payAmount, setPayAmount] = useState<number | null>(null)

  return (
    <>
      {/* Donor details modal — gates all payment buttons */}
      {payAmount !== null && (
        <DonorModal amount={payAmount} onClose={() => setPayAmount(null)} />
      )}

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="gradient-navy-teal section-padding pt-28">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <span className="tag mb-4 bg-white/20 text-white border border-white/20 text-xs tracking-widest uppercase">
            Donate
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold font-display text-white mb-5 leading-tight">
            One gift.{' '}
            <span className="text-gold-400">Two years of possibility.</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            ₹2,00,000 covers everything — fees, uniform, books — for a talented student who otherwise
            couldn't afford Class XI and XII. Every donation is 80G certified (50% tax exemption).
          </p>
        </div>
      </section>

      {/* ── DONATION TIERS ────────────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy-900 mb-3">Choose your impact</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Every amount matters. Whether you give ₹500 a month or fund a complete scholarship, you become part of a student's story.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`relative bg-white rounded-3xl p-6 border-2 ${tier.color} flex flex-col ${
                  tier.featured ? 'shadow-xl ring-2 ring-gold-400/30' : 'shadow-sm'
                }`}
              >
                {tier.badge && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      tier.featured ? 'bg-gold-400 text-navy-900' : 'bg-teal-500 text-white'
                    }`}
                  >
                    {tier.badge}
                  </span>
                )}
                <div className="mb-3">
                  <span className={`text-3xl font-bold font-display ${tier.featured ? 'text-gold-600' : 'text-navy-900'}`}>
                    {tier.amount}
                  </span>
                  <span className="text-slate-400 text-sm ml-1">{tier.period}</span>
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{tier.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{tier.description}</p>
                <button
                  type="button"
                  onClick={() => setPayAmount(Number(tier.amountRaw))}
                  className={`mt-5 w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    tier.featured
                      ? 'bg-gold-400 hover:bg-gold-500 text-navy-900'
                      : 'bg-navy-900 hover:bg-navy-800 text-white'
                  }`}
                >
                  Donate {tier.amount}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400">
            Tap "Donate" on mobile to open your UPI app directly. On desktop, use the QR code or bank transfer below.
          </p>
        </div>
      </section>

      {/* ── CUSTOM AMOUNT ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-display text-navy-900 mb-3">Have a different amount in mind?</h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Pick any amount — we accept from ₹1 upward. See exactly what your gift covers as you type.
            </p>
          </div>
          <CustomDonation onPay={(amt) => setPayAmount(amt)} />
        </div>
      </section>

      {/* ── PAYMENT METHODS ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy-900 mb-3">Payment methods</h2>
            <p className="text-slate-500">Scan, tap, or transfer — whatever works for you.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* ── UPI / QR ─── */}
            <div className="bg-csb-bg rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-teal-600" fill="currentColor">
                    <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm7-2h7v7h-7V3zm2 2v3h3V5h-3zM3 13h7v7H3v-7zm2 2v3h3v-3H5zm9 0h2v2h-2v-2zm2-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">UPI / QR Code</h3>
                  <p className="text-slate-500 text-sm">Works with PhonePe, GPay, Paytm, BHIM &amp; more</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5">
                {/* QR Code generated from UPI deep link */}
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={QR_URL}
                    alt="UPI QR Code for Chinmaya Smiles Back"
                    width={240}
                    height={240}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-xs text-slate-400 -mt-2">Scan with any UPI app to pay any amount</p>

                {/* UPI ID row */}
                <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">UPI ID</p>
                    <p className="font-bold text-navy-900 text-xl tracking-wide font-mono">{UPI_ID}</p>
                  </div>
                  <CopyButton value={UPI_ID} label="Copy" />
                </div>

                {/* Supported apps logos row */}
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  {['PhonePe', 'GPay', 'Paytm', 'BHIM'].map((app) => (
                    <span key={app} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Bank Transfer ─── */}
            <div className="bg-csb-bg rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-navy-700" fill="currentColor">
                    <path d="M2 10.5V8l10-6 10 6v2.5h-2V20h2v2H2v-2h2V10.5H2zm4 0V20h3v-6h6v6h3V10.5H6zm8 9.5v-4h-4v4h4zM12 4.236 5.198 8.5h13.604L12 4.236z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">Bank Transfer / NEFT / IMPS</h3>
                  <p className="text-slate-500 text-sm">Direct transfer to our Indian Bank account</p>
                </div>
              </div>

              <div className="space-y-3">
                {bankDetails.map(({ label, value }) => (
                  <div key={label} className="bg-white rounded-xl p-3.5 flex items-center justify-between border border-slate-100">
                    <div>
                      <p className="text-xs text-slate-400">{label}</p>
                      <p className="font-semibold text-navy-900 text-sm font-mono">{value}</p>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(value)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-600"
                      aria-label={`Copy ${label}`}
                      type="button"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>After transfer:</strong> please email{' '}
                  <a href="mailto:chinmayasmiles@gmail.com" className="underline">chinmayasmiles@gmail.com</a>{' '}
                  with your transaction ID so we can issue your 80G receipt promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 80G TRUST SECTION ─────────────────────────────────────────── */}
      <section className="section-padding bg-csb-bg">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-gold-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-7 h-7 text-gold-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-display text-navy-900 mb-2">
                  80G Certified — 50% Tax Exemption on Every Donation
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Chinmaya Smiles Back is a registered trust under the Income Tax Act with 80G certification.
                  All donations qualify for <strong>50% tax deduction</strong> — you will receive an official receipt
                  within 7 working days.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Shield, title: 'Registered Trust', body: 'Legally registered NGO with full statutory compliance' },
                    { icon: BadgeCheck, title: '80G Certified', body: 'Official 50% tax deduction on all donations' },
                    { icon: Star, title: '17 Years Active', body: 'Unbroken since 2007 — no corporate backing needed' },
                  ].map(({ icon: Icon, title, body }) => (
                    <div key={title} className="bg-csb-bg rounded-2xl p-4">
                      <Icon className="w-5 h-5 text-teal-600 mb-2" />
                      <p className="font-semibold text-navy-900 text-sm mb-1">{title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-display text-navy-900 mb-8 text-center">Common questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly will I get my 80G receipt?',
                a: 'Within 7 working days. If you pay via UPI or QR, please email chinmayasmiles@gmail.com with your transaction ID so we can issue it promptly.',
              },
              {
                q: 'Can I donate in instalments toward a full scholarship?',
                a: 'Yes — email us after your first donation and we will track your contributions under a single scholarship pledge. Once ₹2,00,000 is reached, we can name the scholarship after you if you wish.',
              },
              {
                q: 'Can my company donate under CSR?',
                a: 'Absolutely. CSR donations qualify under Schedule VII of the Companies Act. Email chinmayasmiles@gmail.com for an MOU and company-specific receipts.',
              },
              {
                q: 'Is there a minimum donation amount?',
                a: 'No minimum — every rupee goes toward a scholar. We process any amount from ₹1 upward.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-csb-bg rounded-2xl p-6 border border-slate-100">
                <p className="font-semibold text-navy-900 mb-2">{q}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="section-padding gradient-navy-teal">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <Heart className="w-10 h-10 text-gold-400 mx-auto mb-5" />
          <h2 className="text-3xl font-bold font-display text-white mb-4">Still have questions?</h2>
          <p className="text-white/70 mb-8">
            We are happy to walk you through the scholarship process, share scholar updates, or set up a call.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/impact" className="btn-outline-white">
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
