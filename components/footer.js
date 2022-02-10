function FooterLink({ url, children }) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='inline-block p-2 px-3 rounded-sm hover:bg-white hover:bg-opacity-40 transition-colors'
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className='p-8 mt-auto grid grid-cols-2 items-center gap-2 text-xs font-mono uppercase tracking-[2px] md:grid-cols-1'>
      <div>
        <FooterLink url='mailto:hello@ryanleichty.com'>
          👋 hello@ryanleichty.com
        </FooterLink>
      </div>
      <nav className='flex justify-end gap-4 md:flex-col md:justify-start  md:gap-2'>
        <FooterLink url='https://www.instagram.com/ryanleichty/'>
          Instagram
        </FooterLink>
        <FooterLink url='https://www.linkedin.com/in/ryanleichty/'>
          LinkedIn
        </FooterLink>
        <FooterLink url='https://github.com/ryanleichty'>GitHub</FooterLink>
      </nav>
    </footer>
  );
}

export default Footer;
