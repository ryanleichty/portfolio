import Link from 'next/link';

function Header() {
  return (
    <header className='p-8 grid gap-4 grid-cols-2 text-4xl sm:text-2xl'>
      <Link href='/'>
        <a>Ryan Leichty</a>
      </Link>
      <nav className='flex justify-end gap-16'>
        <Link href='/about'>
          <a className='border-b-2 border-transparent hover:border-black transition ease'>
            About
          </a>
        </Link>
        <Link href='/uses'>
          <a>Uses</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
