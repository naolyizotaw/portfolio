import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

type Proficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

interface Skill {
  name: string
  years: string
  level: Proficiency
}

interface SkillGroup {
  title: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Software Engineering',
    skills: [
      { name: 'React', years: '2+', level: 'Advanced' },
      { name: 'Node.js / Express', years: '2+', level: 'Advanced' },
      { name: 'MongoDB', years: '2+', level: 'Advanced' },
      { name: 'TypeScript', years: '1+', level: 'Intermediate' },
      { name: 'REST APIs', years: '2+', level: 'Advanced' },
      { name: 'Next.js', years: '1+', level: 'Intermediate' },
    ],
  },
  {
    title: 'Mechanical & CAD',
    skills: [
      { name: 'SolidWorks', years: '2+', level: 'Advanced' },
      { name: 'CATIA', years: '1+', level: 'Intermediate' },
      { name: 'AutoCAD', years: '2+', level: 'Advanced' },
      { name: 'FEA / Simulation', years: '1+', level: 'Intermediate' },
      { name: 'Thermal Analysis', years: '1+', level: 'Intermediate' },
      { name: 'MATLAB / Simulink', years: '1+', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', years: '3+', level: 'Expert' },
      { name: 'Docker', years: '1+', level: 'Intermediate' },
      { name: 'Linux', years: '2+', level: 'Advanced' },
      { name: 'AWS / Cloud', years: '1+', level: 'Beginner' },
      { name: 'Figma', years: '1+', level: 'Intermediate' },
      { name: 'Agile / Scrum', years: '2+', level: 'Advanced' },
    ],
  },
]

const levelColors: Record<Proficiency, string> = {
  Beginner: 'text-white/40 bg-white/5 border-white/10',
  Intermediate: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Advanced: 'text-[#00c6ff] bg-[#00c6ff]/10 border-[#00c6ff]/20',
  Expert: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
}

const levelDots: Record<Proficiency, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
}

export function SkillsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-white">Tech Arsenal</h2>
          <p className="mt-6 text-white/50 max-w-2xl">
            A cross-disciplinary toolkit spanning full-stack web development,
            mechanical CAD, and modern DevOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-semibold text-[#00c6ff] uppercase tracking-wider mb-6">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map(skill => (
                  <div key={skill.name} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-sm text-white/80 truncate">{skill.name}</span>
                      <span className="text-xs text-white/30 shrink-0">({skill.years})</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex gap-1">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < levelDots[skill.level] ? 'bg-[#00c6ff]' : 'bg-white/10'
                            }`}
                          />
                        ))}
                      </div>
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${levelColors[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Always Learning card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 glass-card p-6 border-l-2 border-l-[#00c6ff]/40"
        >
          <h4 className="text-sm font-semibold text-[#00c6ff] mb-2">Always Learning</h4>
          <p className="text-sm text-white/50 italic leading-relaxed">
            Technology evolves rapidly, and so do I. Currently exploring advanced cloud
            infrastructure with AWS, diving deeper into real-time systems with WebSockets,
            and pushing the boundaries of digital twin technology that bridges my software
            and mechanical engineering expertise.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
