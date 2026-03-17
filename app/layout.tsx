import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://chinmayasmiles.org'),
  title: {
    default: 'Chinmaya Smiles Back — Empowering Merit. Enabling Dreams.',
    template: '%s | Chinmaya Smiles Back',
  },
  description:
    'Since 2009, Chinmaya Smiles Back — the alumni association of Chinmaya Vidyalaya Bokaro — has transformed 36+ lives through scholarships, mentorship, and community. 80G accredited. 100% alumni-funded.',
  keywords: [
    'Chinmaya Smiles Back', 'CSB', 'Chinmaya Vidyalaya Bokaro',
    'scholarship Bokaro', 'NGO Jharkhand', 'education NGO India',
    'Vidya Vritti', 'Pratibha Poshan', 'alumni scholarship',
    'education charity Bokaro', '80G donation India',
  ],
  authors: [{ name: 'Chinmaya Smiles Back', url: 'https://chinmayasmiles.org' }],
  creator: 'Chinmaya Smiles Back',
  publisher: 'Chinmaya Smiles Back',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://chinmayasmiles.org',
    siteName: 'Chinmaya Smiles Back',
    title: 'Chinmaya Smiles Back — Empowering Merit. Enabling Dreams.',
    description:
      'Since 2009, we have funded 36+ meritorious students from Bokaro through scholarships and mentorship. Join 200+ alumni changing lives.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chinmaya Smiles Back — Education scholarship for underprivileged students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinmaya Smiles Back',
    description: 'Alumni-powered scholarships for meritorious students in Bokaro, Jharkhand.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://chinmayasmiles.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1D3557" />
      </head>
      <body className="font-sans antialiased">
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
