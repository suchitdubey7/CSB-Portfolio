import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Donate to Chinmaya Smiles Back — Fund a 2-year scholarship for ₹2,00,000'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function DonateOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          background: '#1D3557',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold accent bar on left */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 8,
          background: 'linear-gradient(180deg, #F0A500, #028090)',
          display: 'flex',
        }} />

        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -150, right: -150,
          width: 550, height: 550, borderRadius: '50%',
          background: 'rgba(2,128,144,0.15)', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -100, left: 200,
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(240,165,0,0.08)', display: 'flex',
        }} />

        {/* Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px 60px 96px',
          width: '100%',
        }}>

          {/* Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="#F0A500"/>
              </svg>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, fontWeight: 500, display: 'flex' }}>
              Chinmaya Smiles Back · Donate
            </span>
          </div>

          {/* Main headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{
              display: 'flex',
              fontSize: 20,
              fontWeight: 600,
              color: '#028090',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              ONE GIFT
            </div>
            <div style={{
              fontSize: 68,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.0,
              letterSpacing: '-2px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}>
              <span style={{ display: 'flex' }}>Two years of</span>
              <span style={{ color: '#F0A500', display: 'flex' }}>possibility.</span>
            </div>
            <div style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.6)',
              marginTop: 4,
              display: 'flex',
            }}>
              Rs. 2,00,000 covers fees, uniform &amp; books for a Class XI–XII scholar
            </div>
          </div>

          {/* Bottom row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* UPI detail */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 16,
              padding: '16px 24px',
              gap: 4,
            }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, display: 'flex' }}>Pay via UPI</span>
              <span style={{ color: 'white', fontSize: 22, fontWeight: 700, fontFamily: 'monospace', display: 'flex' }}>
                csb@indianbk
              </span>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { v: '80G', l: 'Tax Benefit' },
                { v: '50%', l: 'Deduction' },
                { v: '17yrs', l: 'Track Record' },
              ].map((b) => (
                <div key={b.l} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(240,165,0,0.15)',
                  border: '1px solid rgba(240,165,0,0.3)',
                  borderRadius: 14,
                  padding: '14px 20px',
                }}>
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#F0A500', display: 'flex' }}>{b.v}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2, display: 'flex' }}>{b.l}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    ),
    { ...size }
  )
}
