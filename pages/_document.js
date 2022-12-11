import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
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
        <link rel='icon' href='/images/favicon.ico' sizes='any' />
        <link rel='icon' href='/images/favicon.svg' type='image/svg+xml' />
      </Head>
      <body className='bg-primary-100 antialiased transition-colors selection:bg-yellow-100 selection:bg-opacity-80 dark:bg-black dark:text-primary-600 dark:selection:bg-opacity-10'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
