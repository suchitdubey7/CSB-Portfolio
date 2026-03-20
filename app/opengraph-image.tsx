import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Chinmaya Smiles Back — Empowering Merit. Enabling Dreams.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1D3557 0%, #028090 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -120, right: -120,
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 350, height: 350,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', top: 200, right: 300,
          width: 180, height: 180,
          borderRadius: '50%',
          background: 'rgba(240,165,0,0.12)',
          display: 'flex',
        }} />

        {/* Main content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          padding: '64px 80px',
        }}>

          {/* Top row — logo + trust badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo mark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 56, height: 56,
                borderRadius: 16,
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="#F0A500"/>
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontWeight: 700, fontSize: 22, letterSpacing: '-0.3px' }}>
                  Chinmaya Smiles Back
                </span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 2 }}>
                  Since 2009 · Bokaro Steel City
                </span>
              </div>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 10 }}>
              {['80G Certified', '12A Trust', '17 Years'].map((b) => (
                <div key={b} style={{
                  padding: '6px 14px',
                  borderRadius: 20,
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: 13,
                  fontWeight: 500,
                  display: 'flex',
                }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Centre — headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
            }}>
              Talented students deserve
            </div>
            <div style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 800,
              color: '#F0A500',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
            }}>
              a fair shot.
            </div>
            <div style={{
              fontSize: 22,
              color: 'rgba(255,255,255,0.65)',
              marginTop: 8,
              fontWeight: 400,
              display: 'flex',
            }}>
              Community-powered scholarships · 80G tax benefit · Rs. 2,00,000 funds 2 years
            </div>
          </div>

          {/* Bottom — stat strip */}
          <div style={{
            display: 'flex',
            gap: 0,
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            {[
              { v: '36+',   l: 'Scholars Supported' },
              { v: '17',    l: 'Unbroken Years' },
              { v: '200+',  l: 'Community Members' },
              { v: '50%',   l: 'Tax Deduction (80G)' },
            ].map((s, i) => (
              <div key={s.l} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 0',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <span style={{ fontSize: 32, fontWeight: 800, color: '#F0A500', display: 'flex' }}>{s.v}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4, display: 'flex' }}>{s.l}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    ),
    { ...size }
  )
}
