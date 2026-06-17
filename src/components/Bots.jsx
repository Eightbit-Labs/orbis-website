const BOTS = [
  {
    id: 'bob',
    name: 'Bob',
    tagline: 'Reviewing pull requests',
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
      'Reads PR diffs with workspace context',
      'Flags bugs, style drift, and security issues',
      'Keeps reviewer feedback consistent',
      'Works from shared Hermes memory',
    ],
    commands: ['/review', '/audit', '/diff', '/explain'],
    description:
      'Bob is the review lane in the Orbis workspace. He lives in Discord, reads the repo context, and turns pull requests into clear feedback fast.',
  },
  {
    id: 'jim',
    name: 'Jim',
    tagline: 'Editing code with GitHub App auth',
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
      'Edits files through a GitHub App installation',
      'Uses repo memory to stay consistent',
      'Creates branches, commits, and PRs',
      'Loads machine-specific key paths locally',
    ],
    commands: ['/edit', '/ping', 'GITHUB_APP_PRIVATE_KEY_PATH', 'shared/hermes-agent.js'],
    description:
      'Jim is the code-editing agent. He works against the current repo, uses Hermes memory, and turns Discord requests into actual commits and pull requests.',
  },
  {
    id: 'joe',
    name: 'Joe',
    tagline: 'Keeping the public bot surface minimal',
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
      'Basic /ping command for quick health checks',
      'Simple Discord surface with low overhead',
      'Useful for testing bot connectivity',
      'Shares the workspace memory patterns',
    ],
    commands: ['/ping', 'index.js', 'verify-commands.js', 'README.md'],
    description:
      'Joe is intentionally small. He keeps the workspace honest with a tiny command surface and makes it easy to confirm the bot stack is alive.',
  },
  {
    id: 'orbis-command',
    name: 'Orbis Command',
    tagline: 'Coordinating the bot network',
    color: '#34d399',
    colorLight: '#86efac',
    gradient: 'from-[#059669] to-[#34d399]',
    border: 'border-[#34d399]/25 hover:border-[#34d399]/60',
    glow: '0 0 40px rgba(52,211,153,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
      </svg>
    ),
    capabilities: [
      'Acts as the command center for the workspace',
      'Registers slash commands and auth checks',
      'Fans out work to the right bot',
      'Shares the same Hermes context layer',
    ],
    commands: ['/ping', '/edit', 'slash commands', 'authorization'],
    description:
      'Orbis Command is the hub. It keeps the bot network organised, handles command routing, and ties the whole workspace together.',
  },
  {
    id: 'shared',
    name: 'shared/',
    tagline: 'Hermes memory and utilities',
    color: '#f59e0b',
    colorLight: '#fcd34d',
    gradient: 'from-[#d97706] to-[#f59e0b]',
    border: 'border-[#f59e0b]/25 hover:border-[#f59e0b]/60',
    glow: '0 0 40px rgba(245,158,11,0.18)',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    capabilities: [
      'Stores people, repos, and prior interactions',
      'Redacts secrets before memory persists',
      'Shares context across every Hermes agent',
      'Backed by local SQLite data',
    ],
    commands: ['hermes-memory.js', 'hermes-agent.js', 'verify-hermes-system.js', 'shared/data/'],
    description:
      'The shared folder is the glue. It gives the bots memory, keeps sensitive data out of prompts, and makes the whole workspace feel connected.',
  },
]

export default function Bots() {
  return (
    <section id="bots" className="reveal relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563eb] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            Workspace surfaces
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Five surfaces.{' '}
            <span className="gradient-text">One Hermes workspace.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The Orbis repo is split into focused folders so each agent can stay small, composable,
            and easy to reason about.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 40px ${bot.color}20`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${bot.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
        >
          {bot.icon}
        </div>
        <div>
          <div className="text-xl font-bold text-white">{bot.name}</div>
          <div className="text-sm" style={{ color: bot.colorLight }}>
            {bot.tagline}
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">{bot.description}</p>

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

      <div className="mt-auto">
        <div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Signals</div>
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
    </div>
  )
}
