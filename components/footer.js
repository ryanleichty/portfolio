import { SOCIAL_PROFILES as socialProfiles } from '../constants/social';

function Footer() {
  const socialLinks = socialProfiles.map((profile) => {
    return (
      <div key={profile.name}>
        <a
          href={profile.slug}
          target='_blank'
          rel='noreferrer'
          className='inline-block py-2 sm:py-1 px-3 sm:p-2'
        >
          {profile.name}
        </a>
      </div>
    );
  });

  return (
    <footer className='p-8 mt-auto grid grid-cols-2 items-center gap-2 text-xs sm:text-[10px] font-mono uppercase tracking-[2px] md:grid-cols-1'>
      <div>
        <a
          href='mailto:hello@ryanleichty.com'
          target='_blank'
          rel='noreferrer'
          className='inline-block py-2 sm:py-1 px-3 sm:p-2'
        >
          👋 hello@ryanleichty.com
        </a>
      </div>
      <nav className='flex justify-end gap-4 md:flex-col md:justify-start  md:gap-2'>
        {socialLinks}
      </nav>
    </footer>
  );
}

export default Footer;
