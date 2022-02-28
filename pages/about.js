import Head from 'next/head';

function About() {
  return (
    <>
      <Head>
        <title>About • Ryan Leichty</title>
        <meta
          name='description'
          content='Hi 👋, I’m Ryan. I’m a creative who likes working with code. An avid learner, determined problem solver, and UI designer/developer.'
        />
        <link rel='icon' href='/favicon.ico' />
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
