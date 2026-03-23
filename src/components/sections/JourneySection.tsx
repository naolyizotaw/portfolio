import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Check, Circle } from 'lucide-react'

interface JourneyEntry {
  role: string
  org: string
  period: string
  description: string
  completed: boolean
}

const journeyLeft: JourneyEntry[] = [
  {
    role: 'Lead Developer',
    org: 'Full-Stack Projects',
    period: '2024 – Present',
    description: 'Building enterprise-level MERN applications with real-time communication, predictive analytics, and complex database architectures.',
    completed: true,
  },
  {
    role: 'Software Engineering Student',
    org: 'AAiT, Addis Ababa University',
    period: '2021 – Present',
    description: 'Studying software architecture, algorithms, and systems design. Leading technical workshops and contributing to open source communities.',
    completed: false,
  },
]

const journeyRight: JourneyEntry[] = [
  {
    role: 'Design Engineer',
    org: 'Mechanical Design & Simulation',
    period: '2023 – Present',
    description: 'Creating 3D assemblies, running FEA simulations, and performing thermal/stress analysis for mechanical components in SolidWorks and CATIA.',
    completed: true,
  },
  {
    role: 'Mechanical Engineering Student',
    org: 'AAiT, Addis Ababa University',
    period: '2021 – Present',
    description: 'Studying thermodynamics, fluid mechanics, material science, and machine design. Applying theory to real-world CAD projects.',
    completed: false,
  },
]

function JourneyCard({ entry, index, isInView, side }: { entry: JourneyEntry; index: number; isInView: boolean; side: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-4"
    >
      <div className="pt-1.5 shrink-0">
        {entry.completed ? (
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Check size={13} className="text-on-primary" strokeWidth={2.5} />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center">
            <Circle size={8} className="text-outline-variant" />
          </div>
        )}
      </div>
      <div className="pb-8">
        <h4 className="text-[0.9375rem] font-semibold text-on-surface mb-0.5">{entry.role}</h4>
        <p className="text-xs text-on-surface-muted mb-1">{entry.org}</p>
        <p className="label text-on-surface-muted mb-2">{entry.period}</p>
        <p className="body-md">{entry.description}</p>
      </div>
    </motion.div>
  )
}

export function JourneySection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })

  return (
    <section id="journey" ref={ref} className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="label mb-3">Experience</p>
          <h2 className="display-sm">The Professional Journey</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-0">
            {journeyLeft.map((entry, i) => (
              <JourneyCard key={entry.role} entry={entry} index={i} isInView={isInView} side="left" />
            ))}
          </div>
          <div className="space-y-0">
            {journeyRight.map((entry, i) => (
              <JourneyCard key={entry.role} entry={entry} index={i} isInView={isInView} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
