import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='antialiased selection:bg-yellow-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
