export default function CTA() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563eb] opacity-[0.08] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="rounded-3xl border border-[#2563eb]/20 bg-[#111118] p-12 text-center relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#2563eb]/60 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563eb]/30 bg-[#2563eb]/10 text-[#93c5fd] text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
            Hermes workspace ready
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to work inside{' '}
            <span className="gradient-text">Orbis?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            The site now matches the current folder: Bob, Jim, Joe, Orbis Command, and the shared
            Hermes layer. Everything stays rooted in the repo you are actually working in.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#workspace"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base transition-all duration-200 hover:shadow-[0_0_35px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <WorkspaceIcon />
              Open the workspace map
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Read the flow
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/[0.06]">
            <TrustBadge label="Shared Hermes memory" />
            <TrustBadge label="Repo-local agents" />
            <TrustBadge label="GitHub App auth" />
            <TrustBadge label="Secret redaction" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Orbis is the Hermes agent workspace in this repo — not a generic landing page.
          </p>
        </div>
      </div>
    </section>
  )
}

function TrustBadge({ label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {label}
    </div>
  )
}

function WorkspaceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6h16v12H4z" opacity="0.18" />
      <path d="M7 9h10M7 12h6M7 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}
