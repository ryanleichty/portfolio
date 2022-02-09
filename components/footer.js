function FooterLink({ url, children }) {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='p-2'>
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className='p-8 mt-auto grid grid-cols-2 sm:grid-cols-1 items-center text-xs font-mono uppercase tracking-[2px]'>
      <FooterLink url='mailto:hello@ryanleichty.com'>
        ✌️ hello@ryanleichty.com
      </FooterLink>
      <nav className='flex justify-end sm:justify-start gap-4'>
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
