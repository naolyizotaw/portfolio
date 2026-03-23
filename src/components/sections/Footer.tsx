import { ArrowUp, Github, Linkedin } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30">
          &copy; 2026 Naol Yizotaw. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/naol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#00c6ff] transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/naol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#00c6ff] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00c6ff]/30 hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="text-white/50" />
          </button>
        </div>
      </div>
    </footer>
  )
}
