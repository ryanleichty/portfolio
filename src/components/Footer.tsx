import Link from 'next/link'
import Button from './Button'
import MaxWidthWrapper from './MaxWidthWrapper'

export default function Footer() {
  return (
    <footer className="mt-auto bg-black text-gray-400">
      <MaxWidthWrapper className="grid gap-96 py-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-6xl">Say hello!</div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-full xl:col-span-2">
              <p className="text-xl">
                I’m always happy to hear from you, whether it’s about something big or small.
              </p>
              <Button theme="dark">Email me</Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>© {new Date().getFullYear()}</div>
          <nav className="flex gap-4">
            <Link href="https://www.instagram.com/ryanleichty/" target="_blank">
              Instagram
            </Link>
            <Link href="https://twitter.com/ryanleichty" target="_blank">
              Twitter
            </Link>
            <Link href="https://www.linkedin.com/in/ryanleichty/" target="_blank">
              LinkedIn
            </Link>
            <Link href="https://github.com/ryanleichty" target="_blank">
              GitHub
            </Link>
          </nav>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
