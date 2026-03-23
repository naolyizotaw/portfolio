import { motion } from 'framer-motion'
import { Code2, Cog, Link2 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const focusAreas = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Full-stack web applications built with the MERN stack — MongoDB, Express.js, React, and Node.js. Real-time systems, REST APIs, and cloud-deployed architectures.',
  },
  {
    icon: Cog,
    title: 'Mechanical Design',
    description:
      '3D mechanical assemblies and FEA/thermal simulations in SolidWorks and CATIA. From parametric part design to stress analysis under operational loads.',
  },
  {
    icon: Link2,
    title: 'The Bridge',
    description:
      'Solutions at the intersection — IoT dashboards for sensor data, MATLAB/Simulink integrations, and digital twins connecting code to the physical world.',
  },
]

export function FocusSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="focus" ref={ref} className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="label mb-3">What I Do</p>
          <h2 className="headline-lg">Current Focus</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="surface-card-interactive p-7 lg:p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                <area.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="headline-sm mb-3">{area.title}</h3>
              <p className="body-md">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
