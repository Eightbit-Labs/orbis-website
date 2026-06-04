import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Agents', href: '#bots' },
  { label: 'Memory', href: '#features' },
  { label: 'Flow', href: '#how-it-works' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#93c5fd] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_16px_rgba(37,99,235,0.6)] transition-shadow duration-300">
            <OrbisIcon />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Orbis</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <OrbisIcon />
            See pricing
          </a>
        </div>

        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/[0.06] px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#2563eb] text-white text-sm font-medium mt-2"
              onClick={() => setMenuOpen(false)}
            >
              <OrbisIcon />
              See pricing
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function OrbisIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="8" cy="8" r="3" />
      <circle cx="8" cy="2" r="1.5" opacity="0.55" />
      <circle cx="8" cy="14" r="1.5" opacity="0.55" />
      <circle cx="2" cy="8" r="1.5" opacity="0.55" />
      <circle cx="14" cy="8" r="1.5" opacity="0.55" />
    </svg>
  )
}
