import Image from 'next/image'
import { Check } from 'lucide-react'

const highlights = [
  'Un interlocuteur unique du premier croquis à la remise des clés',
  'Une expertise BIM au service de la fiabilité et de la maîtrise des coûts',
  'Une relation de confiance, claire et sans jargon',
]

export function SiteAbout() {
  return (
    <section id="about" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/about-bureau.png"
            alt="Bureau d’études avec maquette numérique BIM"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Qui sommes-nous</p>
          <h2 className="font-serif text-3xl font-medium text-balance text-foreground sm:text-4xl">
            La rigueur d’un maître d’œuvre, la précision du BIM
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Orphège est une entreprise de maîtrise d’œuvre et de coordination
            BIM implantée en Bourgogne Franche-Comté. Nous accompagnons
            particuliers, professionnels et collectivités dans leurs projets de
            construction et de rénovation, en conjuguant savoir-faire de terrain
            et outils numériques de pointe.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Notre conviction : un projet réussi repose sur un dialogue simple et
            une coordination sans faille entre tous les intervenants.
          </p>

          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" />
                </span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
