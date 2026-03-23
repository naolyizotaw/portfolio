import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'
import {
  Monitor, Server, Settings,
  Layout, Smartphone, Code2, Braces,
  Box, Zap, Database,
  GitBranch, Terminal, Globe,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Proficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

interface Skill {
  name: string
  years: string
  level: Proficiency
  percent: number
  icon: LucideIcon
}

interface SubGroup {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

interface SkillGroup {
  id: string
  title: string
  subGroups?: SubGroup[]
  skills?: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    id: 'engineering',
    title: 'Engineering',
    subGroups: [
      {
        title: 'Frontend & Mobile',
        icon: Monitor,
        skills: [
          { name: 'React', years: '2+', level: 'Advanced', percent: 80, icon: Code2 },
          { name: 'Next.js', years: '1+', level: 'Advanced', percent: 75, icon: Layout },
          { name: 'TypeScript', years: '1+', level: 'Advanced', percent: 70, icon: Braces },
          { name: 'Flutter', years: '1+', level: 'Intermediate', percent: 55, icon: Smartphone },
          { name: 'HTML/CSS/JS', years: '3+', level: 'Expert', percent: 92, icon: Braces },
          { name: 'Tailwind CSS', years: '2+', level: 'Advanced', percent: 82, icon: Layout },
        ],
      },
      {
        title: 'Backend & Cloud',
        icon: Server,
        skills: [
          { name: 'Node.js', years: '2+', level: 'Advanced', percent: 78, icon: Box },
          { name: 'Express.js', years: '2+', level: 'Advanced', percent: 75, icon: Zap },
          { name: 'Django', years: '1+', level: 'Intermediate', percent: 55, icon: Box },
          { name: 'MongoDB', years: '2+', level: 'Advanced', percent: 75, icon: Database },
          { name: 'PostgreSQL', years: '1+', level: 'Intermediate', percent: 55, icon: Database },
          { name: 'Firebase', years: '1+', level: 'Expert', percent: 85, icon: Database },
        ],
      },
      {
        title: 'Development Tools',
        icon: Settings,
        skills: [
          { name: 'Git & GitHub', years: '3+', level: 'Expert', percent: 92, icon: GitBranch },
          { name: 'Docker', years: '1+', level: 'Intermediate', percent: 50, icon: Box },
          { name: 'REST APIs', years: '2+', level: 'Advanced', percent: 78, icon: Terminal },
          { name: 'Python', years: '1+', level: 'Intermediate', percent: 58, icon: Code2 },
          { name: 'Linux', years: '2+', level: 'Advanced', percent: 70, icon: Terminal },
          { name: 'Agile Methodologies', years: '1+', level: 'Intermediate', percent: 60, icon: Globe },
        ],
      },
    ],
  },
  {
    id: 'mechanical',
    title: 'Mechanical & CAD',
    skills: [
      { name: 'SolidWorks', years: '2+', level: 'Advanced', percent: 78, icon: Box },
      { name: 'CATIA', years: '1+', level: 'Intermediate', percent: 55, icon: Box },
      { name: 'AutoCAD', years: '2+', level: 'Advanced', percent: 72, icon: Layout },
      { name: 'FEA / Simulation', years: '1+', level: 'Intermediate', percent: 58, icon: Settings },
      { name: 'Thermal Analysis', years: '1+', level: 'Intermediate', percent: 50, icon: Zap },
      { name: 'MATLAB / Simulink', years: '1+', level: 'Intermediate', percent: 52, icon: Terminal },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', years: '3+', level: 'Expert', percent: 92, icon: GitBranch },
      { name: 'Docker', years: '1+', level: 'Intermediate', percent: 50, icon: Box },
      { name: 'Linux', years: '2+', level: 'Advanced', percent: 70, icon: Terminal },
      { name: 'AWS / Cloud', years: '1+', level: 'Beginner', percent: 35, icon: Globe },
      { name: 'Figma', years: '1+', level: 'Intermediate', percent: 55, icon: Layout },
      { name: 'Agile / Scrum', years: '2+', level: 'Advanced', percent: 72, icon: Settings },
    ],
  },
]

const levelColors: Record<Proficiency, string> = {
  Beginner: 'text-[#6b7280] bg-[#eef1f4]',
  Intermediate: 'text-primary bg-primary/8',
  Advanced: 'text-primary bg-primary/10',
  Expert: 'text-on-primary bg-primary',
}

function SkillRow({ skill, isInView }: { skill: Skill; isInView: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <skill.icon className="w-3.5 h-3.5 text-on-surface-muted shrink-0" strokeWidth={1.8} />
          <span className="text-[0.9375rem] font-medium text-on-surface">{skill.name}</span>
          <span className="text-[0.75rem] text-on-surface-muted">({skill.years})</span>
        </div>
        <span className={cn('text-[0.6875rem] font-semibold px-3 py-1 rounded-sm whitespace-nowrap', levelColors[skill.level])}>
          {skill.level}
        </span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percent}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState('engineering')
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })
  const activeGroup = skillGroups.find(g => g.id === activeTab)!

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32 px-8 md:px-12 lg:px-20 xl:px-28 bg-surface-container-low">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="label mb-3">Capabilities</p>
          <h2 className="section-title mb-4">Tech Arsenal</h2>
          <p className="body-lg max-w-lg text-on-surface-variant">
            A curated collection of tools and languages mastered across both digital and physical domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Left: Tab sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-3"
          >
            <div className="flex md:flex-col gap-1">
              {skillGroups.map(group => (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  className={cn(
                    'px-5 py-3 rounded-lg text-left text-[0.9375rem] font-medium transition-all duration-200 cursor-pointer',
                    activeTab === group.id
                      ? 'bg-primary text-on-primary shadow-ambient-sm'
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  )}
                >
                  {group.title}
                </button>
              ))}
            </div>

            {/* Always Learning card */}
            <div className="hidden md:block mt-24 rounded-xl bg-gradient-to-br from-[#0062e6] to-[#0090ff] p-5 text-white">
              <div className="flex items-center gap-2.5 mb-2.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12 2 13.5 8.5 15.5 10.5C17.5 12.5 22 12 22 12C22 12 17.5 11.5 15.5 13.5C13.5 15.5 12 22 12 22C12 22 10.5 15.5 8.5 13.5C6.5 11.5 2 12 2 12C2 12 6.5 12.5 8.5 10.5C10.5 8.5 12 2 12 2Z" fill="white" />
                  <path d="M19 2C19 2 19.5 4 20.5 5C21.5 6 23 5.5 23 5.5C23 5.5 21.5 5 20.5 6C19.5 7 19 9 19 9C19 9 18.5 7 17.5 6C16.5 5 15 5.5 15 5.5C15 5.5 16.5 6 17.5 5C18.5 4 19 2 19 2Z" fill="white" opacity="0.7" />
                </svg>
                <span className="text-[0.9375rem] font-bold">Always Learning</span>
              </div>
              <p className="text-[0.8125rem] leading-[1.6] text-white/85">
                Currently diving deep into WebAssembly and AI generative design for 3D structures.
              </p>
            </div>
          </motion.div>

          {/* Right: Content area */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-9"
          >
            {activeGroup.subGroups ? (
              <div className="grid md:grid-cols-3 gap-5">
                {activeGroup.subGroups.map(sub => (
                  <div key={sub.title} className="surface-card p-6 shadow-ambient-sm">
                    <div className="flex items-center gap-2.5 mb-6">
                      <sub.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                      <h3 className="text-[1rem] font-bold text-on-surface">{sub.title}</h3>
                    </div>
                    <div className="space-y-5">
                      {sub.skills.map(skill => (
                        <SkillRow key={skill.name} skill={skill} isInView={isInView} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="surface-card p-6 lg:p-8">
                <div className="space-y-5">
                  {activeGroup.skills!.map(skill => (
                    <SkillRow key={skill.name} skill={skill} isInView={isInView} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
