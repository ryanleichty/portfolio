import Head from 'next/head';

function HiMark() {
  return 'Hi';
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Leichty</title>
        <meta
          name='description'
          content='Hi 👋, I’m Ryan. I’m a creative who likes working with code.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='pt-32 mt-auto -mb-8 md:mb-0 font-serif font-extralight text-[12vw] sm:text-[15vw] leading-[1.1]'>
        Designer <em>and</em>
        <br />
        Coder
      </h1>
    </>
  );
}
