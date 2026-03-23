import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects' },
  { value: '2', label: 'Degrees in Progress' },
  { value: '10+', label: 'Certifications' },
]

export function AboutSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden gradient-border">
              <div className="absolute inset-[1px] rounded-2xl bg-base-dark flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-[#00c6ff]/10 to-[#0072ff]/10 flex items-center justify-center">
                  <span className="text-6xl font-bold gradient-text">NY</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-white/60 leading-relaxed">
              I'm <span className="text-white font-medium">Naol Yizotaw</span>, a Software Engineering and
              Mechanical Engineering student at Addis Ababa Institute of Technology. My
              dual-degree path isn't a coincidence — it's driven by a deep curiosity about
              how software can control, simulate, and enhance the physical world.
            </p>
            <p className="text-white/60 leading-relaxed">
              On the software side, I specialize in the MERN stack — building scalable APIs,
              real-time communication systems, and modern React interfaces. On the mechanical
              side, I work with SolidWorks and CATIA to design 3D assemblies, run FEA
              simulations, and analyze thermal/stress behavior in components.
            </p>
            <p className="text-white/60 leading-relaxed">
              What excites me most is the intersection — projects where I can leverage both
              skill sets to create something neither a pure developer nor a pure engineer
              could build alone. Whether it's a web dashboard visualizing real-time sensor
              data from a physical system I designed, or an automated pipeline that bridges
              CAD outputs with cloud infrastructure.
            </p>
            <p className="text-white/60 leading-relaxed">
              Beyond the technical work, I lead community technical sessions, contribute to
              open source, and create educational content to help others on their engineering
              journey.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(stat => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
