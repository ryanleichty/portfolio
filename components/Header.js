import Link from 'next/link';
import ThemeButton from './ThemeButton';

export default function Header() {
  return (
    <header className='h-24 px-8 pt-8 text-3xl uppercase leading-none tracking-wide'>
      <div className='grid grid-cols-[1fr_auto] items-center gap-4'>
        <div>
          <Link href='/' className='sm:text-2xl'>
            Ryan Leichty
          </Link>
        </div>

        <div>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
