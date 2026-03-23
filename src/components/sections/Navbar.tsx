import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const navItems = [
  { label: 'Home', href: 'hero' },
  { label: 'Journey', href: 'journey' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeSection = useScrollSpy(navItems.map(i => i.href), 120)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileOpen(false)
  }

  return (
    <>
      {/* 2px primary anchor line at viewport top */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-[60]" />

      <nav
        className={cn(
          'fixed top-0.5 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]' : 'bg-transparent'
        )}
      >
        <div className="w-full px-8 md:px-12 lg:px-20 xl:px-28 h-14 flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => scrollTo('hero')}
            className="text-[1.125rem] font-bold tracking-[-0.02em] text-[#191c1e] hover:text-primary transition-colors cursor-pointer"
          >
            NAOL YIZOTAW
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  'relative text-[0.8125rem] font-medium tracking-[0.02em] uppercase transition-colors cursor-pointer pb-0.5',
                  activeSection === item.href
                    ? 'text-primary'
                    : 'text-[#42474d] hover:text-primary'
                )}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Resume button */}
          <button
            onClick={() => window.open('/cv.pdf', '_blank')}
            className="hidden md:inline-flex btn-primary px-5 py-2 text-[0.75rem] font-bold tracking-[0.04em] uppercase rounded cursor-pointer"
          >
            Resume
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#42474d] hover:text-[#191c1e] transition-colors cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-[#e8eaed]">
            <div className="px-8 py-5 flex flex-col gap-4">
              {navItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    'text-left text-[0.875rem] font-medium uppercase tracking-[0.02em] transition-colors cursor-pointer',
                    activeSection === item.href ? 'text-primary' : 'text-[#42474d] hover:text-[#191c1e]'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { window.open('/cv.pdf', '_blank'); setIsMobileOpen(false) }}
                className="btn-primary px-5 py-2.5 text-[0.75rem] font-bold tracking-[0.04em] uppercase rounded w-fit mt-2 cursor-pointer"
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
