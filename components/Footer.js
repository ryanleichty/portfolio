import { SOCIAL_PROFILES } from '../constants/social';

export default function Footer() {
  return (
    <footer className='mt-auto whitespace-nowrap p-8 font-mono text-xs uppercase leading-none tracking-[2px] md:text-[10px]'>
      <nav className='flex gap-8 overflow-x-scroll  sm:gap-4'>
        {SOCIAL_PROFILES.map(({ name, slug }) => (
          <a
            key={name}
            href={slug}
            target='_blank'
            rel='noreferrer'
            className='inline-block py-2 sm:py-1'
          >
            {name}
          </a>
        ))}
      </nav>
    </footer>
  );
}
