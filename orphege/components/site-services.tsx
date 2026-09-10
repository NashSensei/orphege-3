import { PencilRuler, FileCheck2, HardHat, Boxes } from 'lucide-react'

const services = [
  {
    icon: PencilRuler,
    title: 'Conception & plans',
    description:
      'Esquisses, plans techniques et dossiers détaillés pensés pour concrétiser votre projet dans le respect de vos usages et de votre budget.',
  },
  {
    icon: FileCheck2,
    title: 'Permis de construire',
    description:
      'Constitution et dépôt de votre dossier administratif, suivi des démarches et échanges avec les services d’urbanisme jusqu’à l’autorisation.',
  },
  {
    icon: HardHat,
    title: 'Suivi de chantier',
    description:
      'Pilotage des entreprises, contrôle qualité et respect des délais : nous restons présents sur le terrain jusqu’à la réception des travaux.',
  },
  {
    icon: Boxes,
    title: 'Coordination BIM',
    description:
      'Maquette numérique et synthèse des intervenants pour anticiper les conflits, fiabiliser les données et sécuriser chaque phase du projet.',
  },
]

export function SiteServices() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Nos services</p>
        <h2 className="font-serif text-3xl font-medium text-balance text-foreground sm:text-4xl">
          Un accompagnement complet, à chaque étape
        </h2>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group bg-card p-8 transition-colors hover:bg-secondary lg:p-10"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="size-5" />
            </span>
            <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
