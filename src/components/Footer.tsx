import Button from './Button'
import MaxWidthWrapper from './MaxWidthWrapper'
import TrimText from '@components/TrimText'

const socialLinks = [
  {
    url: 'https://www.instagram.com/ryanleichty/',
    title: 'Instagram',
  },
  {
    url: 'https://twitter.com/ryanleichty',
    title: 'Twitter',
  },
  {
    url: 'https://www.linkedin.com/in/ryanleichty/',
    title: 'LinkedIn',
  },
  {
    url: 'https://github.com/ryanleichty',
    title: 'GitHub',
  },
]

export default function Footer() {
  return (
    <footer className="dark mt-auto bg-black text-gray-400">
      <MaxWidthWrapper className="grid gap-32 pt-16 pb-8 md:gap-96">
        <div className="grid gap-8 md:grid-cols-2 md:gap-4">
          <div className="font-serif text-4xl italic md:text-8xl">
            <TrimText top={0} bottom={-0.15} x={-0.075}>
              Say hello
            </TrimText>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-full flex flex-col items-start gap-16 xl:col-span-2">
              <TrimText top={-0.25} bottom={-0.25} x={-0.075} className="text-lg md:text-xl">
                I’m always happy to hear from you, whether it’s about something big or small.
              </TrimText>
              <Button variant="secondary" href="mailto:hello@ryanleichty.com">
                Email me{'\u00A0'}↗
              </Button>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-4">
          <nav className="flex flex-col flex-wrap gap-2 md:order-2 md:flex-row md:gap-6 md:gap-y-2">
            {socialLinks.map(({ url, title }) => (
              <a key={title} href={url} target="_blank" rel="noopener noreferrer" className="">
                {title}
                {'\u00A0'}↗
              </a>
            ))}
          </nav>
          <div className="flex items-end text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} Ryan Leichty
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
