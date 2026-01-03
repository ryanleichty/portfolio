import { ArrowUpRightIcon } from 'lucide-react'

export function Footer() {
  const links = [
    { name: '@ryanleichty', url: 'https://x.com/ryanleichty' },
    { name: 'instagram', url: 'https://www.instagram.com/ryanleichty' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ryanleichty' },
    { name: 'github', url: 'https://github.com/ryanleichty' },
  ]

  return (
    <footer className="mt-12 text-center">
      <div className="flex flex-wrap justify-center gap-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-7 items-center gap-1 rounded-full bg-zinc-100 px-2 text-sm transition-colors duration-150 hover:bg-zinc-800 hover:text-white dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
          >
            {link.name}
            <ArrowUpRightIcon className="size-4 text-zinc-400 transition-colors duration-150 group-hover:text-white dark:text-zinc-500 dark:group-hover:text-zinc-900" />
          </a>
        ))}
      </div>
    </footer>
  )
}
