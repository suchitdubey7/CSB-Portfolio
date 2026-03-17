import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2f7',
          100: '#d5e0ec',
          200: '#aac1d9',
          300: '#7ea3c7',
          400: '#5384b4',
          500: '#2865a1',
          600: '#1d5486',
          700: '#1D3557',   // PRIMARY
          800: '#152843',
          900: '#0e1c2e',
        },
        teal: {
          50:  '#e6f5f6',
          100: '#b3e2e6',
          200: '#80cfd5',
          300: '#4dbcc4',
          400: '#1aa9b4',
          500: '#028090',   // SECONDARY
          600: '#026d7a',
          700: '#025a64',
          800: '#01474e',
          900: '#013438',
        },
        gold: {
          50:  '#fef9e7',
          100: '#fdedb9',
          200: '#fbe08b',
          300: '#f9d35d',
          400: '#f7c62f',
          500: '#F0A500',   // ACCENT
          600: '#c88c00',
          700: '#a07000',
          800: '#785400',
          900: '#503800',
        },
        csb: {
          bg:    '#F4F9F9',
          light: '#FAFBFC',
          dark:  '#1A252F',
          gray:  '#6B7280',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm':  ['1.875rem', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(29, 53, 87, 0.08)',
        'card-hover': '0 12px 40px -4px rgba(29, 53, 87, 0.16)',
        'hero': '0 24px 64px -12px rgba(29, 53, 87, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1D3557 0%, #028090 60%, #1D3557 100%)',
        'section-gradient': 'linear-gradient(180deg, #F4F9F9 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}

export default config
