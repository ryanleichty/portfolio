import Link from 'next/link';

function NavLink({ children, url }) {
  return (
    <Link href={url}>
      <a className='hover:italic'>{children}</a>
    </Link>
  );
}

function Header() {
  return (
    <header className='p-8 grid gap-4 grid-cols-2 text-4xl sm:text-2xl'>
      <Link href='/'>
        <a>Ryan Leichty</a>
      </Link>
      <nav className='flex justify-end gap-16'>
        <NavLink url='/about'>About</NavLink>
        <NavLink url='/uses'>Uses</NavLink>
      </nav>
    </header>
  );
}

export default Header;
