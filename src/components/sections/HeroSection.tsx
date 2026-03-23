import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-14"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Text — pushed asymmetrically into 7 cols */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label mb-5 text-on-surface-muted">
            Software Engineering &amp; Mechanical Design
          </p>

          <h1 className="display-lg mb-6 max-w-[540px]">
            Engineering{' '}
            <span className="gradient-text">Precision</span> In
            Every Pixel.
          </h1>

          <p className="body-lg max-w-[480px] mb-8 text-on-surface-variant">
            Full-Stack Software Engineer & Mechanical Design Engineer.
            I build production-grade MERN applications and design physical
            systems with precision and purpose.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button variant="outlined" size="lg" asChild>
              <a href="/cv.pdf" download>Download CV</a>
            </Button>
          </div>
        </motion.div>

        {/* Right: Geometric illustration — 5 cols */}
        <motion.div
          className="hidden lg:flex lg:col-span-5 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-72 h-72">
            {/* Geometric wireframe cube */}
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Back face */}
              <rect x="50" y="30" width="100" height="100" rx="2" stroke="#c4c7cc" strokeWidth="1" opacity="0.4" />
              {/* Front face */}
              <rect x="30" y="60" width="100" height="100" rx="2" stroke="#0056c4" strokeWidth="1.5" />
              {/* Connecting lines */}
              <line x1="30" y1="60" x2="50" y2="30" stroke="#c4c7cc" strokeWidth="1" opacity="0.4" />
              <line x1="130" y1="60" x2="150" y2="30" stroke="#c4c7cc" strokeWidth="1" opacity="0.4" />
              <line x1="130" y1="160" x2="150" y2="130" stroke="#c4c7cc" strokeWidth="1" opacity="0.4" />
              {/* Accent diagonal */}
              <line x1="30" y1="160" x2="150" y2="30" stroke="#0056c4" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
              {/* Dot accents */}
              <circle cx="30" cy="60" r="3" fill="#0056c4" />
              <circle cx="130" cy="160" r="3" fill="#0056c4" />
              <circle cx="150" cy="30" r="3" fill="#c4c7cc" />
              {/* Small annotation mark */}
              <rect x="145" y="85" width="30" height="1.5" fill="#0056c4" rx="0.75" />
              <rect x="145" y="92" width="20" height="1.5" fill="#c4c7cc" rx="0.75" />
            </svg>

            {/* Floating annotation card */}
            <motion.div
              className="absolute -top-2 -right-4 surface-card shadow-ambient-sm px-3 py-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-sm bg-primary/10 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5L4 8L9 2" stroke="#0056c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-[10px] font-medium text-on-surface-variant">Precision Built</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="label text-on-surface-muted">Scroll to explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} className="text-outline-variant" />
        </motion.div>
      </motion.div>
    </section>
  )
}
