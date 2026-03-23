import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="py-8 px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-on-surface-muted">
          &copy; 2026 Naol Yizotaw. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href="https://github.com/naol" target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-muted hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/naol" target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-muted hover:text-primary transition-colors">
            LinkedIn
          </a>

          <button
            onClick={scrollToTop}
            className="w-7 h-7 rounded-md bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
