import Link from 'next/link'
import Button from './Button'
import MaxWidthWrapper from './MaxWidthWrapper'
import TrimText from '@components/TrimText'

export default function Footer() {
  return (
    <footer className="dark mt-auto bg-black text-gray-400">
      <MaxWidthWrapper className="grid gap-32 pt-16 pb-8 md:gap-96">
        <div className="grid gap-8 md:grid-cols-2 md:gap-4">
          <div className="text-4xl md:text-6xl">
            <TrimText top={-0.27} bottom={-0.15} x={-0.075}>
              Say hello!
            </TrimText>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-full flex flex-col items-start gap-16 xl:col-span-2">
              <TrimText top={-0.25} bottom={-0.25} x={-0.075} className="text-lg md:text-xl">
                I’m always happy to hear from you, whether it’s about something big or small.
              </TrimText>
              <Button variant="secondary">Email me</Button>
            </div>
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-4">
          <nav className="flex flex-col gap-2 md:order-2 md:flex-row md:gap-4">
            <a
              href="https://www.instagram.com/ryanleichty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="https://twitter.com/ryanleichty" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/ryanleichty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/ryanleichty" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
