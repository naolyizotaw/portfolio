import { motion } from 'framer-motion'
import { Code2, Cog, Link2 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const focusAreas = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Building modern, scalable web applications using the MERN stack — MongoDB, Express.js, React, and Node.js — with real-time features, REST APIs, and cloud deployment.',
  },
  {
    icon: Cog,
    title: 'Mechanical Design & Simulation',
    description:
      'Designing 3D mechanical assemblies and running FEA/thermal simulations in SolidWorks and CATIA. From part design to stress analysis, engineering systems that hold up under pressure.',
  },
  {
    icon: Link2,
    title: 'Bridging Software & Hardware',
    description:
      'Creating solutions at the intersection — web dashboards for IoT sensor data, MATLAB/Simulink integrations, and digital twins that connect code to the physical world.',
  },
]

export function FocusSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-white">Current Focus</h2>
          <p className="mt-6 text-white/50 max-w-2xl">
            Channeling my expertise into three core areas, crafting solutions that bridge
            cutting-edge technology with real-world engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card-hover p-8 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00c6ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00c6ff]/20 transition-colors">
                <area.icon className="w-6 h-6 text-[#00c6ff]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{area.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
