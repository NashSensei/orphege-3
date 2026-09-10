import { MapPin } from 'lucide-react'

const departements = [
  'Côte-d’Or',
  'Doubs',
  'Jura',
  'Nièvre',
  'Haute-Saône',
  'Saône-et-Loire',
  'Yonne',
  'Territoire de Belfort',
]

export function SiteZone() {
  return (
    <section id="zone" className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full border border-primary/40 text-primary">
          <MapPin className="size-6" />
        </span>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-primary">
          Zone d’intervention
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium text-balance text-foreground sm:text-4xl">
          Nous intervenons dans{' '}
          <span className="text-primary">toute la Bourgogne Franche-Comté</span>
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Où que se situe votre projet dans la région, nous nous déplaçons pour
          vous rencontrer et assurer un suivi de proximité.
        </p>
      </div>

      <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
        {departements.map((dep) => (
          <li
            key={dep}
            className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground"
          >
            {dep}
          </li>
        ))}
      </ul>
    </section>
  )
}
