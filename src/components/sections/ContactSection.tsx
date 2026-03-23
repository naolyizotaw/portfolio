import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Share2, Link2, Code2 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'hello@naolyizotaw.com', href: 'mailto:hello@naolyizotaw.com' },
  { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: undefined },
]

const socialIcons = [
  { icon: Share2, href: 'https://linkedin.com/in/naol', ariaLabel: 'LinkedIn' },
  { icon: Link2, href: 'https://github.com/naol', ariaLabel: 'GitHub' },
  { icon: Code2, href: '#', ariaLabel: 'Portfolio' },
]

const categories = [
  'Software Development',
  'Mechanical Design',
  'Full-Stack Project',
  'CAD / FEA Consultation',
  'Other',
]

export function ContactSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', category: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsSubmitting(false)
    setForm({ name: '', email: '', category: '', message: '' })
    alert('Message sent! (Demo)')
  }

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 px-8 md:px-12 lg:px-20 xl:px-28 bg-white">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="display-sm mb-3">Start A Connection</h2>
          <p className="body-md text-on-surface-muted">
            Available for collaborations or full-time opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-[1.0625rem] font-bold text-[#191c1e] mb-6">Contact Info</h3>
              <div className="space-y-5">
                {contactLinks.map(item => (
                  <div key={item.label} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-[0.625rem] font-semibold text-[#6b7280] uppercase tracking-[0.1em] mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[0.9375rem] font-medium text-[#191c1e] hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <span className="text-[0.9375rem] font-medium text-[#191c1e]">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[1.0625rem] font-bold text-[#191c1e] mb-5">Socials</h3>
              <div className="flex gap-3">
                {socialIcons.map(s => (
                  <a
                    key={s.ariaLabel}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.ariaLabel}
                    className="w-10 h-10 rounded-full border border-[#dfe2e6] flex items-center justify-center text-[#42474d] hover:border-primary hover:text-primary transition-all"
                  >
                    <s.icon className="w-4 h-4" strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form — white card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#f7f9fb] rounded-2xl p-7 lg:p-9 shadow-ambient-sm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="label block mb-2">Full Name</label>
                  <input
                    id="name" type="text" required
                    value={form.name}
                    onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                    className="w-full bg-white border border-[#dfe2e6] rounded-lg px-4 py-3 text-[0.9375rem] text-[#191c1e] placeholder-[#9ca0a6] outline-none transition-all focus:border-primary font-['Space_Grotesk',system-ui,sans-serif]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label block mb-2">Email Address</label>
                  <input
                    id="email" type="email" required
                    value={form.email}
                    onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                    className="w-full bg-white border border-[#dfe2e6] rounded-lg px-4 py-3 text-[0.9375rem] text-[#191c1e] placeholder-[#9ca0a6] outline-none transition-all focus:border-primary font-['Space_Grotesk',system-ui,sans-serif]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="label block mb-2">Project Category</label>
                <div className="relative">
                  <select
                    id="category"
                    required
                    value={form.category}
                    onChange={e => setForm(s => ({ ...s, category: e.target.value }))}
                    className="w-full bg-white border border-[#dfe2e6] rounded-lg px-4 py-3 text-[0.9375rem] text-[#191c1e] outline-none transition-all focus:border-primary appearance-none cursor-pointer font-['Space_Grotesk',system-ui,sans-serif]"
                  >
                    <option value="" disabled>Software Development</option>
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label block mb-2">Message</label>
                <textarea
                  id="message" required rows={4}
                  value={form.message}
                  onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                  className="w-full bg-white border border-[#dfe2e6] rounded-lg px-4 py-3 text-[0.9375rem] text-[#191c1e] placeholder-[#9ca0a6] outline-none transition-all focus:border-primary resize-none font-['Space_Grotesk',system-ui,sans-serif]"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3.5 text-[0.8125rem] font-bold tracking-[0.1em] uppercase rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Transmit Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
