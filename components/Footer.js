import { SOCIAL_PROFILES as socialProfiles } from '../constants/social';

function Footer() {
  const socialLinks = socialProfiles.map((profile) => {
    return (
      <a
        key={profile.name}
        href={profile.slug}
        target='_blank'
        rel='noreferrer'
        className='inline-block py-2 sm:py-1'
      >
        {profile.name}
      </a>
    );
  });

  return (
    <footer className='p-7 mt-auto font-mono text-xs leading-none uppercase tracking-[2px] md:text-[10px]'>
      <nav className='flex gap-8 sm:justify-between sm:gap-4'>
        <a
          href='mailto:hello@ryanleichty.com'
          target='_blank'
          rel='noreferrer'
          className='inline-block mr-auto py-2 sm:py-1 sm:hidden'
        >
          👋 hello@ryanleichty.com
        </a>
        {socialLinks}
      </nav>
    </footer>
  );
}

export default Footer;
