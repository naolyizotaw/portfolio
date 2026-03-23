import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const education = [
  {
    degree: 'B.Sc. Software Engineering',
    institution: 'Addis Ababa Institute of Technology (AAiT)',
    period: '2021 – Present',
  },
  {
    degree: 'B.Sc. Mechanical Engineering',
    institution: 'Addis Ababa Institute of Technology (AAiT)',
    period: '2021 – Present',
  },
  {
    degree: 'High School Diploma',
    institution: 'Preparatory School',
    period: '2019 – 2021',
  },
]

const certificates = [
  { name: 'Python Programming', issuer: 'Google, Coursera' },
  { name: 'Full-Stack Web Development', issuer: 'Meta, Coursera' },
  { name: 'Data Structures & Algorithms', issuer: 'UC San Diego, Coursera' },
  { name: 'SolidWorks Associate (CSWA)', issuer: 'Dassault Systemes' },
  { name: 'Machine Learning', issuer: 'Stanford, Coursera' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'React Advanced Patterns', issuer: 'Frontend Masters' },
  { name: 'Mechanical Design Fundamentals', issuer: 'MIT OpenCourseWare' },
  { name: 'Docker & Kubernetes', issuer: 'Linux Foundation' },
  { name: 'Git & Version Control', issuer: 'Atlassian' },
]

export function EducationSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 280
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-white">Education & Certificates</h2>
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-base font-semibold text-white mb-1">{edu.degree}</h3>
              <p className="text-sm text-[#00c6ff]/60 mb-2">{edu.institution}</p>
              <p className="text-xs text-white/30">{edu.period}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificates scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
              Certificates
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00c6ff]/30 transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft size={14} className="text-white/60" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00c6ff]/30 transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight size={14} className="text-white/60" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map(cert => (
              <div
                key={cert.name}
                className="shrink-0 w-60 glass-card p-4 hover:border-[#00c6ff]/20 transition-colors"
              >
                <p className="text-sm text-white/80 font-medium mb-1">{cert.name}</p>
                <p className="text-xs text-white/30">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
