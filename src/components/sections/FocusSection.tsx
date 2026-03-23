import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

/** Software: blue chevrons `< >` — matches reference */
function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 7.5L4.5 12L8.5 16.5"
        stroke="#0056c4"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 7.5L19.5 12L15.5 16.5"
        stroke="#0056c4"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Mechanical: terracotta industrial robot arm — solid silhouette, one cohesive shape.
 * Base → column → shoulder → upper segment (up-right) → elbow → forearm (left) → fork gripper (down).
 */
function RobotArmIcon() {
  const c = '#a13b00'
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base */}
      <rect x="3.5" y="19.25" width="9" height="2.75" rx="0.65" fill={c} />
      {/* Column */}
      <rect x="7" y="13.25" width="2.75" height="6" rx="0.45" fill={c} />
      {/* Shoulder hub */}
      <circle cx="8.4" cy="13.25" r="2.15" fill={c} />
      {/* Upper arm: filled band (cleaner than stroke + overlap) */}
      <path
        d="M9.8 11.8 L15.2 7.4 L16.4 8.6 L11 13 Z"
        fill={c}
      />
      {/* Elbow hub */}
      <circle cx="16" cy="8" r="1.65" fill={c} />
      {/* Forearm: horizontal bar from gripper (left) to elbow (right) */}
      <rect x="6.25" y="6.85" width="9.75" height="2.5" rx="0.55" fill={c} />
      {/* Fork gripper — V opening downward from forearm nose */}
      <path
        d="M6.5 9.3 L4 13.6 M6.5 9.3 L9 13.6"
        stroke={c}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** The Bridge: dark slate “file” with white `<>` inside — matches reference */
function BridgeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="#2f343a" />
      <path
        d="M8.5 9.5L6 12L8.5 14.5"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 9.5L18 12L15.5 14.5"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const focusAreas = [
  {
    icon: CodeIcon,
    iconBg: 'bg-[#e8f0fe]',
    title: 'Software Engineering',
    description:
      'Developing scalable backend architectures and high-performance React applications with a focus on type-safety.',
    linkText: 'Explore Tech',
    linkColor: 'text-[#0056c4]',
    linkHref: '#skills',
  },
  {
    icon: RobotArmIcon,
    iconBg: 'bg-[#fef0e6]',
    title: 'Mechanical Design',
    description:
      'CAD modeling and FEA analysis for structural integrity. Bridging hardware constraints with design innovation.',
    linkText: 'View Blueprints',
    linkColor: 'text-[#a13b00]',
    linkHref: '#projects',
  },
  {
    icon: BridgeIcon,
    iconBg: 'bg-[#f0f0f2]',
    title: 'The Bridge',
    description:
      'Specializing in IoT and Mechatronics where hardware meets code. Designing seamless end-to-end systems.',
    linkText: 'See Work',
    linkColor: 'text-[#42474d]',
    linkHref: '#projects',
  },
]

export function FocusSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="focus" ref={ref} className="py-24 lg:py-32 px-8 md:px-12 lg:px-20 xl:px-28 bg-surface-container-low">
      <div className="w-full">
        {/* Header row: title left, label right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <h2 className="headline-lg">Current Focus</h2>
          <p className="label text-[#0056c4] hidden sm:block tracking-[0.08em] uppercase">
            Architecting the Future
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl p-7 lg:p-8 flex flex-col shadow-ambient-sm"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-lg ${area.iconBg} flex items-center justify-center mb-7`}>
                <area.icon />
              </div>

              {/* Title */}
              <h3 className="text-[1.375rem] font-semibold text-[#191c1e] tracking-[-0.02em] mb-3">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-[1rem] leading-[1.7] text-[#42474d] mb-6 flex-1">
                {area.description}
              </p>

              {/* Link */}
              <button
                onClick={() => scrollTo(area.linkHref)}
                className={`inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold ${area.linkColor} cursor-pointer group`}
              >
                {area.linkText}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
