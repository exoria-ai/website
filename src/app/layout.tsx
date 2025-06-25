import { type Metadata } from 'next'
import { Outfit, Manrope } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/next'

import '@/styles/tailwind.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Exoria',
    default: 'Exoria - Characters that actually feel real',
  },
  description:
    'The first social AI experience where you can chat with AI characters that have unique personalities, voices, and memories. Create stunning artwork, collaborate with friends, and build worlds together.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'bg-exoria-background antialiased',
        outfit.variable,
        manrope.variable,
      )}
    >
      <body className="font-manrope">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
