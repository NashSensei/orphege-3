import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function SiteHero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero-chantier.png"
        alt="Chantier lumineux avec plans architecturaux"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24">
        <div className="max-w-2xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-primary">
            Maîtrise d’œuvre &amp; coordination BIM
          </p>
          <h1 className="font-serif text-4xl font-medium leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            De la conception au suivi de chantier,{' '}
            <span className="text-primary">un seul interlocuteur</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Orphège pilote votre projet de construction ou de rénovation en
            Bourgogne Franche-Comté, avec exigence, transparence et un
            accompagnement de bout en bout.
          </p>
          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Parlons de votre projet
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
