import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Orphège — Maîtrise d’œuvre & coordination BIM en Bourgogne Franche-Comté',
  description:
    'Orphège vous accompagne de la conception au suivi de chantier : plans, permis de construire, suivi de chantier et coordination BIM. Un seul interlocuteur en Bourgogne Franche-Comté.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a0a09',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
