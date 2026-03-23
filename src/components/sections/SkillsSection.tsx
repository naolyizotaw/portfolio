import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'

type Proficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

interface Skill {
  name: string
  years: string
  level: Proficiency
  percent: number
}

interface SkillGroup {
  id: string
  title: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    id: 'engineering',
    title: 'Engineering',
    skills: [
      { name: 'React', years: '2+', level: 'Advanced', percent: 80 },
      { name: 'Node.js / Express', years: '2+', level: 'Advanced', percent: 78 },
      { name: 'MongoDB', years: '2+', level: 'Advanced', percent: 75 },
      { name: 'TypeScript', years: '1+', level: 'Intermediate', percent: 60 },
      { name: 'REST APIs', years: '2+', level: 'Advanced', percent: 82 },
      { name: 'Next.js', years: '1+', level: 'Intermediate', percent: 55 },
    ],
  },
  {
    id: 'mechanical',
    title: 'Mechanical & CAD',
    skills: [
      { name: 'SolidWorks', years: '2+', level: 'Advanced', percent: 78 },
      { name: 'CATIA', years: '1+', level: 'Intermediate', percent: 55 },
      { name: 'AutoCAD', years: '2+', level: 'Advanced', percent: 72 },
      { name: 'FEA / Simulation', years: '1+', level: 'Intermediate', percent: 58 },
      { name: 'Thermal Analysis', years: '1+', level: 'Intermediate', percent: 50 },
      { name: 'MATLAB / Simulink', years: '1+', level: 'Intermediate', percent: 52 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', years: '3+', level: 'Expert', percent: 92 },
      { name: 'Docker', years: '1+', level: 'Intermediate', percent: 50 },
      { name: 'Linux', years: '2+', level: 'Advanced', percent: 70 },
      { name: 'AWS / Cloud', years: '1+', level: 'Beginner', percent: 35 },
      { name: 'Figma', years: '1+', level: 'Intermediate', percent: 55 },
      { name: 'Agile / Scrum', years: '2+', level: 'Advanced', percent: 72 },
    ],
  },
]

const levelColors: Record<Proficiency, string> = {
  Beginner: 'text-on-surface-muted bg-surface-container',
  Intermediate: 'text-primary bg-primary/8',
  Advanced: 'text-primary bg-primary/10',
  Expert: 'text-on-primary bg-primary',
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState('engineering')
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })
  const activeGroup = skillGroups.find(g => g.id === activeTab)!

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="label mb-3">Capabilities</p>
          <h2 className="section-title mb-4">Tech Arsenal</h2>
          <p className="body-lg max-w-xl text-on-surface-variant">
            A cross-disciplinary toolkit spanning software development, mechanical CAD, and DevOps.
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
                    'px-4 py-2.5 rounded-lg text-left text-[0.8125rem] font-medium transition-all duration-200 cursor-pointer',
                    activeTab === group.id
                      ? 'bg-primary text-on-primary shadow-ambient-sm'
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  )}
                >
                  {group.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Skill list */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-9"
          >
            <div className="surface-card p-6 lg:p-8">
              <div className="space-y-5">
                {activeGroup.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[0.875rem] font-medium text-on-surface">{skill.name}</span>
                        <span className="text-xs text-on-surface-muted">({skill.years})</span>
                      </div>
                      <span className={cn('text-[10px] font-semibold px-2.5 py-0.5 rounded-sm', levelColors[skill.level])}>
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
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
