const STEPS = [
  {
    step: '01',
    title: 'Add Orbis to your server',
    description:
      'Click "Add to Discord" and authorise whichever bots you need. Bob, Jim, and Joe are each added independently so you only bring in what your team needs.',
    color: '#2563eb',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Connect your tools',
    description:
      'Link your GitHub repos, Jira boards, Vercel projects, and more with a simple /connect command. The bots will authenticate and start listening.',
    color: '#38bdf8',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Describe what you want',
    description:
      'Type a natural language command in any channel. Bob will plan it, Jim will review the code, Joe will ship it. That\'s the whole workflow.',
    color: '#93c5fd',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Ship with confidence',
    description:
      'Get deployment updates, review summaries, and sprint reports posted right in your channels. Everyone stays in the loop without a single meeting.',
    color: '#34d399',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const COMMAND_DEMO = `# Bob plans a new feature
/plan "Add user authentication with OAuth"

┌─ Bob ─────────────────────────────
│ Breaking down your feature...
│
│ ✓ Task 1: Set up OAuth provider (2pts)
│ ✓ Task 2: Create user model & migrations (3pts)
│ ✓ Task 3: Build login/callback routes (3pts)
│ ✓ Task 4: Session management (2pts)
│ ✓ Task 5: Frontend auth flow (5pts)
│
│ Created 5 issues on GitHub ↗
│ Sprint board updated ↗
└───────────────────────────────────

# Jim reviews a pull request
/review https://github.com/org/repo/pull/42

┌─ Jim ─────────────────────────────
│ Reviewing PR #42...
│
│ ⚠  Security: Token stored in localStorage
│    Recommend httpOnly cookie instead.
│
│ ✓  Logic looks solid
│ ✓  Tests cover happy path
│ ✗  Missing error handling on line 84
│
│ Overall: Request Changes
└───────────────────────────────────

# Joe deploys to production
/deploy production

┌─ Joe ─────────────────────────────
│ Deploying v2.4.1 to production...
│
│ ✓ Build passed (1m 23s)
│ ✓ Health checks passed
│ ✓ Deployed to 3 regions
│ ✓ Zero downtime rollout complete
└───────────────────────────────────`

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#93c5fd] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]" />
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Up and running in{' '}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Getting Orbis into your workflow is as simple as adding a Discord bot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} />
            ))}
          </div>

          {/* Terminal demo */}
          <div className="sticky top-24">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d14] overflow-hidden shadow-2xl">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111118]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-gray-500 font-mono">#dev-channel · Orbis Workspace</span>
              </div>
              {/* Code */}
              <pre className="p-6 text-xs leading-6 text-gray-300 font-mono overflow-x-auto whitespace-pre">
                <code>{COMMAND_DEMO}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  return (
    <div
      className="flex gap-5 animate-fadeInUp"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Step number + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm"
          style={{
            background: `${step.color}18`,
            color: step.color,
            border: `1px solid ${step.color}30`,
          }}
        >
          {step.step}
        </div>
        {index < STEPS.length - 1 && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-white/10 to-transparent min-h-[32px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-6">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ color: step.color }}>{step.icon}</span>
          <h3 className="text-white font-semibold text-base">{step.title}</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}
