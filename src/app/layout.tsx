import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ryanleichty.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Ryan Leichty',
    template: '%s | Ryan Leichty',
  },
  description: 'I’m a developer and designer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} bg-white text-gray-900 antialiased dark:bg-zinc-950 dark:text-zinc-200`}
    >
      <body>
        <div className="flex min-h-screen flex-col justify-between p-8 pt-0 md:pt-8">
          <main className="mx-auto w-full max-w-[60ch] space-y-6">{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
