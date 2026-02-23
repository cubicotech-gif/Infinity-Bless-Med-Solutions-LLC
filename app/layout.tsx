import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://infinityblessmedsolutions.com'),
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
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
