import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '2', label: 'Degrees in Progress' },
  { value: '10+', label: 'Certifications' },
]

export function AboutSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden bg-surface-container">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-7xl font-bold tracking-tighter text-surface-container-highest">NY</span>
                  <p className="text-xs text-on-surface-muted mt-2">Photo placeholder</p>
                </div>
              </div>
              {/* Bottom stats bar on the image */}
              <div className="absolute bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-sm p-4">
                <div className="flex gap-4">
                  {stats.slice(0, 2).map(stat => (
                    <div key={stat.label}>
                      <div className="text-lg font-bold text-on-surface">{stat.value}</div>
                      <div className="text-[10px] text-on-surface-muted uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label mb-3">About</p>
            <h2 className="display-sm mb-6">
              Architecting Systems,{' '}
              <span className="gradient-text">Physical</span> &amp;{' '}
              <span className="gradient-text">Digital</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="body-lg">
                I'm Naol Yizotaw, a dual-degree student in Software Engineering and
                Mechanical Engineering at Addis Ababa Institute of Technology. My path
                is driven by a curiosity about how software can control, simulate, and
                enhance the physical world.
              </p>
              <p className="body-md">
                On the software side, I build scalable MERN applications — APIs,
                real-time systems, modern React interfaces. On the mechanical side,
                I design 3D assemblies in SolidWorks, run FEA simulations, and analyze
                stress/thermal behavior in components.
              </p>
              <p className="body-md">
                What excites me most is the intersection — projects that leverage both
                skill sets to create something neither a pure developer nor a pure
                engineer could build alone.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(stat => (
                <div key={stat.label} className="surface-card p-4 shadow-ambient-sm">
                  <div className="text-xl font-bold text-primary mb-0.5">{stat.value}</div>
                  <div className="text-[11px] text-on-surface-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
