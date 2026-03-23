import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { GraduationCap, BadgeCheck } from 'lucide-react'

const photoStats = [
  { value: '3+', label: 'Years Exp.' },
  { value: '15+', label: 'Projects Done' },
]

const credentials = [
  {
    icon: GraduationCap,
    title: 'B.Sc. Mechanical Eng.',
    subtitle: 'Top Tier University',
  },
  {
    icon: BadgeCheck,
    title: 'Full Stack Cert.',
    subtitle: 'Advance Institute',
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="px-8 md:px-12 lg:px-20 xl:px-28 py-24 lg:py-32">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left: Photo area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden bg-[#3a3a3a] h-full min-h-[460px] lg:min-h-[540px]">
              {/* Grayscale portrait placeholder */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#8a8a8a] via-[#5a5a5a] to-[#303030]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8rem] font-bold tracking-tighter text-white/[0.06] leading-none select-none">NY</span>
              </div>
            </div>

            {/* Stats chip — overlaps bottom-left of photo */}
            <div className="absolute -bottom-5 left-5 z-10">
              <div className="bg-white rounded-xl px-7 py-4 shadow-ambient-sm flex gap-8 items-center">
                {photoStats.map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-[1.625rem] font-bold text-primary leading-none">{stat.value}</div>
                    <div className="text-[0.5625rem] text-[#42474d] uppercase tracking-[0.12em] font-semibold mt-1.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Text content — sits on page bg, no card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between py-2"
          >
            <div>
              <p className="label text-primary mb-4 tracking-[0.08em]">Biography</p>
              <h2 className="display-sm mb-8 !leading-[1.12]">
                Architecting Systems,<br />
                Physical &amp; Digital
              </h2>

              <div className="space-y-5">
                <p className="body-lg leading-[1.75]">
                  I am Naol Yizotaw, a dual-disciplinary engineer fascinated by the
                  harmony of complex systems. My background in Mechanical
                  Engineering provides me with a grounded understanding of
                  physical constraints, while my expertise in Software Engineering
                  allows me to build infinite digital solutions.
                </p>
                <p className="body-md leading-[1.75]">
                  I believe the future of technology lies at the intersection of these
                  two worlds—where hardware and software are indistinguishable.
                  My work focuses on making that bridge as solid and efficient as
                  possible.
                </p>
              </div>
            </div>

            {/* Credentials row — aligned to bottom */}
            <div className="flex flex-wrap gap-10 mt-10">
              {credentials.map(cred => (
                <div key={cred.title} className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#e8f0fe] flex items-center justify-center shrink-0">
                    <cred.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[0.9375rem] font-bold text-[#191c1e] leading-tight">{cred.title}</div>
                    <div className="text-[0.75rem] text-[#6b7280] leading-tight mt-0.5">{cred.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
