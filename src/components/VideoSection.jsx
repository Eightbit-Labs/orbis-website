import { useEffect, useRef } from 'react'

export default function VideoSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play()
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.5 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <section id="demo" className="relative py-28 px-6 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            See Orbis in action
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A quick walkthrough of how the Orbis agent network automates your Discord-to-GitHub workflow.
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <video 
            ref={videoRef}
            src="/orbis-ad.mp4" 
            muted
            playsInline
            controls
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
