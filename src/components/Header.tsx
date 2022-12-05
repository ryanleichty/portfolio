import Link from 'next/link'

export default function Header() {
  return (
    <header className="grid h-24 grid-cols-12 items-center gap-4 border-b border-black p-8">
      <div className="col-span-6 flex items-center gap-10">
        <Link href="/" className="uppercase tracking-widest">
          Ryan Leichty
        </Link>
      </div>
      <div className="col-span-6 flex items-center gap-10">
        <nav className="flex gap-10">
          <Link href="/about" className="uppercase tracking-widest">
            About
          </Link>
          <Link href="/work" className="uppercase tracking-widest">
            Work
          </Link>
          <Link href="/uses" className="uppercase tracking-widest">
            Uses
          </Link>
        </nav>
        <div className="ml-auto h-6 w-6 shrink-0 rounded-full bg-black"></div>
      </div>
    </header>
  )
}
