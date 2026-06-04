export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-20 lg:pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563eb] rounded-full opacity-[0.07] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#38bdf8] rounded-full opacity-[0.04] blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#93c5fd] rounded-full opacity-[0.04] blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.04] mb-5 animate-fadeInUp delay-100">
            Your{' '}
            <span className="gradient-text">Whole Workflow,</span>
            <br />
            in Orbit
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fadeInUp delay-200">
            Bob reviews pull requests, Jim edits code with GitHub App auth, Joe keeps the public
            bot surface simple, and Orbis Command coordinates the whole network through shared
            Hermes memory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fadeInUp delay-300">
            <a
              href="#pricing"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <WorkspaceIcon />
              See pricing
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              See the flow
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 animate-fadeInUp delay-400">
            <Stat value="5" label="workspace folders" />
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <Stat value="1" label="shared Hermes layer" />
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <Stat value="3" label="public Discord bots" />
          </div>
        </div>

        <div className="w-full px-0 sm:px-4 lg:px-0">
          <WorkspaceHub />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-fadeInUp delay-500">
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#2563eb] to-transparent" />
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-500 mt-0.5">{label}</div>
    </div>
  )
}

function WorkspaceHub() {
  const nodes = [
    { name: 'Bob/', label: 'PR review and repo context', color: '#2563eb', delay: '0s', angle: 210 },
    { name: 'Jim/', label: 'GitHub App editing + memory', color: '#38bdf8', delay: '0.15s', angle: 330 },
    { name: 'Joe/', label: 'Minimal ping surface', color: '#93c5fd', delay: '0.3s', angle: 90 },
    { name: 'shared/', label: 'Hermes memory layer', color: '#34d399', delay: '0.45s', angle: 150 },
  ]

  return (
    <div className="relative w-full">
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {nodes.map((node) => (
          <NodeCard key={node.name} node={node} compact />
        ))}
      </div>

      <div className="relative hidden lg:flex h-[360px] items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#2563eb] to-[#93c5fd] flex items-center justify-center z-10 shadow-[0_0_40px_rgba(37,99,235,0.5)]">
          <OrbisLogo />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] border border-white/[0.06] rounded-full" />

        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180
          const rx = 240
          const ry = 140
          const x = Math.cos(rad) * rx
          const y = Math.sin(rad) * ry
          return (
            <div
              key={node.name}
              className="absolute flex flex-col items-center gap-2 animate-float"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                animationDelay: node.delay,
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${node.color}cc, ${node.color}66)`,
                  border: `1px solid ${node.color}44`,
                  boxShadow: `0 0 20px ${node.color}44`,
                }}
              >
                {node.name.charAt(0)}
              </div>
              <div className="text-center max-w-[140px]">
                <div className="text-sm font-semibold text-white leading-tight">{node.name}</div>
                <div className="text-xs leading-snug text-gray-500">{node.label}</div>
              </div>
            </div>
          )
        })}

        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 360">
          {nodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180
            const rx = 240
            const ry = 140
            const cx = 400
            const cy = 180
            return (
              <line
                key={node.name}
                x1={cx}
                y1={cy}
                x2={cx + Math.cos(rad) * rx}
                y2={cy + Math.sin(rad) * ry}
                stroke={node.color}
                strokeOpacity="0.2"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            )
          })}
        </svg>
      </div>
    </div>
  )
}

function NodeCard({ node, compact = false }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 ${
        compact ? '' : 'backdrop-blur-sm'
      }`}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-xs shrink-0"
        style={{
          background: `linear-gradient(135deg, ${node.color}cc, ${node.color}66)`,
          border: `1px solid ${node.color}44`,
          boxShadow: `0 0 20px ${node.color}33`,
        }}
      >
        {node.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-white leading-tight">{node.name}</div>
        <div className="text-xs text-gray-500 leading-snug">{node.label}</div>
      </div>
    </div>
  )
}

function OrbisLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="5" fill="white" />
      <circle cx="14" cy="4" r="2.5" fill="white" opacity="0.6" />
      <circle cx="14" cy="24" r="2.5" fill="white" opacity="0.6" />
      <circle cx="4" cy="14" r="2.5" fill="white" opacity="0.6" />
      <circle cx="24" cy="14" r="2.5" fill="white" opacity="0.6" />
    </svg>
  )
}

function WorkspaceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6h16v12H4z" opacity="0.18" />
      <path
        d="M7 9h10M7 12h6M7 15h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
