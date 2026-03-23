import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const timelineData = [
  {
    year: '2021',
    title: 'Started University',
    subtitle: 'Addis Ababa Institute of Technology',
    description:
      'Began dual studies in Software Engineering and Mechanical Engineering, laying the foundation for a career at the intersection of digital and physical systems.',
  },
  {
    year: '2022',
    title: 'First Full-Stack Projects',
    subtitle: 'Academic & Personal',
    description:
      'Built early MERN stack applications and started learning SolidWorks for mechanical design. Led technical sessions within the university community.',
  },
  {
    year: '2023',
    title: 'Expanding the Stack',
    subtitle: 'Freelance & Open Source',
    description:
      'Developed production-grade web apps with real-time features, complex database schemas, and predictive analytics. Deepened CAD skills with CATIA and FEA simulations.',
  },
  {
    year: '2024',
    title: 'Community Leadership',
    subtitle: 'Tech Communities & Teaching',
    description:
      'Led technical workshops, contributed to open source, and created educational content. Built projects combining IoT sensor data with web dashboards.',
  },
  {
    year: '2025-Present',
    title: 'Full-Stack + Mechanical Design',
    subtitle: 'Professional Growth',
    description:
      'Focusing on enterprise-level MERN applications, advanced FEA/thermal analysis, and bridging the gap between software architecture and physical engineering.',
  },
]

export function JourneySection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="journey" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-white">Journey</h2>
          <p className="mt-6 text-white/50 max-w-2xl">
            From curiosity-driven experiments to engineering production systems —
            my path has been defined by the drive to bridge software and hardware.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 timeline-line" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass-card p-6">
                    <span className="inline-block text-xs font-bold tracking-wider text-[#00c6ff] mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-[#00c6ff]/60 mb-3">{item.subtitle}</p>
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6">
                  <div className="timeline-dot" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
