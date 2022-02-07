function SocialLink({ url, children }) {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='p-2'>
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className='mt-auto grid grid-cols-2 text-xs font-mono uppercase tracking-[2px]'>
      <button>?</button>
      <nav className='flex justify-end gap-4 p-8'>
        <SocialLink url='https://www.instagram.com/ryanleichty/'>
          Instagram
        </SocialLink>
        <SocialLink url='https://www.linkedin.com/in/ryanleichty/'>
          LinkedIn
        </SocialLink>
        <SocialLink url='https://github.com/ryanleichty'>GitHub</SocialLink>
      </nav>
    </footer>
  );
}

export default Footer;
