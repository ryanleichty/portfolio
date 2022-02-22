import { SOCIAL_PROFILES as socialProfiles } from '../constants/social';

function Footer() {
  const socialLinks = socialProfiles.map((profile) => {
    return (
      <div key={profile.name}>
        <a
          href={profile.slug}
          target='_blank'
          rel='noreferrer'
          className='inline-block py-2 sm:py-1'
        >
          {profile.name}
        </a>
      </div>
    );
  });

  return (
    <footer className='grid grid-cols-2 items-center gap-2 p-7 pt-12 mt-auto font-mono text-xs leading-none uppercase tracking-[2px] md:gap-2 md:grid-cols-1 sm:text-[0.5rem]'>
      <div>
        <a
          href='mailto:hello@ryanleichty.com'
          target='_blank'
          rel='noreferrer'
          className='inline-block py-2 sm:py-1'
        >
          hello@ryanleichty.com
        </a>
      </div>
      <nav className='flex justify-end gap-8 md:flex-col md:justify-start md:gap-2'>
        {socialLinks}
      </nav>
    </footer>
  );
}

export default Footer;
