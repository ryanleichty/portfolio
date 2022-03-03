import Head from 'next/head';
import { ABOUT_META as meta } from '../constants/meta';

function About() {
  return (
    <>
      <Head>
        <title>{meta.title} • Ryan Leichty</title>

        <meta name='description' content={meta.description} />

        <meta property='og:title' content={`${meta.title} • Ryan Leichty`} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.ryanleichty.com/' />
        <meta
          property='og:image'
          content='https://www.ryanleichty.com/images/og-default.png'
        />
        <meta
          property='og:image:alt'
          content={`${meta.title} • Ryan Leichty`}
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ryanleichty' />
        <meta name='twitter:title' content={`${meta.title} • Ryan Leichty`} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
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
