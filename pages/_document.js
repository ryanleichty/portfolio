import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }

                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                  if (event.matches) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                });
              `,
          }}
        />
      </Head>
      <body className='antialiased selection:bg-yellow-100 dark:bg-black dark:text-[#898775] transition-colors'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
