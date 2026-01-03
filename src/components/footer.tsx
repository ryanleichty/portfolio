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
            className="group flex h-7 items-center gap-1 rounded-full bg-gray-100 px-2 text-sm transition-colors duration-150 hover:bg-gray-800 hover:text-white dark:bg-gray-800 dark:text-gray-500"
          >
            {link.name}
            <ArrowUpRightIcon className="size-4 text-gray-400 transition-colors duration-150 group-hover:text-white" />
          </a>
        ))}
      </div>
    </footer>
  )
}
