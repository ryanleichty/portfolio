import Head from 'next/head';
import { motion } from 'framer-motion';
import { HOME_META as meta } from '../constants/meta';

export default function Home() {
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
        <title>Ryan Leichty</title>
        <meta name='description' content={meta.description} />

        <meta property='og:title' content='Ryan Leichty' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.ryanleichty.com/' />
        <meta
          property='og:image'
          content='https://www.ryanleichty.com/images/og-default.png'
        />
        <meta property='og:image:alt' content='Ryan Leichty' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ryanleichty' />
        <meta name='twitter:title' content='Ryan Leichty' />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content='https://www.ryanleichty.com/images/og-default.png'
        />
      </Head>

      <motion.h1
        initial='hidden'
        animate='show'
        variants={sentence}
        className='-z-10 mt-auto pt-32 font-serif text-[12vw] font-extralight leading-none md:mb-0 sm:text-[22vw]'
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
