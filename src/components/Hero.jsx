export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563eb] rounded-full opacity-[0.07] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#38bdf8] rounded-full opacity-[0.04] blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#93c5fd] rounded-full opacity-[0.04] blur-[100px]" />
      </div>

      {/* Grid lines background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563eb]/30 bg-[#2563eb]/10 text-[#93c5fd] text-sm font-medium mb-8 animate-fadeInUp">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse-glow inline-block" />
          Agentic AI Workforce — Built for Discord
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6 animate-fadeInUp delay-100">
          Your{' '}
          <span className="gradient-text">Whole Workflow,</span>
          <br />
          in Orbit
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-200">
          Orbis is a suite of intelligent Discord bots that handle every stage of your software
          development workflow — from planning to deployment — right inside your server.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp delay-300">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <DiscordIcon />
            Add Orbis to Discord
          </a>
          <a
            href="#bots"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            Meet the Bots
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-6 mt-14 animate-fadeInUp delay-400">
          <Stat value="3" label="AI Bots" />
          <div className="w-px h-8 bg-white/10" />
          <Stat value="10k+" label="Commands Run" />
          <div className="w-px h-8 bg-white/10" />
          <Stat value="500+" label="Teams Using Orbis" />
        </div>
      </div>

      {/* Floating bot avatars */}
      <div className="relative z-10 mt-20 w-full max-w-4xl mx-auto">
        <BotOrbital />
      </div>

      {/* Scroll indicator */}
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

function BotOrbital() {
  const bots = [
    { name: 'Bob', role: 'Project Manager', color: '#2563eb', delay: '0s', angle: 210 },
    { name: 'Jim', role: 'Code Reviewer', color: '#38bdf8', delay: '0.15s', angle: 330 },
    { name: 'Joe', role: 'DevOps Engineer', color: '#93c5fd', delay: '0.3s', angle: 90 },
  ]

  return (
    <div className="relative h-[220px] flex items-center justify-center">
      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#2563eb] to-[#93c5fd] flex items-center justify-center z-10 shadow-[0_0_40px_rgba(37,99,235,0.5)]">
        <OrbisLogo />
      </div>

      {/* Orbit ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[180px] border border-white/[0.06] rounded-full" />

      {/* Bot nodes */}
      {bots.map((bot) => {
        const rad = (bot.angle * Math.PI) / 180
        const rx = 180
        const ry = 90
        const x = Math.cos(rad) * rx
        const y = Math.sin(rad) * ry
        return (
          <div
            key={bot.name}
            className="absolute flex flex-col items-center gap-1.5 animate-float"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
              animationDelay: bot.delay,
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${bot.color}cc, ${bot.color}66)`,
                border: `1px solid ${bot.color}44`,
                boxShadow: `0 0 20px ${bot.color}44`,
              }}
            >
              {bot.name[0]}
            </div>
            <div className="text-center">
              <div className="text-xs font-semibold text-white">{bot.name}</div>
              <div className="text-[10px] text-gray-500">{bot.role}</div>
            </div>
          </div>
        )
      })}

      {/* Connector lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 220">
        {bots.map((bot) => {
          const rad = (bot.angle * Math.PI) / 180
          const rx = 180
          const ry = 90
          const cx = 400
          const cy = 110
          return (
            <line
              key={bot.name}
              x1={cx}
              y1={cy}
              x2={cx + Math.cos(rad) * rx}
              y2={cy + Math.sin(rad) * ry}
              stroke={bot.color}
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          )
        })}
      </svg>
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

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  )
}
