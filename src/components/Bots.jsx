const BOTS = [
  {
    id: 'bob',
    name: 'Bob',
    tagline: 'Your AI Project Manager',
    color: '#2563eb',
    colorLight: '#60a5fa',
    gradient: 'from-[#2563eb] to-[#60a5fa]',
    border: 'border-[#2563eb]/25 hover:border-[#2563eb]/60',
    glow: '0 0 40px rgba(37,99,235,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    capabilities: [
      'Sprint planning & task breakdown',
      'GitHub issue creation & triage',
      'Standup summaries & progress reports',
      'Team velocity tracking',
    ],
    commands: ['/plan', '/standup', '/issue', '/sprint'],
    description:
      'Bob orchestrates your entire development workflow. Drop a feature request in Discord and Bob will break it into actionable tasks, create GitHub issues, assign owners, and keep your team on track.',
  },
  {
    id: 'jim',
    name: 'Jim',
    tagline: 'Your AI Code Reviewer',
    color: '#38bdf8',
    colorLight: '#7dd3fc',
    gradient: 'from-[#0284c7] to-[#38bdf8]',
    border: 'border-[#38bdf8]/25 hover:border-[#38bdf8]/60',
    glow: '0 0 40px rgba(56,189,248,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    capabilities: [
      'Automated PR code reviews',
      'Bug detection & security audits',
      'Style guide enforcement',
      'Refactoring suggestions',
    ],
    commands: ['/review', '/audit', '/diff', '/explain'],
    description:
      'Jim scrutinises every pull request with the eye of a senior engineer. Paste a PR link and Jim delivers a thorough review — spotting bugs, security issues, and code smells in seconds.',
  },
  {
    id: 'joe',
    name: 'Joe',
    tagline: 'Your AI DevOps Engineer',
    color: '#93c5fd',
    colorLight: '#e879f9',
    gradient: 'from-[#1e40af] to-[#93c5fd]',
    border: 'border-[#93c5fd]/25 hover:border-[#93c5fd]/60',
    glow: '0 0 40px rgba(147,197,253,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    capabilities: [
      'CI/CD pipeline monitoring',
      'Deployment status & rollbacks',
      'Infrastructure alerts & diagnostics',
      'Environment provisioning commands',
    ],
    commands: ['/deploy', '/status', '/rollback', '/logs'],
    description:
      'Joe keeps your infrastructure running smoothly. Monitor deployments, trigger CI pipelines, and get instant alerts — all from a Discord slash command. No more context-switching to dashboards.',
  },
]

export default function Bots() {
  return (
    <section id="bots" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563eb] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Meet the Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Three bots.{' '}
            <span className="gradient-text">One workflow.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Each Orbis bot is purpose-built for a distinct phase of your software development lifecycle.
          </p>
        </div>

        {/* Bot cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {BOTS.map((bot, i) => (
            <BotCard key={bot.id} bot={bot} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BotCard({ bot, delay }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-[#111118] p-7 transition-all duration-300 ${bot.border} animate-fadeInUp`}
      style={{ animationDelay: `${delay}ms`, boxShadow: 'none' }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = bot.glow)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      {/* Avatar & name */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${bot.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
        >
          {bot.icon}
        </div>
        <div>
          <div className="text-xl font-bold text-white">{bot.name}</div>
          <div className="text-sm" style={{ color: bot.colorLight }}>{bot.tagline}</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{bot.description}</p>

      {/* Capabilities */}
      <ul className="space-y-2 mb-6">
        {bot.capabilities.map((cap) => (
          <li key={cap} className="flex items-start gap-2.5 text-sm text-gray-300">
            <svg
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke={bot.color}
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {cap}
          </li>
        ))}
      </ul>

      {/* Commands */}
      <div className="mt-auto">
        <div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Commands</div>
        <div className="flex flex-wrap gap-2">
          {bot.commands.map((cmd) => (
            <code
              key={cmd}
              className="px-2.5 py-1 rounded-md text-xs font-mono"
              style={{
                background: `${bot.color}18`,
                color: bot.colorLight,
                border: `1px solid ${bot.color}30`,
              }}
            >
              {cmd}
            </code>
          ))}
        </div>
      </div>

      {/* Add button */}
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: `linear-gradient(135deg, ${bot.color}cc, ${bot.color}88)`,
          border: `1px solid ${bot.color}44`,
        }}
      >
        Add {bot.name} to Discord
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  )
}
