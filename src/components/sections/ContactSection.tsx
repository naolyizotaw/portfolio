import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/useInView'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'naol@example.com', href: 'mailto:naol@example.com' },
  { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: undefined },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/naol' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/naol' },
]

export function ContactSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsSubmitting(false)
    setForm({ name: '', email: '', subject: '', message: '' })
    alert('Message sent! (Demo)')
  }

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="label mb-3">Get in Touch</p>
          <h2 className="display-sm">Start A Connection</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="label mb-4">Contact Info</p>
              <div className="space-y-4">
                {contactLinks.map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-on-surface-variant" />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-on-surface hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <span className="text-sm text-on-surface-variant">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="label mb-4">Socials</p>
              <div className="space-y-2">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors group"
                  >
                    {s.label}
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="label block mb-2">Name</label>
                <input
                  id="name" type="text" required
                  value={form.name}
                  onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="label block mb-2">Email</label>
                <input
                  id="email" type="email" required
                  value={form.email}
                  onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="label block mb-2">Subject</label>
              <input
                id="subject" type="text" required
                value={form.subject}
                onChange={e => setForm(s => ({ ...s, subject: e.target.value }))}
                className="input-field"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="label block mb-2">Message</label>
              <textarea
                id="message" required rows={4}
                value={form.message}
                onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                className="input-field resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={15} />
                  Submit message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
