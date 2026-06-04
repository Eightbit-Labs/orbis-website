export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#93c5fd] flex items-center justify-center">
                <OrbisLogo />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Orbis</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-[220px]">
              A Hermes agent workspace for the current Orbis repo.
            </p>
          </div>

          <FooterGroup
            title="Workspace"
            links={[
              { label: 'Workspace map', href: '#workspace' },
              { label: 'Agents', href: '#bots' },
              { label: 'Memory', href: '#features' },
            ]}
          />
          <FooterGroup
            title="Flow"
            links={[
              { label: 'How it works', href: '#how-it-works' },
              { label: 'About Orbis', href: '#about' },
              { label: 'Repo structure', href: '#workspace' },
            ]}
          />
          <FooterGroup
            title="Docs"
            links={[
              { label: 'Bob', href: '#bots' },
              { label: 'Jim', href: '#bots' },
              { label: 'shared/', href: '#workspace' },
            ]}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Orbis workspace.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            Hermes memory online
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterGroup({ title, links }) {
  return (
    <div>
      <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function OrbisLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="3" fill="white" />
      <circle cx="8" cy="2" r="1.5" fill="white" opacity="0.6" />
      <circle cx="8" cy="14" r="1.5" fill="white" opacity="0.6" />
      <circle cx="2" cy="8" r="1.5" fill="white" opacity="0.6" />
      <circle cx="14" cy="8" r="1.5" fill="white" opacity="0.6" />
    </svg>
  )
}
