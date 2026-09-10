import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Mentions légales — Orphège',
  description:
    'Mentions légales d’Orphège, entreprise de maîtrise d’œuvre et de coordination BIM en Bourgogne Franche-Comté.',
}

const sections = [
  {
    title: 'Éditeur du site',
    rows: [
      ['Raison sociale', 'Orphège — SASU au capital de 2 000 €'],
      ['RCS', '107 455 701 R.C.S. Lons-le-Saunier'],
      ['SIRET', '10745570100014'],
      ['Email', 'contact@orphege.fr'],
      ['Téléphone', '07 69 49 74 94'],
    ],
  },
  {
    title: 'Assurance',
    rows: [
      ['Assureur', 'Zurich'],
      ['Contrat', 'n° 7400042328-198400912'],
      ['Garanties', 'Responsabilité Civile Professionnelle et décennale'],
      ['Activité', 'Professions Intellectuelles du Bâtiment'],
      ['Intermédiaire', 'Cabinet Tetris Assurance'],
    ],
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Retour à l’accueil
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-medium text-balance text-foreground sm:text-5xl">
          Mentions légales
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Conformément aux dispositions légales, vous trouverez ci-dessous les
          informations relatives à l’éditeur de ce site.
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl font-medium text-foreground">
                {section.title}
              </h2>
              <dl className="mt-6 divide-y divide-border border-y border-border">
                {section.rows.map(([label, value]) => (
                  <div key={label} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm uppercase tracking-widest text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-foreground sm:col-span-2">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
