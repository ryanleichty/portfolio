import '../css/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

// @next/font will automatically optimize your fonts.
// Read more: https://nextjs.org/docs/basic-features/font-optimization
const mabry = localFont({
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
    <main className={`${mabry.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
