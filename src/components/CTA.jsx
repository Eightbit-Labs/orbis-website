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
            Free to Get Started
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to build with{' '}
            <span className="gradient-text">your AI team?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Add Bob, Jim, and Joe to your Discord server today. No credit card required.
            Built with care by{' '}
            <span className="text-[#93c5fd] font-medium">Eightbit Labs</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base transition-all duration-200 hover:shadow-[0_0_35px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <DiscordIcon />
              Add All Bots — Free
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Join Our Community
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/[0.06]">
            <TrustBadge label="No credit card" />
            <TrustBadge label="SOC 2 compliant" />
            <TrustBadge label="99.9% uptime SLA" />
            <TrustBadge label="Cancel anytime" />
          </div>
        </div>

        {/* Eightbit Labs callout */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Orbis is crafted by{' '}
            <span className="text-[#93c5fd] font-semibold">Eightbit Labs</span>
            {' '}— a software development studio building the future of agentic tooling.
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

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  )
}
