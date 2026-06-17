export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#030409] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
              <OrbisLogo />
            </div>
            <span className="text-white font-medium text-sm">Orbis</span>
          </a>
          <p className="text-gray-500 text-xs">An infinite canvas for development on macOS. © {new Date().getFullYear()}</p>
        </div>

        <FooterGroup title="Pricing" links={[{ label: 'Basic', href: '#pricing' }, { label: 'Pro', href: '#pricing' }, { label: 'Max', href: '#pricing' }]} />
        <FooterGroup title="Flow" links={[{ label: 'How it works', href: '#how-it-works' }, { label: 'About', href: '#about' }]} />
        <FooterGroup title="Docs" links={[{ label: 'Bob', href: '#bots' }, { label: 'Jim', href: '#bots' }, { label: 'Hermes', href: '#features' }]} />
      </div>
    </footer>
  )
}

function FooterGroup({ title, links }) {
  return (
    <div>
      <h4 className="text-xs text-white uppercase tracking-widest font-semibold mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-xs text-gray-500 hover:text-white transition-colors">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function OrbisLogo() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="white">
      <circle cx="8" cy="8" r="3" />
    </svg>
  )
}
