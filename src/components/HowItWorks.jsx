const STEPS = [
  {
    step: '01',
    title: 'Open the Orbis workspace',
    description:
      'The site maps to the actual /projects/orbis folder, so the repo structure on the page matches the code on disk.',
    color: '#2563eb',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Configure each bot locally',
    description:
      'Jim reads its GitHub App private key from a machine-specific path, while the other bots keep their own small .env files.',
    color: '#38bdf8',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.761 0-5 1.79-5 4s2.239 4 5 4 5 1.79 5 4-2.239 4-5 4" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Ask an agent to do the work',
    description:
      'Bob reviews, Jim edits, Joe answers quickly, and Orbis Command keeps the command surface coordinated.',
    color: '#93c5fd',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Let Hermes memory keep continuity',
    description:
      'The shared layer remembers people, repos, and prior edits while redacting secrets and preserving the workspace history.',
    color: '#34d399',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6M5 5h14v14H5z" />
      </svg>
    ),
  },
]

const COMMAND_DEMO = `C:\\Users\\Lawrence Tong\\Desktop\\Projects\\orbis> dir
Bob/
Jim/
Joe/
Orbis Command/
shared/

C:\\Users\\Lawrence Tong\\Desktop\\Projects\\orbis> node verify-hermes-system.js
✅ Hermes system verification passed
   - shared memory persistence
   - cross-bot context retrieval
   - repo/person tracking
   - secret redaction
   - prompt integration

C:\\Users\\Lawrence Tong\\Desktop\\Projects\\orbis\\Jim> node verify-commands.js
✅ Verification complete`

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="reveal relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#93c5fd] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]" />
            How the workspace moves
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Built to{' '}
            <span className="gradient-text">stay in sync</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything is laid out so the website, the repo folders, and the Hermes agents all
            describe the same system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} />
            ))}
          </div>

          <div className="sticky top-24">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d14] overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111118]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-gray-500 font-mono">#orbis · hermes workspace</span>
              </div>
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
    <div className="flex gap-5 animate-fadeInUp" style={{ animationDelay: `${index * 120}ms` }}>
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
