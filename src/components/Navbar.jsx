import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Agents', href: '#bots' },
  { label: 'Memory', href: '#features' },
  { label: 'Flow', href: '#how-it-works' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#030409]/80 backdrop-blur-md border-b border-white/[0.05]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center transition-colors group-hover:bg-[#2563eb]">
            <OrbisIcon />
          </div>
          <span className="text-white font-medium text-sm tracking-tight">Orbis</span>
        </a>

        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="/account" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">Sign in</a>
          <a href="#pricing" className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-all">Join the beta</a>
        </div>
      </div>
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
