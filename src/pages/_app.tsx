import '../css/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

import Header from '../components/Header'
import Footer from '../components/Footer'

// @next/font will automatically optimize your fonts.
// Read more: https://nextjs.org/docs/basic-features/font-optimization
const fontMabry = localFont({
  src: [
    {
      path: '../fonts/mabry-regular-pro.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-mabry',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${fontMabry.variable} flex min-h-full flex-col bg-gray-100 font-sans text-base antialiased`}
    >
    <div className={`${fontMabry.variable} flex min-h-full flex-col font-sans`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
