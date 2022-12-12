import Link from 'next/link'
import { motion } from 'framer-motion'

import MaxWidthWrapper from '@components/MaxWidthWrapper'
import useStickyState from '@hooks/useStickyState.hook'

const nav = [
  {
    slug: '/about',
    title: 'About',
  },
  {
    slug: '/work',
    title: 'Work',
  },
  {
    slug: '/uses',
    title: 'Uses',
  },
]

export default function Header() {
  const [theme, setTheme] = useStickyState('light', 'theme')

  function handleClick() {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <MaxWidthWrapper
      as="header"
      className="grid h-header grid-cols-[auto_1fr] items-center gap-4 border-b border-black xl:grid-cols-2"
    >
      <div className="flex items-center gap-10">
        <Link href="/" className="text-sm uppercase tracking-wider sm:text-lg">
          Ryan Leichty
        </Link>
      </div>
      <div className="flex items-center justify-end gap-10">
        <nav className="hidden gap-10 lg:flex">
          {nav.map(({ slug, title }) => {
            return (
              <Link key={slug} href={slug} className="text-lg uppercase tracking-wider">
                {title}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-6 xl:ml-auto">
          <motion.button
            onClick={handleClick}
            className="h-6 w-6 shrink-0 rounded-full border-[1.5px] border-black"
            whileHover={{ rotate: -45 }}
          >
            <div className="h-full w-1/2 rounded-l-full bg-black"></div>
          </motion.button>

          <a
            className="group grid h-6 w-6 shrink-0 place-items-center rounded-full"
            href="https://github.com/ryanleichty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="transition-colors group-hover:fill-gray-700"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}