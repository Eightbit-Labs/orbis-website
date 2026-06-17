export default function CTA() {
  return (
    <section id="about" className="reveal relative py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to work inside Orbis?</h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          The site maps directly to the /projects/orbis folder. Experience a workspace where the repo, the code, and the agents stay perfectly in sync.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all"
          >
            Open pricing
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-all"
          >
            Read the flow
          </a>
        </div>
      </div>
    </section>
  )
}
