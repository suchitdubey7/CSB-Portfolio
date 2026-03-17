# Chinmaya Smiles Back — Official Website

Production-ready Next.js website for [Chinmaya Smiles Back (CSB)](https://chinmayasmiles.org), a registered charitable trust based in Bokaro Steel City, Jharkhand, India. Operating since 2009, CSB funds education for economically disadvantaged students through three scholarship programmes.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 (custom design system) |
| Language | TypeScript (strict mode) |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans (display) + Inter (body) |
| Animation | Framer Motion + Intersection Observer |
| Deployment | Vercel |

## Design System

Three-colour palette reflecting CSB's identity:
- **Navy** `#1D3557` — trust, depth, authority
- **Teal** `#028090` — growth, hope, impact
- **Gold** `#F0A500` — achievement, celebration, warmth

## Project Structure

```
csb-website/
├── app/
│   ├── layout.tsx          # Root layout with Nav + Footer
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About CSB & founding story
│   ├── programs/page.tsx   # Vidya Vritti, Pratibha Poshan, Baatein
│   ├── impact/page.tsx     # Stats, outcomes, financial transparency
│   ├── stories/page.tsx    # Scholar stories (Shivani, Nitesh, Akash)
│   ├── get-involved/page.tsx # Donate, Volunteer, CSR
│   ├── contact/page.tsx    # Contact info, FAQ
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Tailwind base + component classes
├── components/
│   ├── Navigation.tsx      # Sticky nav with dropdown
│   ├── Footer.tsx          # Full footer with CTA strip
│   ├── PageHeader.tsx      # Reusable page hero header
│   ├── ImpactStats.tsx     # Animated stats (dark/light variant)
│   ├── SectionLabel.tsx    # Section heading helper
│   ├── ProgramCard.tsx     # Programme card component
│   └── StoryCard.tsx       # Scholar story card
├── public/
│   └── robots.txt
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## Deployment (Vercel)

1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com) → Import project from GitHub
3. Select the `csb-website` folder as root directory
4. Framework: **Next.js** (auto-detected)
5. Build command: `npm run build` (auto-detected)
6. Output directory: `.next` (auto-detected)
7. Click **Deploy**

No environment variables required for the base deployment.

### Custom Domain

In Vercel project settings → Domains, add `chinmayasmiles.org` and follow DNS instructions.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, stats, programmes, stories, CTA |
| `/about` | Founding story, mission, values, timeline, team |
| `/programs` | Vidya Vritti, Pratibha Poshan, Baatein detail |
| `/impact` | Outcomes, 18-year record, financial transparency |
| `/stories` | Shivani (IIT Bombay), Nitesh (98% boards), Akash (fintech) |
| `/get-involved` | Donate (3 tiers), Volunteer (3 roles), CSR (3 tiers) |
| `/contact` | Email, FAQ, trust info |

## SEO

- Per-page `metadata` with title, description, OpenGraph, Twitter cards
- `app/sitemap.ts` generates `/sitemap.xml` automatically
- `public/robots.txt` allows all crawlers
- Semantic HTML with ARIA labels throughout
- WCAG 2.1 AA accessibility (skip link, focus-visible, contrast ratios)

## Accessibility

- Skip-to-content link in root layout
- All images have `alt` text
- ARIA `aria-labelledby` on all major sections
- Keyboard-navigable navigation with mobile hamburger
- Focus-visible ring on all interactive elements
- Colour contrast: navy-on-white, white-on-navy all pass AA

## Organisation

**Chinmaya Smiles Back**
Registered Charitable Trust · 80G Accredited · 12A Certified
Bokaro Steel City, Jharkhand, India
📧 chinmayasmiles@gmail.com
🌐 chinmayasmiles.org
📘 facebook.com/chinmayasmileback

---

*Built with care to serve the scholars of Bokaro.*
