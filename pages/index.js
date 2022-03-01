import Head from 'next/head';
import { motion } from 'framer-motion';

function Home() {
  const sentence = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const word = {
    hidden: {
      y: 32,
      opacity: 0,
    },
    show: {
      y: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.75,
      },
    },
  };
  return (
    <>
      <Head>
        <title>Ryan Leichty • Designer and Coder</title>

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
        <meta property='og:url' content='https://www.ryanleichty.com/' />
        <meta
          property='og:image'
          content='https://www.ryanleichty.com/images/og-default.png'
        />
      </Head>

      <motion.h1
        initial='hidden'
        animate='show'
        variants={sentence}
        className='pt-32 mt-auto md:mb-0 font-serif font-extralight text-[12vw] sm:text-[22vw] leading-none -z-10'
      >
        <motion.span
          variants={word}
          className='inline-block will-change-transform'
        >
          Designer
        </motion.span>{' '}
        <motion.span
          variants={word}
          className='inline-block will-change-transform after:inline-block after:w-[2vw]'
        >
          <em>and</em>
        </motion.span>
        <motion.span
          variants={word}
          className='inline-block will-change-transform'
        >
          Coder
        </motion.span>
      </motion.h1>
    </>
  );
}

export default Home;
