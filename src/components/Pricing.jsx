const FOLDERS = [
  {
    name: 'Bob/',
    title: 'Review lane',
    description: 'Pull request reviews, repo-aware feedback, and decision consistency.',
    color: '#2563eb',
    details: ['PR review', 'Repo context', 'Hermes memory'],
  },
  {
    name: 'Jim/',
    title: 'Editing lane',
    description: 'GitHub App edits, branch creation, commit automation, and PR generation.',
    color: '#38bdf8',
    details: ['/edit flow', 'GitHub App auth', 'Local key path'],
  },
  {
    name: 'Joe/',
    title: 'Tiny surface',
    description: 'Simple /ping bot that keeps the workspace lightweight and easy to test.',
    color: '#93c5fd',
    details: ['/ping', 'Minimal config', 'Quick checks'],
  },
  {
    name: 'Orbis Command/',
    title: 'Command center',
    description: 'The shared orchestration bot for the full Hermes network.',
    color: '#34d399',
    details: ['Slash commands', 'Auth', 'Routing'],
  },
  {
    name: 'shared/',
    title: 'Memory + utilities',
    description: 'Hermes memory, secret redaction, and cross-bot context helpers.',
    color: '#f59e0b',
    details: ['Memory DB', 'Redaction', 'Prompt helpers'],
  },
]

export default function Pricing() {
  return (
    <section id="workspace" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2563eb] opacity-[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#a78bfa] opacity-[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-sm mb-5 animate-fadeInUp">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
            Workspace map
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 animate-fadeInUp delay-100">
            The repo is split into{' '}
            <span className="gradient-text">focused folders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp delay-200">
            The site now mirrors the current Orbis folder instead of pretending to be a generic
            SaaS page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOLDERS.map((folder, index) => (
            <WorkspaceCard key={folder.name} folder={folder} index={index} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#111118] p-6 animate-fadeInUp delay-400">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Current root</div>
              <div className="text-white font-mono text-sm sm:text-base break-all">
                C:\Users\Lawrence Tong\Desktop\Projects\orbis
              </div>
            </div>
            <div className="text-sm text-gray-400 max-w-2xl">
              Every section on this page now points back to the real repo layout, so the website
              describes the same Hermes system the code actually runs.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkspaceCard({ folder, index }) {
  return (
    <div
      className="relative rounded-2xl border border-white/[0.08] bg-[#111118] p-7 hover:border-white/[0.15] hover:bg-[#14141e] transition-all duration-300 animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${folder.color}cc, ${folder.color}66)`,
            border: `1px solid ${folder.color}44`,
          }}
        >
          {folder.name}
        </div>
        <div>
          <div className="text-xl font-bold text-white">{folder.title}</div>
          <div className="text-sm text-gray-400">Orbis workspace folder</div>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">{folder.description}</p>

      <div className="flex flex-wrap gap-2">
        {folder.details.map((detail) => (
          <span
            key={detail}
            className="px-2.5 py-1 rounded-md text-xs font-mono"
            style={{
              background: `${folder.color}18`,
              color: folder.color,
              border: `1px solid ${folder.color}30`,
            }}
          >
            {detail}
          </span>
        ))}
      </div>
    </div>
  )
}
