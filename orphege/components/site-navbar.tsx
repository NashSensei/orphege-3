'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#diagnostic', label: 'Diagnostic' },
  { href: '#zone', label: "Zone d'intervention" },
  { href: '#contact', label: 'Contact' },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-2xl font-semibold tracking-[0.2em] text-foreground"
        >
          ORPHÈGE
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:0769497494"
          className="hidden items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
        >
          <Phone className="size-4" />
          07 69 49 74 94
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm uppercase tracking-widest text-muted-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:0769497494"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                <Phone className="size-4" />
                07 69 49 74 94
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
