export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$5',
      period: '/month',
      description: 'Perfect for small teams getting started',
      bots: 3,
      models: ['Kimi K2.6', 'Deepseek V4', 'Qwen 3.6'],
      connections: '1 GitHub Org + 1 Individual',
      features: [
        'Up to 3 AI bots',
        'Basic AI models',
        '1 GitHub organization connection',
        '1 individual GitHub user',
        'Community support',
        '5,000 commands/month',
      ],
      cta: 'Start with Basic',
      color: '#38bdf8',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$10',
      period: '/month',
      description: 'For growing teams that need more power',
      bots: 5,
      models: ['GPT 5.4', 'Claude Sonnet 4.6'],
      connections: '2 GitHub Orgs + 5 Individuals',
      features: [
        'Up to 5 AI bots',
        'Advanced AI models',
        '2 GitHub organization connections',
        '5 individual GitHub users',
        'Priority email support',
        '25,000 commands/month',
        'Custom model configurations',
        'Advanced analytics dashboard',
      ],
      cta: 'Go Pro',
      color: '#93c5fd',
      highlight: false,
    },
    {
      name: 'Enterprise',
      price: '$20',
      period: '/month',
      description: 'Maximum power for enterprise-scale teams',
      bots: 7,
      models: ['GPT 5.5', 'Claude Opus 4.7', 'Gemini 3.1'],
      connections: 'Unlimited GitHub connections',
      features: [
        'All 7 AI bots',
        'Best-in-class AI models',
        'Unlimited GitHub organization connections',
        'Unlimited individual GitHub users',
        '24/7 dedicated support',
        'Unlimited commands/month',
        'Custom model fine-tuning',
        'Advanced analytics + custom reports',
        'SOC 2 compliance',
        'Custom integrations',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      color: '#a78bfa',
      highlight: true,
    },
  ]

  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2563eb] opacity-[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#a78bfa] opacity-[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-400 text-sm mb-5 animate-fadeInUp">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 animate-fadeInUp delay-100">
            Plans for every{' '}
            <span className="gradient-text">team size</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp delay-200">
            Choose the perfect plan to power your development workflow. All plans include core Discord bot features and secure GitHub integration.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* FAQ / Bottom text */}
        <div className="text-center mt-20 animate-fadeInUp delay-500">
          <p className="text-gray-400 mb-4">
            Need a custom plan? <a href="#contact" className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition">Contact our sales team</a>
          </p>
          <p className="text-sm text-gray-500">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan, index }) {
  const isEnterprise = plan.highlight

  return (
    <div
      className={`relative animate-fadeInUp rounded-2xl transition-all duration-300 ${
        isEnterprise
          ? 'md:scale-105 md:ring-2 ring-[#a78bfa]/50 shadow-[0_0_60px_rgba(167,139,250,0.25)]'
          : 'border border-white/[0.08] bg-[#111118] hover:border-white/[0.15] hover:bg-[#14141e]'
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        ...(isEnterprise && {
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(37, 99, 235, 0.04) 100%)',
          border: '1px solid rgba(167, 139, 250, 0.3)',
        }),
      }}
    >
      {/* Enterprise Badge */}
      {isEnterprise && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#2563eb] text-white text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse-glow" />
            Recommended for Scale
          </div>
        </div>
      )}

      <div className={`p-8 ${isEnterprise ? 'pt-12' : ''}`}>
        {/* Plan Name & Description */}
        <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-white">{plan.price}</span>
            <span className="text-gray-400">{plan.period}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full py-3.5 rounded-xl font-semibold text-base mb-8 transition-all duration-200 ${
            isEnterprise
              ? 'bg-gradient-to-r from-[#a78bfa] to-[#2563eb] text-white hover:shadow-[0_0_30px_rgba(167,139,250,0.4)] hover:-translate-y-0.5'
              : 'border border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.1] hover:border-white/20 hover:-translate-y-0.5'
          }`}
        >
          {plan.cta}
        </button>

        {/* Bot Count & Models */}
        <div className="grid grid-cols-2 gap-4 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="text-lg font-bold text-white">{plan.bots}</div>
            <div className="text-xs text-gray-500">AI Bots Included</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white line-clamp-2">
              {plan.models.join(', ')}
            </div>
            <div className="text-xs text-gray-500">AI Models</div>
          </div>
        </div>

        {/* GitHub Connections */}
        <div className="py-6 border-b border-white/[0.06]">
          <div className="text-sm font-semibold text-white mb-1">GitHub Access</div>
          <div className={`text-sm ${isEnterprise ? 'text-[#a78bfa]' : 'text-gray-400'}`}>
            {plan.connections}
          </div>
        </div>

        {/* Features List */}
        <div className="pt-6">
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon
                  color={
                    isEnterprise
                      ? '#a78bfa'
                      : plan.color
                  }
                />
                <span className="text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom accent line for non-enterprise cards */}
      {!isEnterprise && (
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  )
}

function CheckIcon({ color }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
