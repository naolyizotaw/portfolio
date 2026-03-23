import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/useInView'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'naol@example.com', href: 'mailto:naol@example.com' },
  { icon: Phone, label: 'Phone', value: '+251 9XX XXX XXXX', href: 'tel:+2519XXXXXXXX' },
  { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: undefined },
]

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/naol' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/naol' },
]

const quickStats = [
  { value: '3+', label: 'Years' },
  { value: '10+', label: 'Projects' },
  { value: '24/7', label: 'Availability' },
]

export function ContactSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Wire up to actual email service / MERN backend
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({ name: '', email: '', subject: '', message: '' })
    alert('Message sent! (Demo)')
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00c6ff]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-white">Contact Me</h2>
          <p className="mt-6 text-white/50 max-w-2xl">
            Interested in collaboration, have a question, or just want to say hi?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00c6ff]/40 focus:ring-1 focus:ring-[#00c6ff]/20 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00c6ff]/40 focus:ring-1 focus:ring-[#00c6ff]/20 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formState.subject}
                onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00c6ff]/40 focus:ring-1 focus:ring-[#00c6ff]/20 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00c6ff]/40 focus:ring-1 focus:ring-[#00c6ff]/20 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Info items */}
            <div className="space-y-6">
              {contactInfo.map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00c6ff]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[#00c6ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-white/70 hover:text-[#00c6ff] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Follow My Journey</p>
              <div className="flex gap-3">
                {socials.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00c6ff]/30 hover:bg-white/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="text-white/60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div>
              <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Quick Stats</p>
              <div className="flex gap-4">
                {quickStats.map(stat => (
                  <div key={stat.label} className="glass-card px-4 py-3 text-center">
                    <div className="text-lg font-bold gradient-text">{stat.value}</div>
                    <div className="text-[10px] text-white/30 uppercase">{stat.label}</div>
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
