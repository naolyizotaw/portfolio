import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'

type ProjectCategory = 'all' | 'software' | 'engineering'

interface Project {
  title: string
  description: string
  category: 'software' | 'engineering'
  tag: string
  features: string[]
  tech: string[]
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'Fleet Management System',
    description:
      'A comprehensive fleet tracking and management platform with real-time GPS tracking, driver management, maintenance scheduling, and analytics dashboards.',
    category: 'software',
    tag: 'Web App',
    features: ['Real-time GPS tracking', 'Driver analytics', 'Maintenance scheduling', 'Admin dashboard'],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    github: '#',
    live: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A full-featured messaging platform with WebSocket-based real-time communication, file sharing, group chats, and end-to-end encryption.',
    category: 'software',
    tag: 'Real-Time',
    features: ['WebSocket messaging', 'File sharing', 'Group chats', 'User presence'],
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    github: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio — a modern single-page application showcasing both software engineering and mechanical design work with smooth animations.',
    category: 'software',
    tag: 'Web App',
    features: ['Responsive design', 'Scroll animations', 'Contact form', 'Dual-track showcase'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    live: '#',
  },
  {
    title: '3D Mechanical Assembly',
    description:
      'A complete mechanical assembly designed in SolidWorks featuring parametric parts, mates, and motion analysis for a multi-component gearbox system.',
    category: 'engineering',
    tag: 'CAD',
    features: ['Parametric modeling', 'Assembly mates', 'Motion analysis', 'Technical drawings'],
    tech: ['SolidWorks', 'Part Design', 'Assembly', 'Drawing'],
  },
  {
    title: 'Stress Analysis (FEA)',
    description:
      'Finite Element Analysis on a pressure vessel component — evaluating von Mises stress, deformation, and safety factors under operational loading conditions.',
    category: 'engineering',
    tag: 'FEA',
    features: ['Von Mises stress analysis', 'Deformation mapping', 'Safety factor evaluation', 'Mesh convergence'],
    tech: ['SolidWorks Simulation', 'FEA', 'CATIA', 'MATLAB'],
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
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title text-white">My Projects</h2>
          <p className="mt-6 text-white/50 max-w-2xl">
            A dual-track gallery spanning full-stack web applications and mechanical
            engineering design work.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-10"
        >
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer',
                activeFilter === f.value
                  ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white shadow-lg shadow-[#00c6ff]/20'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover group relative overflow-hidden"
              >
                <div className="p-6">
                  <span className="tag-badge mb-4 inline-block">{project.tag}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {project.features.map(f => (
                        <li key={f} className="text-xs text-white/40 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#00c6ff]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0a0a1a]/90 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-4 py-2 text-sm flex items-center gap-2"
                    >
                      <ExternalLink size={14} /> View
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost px-4 py-2 text-sm flex items-center gap-2"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/naol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
