import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Al Musawir Developers - Trusted Name, Trusted Investment',
  description: 'Premium high-rise project in Bahria Town Lahore featuring luxury amenities, secure basement parking, and easy installment plans. Over 13 years of trusted experience in real estate development.',
  keywords: 'Al Musawir Developers, Bahria Town Lahore, Real Estate, Luxury Apartments, Investment, High Rise Building',
  authors: [{ name: 'Al Musawir Developers' }],
  openGraph: {
    title: 'Al Musawir Developers - Trusted Name, Trusted Investment',
    description: 'Premium high-rise project in Bahria Town Lahore with luxury amenities and easy installment plans.',
    type: 'website',
    url: 'https://almusawirdevelopers.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}

