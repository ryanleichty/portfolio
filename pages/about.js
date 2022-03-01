import Head from 'next/head';

function About() {
  return (
    <>
      <Head>
        <title>About • Ryan Leichty</title>

        <meta
          name='description'
          content='I’m a creative who likes working with code. UI designer and developer.'
        />

        <meta property='og:title' content='Ryan Leichty • Designer and Coder' />
        <meta
          property='og:description'
          content='I’m a creative who likes working with code. UI designer and developer.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.ryanleichty.com/about' />
        <meta
          property='og:image'
          content='https://www.ryanleichty.com/images/og-default.png'
        />
      </Head>

      <article className='max-w-[72ch] mx-auto my-32'>
        <h1 className='font-serif text-9xl md:text-8xl sm:text-7xl font-extralight'>
          About
        </h1>
        <p className='mt-16 font-serif text-4xl md:text-3xl sm:text-2xl leading-snug antialiased'>
          Hi 👋, I’m Ryan. I’m a creative who likes working with code. An avid
          learner, determined problem solver, and UI designer/developer.
        </p>
      </article>
    </>
  );
}

export default About;
