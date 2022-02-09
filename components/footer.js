function FooterLink({ url, children }) {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='p-2'>
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className='p-8 mt-auto grid grid-cols-2 items-center gap-2 text-xs font-mono uppercase tracking-[2px] md:grid-cols-1'>
      <FooterLink url='mailto:hello@ryanleichty.com'>
        👋 hello@ryanleichty.com
      </FooterLink>
      <nav className='flex justify-end gap-4 md:justify-start  md:gap-2'>
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
