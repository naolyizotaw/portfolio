import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#00c6ff]/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#0072ff]/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-xs font-medium tracking-wider uppercase text-[#00c6ff]/80 mb-4">
            Software Engineering Student | Mechanical Engineering Student
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Bridging the Gap Between{' '}
            <span className="gradient-text">Digital Architecture</span>{' '}
            and{' '}
            <span className="gradient-text">Physical Design.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
            Hi, I'm <span className="text-white font-medium">Naol Yizotaw</span> — I build
            production-grade web applications with the MERN stack and design mechanical
            systems using SolidWorks and CATIA. Whether it's an API endpoint or a stress
            analysis, I engineer solutions that work.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/cv.pdf" download>Download CV</a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/naol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#00c6ff] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/naol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#00c6ff] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right: Animated orb */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-80 h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-[#00c6ff]/10 animate-orbit" />
            {/* Middle ring */}
            <div className="absolute inset-6 rounded-full border border-[#0072ff]/15 animate-orbit [animation-direction:reverse] [animation-duration:15s]" />
            {/* Inner orb */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#00c6ff]/20 to-[#0072ff]/20 backdrop-blur-sm animate-float" />
            {/* Core glow */}
            <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#00c6ff]/30 to-[#0072ff]/40 animate-pulse-glow" />
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#00c6ff]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-white/30 tracking-wider uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
