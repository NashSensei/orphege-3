import Image from 'next/image'
import { ShieldCheck, Wallet, ClipboardList, Clock, ArrowRight } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Faisabilité réglementaire',
    description: 'Analyse du PLU et des contraintes de zone applicables à votre terrain.',
  },
  {
    icon: Wallet,
    title: 'Budget indicatif',
    description: 'Une première estimation financière adaptée à la nature de votre projet.',
  },
  {
    icon: ClipboardList,
    title: 'Démarches administratives',
    description: 'La liste claire des autorisations et étapes à prévoir avant de lancer les travaux.',
  },
]

export function SiteDiagnostic() {
  return (
    <section id="diagnostic" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
            Votre premier diagnostic
          </p>
          <h2 className="font-serif text-3xl font-medium text-balance text-foreground sm:text-4xl">
            Votre premier diagnostic —{' '}
            <span className="text-primary">offert et sans engagement</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Avant tout engagement, nous étudions la viabilité de votre projet et
            vous remettons une première évaluation claire et argumentée. Une vraie
            étape de travail, pensée pour vous permettre de décider en toute
            connaissance de cause.
          </p>

          <ul className="mt-10 space-y-6">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <point.icon className="size-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary">
              <Clock className="size-4" />
              Livré sous 5 jours ouvrés
            </span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              Demander mon diagnostic
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-6 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Note :</span> hors plans
            détaillés et chiffrage — la suite de la mission sera payante.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:order-first">
          <Image
            src="/images/diagnostic-rendu.png"
            alt="Rendu architectural professionnel avec analyse de faisabilité et plan de zone"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
