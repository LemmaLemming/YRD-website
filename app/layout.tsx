import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LenisWrapper } from "@/components/lenis-wrapper"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: 'YRD Holdings | Institutional Asset Management',
  description:
    'YRD Holdings HK — investing at the gateway of innovation. Institutional-grade infrastructure with venture-scale agility.',
  generator: 'v0.app',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#14100b',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${_fraunces.variable}`}>
      <body className="font-sans antialiased">
        <LenisWrapper>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LenisWrapper>
      </body>
    </html>
  )
}
