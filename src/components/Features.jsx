const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v3m6-3v3M5 7h14M6 21h12a2 2 0 002-2V7H4v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Workspace-specific folders',
    description:
      'The site mirrors the actual repo layout: Bob, Jim, Joe, Orbis Command, and shared Hermes utilities.',
    color: '#2563eb',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.761 0-5 1.79-5 4s2.239 4 5 4 5 1.79 5 4-2.239 4-5 4" />
      </svg>
    ),
    title: 'Shared Hermes memory',
    description:
      'People, repos, and past edits flow through a shared memory layer so each agent stays consistent.',
    color: '#38bdf8',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.21-1.79-4-4-4s-4 1.79-4 4v4c0 2.21 1.79 4 4 4s4-1.79 4-4m0-4c0 2.21 1.79 4 4 4s4-1.79 4-4v4c0 2.21-1.79 4-4 4s-4-1.79-4-4" />
      </svg>
    ),
    title: 'GitHub App editing',
    description:
      'Jim authenticates with a GitHub App and creates real branches, commits, and PRs from Discord.',
    color: '#93c5fd',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secret redaction',
    description:
      'The workspace verification scripts make sure tokens and private keys stay out of memory prompts and logs.',
    color: '#34d399',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    title: 'Minimal bot surfaces',
    description:
      'Joe stays small, Bob stays focused on review, and Orbis Command coordinates the rest.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Discord-first workflow',
    description:
      'The agents live in Discord, but the work lands in the repo where the team can review and ship it.',
    color: '#f472b6',
  },
]

export default function Features() {
  return (
    <section id="features" className="reveal relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563eb] opacity-[0.05] rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#38bdf8] opacity-[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            Why this workspace works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Built around{' '}
            <span className="gradient-text">Hermes memory</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Orbis is not just a bot bundle — it is a foldered workspace that keeps agents small,
            connected, and easy to reason about.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  return (
    <div
      className="group relative rounded-2xl border border-white/[0.07] bg-[#111118] p-6 hover:border-white/[0.15] hover:bg-[#14141e] transition-all duration-300 animate-fadeInUp overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 50% -20%, ${feature.color}, transparent 70%)` }}></div>

      <div
        className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${feature.color}18`, color: feature.color, border: `1px solid ${feature.color}28` }}
      >
        {feature.icon}
      </div>
      <h3 className="relative z-10 text-white font-semibold text-base mb-2">{feature.title}</h3>
      <p className="relative z-10 text-gray-400 text-sm leading-relaxed">{feature.description}</p>

      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)` }}
      />
    </div>
  )
}
