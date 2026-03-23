import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', href: 'hero' },
  { label: 'Focus', href: 'focus' },
  { label: 'Journey', href: 'journey' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'About', href: 'about' },
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
          isScrolled ? 'glass-nav shadow-ambient-sm' : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="text-[0.9375rem] font-bold tracking-tight text-on-surface hover:text-primary transition-colors cursor-pointer"
          >
            NAOL YIZOTAW
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={cn('nav-link cursor-pointer', activeSection === item.href && 'active')}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollTo('contact')}
            >
              Contact
            </Button>
          </div>

          <button
            className="md:hidden text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden bg-surface/95 backdrop-blur-lg">
            <div className="px-6 py-5 flex flex-col gap-4">
              {navItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    'text-left text-sm font-medium transition-colors cursor-pointer',
                    activeSection === item.href ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Button size="sm" onClick={() => scrollTo('contact')} className="w-fit mt-2">
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
