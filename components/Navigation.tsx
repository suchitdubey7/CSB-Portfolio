'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  {
    href: '/programs',
    label: 'Programs',
    children: [
      { href: '/programs#vidya-vritti',    label: 'Vidya Vritti' },
      { href: '/programs#pratibha-poshan', label: 'Pratibha Poshan' },
      { href: '/programs#baatein',         label: 'Baatein' },
    ]
  },
  { href: '/impact',       label: 'Impact' },
  { href: '/stories',      label: 'Stories' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact',      label: 'Contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [dropdown, setDropdown]     = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdown(null)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between h-[72px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Chinmaya Smiles Back - Home"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-navy-700 to-teal-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span className={clsx(
              'block font-display font-bold text-sm transition-colors',
              scrolled ? 'text-navy-700' : 'text-white'
            )}>
              Chinmaya Smiles Back
            </span>
            <span className={clsx(
              'block text-xs transition-colors',
              scrolled ? 'text-teal-500' : 'text-teal-200'
            )}>
              Since 2009
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            link.children ? (
              <div key={link.href} className="relative">
                <button
                  className={clsx(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    scrolled ? 'text-navy-600 hover:text-teal-600 hover:bg-csb-bg' : 'text-white/90 hover:text-white hover:bg-white/10',
                    isActive(link.href) && (scrolled ? 'text-teal-600' : 'text-white')
                  )}
                  onMouseEnter={() => setDropdown(link.href)}
                  onMouseLeave={() => setDropdown(null)}
                  aria-expanded={dropdown === link.href}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {dropdown === link.href && (
                  <div
                    className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50"
                    onMouseEnter={() => setDropdown(link.href)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-navy-600 hover:text-teal-600 hover:bg-csb-bg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  scrolled
                    ? isActive(link.href)
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-navy-600 hover:text-teal-600 hover:bg-csb-bg'
                    : isActive(link.href)
                      ? 'text-white bg-white/15'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/get-involved#donate"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={clsx(
            'lg:hidden p-2 rounded-lg transition-colors',
            scrolled ? 'text-navy-700 hover:bg-csb-bg' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                    isActive(link.href)
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-navy-600 hover:text-teal-600 hover:bg-csb-bg'
                  )}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-6 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-xs font-medium text-gray-500 hover:text-teal-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/get-involved#donate"
                className="btn-primary w-full justify-center text-sm"
              >
                Donate Now — 80G Tax Benefit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
