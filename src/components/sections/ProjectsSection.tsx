import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Code2, Cog, Zap, Globe, Box, Rocket, Wrench, Layout } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'
import type { LucideIcon } from 'lucide-react'

type ProjectCategory = 'all' | 'software' | 'engineering'

interface Project {
  title: string
  description: string
  category: 'software' | 'engineering'
  tag: string
  icon: LucideIcon
  features: string[]
  tech: string[]
  github?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'Fleet Management System',
    description: 'Enterprise-grade fleet operations platform with real-time GPS tracking, maintenance workflows, inventory management, RBAC, and a dedicated Socket.IO chat microservice.',
    category: 'software',
    tag: 'Full-Stack',
    icon: Globe,
    features: ['Real-time GPS tracking', 'Role-based access control', 'Maintenance workflows', 'Inventory & fuel management', 'Socket.IO chat'],
    tech: ['React', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Leaflet'],
    github: 'https://github.com/naolyizotaw/fleet-resource-managment-system',
    image: '/images/fleet-management.png',
  },
  {
    title: 'HyperGlide Analytics',
    description: 'A high-precision real-time data monitoring platform built for industrial mechatronics systems using React and GraphQL.',
    category: 'software',
    tag: 'Web App',
    icon: Layout,
    features: ['Real-time dashboards', 'Predictive maintenance', 'Driver performance analytics', 'Data visualization'],
    tech: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
    github: '#',
    image: '/images/hyperglide-analytics.png',
  },
  {
    title: '3D Mechanical Assembly',
    description: 'Modular industrial gearbox design optimized for heat dissipation with parametric parts and motion analysis.',
    category: 'engineering',
    tag: 'CAD',
    icon: Box,
    features: ['Parametric modeling', 'Assembly mates', 'Motion analysis', 'Technical drawings'],
    tech: ['SolidWorks'],
    image: '/images/mechanical-assembly.png',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Socket-based messaging platform with end-to-end encryption, file sharing, group chats, and presence indicators.',
    category: 'software',
    tag: 'Real-Time',
    icon: Zap,
    features: ['End-to-end encryption', 'Group chats', 'File sharing', 'Presence indicators'],
    tech: ['WebSockets', 'React', 'Node.js'],
    github: '#',
    image: '/images/chat-app.png',
  },
  {
    title: 'FEA Stress Analysis',
    description: 'Comprehensive simulation of bridge truss stability under dynamic loading conditions with safety factor evaluation.',
    category: 'engineering',
    tag: 'FEA',
    icon: Wrench,
    features: ['Dynamic load simulation', 'Safety factor evaluation', 'Stress mapping', 'Deformation analysis'],
    tech: ['ANSYS', 'Simulation'],
    image: '/images/fea-stress.png',
  },
  {
    title: 'Structural Precision',
    description: 'FEA on a pressure vessel — von Mises stress mapping, deformation analysis, and safety factor evaluation under operational loading.',
    category: 'engineering',
    tag: 'Engineering',
    icon: Cog,
    features: ['Von Mises stress mapping', 'Deformation analysis', 'Safety factor evaluation', 'Operational loading'],
    tech: ['SolidWorks Simulation', 'CATIA'],
    image: '/images/structural-precision.png',
  },
  {
    title: 'This Portfolio',
    description: 'Modern single-page application with architectural design system, scroll animations, and dual-track engineering showcase.',
    category: 'software',
    tag: 'Web App',
    icon: Code2,
    features: ['Architectural design system', 'Scroll animations', 'Responsive layout', 'Bento grid'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    image: '/images/portfolio-site.png',
  },
]

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'Engineering', value: 'engineering' },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative h-full"
    >
      {/* Flowing glow border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-[#00c6ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="card-flow-border relative rounded-2xl overflow-hidden h-full flex flex-col bg-white border border-[#eef0f3] group-hover:border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_40px_rgba(0,86,196,0.12)] group-hover:bg-[#f0f7ff] transition-all duration-500">
        {/* Image area */}
        <div className="relative h-48 bg-[#f0f2f5] overflow-hidden flex-shrink-0">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <project.icon className="w-12 h-12 text-[#c4c7cc]/50" />
            </div>
          )}
          <div className="absolute top-3 right-3">
            <span className={cn(
              'inline-flex items-center px-2.5 py-1 rounded text-[0.5625rem] font-bold uppercase tracking-[0.06em] backdrop-blur-sm',
              project.category === 'software'
                ? 'bg-primary/90 text-white'
                : 'bg-[#a13b00]/90 text-white'
            )}>
              {project.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6 flex flex-col flex-1">
          {/* Title row with icon and GitHub */}
          <div className="flex items-start gap-3 mb-3">
            <div className={cn(
              'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0',
              project.category === 'software'
                ? 'bg-primary/8 text-primary'
                : 'bg-[#a13b00]/8 text-[#a13b00]'
            )}>
              <project.icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[1.0625rem] font-bold text-[#191c1e] leading-tight">
                {project.title}
              </h3>
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#9ca3af] hover:text-primary hover:bg-primary/8 transition-all flex-shrink-0"
              >
                <Github size={15} />
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-[0.8125rem] text-[#44474e] leading-[1.7] mb-3">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="mb-4">
            <p className="text-[0.6875rem] font-semibold text-[#191c1e] mb-1.5 uppercase tracking-[0.05em]">Key Features:</p>
            <ul className="space-y-0.5">
              {project.features.slice(0, 4).map(f => (
                <li key={f} className="flex items-center gap-2 text-[0.75rem] text-[#44474e]">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#f0f2f5]">
            {project.tech.map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ComingSoonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-[#00c6ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="card-flow-border relative bg-white rounded-2xl h-full flex flex-col items-center justify-center p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#eef0f3] group-hover:border-transparent group-hover:bg-[#f0f7ff] group-hover:shadow-[0_12px_40px_rgba(0,86,196,0.12)] transition-all duration-500">
        <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-5">
          <Rocket className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-[1.125rem] font-bold text-[#191c1e] mb-2">Future Innovations</h3>
        <p className="text-[0.875rem] text-[#44474e] leading-relaxed max-w-[240px]">
          Exploring the intersection of AI-driven design and additive manufacturing.
        </p>
        <p className="text-[0.75rem] text-primary font-semibold mt-4 tracking-wide">
          More Projects Coming Soon
        </p>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-24 lg:py-32 px-8 md:px-12 lg:px-20 xl:px-28">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-[0.875rem] font-semibold text-primary uppercase tracking-[0.08em] mb-3">Portfolio</p>
          <h2 className="text-[2.75rem] font-extrabold text-[#191c1e] tracking-[-0.02em] mb-4">Selected Projects</h2>
          <p className="text-[1.125rem] max-w-xl text-on-surface-variant leading-relaxed">
            A dual-track gallery spanning full-stack web applications and mechanical engineering design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-2 mb-10"
        >
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={cn(
                'px-5 py-2 rounded-sm text-[0.875rem] font-medium transition-all duration-200 cursor-pointer',
                activeFilter === f.value
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
            <ComingSoonCard />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://github.com/naolyizotaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#dfe2e6] text-[0.875rem] font-semibold text-[#191c1e] hover:border-primary hover:text-primary transition-all"
          >
            <Code2 size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
