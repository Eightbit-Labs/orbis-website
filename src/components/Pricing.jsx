const PLANS = [
  {
    name: 'Basic',
    price: '$29',
    cadence: '/mo',
    description: 'For solo maintainers who want Bob and Joe handling reviews and quick checks.',
    color: '#2563eb',
    badge: 'Starter',
    features: ['Bob PR reviews', 'Joe /ping checks', 'Shared Hermes memory', '1 active repo'],
  },
  {
    name: 'Pro',
    price: '$79',
    cadence: '/mo',
    description: 'For teams that want code edits, commits, and PR generation on top of review.',
    color: '#38bdf8',
    badge: 'Most popular',
    highlighted: true,
    features: [
      'Everything in Basic',
      'Jim GitHub App editing',
      'Branch, commit, and PR automation',
      'Custom prompts for team workflows',
      'Up to 5 repos',
    ],
  },
  {
    name: 'Max',
    price: '$149',
    cadence: '/mo',
    description: 'For larger teams that want the full Orbis network coordinating the work.',
    color: '#34d399',
    badge: 'Full stack',
    features: [
      'Everything in Pro',
      'Orbis Command routing',
      'Secret redaction + shared utilities',
      'Multi-bot coordination',
      'Priority support and onboarding',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2563eb] opacity-[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#a78bfa] opacity-[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-sm mb-5 animate-fadeInUp">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
            Service pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 animate-fadeInUp delay-100">
            Pricing that scales with{' '}
            <span className="gradient-text">how much Orbis you need</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp delay-200">
            Start with lightweight review and move up to full command orchestration as your team
            needs more automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PLANS.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#111118] p-6 animate-fadeInUp delay-400">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Need something custom?</div>
              <div className="text-white font-mono text-sm sm:text-base break-all">
                Ask for a private deployment or a mixed bot bundle.
              </div>
            </div>
            <div className="text-sm text-gray-400 max-w-2xl">
              Higher tiers add more automation, more orchestration, and more shared workspace
              context so the plans improve as the price rises.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan, index }) {
  return (
    <div
      className={`relative rounded-3xl border bg-[#111118] p-7 transition-all duration-300 animate-fadeInUp ${
        plan.highlighted ? 'border-[#38bdf8]/40 shadow-[0_0_40px_rgba(56,189,248,0.12)]' : 'border-white/[0.08]'
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold bg-[#38bdf8] text-[#03131d]">
          Most popular
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">{plan.badge}</div>
          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">{plan.description}</p>
        </div>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shrink-0"
          style={{
            background: `linear-gradient(135deg, ${plan.color}cc, ${plan.color}66)`,
            border: `1px solid ${plan.color}44`,
          }}
        >
          {index + 1}
        </div>
      </div>

      <div className="mb-7 flex items-end gap-2">
        <div className="text-5xl font-bold text-white tracking-tight">{plan.price}</div>
        <div className="text-gray-500 pb-1">{plan.cadence}</div>
      </div>

      <div className="space-y-3 mb-7">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
            <svg
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke={plan.color}
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </div>
        ))}
      </div>

      <a
        href="#about"
        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#93c5fd] transition-colors"
      >
        Choose this plan
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
        </svg>
      </a>
    </div>
  )
}
