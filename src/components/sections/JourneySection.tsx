import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Briefcase, GraduationCap, Heart, Code2, Wrench, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface JourneyEntry {
  role: string
  org: string
  period: string
  description: string
  icon: LucideIcon
}

const journeyEntries: JourneyEntry[] = [
  {
    role: 'Technical Lead',
    org: 'GDG Hilcoe',
    period: '2026 – Present',
    description: 'Organizing technical events and hackathons. Leading peer learning sessions and contributing to open-source and innovation-driven projects.',
    icon: Code2,
  },
  {
    role: 'Software Engineering Student',
    org: 'Hilcoe School of CS & Technology',
    period: '2025 – Present',
    description: 'Second-year student building full-stack MERN applications, studying software architecture, algorithms, and systems design.',
    icon: GraduationCap,
  },
  {
    role: 'Mechanical Engineering Student',
    org: 'Addis Ababa University',
    period: '2024 – 2028',
    description: 'Third-year student studying thermodynamics, fluid mechanics, material science, and machine design. Applying theory to real-world CAD and FEA projects.',
    icon: Wrench,
  },
  {
    role: 'Backend Development Trainee',
    org: 'ALX Ethiopia',
    period: '2024',
    description: 'Completed intensive 6-month backend development training focused on Django, REST APIs, and database design with hands-on project delivery.',
    icon: Briefcase,
  },
  {
    role: 'Volunteer',
    org: 'Nehemiah Autism Center',
    period: '2023 – 2024',
    description: 'Supported the care and integration of individuals with autism into the community. Advocated for inclusive practices and disability awareness.',
    icon: Heart,
  },
  {
    role: 'Youth Leader',
    org: 'Kerabu Full Gospel Church',
    period: '2021 – 2023',
    description: 'Organized workshops and leadership training sessions to foster personal and career development among youth. Promoted cross-cultural dialogue.',
    icon: Users,
  },
]

function TimelineRow({ entry, index, isInView }: { entry: JourneyEntry; index: number; isInView: boolean }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center"
    >
      {/* Left cell */}
      {isEven ? (
        <div className="text-right pr-2">
          <h4 className="text-[1.5rem] font-bold text-[#191c1e] tracking-[-0.02em]">{entry.role}</h4>
          <p className="text-[0.9375rem] text-[#6b7280] mt-1">{entry.org}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-5 shadow-ambient-sm">
          <p className="label text-primary mb-2">{entry.period}</p>
          <p className="text-[0.9375rem] leading-[1.65] text-[#42474d]">{entry.description}</p>
        </div>
      )}

      {/* Center icon */}
      <div className="relative flex items-center justify-center">
        <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center z-10">
          <entry.icon className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Right cell */}
      {isEven ? (
        <div className="bg-white rounded-xl p-5 shadow-ambient-sm">
          <p className="label text-primary mb-2">{entry.period}</p>
          <p className="text-[0.9375rem] leading-[1.65] text-[#42474d]">{entry.description}</p>
        </div>
      ) : (
        <div className="text-left pl-2">
          <h4 className="text-[1.5rem] font-bold text-[#191c1e] tracking-[-0.02em]">{entry.role}</h4>
          <p className="text-[0.9375rem] text-[#6b7280] mt-1">{entry.org}</p>
        </div>
      )}
    </motion.div>
  )
}

export function JourneySection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })

  return (
    <section id="journey" ref={ref} className="py-24 lg:py-32 px-8 md:px-12 lg:px-20 xl:px-28 bg-surface-container-low">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="display-sm mb-4">The Professional Journey</h2>
          <div className="w-12 h-[3px] bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#dfe2e6] hidden lg:block" />

          <div className="space-y-10 lg:space-y-14">
            {journeyEntries.map((entry, i) => (
              <TimelineRow key={entry.role} entry={entry} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
