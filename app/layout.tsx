import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Infinity Bless Med Solutions | Quality Medical Equipment',
  description: 'Trusted supplier of wheelchairs, mobility aids, diabetic care solutions, and orthopedic supports in New Jersey.',
  keywords: ['medical equipment', 'wheelchairs', 'mobility aids', 'diabetic care', 'orthopedic braces', 'New Jersey'],
  authors: [{ name: 'Infinity Bless Med Solutions LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infinityblessmedsolutions.com',
    title: 'Infinity Bless Med Solutions | Quality Medical Equipment',
    description: 'Trusted supplier of wheelchairs, mobility aids, diabetic care solutions, and orthopedic supports.',
    siteName: 'Infinity Bless Med Solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
