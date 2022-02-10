function FooterLink({ url, children }) {
  return (
    <div>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className='inline-block py-2 sm:py-1 px-3 sm:p-2 rounded-md hover:bg-white hover:bg-opacity-40 transition-colors'
      >
        {children}
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className='p-8 mt-auto grid grid-cols-2 items-center gap-2 text-xs sm:text-[10px] font-mono uppercase tracking-[2px] md:grid-cols-1'>
      <FooterLink url='mailto:hello@ryanleichty.com'>
        👋 hello@ryanleichty.com
      </FooterLink>
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
