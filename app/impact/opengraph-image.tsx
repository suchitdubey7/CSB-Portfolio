import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Chinmaya Smiles Back Impact — 17 years of proof, not promises'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function ImpactOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          background: 'linear-gradient(145deg, #0f2335 0%, #1D3557 50%, #028090 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <div style={{
          position: 'absolute', top: -200, right: -100,
          width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(2,128,144,0.12)', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(240,165,0,0.07)', display: 'flex',
        }} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          width: '100%',
        }}>

          {/* Top */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                Chinmaya Smiles Back · Our Impact
              </span>
            </div>
            <div style={{
              padding: '8px 18px',
              borderRadius: 20,
              background: 'rgba(240,165,0,0.2)',
              border: '1px solid rgba(240,165,0,0.4)',
              color: '#F0A500',
              fontSize: 14,
              fontWeight: 600,
              display: 'flex',
            }}>
              80G Certified Trust
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{
              fontSize: 60,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              display: 'flex',
            }}>
              17 years of proof.
            </div>
            <div style={{
              fontSize: 60,
              fontWeight: 800,
              color: '#F0A500',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              display: 'flex',
            }}>
              Not promises.
            </div>
            <div style={{
              fontSize: 19,
              color: 'rgba(255,255,255,0.55)',
              marginTop: 6,
              display: 'flex',
            }}>
              Every number below is a real student, a real family, a future that almost didn't happen.
            </div>
          </div>

          {/* Stats grid */}
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { v: '36+',      l: 'Scholars',         accent: '#028090' },
              { v: '17',       l: 'Years Active',      accent: '#028090' },
              { v: '200+',     l: 'Community Members', accent: '#028090' },
              { v: '25×',      l: 'Return on Giving',  accent: '#F0A500' },
              { v: 'Rs.50L+',   l: 'Lifetime Impact',   accent: '#F0A500' },
            ].map((s) => (
              <div key={s.l} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '18px 12px',
                borderRadius: 16,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <span style={{ fontSize: 30, fontWeight: 800, color: s.accent, display: 'flex' }}>{s.v}</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4, textAlign: 'center', display: 'flex' }}>{s.l}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    ),
    { ...size }
  )
}
