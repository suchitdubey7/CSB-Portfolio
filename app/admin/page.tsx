'use client'

import { useState, useEffect, type ReactNode } from 'react'
import {
  Save, RefreshCw, Check, AlertCircle, Plus, Trash2,
  Eye, EyeOff, Lock, Unlock, ExternalLink, ChevronDown, ChevronUp,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// GitHub helpers
// ─────────────────────────────────────────────────────────────────────────────
const REPO      = 'suchitdubey7/CSB-Portfolio'
const FILE_PATH = 'content/site-data.json'
const GITHUB_API = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`

async function ghFetch(token: string) {
  const res = await fetch(GITHUB_API, {
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' },
  })
  if (res.status === 401) throw new Error('Invalid token — check your GitHub Personal Access Token')
  if (res.status === 404) throw new Error('site-data.json not found in /content/ folder')
  if (!res.ok)            throw new Error(`GitHub error ${res.status}`)
  const json = await res.json()
  return { sha: json.sha as string, data: JSON.parse(atob(json.content.replace(/\n/g, ''))) }
}

async function ghSave(token: string, sha: string, data: unknown) {
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))))
  const res = await fetch(GITHUB_API, {
    method: 'PUT',
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: `Update site content — ${new Date().toLocaleString('en-IN')}`, content, sha }),
  })
  if (!res.ok) { const e = await res.json(); throw new Error(e.message || 'Save failed') }
  return (await res.json()).content.sha as string
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared UI primitives
// ─────────────────────────────────────────────────────────────────────────────
function Field({
  label, value, onChange, type = 'text', hint, prefix,
}: {
  label: string; value: string; onChange: (v: string) => void
  type?: string; hint?: string; prefix?: string
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">{label}</label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-slate-400 text-sm select-none">{prefix}</span>
        )}
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`w-full border-2 border-slate-200 rounded-xl text-navy-900 focus:outline-none focus:border-teal-500 transition-colors ${prefix ? 'pl-7 pr-4' : 'px-4'} py-2.5 text-sm`}
        />
      </div>
      {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
    </div>
  )
}

function Toggle({ label, value, onChange, hint }: { label: string; value: boolean; onChange: (v: boolean) => void; hint?: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-navy-900">{label}</p>
        {hint && <p className="text-xs text-slate-400 mt-0.5">{hint}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`flex-shrink-0 w-11 h-6 rounded-full transition-colors relative ${value ? 'bg-teal-500' : 'bg-slate-300'}`}
      >
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${value ? 'translate-x-5' : ''}`} />
      </button>
    </div>
  )
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 ${className}`}>{children}</div>
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Stats
// ─────────────────────────────────────────────────────────────────────────────
function StatsTab({ data, onChange }: { data: Record<string, string>; onChange: (v: Record<string, string>) => void }) {
  const set = (key: string, val: string) => onChange({ ...data, [key]: val })

  const fields: { key: string; label: string; hint: string; prefix?: string }[] = [
    { key: 'scholarsSupported', label: 'Scholars Supported',  hint: 'Shown in hero and stats strips. E.g. "36+" or "40+"' },
    { key: 'yearsActive',       label: 'Years Active',        hint: 'How many continuous years CSB has run. E.g. "17" or "18"' },
    { key: 'communityMembers',  label: 'Community Members',   hint: 'Number of active donors/volunteers. E.g. "200+"' },
    { key: 'currentBatch',      label: 'Current Batch',       hint: 'Vidya Vritti batch number. E.g. "18th" or "19th"' },
    { key: 'scholarshipAmount', label: 'Full Scholarship (₹)', hint: 'Total cost per scholar for 2 years. E.g. "2,00,000"', prefix: '₹' },
    { key: 'totalDisbursed',    label: 'Total Disbursed',     hint: 'Total amount given to scholars till date. E.g. "₹50L+"' },
    { key: 'returnMultiplier',  label: 'Return Multiplier',   hint: 'Impact ROI shown on Impact page. E.g. "166×"' },
    { key: 'successRate',       label: 'Success Rate',        hint: 'Shown as a trust signal. E.g. "100%"' },
  ]

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {fields.map(({ key, label, hint, prefix }) => (
        <Card key={key}>
          <Field label={label} value={data[key] ?? ''} onChange={v => set(key, v)} hint={hint} prefix={prefix} />
        </Card>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Announcement Banner
// ─────────────────────────────────────────────────────────────────────────────
function AnnouncementTab({ data, onChange }: { data: Record<string, unknown>; onChange: (v: Record<string, unknown>) => void }) {
  const set = (key: string, val: unknown) => onChange({ ...data, [key]: val })
  return (
    <div className="space-y-5 max-w-2xl">
      <Card>
        <div className="space-y-5">
          <Toggle
            label="Show announcement banner"
            value={!!data.active}
            onChange={v => set('active', v)}
            hint="Displays a highlighted banner on the homepage hero"
          />
          <Field
            label="Announcement text"
            value={String(data.text ?? '')}
            onChange={v => set('text', v)}
            hint='E.g. "Applications for the 18th Vidya Vritti scholarship are now open."'
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Link URL"
              value={String(data.link ?? '')}
              onChange={v => set('link', v)}
              hint='E.g. "/programs" or "/donate"'
            />
            <Field
              label="Link text"
              value={String(data.linkText ?? '')}
              onChange={v => set('linkText', v)}
              hint='E.g. "Apply Now" or "Learn More"'
            />
          </div>
        </div>
      </Card>
      {data.active && (
        <div className="bg-gold-50 border border-gold-200 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gold-700 uppercase tracking-wider mb-1">Preview</p>
          <p className="text-sm text-gold-900">
            {String(data.text ?? '')}
            {data.linkText && <span className="ml-2 font-semibold underline">{String(data.linkText)}</span>}
          </p>
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Scholar Stories
// ─────────────────────────────────────────────────────────────────────────────
type Story = {
  id: string; name: string; batch: string; program: string
  achievement: string; location: string; quote: string; color: string
  keyStats: { label: string; value: string }[]
}

const BLANK_STORY: Story = {
  id: '', name: '', batch: '', program: 'Vidya Vritti', achievement: '',
  location: '', quote: '', color: 'teal',
  keyStats: [
    { label: 'Degree', value: '' }, { label: 'Year', value: '' },
    { label: 'Current role', value: '' }, { label: 'Impact', value: '' },
  ],
}

function StoryCard({
  story, index, onUpdate, onDelete,
}: { story: Story; index: number; onUpdate: (s: Story) => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false)
  const set = (key: keyof Story, val: unknown) => onUpdate({ ...story, [key]: val })

  return (
    <Card>
      {/* Header row */}
      <div className="flex items-center justify-between mb-0">
        <button type="button" onClick={() => setOpen(o => !o)} className="flex items-center gap-3 flex-1 text-left">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
            story.color === 'gold' ? 'bg-gold-400' : story.color === 'teal' ? 'bg-teal-500' : 'bg-navy-800'
          }`}>
            {story.name ? story.name[0] : '?'}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-navy-900 text-sm truncate">{story.name || 'Unnamed Scholar'}</p>
            <p className="text-xs text-slate-400 truncate">{story.achievement || 'No achievement set'}</p>
          </div>
          {open ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />}
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="ml-3 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          title="Delete story"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {open && (
        <div className="mt-5 space-y-4 pt-5 border-t border-slate-100">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" value={story.name} onChange={v => set('name', v)} />
            <Field label="Batch" value={story.batch} onChange={v => set('batch', v)} hint='E.g. "2015 Cohort"' />
            <Field label="Program" value={story.program} onChange={v => set('program', v)} hint='Vidya Vritti or Pratibha Poshan' />
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Card Color</label>
              <div className="flex gap-2">
                {(['gold', 'teal', 'navy'] as const).map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => set('color', c)}
                    className={`w-8 h-8 rounded-xl border-2 transition-all ${
                      story.color === c ? 'scale-110 border-navy-900' : 'border-transparent'
                    } ${c === 'gold' ? 'bg-gold-400' : c === 'teal' ? 'bg-teal-500' : 'bg-navy-800'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <Field label="Achievement headline" value={story.achievement} onChange={v => set('achievement', v)} hint='Shown as the main title under the name. E.g. "IIT Bombay — EE Dual Degree"' />
          <Field label="Location journey" value={story.location} onChange={v => set('location', v)} hint='E.g. "Bokaro Steel City → Mumbai"' />
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Quote</label>
            <textarea
              value={story.quote}
              onChange={e => set('quote', e.target.value)}
              rows={3}
              className="w-full border-2 border-slate-200 rounded-xl text-navy-900 px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
              placeholder="A quote from the scholar in their own words..."
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Stats (4 stats shown on the card)</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {story.keyStats.map((stat, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    value={stat.label}
                    onChange={e => {
                      const ns = [...story.keyStats]; ns[i] = { ...ns[i], label: e.target.value }
                      set('keyStats', ns)
                    }}
                    placeholder="Label"
                    className="flex-1 border-2 border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <input
                    type="text"
                    value={stat.value}
                    onChange={e => {
                      const ns = [...story.keyStats]; ns[i] = { ...ns[i], value: e.target.value }
                      set('keyStats', ns)
                    }}
                    placeholder="Value"
                    className="flex-1 border-2 border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-navy-900 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}

function StoriesTab({ data, onChange }: { data: Story[]; onChange: (v: Story[]) => void }) {
  function updateStory(i: number, s: Story) { const n = [...data]; n[i] = s; onChange(n) }
  function deleteStory(i: number) { onChange(data.filter((_, j) => j !== i)) }
  function addStory() { onChange([...data, { ...BLANK_STORY, id: `story-${Date.now()}` }]) }

  return (
    <div className="space-y-4">
      {data.map((s, i) => (
        <StoryCard key={s.id || i} story={s} index={i} onUpdate={s => updateStory(i, s)} onDelete={() => deleteStory(i)} />
      ))}
      <button
        type="button"
        onClick={addStory}
        className="w-full py-4 border-2 border-dashed border-slate-300 hover:border-teal-400 rounded-2xl text-slate-500 hover:text-teal-600 font-medium text-sm transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" /> Add New Scholar Story
      </button>
      <p className="text-xs text-slate-400 text-center">Stories appear in order on the Stories page. Drag to reorder isn't supported yet — use delete + add to reorder.</p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Programs
// ─────────────────────────────────────────────────────────────────────────────
function ProgramsTab({ data, onChange }: { data: Record<string, Record<string, string | boolean>>; onChange: (v: Record<string, Record<string, string | boolean>>) => void }) {
  function setVV(key: string, val: string | boolean) { onChange({ ...data, vidyaVritti: { ...data.vidyaVritti, [key]: val } }) }
  function setPP(key: string, val: string) { onChange({ ...data, pratibhaPoshan: { ...data.pratibhaPoshan, [key]: val } }) }

  const vv = data.vidyaVritti ?? {}
  const pp = data.pratibhaPoshan ?? {}

  return (
    <div className="space-y-6">
      {/* Vidya Vritti */}
      <Card>
        <h3 className="font-bold text-navy-900 mb-5 flex items-center gap-2">
          <span className="w-2 h-2 bg-gold-400 rounded-full" /> Vidya Vritti — Full Scholarship
        </h3>
        <div className="space-y-4">
          <Toggle
            label="Applications currently open"
            value={!!vv.applicationsOpen}
            onChange={v => setVV('applicationsOpen', v)}
            hint="Shows an 'Apply Now' badge on the Programs page when enabled"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Current Batch" value={String(vv.currentBatch ?? '')} onChange={v => setVV('currentBatch', v)} hint='E.g. "18th" or "19th"' />
            <Field label="Scholarship Amount (₹)" value={String(vv.scholarshipAmount ?? '')} onChange={v => setVV('scholarshipAmount', v)} hint='E.g. "2,00,000"' prefix="₹" />
            <Field label="Duration" value={String(vv.duration ?? '')} onChange={v => setVV('duration', v)} hint='E.g. "2 years (Class XI & XII)"' />
            <Field label="Application Deadline" value={String(vv.applicationDeadline ?? '')} onChange={v => setVV('applicationDeadline', v)} hint='E.g. "31 March 2026" — leave blank if open-ended' />
            <Field label="Eligibility — Marks" value={String(vv.eligibilityMarks ?? '')} onChange={v => setVV('eligibilityMarks', v)} hint='E.g. "85%+ in Class X"' />
            <Field label="Eligibility — Income" value={String(vv.eligibilityIncome ?? '')} onChange={v => setVV('eligibilityIncome', v)} hint='E.g. "Annual family income below ₹3 LPA"' />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Program tagline</label>
            <textarea
              value={String(vv.tagline ?? '')}
              onChange={e => setVV('tagline', e.target.value)}
              rows={2}
              className="w-full border-2 border-slate-200 rounded-xl text-navy-900 px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
            />
          </div>
        </div>
      </Card>

      {/* Pratibha Poshan */}
      <Card>
        <h3 className="font-bold text-navy-900 mb-5 flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-500 rounded-full" /> Pratibha Poshan — Monthly Support
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Monthly Amount (₹)" value={String(pp.monthlyAmount ?? '')} onChange={v => setPP('monthlyAmount', v)} hint='E.g. "500–2,000"' />
          <Field label="Classes covered" value={String(pp.classes ?? '')} onChange={v => setPP('classes', v)} hint='E.g. "Class VII to X"' />
          <Field label="Selection method" value={String(pp.selectionMethod ?? '')} onChange={v => setPP('selectionMethod', v)} hint='E.g. "CSB-conducted merit test"' />
        </div>
      </Card>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab: Contact
// ─────────────────────────────────────────────────────────────────────────────
function ContactTab({ data, onChange }: { data: Record<string, string>; onChange: (v: Record<string, string>) => void }) {
  const set = (k: string, v: string) => onChange({ ...data, [k]: v })
  return (
    <div className="space-y-5 max-w-2xl">
      <Card>
        <h3 className="font-bold text-navy-900 mb-4">📧 Communication</h3>
        <div className="space-y-4">
          <Field label="Email" value={data.email ?? ''} onChange={v => set('email', v)} hint='E.g. "chinmayasmiles@gmail.com"' type="email" />
          <Field label="WhatsApp number (with country code)" value={data.whatsapp ?? ''} onChange={v => set('whatsapp', v)} hint='E.g. "919930287551" — no + or spaces' />
          <Field label="Address" value={data.address ?? ''} onChange={v => set('address', v)} hint='City, State' />
        </div>
      </Card>
      <Card>
        <h3 className="font-bold text-navy-900 mb-4">💳 Donation Details</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="UPI ID" value={data.upiId ?? ''} onChange={v => set('upiId', v)} hint='E.g. "csb@indianbk"' />
          <Field label="Account Name" value={data.accountName ?? ''} onChange={v => set('accountName', v)} />
          <Field label="Account Number" value={data.bankAccount ?? ''} onChange={v => set('bankAccount', v)} />
          <Field label="IFSC Code" value={data.bankIfsc ?? ''} onChange={v => set('bankIfsc', v)} />
          <Field label="Bank Name" value={data.bankName ?? ''} onChange={v => set('bankName', v)} />
        </div>
        <p className="text-xs text-slate-400 mt-4">⚠️ Updating these will change what donors see on the Donate page. Double-check before saving.</p>
      </Card>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
type SiteData = {
  stats: Record<string, string>
  announcement: Record<string, unknown>
  stories: Story[]
  programs: Record<string, Record<string, string | boolean>>
  contact: Record<string, string>
}
type TabId = 'stats' | 'announcement' | 'stories' | 'programs' | 'contact'
type Status = 'idle' | 'loading' | 'saving' | 'success' | 'error'

const TABS: { id: TabId; label: string; title: string }[] = [
  { id: 'stats',        label: '📊 Stats',    title: 'Impact Stats & Numbers' },
  { id: 'announcement', label: '📢 Banner',   title: 'Announcement Banner' },
  { id: 'stories',      label: '🎓 Stories',  title: 'Scholar Stories' },
  { id: 'programs',     label: '📋 Programs', title: 'Program Details' },
  { id: 'contact',      label: '📞 Contact',  title: 'Contact & Payment Info' },
]

export default function AdminPage() {
  const [token,       setToken]       = useState('')
  const [tokenShow,   setTokenShow]   = useState(false)
  const [sha,         setSha]         = useState('')
  const [data,        setData]        = useState<SiteData | null>(null)
  const [activeTab,   setActiveTab]   = useState<TabId>('stats')
  const [status,      setStatus]      = useState<Status>('idle')
  const [statusMsg,   setStatusMsg]   = useState('')
  const [isDirty,     setIsDirty]     = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('csb-admin-token')
    if (saved) setToken(saved)
  }, [])

  async function handleLoad() {
    setStatus('loading'); setStatusMsg('Connecting to GitHub…')
    try {
      const { sha: s, data: d } = await ghFetch(token)
      setSha(s); setData(d as SiteData)
      localStorage.setItem('csb-admin-token', token)
      setStatus('idle'); setStatusMsg(''); setIsDirty(false)
    } catch (e: unknown) {
      setStatus('error'); setStatusMsg((e as Error).message)
    }
  }

  async function handleSave() {
    if (!data) return
    setStatus('saving'); setStatusMsg('Saving to GitHub…')
    try {
      const newSha = await ghSave(token, sha, data)
      setSha(newSha); setStatus('success'); setIsDirty(false)
      setStatusMsg('✅ Saved! Vercel is deploying — your site will update in ~40 seconds.')
      setTimeout(() => setStatus('idle'), 8000)
    } catch (e: unknown) {
      setStatus('error'); setStatusMsg((e as Error).message)
    }
  }

  function mutate(updater: (d: SiteData) => SiteData) {
    setData(d => d ? updater({ ...d }) : d)
    setIsDirty(true)
  }

  // ── Login screen ────────────────────────────────────────────────────────
  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full border border-slate-100">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h1 className="font-bold text-navy-900 text-xl">CSB Admin Panel</h1>
              <p className="text-slate-400 text-sm">No-code content editor</p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Token input */}
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                GitHub Personal Access Token
              </label>
              <div className="relative">
                <input
                  type={tokenShow ? 'text' : 'password'}
                  value={token}
                  onChange={e => setToken(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLoad()}
                  placeholder="ghp_…"
                  className="w-full px-4 py-3 pr-12 border-2 border-slate-200 rounded-xl text-navy-900 font-mono text-sm focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setTokenShow(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {tokenShow ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Your token is stored only in this browser. To create one: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained → select the CSB-Portfolio repo → Contents: Read & write.
              </p>
            </div>

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{statusMsg}</p>
              </div>
            )}

            <button
              onClick={handleLoad}
              disabled={!token.trim() || status === 'loading'}
              className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 disabled:bg-slate-100 disabled:text-slate-400 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              {status === 'loading'
                ? <><RefreshCw className="w-4 h-4 animate-spin" /> Loading content…</>
                : <><Unlock className="w-4 h-4" /> Load Content</>}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Main admin UI ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-navy-900 sticky top-0 z-40 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 bg-gold-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-navy-900 font-bold text-xs">C</span>
            </div>
            <span className="text-white font-bold text-sm hidden sm:block">CSB Admin</span>
            {isDirty && (
              <span className="px-2 py-0.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 rounded-lg text-xs flex-shrink-0">
                Unsaved
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://csb-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-white/50 hover:text-white text-xs transition-colors"
            >
              View site <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={handleSave}
              disabled={status === 'saving' || !isDirty}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                status === 'success' ? 'bg-green-500 text-white'
                : isDirty            ? 'bg-gold-400 hover:bg-gold-500 text-navy-900'
                :                      'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              {status === 'saving' ? <><RefreshCw className="w-4 h-4 animate-spin" /><span className="hidden sm:block">Saving…</span></>
               : status === 'success' ? <><Check className="w-4 h-4" /><span className="hidden sm:block">Deployed!</span></>
               : <><Save className="w-4 h-4" /><span className="hidden sm:block">Save &amp; Deploy</span></>}
            </button>
          </div>
        </div>
      </header>

      {/* Status bar */}
      {statusMsg && (
        <div className={`px-4 py-2.5 text-sm text-center border-b ${
          status === 'success' ? 'bg-green-50 text-green-800 border-green-200'
          : status === 'error'  ? 'bg-red-50 text-red-800 border-red-200'
          :                       'bg-blue-50 text-blue-800 border-blue-200'
        }`}>
          {statusMsg}
          {status === 'success' && (
            <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer" className="underline ml-2">
              Watch deploy →
            </a>
          )}
        </div>
      )}

      {/* Tab bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-14 z-30 overflow-x-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-5 py-3.5 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-teal-500 text-teal-700 bg-teal-50/50'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-lg font-bold text-navy-900 mb-6">
          {TABS.find(t => t.id === activeTab)?.title}
        </h2>

        {activeTab === 'stats' && (
          <StatsTab data={data.stats} onChange={v => mutate(d => ({ ...d, stats: v }))} />
        )}
        {activeTab === 'announcement' && (
          <AnnouncementTab data={data.announcement} onChange={v => mutate(d => ({ ...d, announcement: v }))} />
        )}
        {activeTab === 'stories' && (
          <StoriesTab data={data.stories} onChange={v => mutate(d => ({ ...d, stories: v }))} />
        )}
        {activeTab === 'programs' && (
          <ProgramsTab data={data.programs} onChange={v => mutate(d => ({ ...d, programs: v }))} />
        )}
        {activeTab === 'contact' && (
          <ContactTab data={data.contact} onChange={v => mutate(d => ({ ...d, contact: v }))} />
        )}
      </main>
    </div>
  )
}
