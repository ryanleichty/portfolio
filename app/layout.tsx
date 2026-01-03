import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

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
  description: 'My portfolio, blog, and personal website.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${inter.className}`}>
      <body className='tracking-tight antialiased'>
        <div className='flex min-h-screen flex-col justify-between bg-white p-8 pt-0 text-gray-900 md:pt-8 dark:bg-zinc-950 dark:text-zinc-200'>
          <main className='mx-auto w-full max-w-[60ch] space-y-6'>{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  )
}

function Footer() {
  const links = [
    { name: '@ryanleichty', url: 'https://x.com/ryanleichty' },
    { name: 'instagram', url: 'https://www.instagram.com/ryanleichty' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ryanleichty' },
    { name: 'github', url: 'https://github.com/ryanleichty' },
  ]

  return (
    <footer className='mt-12 text-center'>
      <div className='flex justify-center space-x-4 tracking-tight'>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500'
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
