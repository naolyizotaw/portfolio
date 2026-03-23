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
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#0a0a1a]/80 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="text-lg font-bold tracking-tight text-white hover:text-[#00c6ff] transition-colors cursor-pointer"
        >
          Naol<span className="gradient-text">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={cn('nav-link cursor-pointer', activeSection === item.href && 'active')}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-lg border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  'text-left text-sm font-medium transition-colors cursor-pointer',
                  activeSection === item.href ? 'text-[#00c6ff]' : 'text-white/70 hover:text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
