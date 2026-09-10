import Link from 'next/link'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-[0.2em] text-foreground">
          ORPHÈGE
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Maîtrise d’œuvre &amp; coordination BIM en Bourgogne Franche-Comté
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <a href="mailto:contact@orphege.fr" className="text-muted-foreground transition-colors hover:text-primary">
            contact@orphege.fr
          </a>
          <a href="tel:0769497494" className="text-muted-foreground transition-colors hover:text-primary">
            07 69 49 74 94
          </a>
          <span className="text-muted-foreground">Bourgogne Franche-Comté</span>
        </div>

        <div className="mx-auto mt-10 max-w-3xl border-t border-border pt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Informations légales</p>
          <div className="mt-4 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
            <p>Orphège — SASU au capital de 2 000 €</p>
            <p>RCS : 107 455 701 R.C.S. Lons-le-Saunier</p>
            <p>SIRET : 10745570100014</p>
            <p>
              Assurance RC Pro et décennale : Zurich, contrat n° 7400042328-198400912
              (Professions Intellectuelles du Bâtiment), via le cabinet Tetris Assurance
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} Orphège. Tous droits réservés.</p>
          <Link href="/mentions-legales" className="transition-colors hover:text-primary">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}
