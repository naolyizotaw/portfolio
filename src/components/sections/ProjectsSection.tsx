import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code2, Cog, Zap, Globe, Box } from 'lucide-react'
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
  tech: string[]
  featured?: boolean
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'HyperGlide Analytics',
    description: 'A comprehensive fleet tracking and management platform with real-time GPS, predictive maintenance scheduling, and driver performance analytics dashboards.',
    category: 'software',
    tag: 'Web App',
    icon: Globe,
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    featured: true,
    github: '#',
    live: '#',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Full-featured messaging with WebSocket communication, file sharing, group chats, and user presence indicators.',
    category: 'software',
    tag: 'Real-Time',
    icon: Zap,
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: '#',
  },
  {
    title: '3D Gearbox Assembly',
    description: 'Complete multi-component gearbox system designed in SolidWorks — parametric parts, assembly mates, and motion analysis with technical drawings.',
    category: 'engineering',
    tag: 'CAD',
    icon: Box,
    tech: ['SolidWorks', 'Part Design', 'Assembly'],
    featured: true,
  },
  {
    title: 'Structural Precision',
    description: 'FEA on a pressure vessel component — von Mises stress mapping, deformation analysis, and safety factor evaluation under operational loading.',
    category: 'engineering',
    tag: 'FEA',
    icon: Cog,
    tech: ['SolidWorks Simulation', 'CATIA', 'MATLAB'],
  },
  {
    title: 'Website Masterclass',
    description: 'This portfolio — a modern single-page application showcasing dual-track engineering with scroll animations and architectural design principles.',
    category: 'software',
    tag: 'Web App',
    icon: Code2,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    live: '#',
  },
]

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'Engineering', value: 'engineering' },
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="label mb-3">Portfolio</p>
          <h2 className="section-title mb-4">Selected Projects</h2>
          <p className="body-lg max-w-xl text-on-surface-variant">
            A dual-track gallery spanning full-stack web applications and mechanical engineering design.
          </p>
        </motion.div>

        {/* Filter tabs */}
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
                'px-4 py-1.5 rounded-sm text-[0.8125rem] font-medium transition-all duration-200 cursor-pointer',
                activeFilter === f.value
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid — asymmetric masonry */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  'surface-card-interactive group relative overflow-hidden',
                  project.featured && 'md:col-span-2 lg:col-span-1'
                )}
              >
                {/* Image placeholder area */}
                <div className="relative h-44 bg-surface-container-low overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-12 h-12 text-outline-variant/30" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="tag-badge">{project.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[0.9375rem] font-semibold text-on-surface mb-2">{project.title}</h3>
                  <p className="text-[0.8125rem] text-on-surface-variant leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 text-xs flex items-center gap-1.5">
                      <ExternalLink size={13} /> View Project
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outlined px-4 py-2 text-xs flex items-center gap-1.5">
                      <Github size={13} /> Source
                    </a>
                  )}
                  {!project.live && !project.github && (
                    <span className="text-xs text-on-surface-muted font-medium">Case Study Coming Soon</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a href="https://github.com/naol" target="_blank" rel="noopener noreferrer" className="btn-text inline-flex items-center gap-2 text-sm">
            <Github size={15} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
