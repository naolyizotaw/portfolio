const footerLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/naol' },
  { label: 'GitHub', href: 'https://github.com/naol' },
  { label: 'Twitter', href: 'https://twitter.com/naol' },
  { label: 'Email', href: 'mailto:hello@naolyizotaw.com' },
]

export function Footer() {
  return (
    <footer className="py-6 px-8 md:px-12 lg:px-20 xl:px-28 bg-[#eef0f3] border-t border-[#dfe2e6]">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[0.625rem] font-semibold text-[#6b7280] uppercase tracking-[0.1em]">
          &copy; 2024 Naol Yizotaw. Engineered with Precision.
        </p>

        <div className="flex items-center gap-6">
          {footerLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.625rem] font-semibold text-[#6b7280] uppercase tracking-[0.1em] hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
