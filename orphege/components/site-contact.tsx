'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const projectTypes = [
  'Construction neuve',
  'Rénovation',
  'Extension / agrandissement',
  'Coordination BIM',
  'Autre',
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@orphege.fr', href: 'mailto:contact@orphege.fr' },
  { icon: Phone, label: 'Téléphone', value: '07 69 49 74 94', href: 'tel:0769497494' },
  { icon: MapPin, label: 'Adresse', value: 'Bourgogne Franche-Comté', href: null },
]

export function SiteContact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData)

      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSent(true)
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Contact</p>
          <h2 className="font-serif text-3xl font-medium text-balance text-foreground sm:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Décrivez-nous votre projet en quelques lignes. Nous revenons vers
            vous rapidement pour en discuter et vous proposer un premier échange.
          </p>

          <ul className="mt-10 space-y-6">
            {contactInfo.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="inline-flex size-11 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-foreground transition-colors hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-primary/40 bg-background p-10 text-center">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mail className="size-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-foreground">Merci !</h3>
            <p className="mt-2 text-muted-foreground">
              Votre message a bien été enregistré. Nous vous recontactons très
              vite.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-background p-8"
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-foreground">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-md border border-input bg-card px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-input bg-card px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="projectType" className="text-sm text-foreground">
                  Type de projet
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="rounded-md border border-input bg-card px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    Sélectionnez…
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <label htmlFor="location" className="text-sm text-foreground">
                  Localisation du projet
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="Commune ou département"
                  className="rounded-md border border-input bg-card px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="budget" className="text-sm text-foreground">
                  Budget indicatif{' '}
                  <span className="text-muted-foreground">(optionnel)</span>
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Ex. 150 000 €"
                  className="rounded-md border border-input bg-card px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="resize-none rounded-md border border-input bg-card px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-800">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {loading ? 'Envoi...' : 'Envoyer'}
                {!loading && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}