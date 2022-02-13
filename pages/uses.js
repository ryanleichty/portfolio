import Head from 'next/head';

function Uses() {
  return (
    <>
      <Head>
        <title>Uses | Ryan Leichty</title>
        <meta
          name='description'
          content='This is a list of my design, development and personal setups, including software, hardware and as much detail in between.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className='max-w-[80ch] mx-auto my-32'>
        <h1 className='font-serif text-9xl md:text-8xl sm:text-7xl font-extralight'>
          Uses
        </h1>
        <p className='mt-16 font-serif text-4xl md:text-3xl sm:text-2xl leading-snug antialiased'>
          This is a list of my design, development and personal setups,
          including software, hardware and as much detail in between. Find
          others who have contributed to{' '}
          <a href='https://uses.tech/' target='_blank' rel='noreferrer'>
            uses.tech
          </a>
          .
        </p>
        <div className='text-2xl'>
          <h2>Design</h2>
          <ul>
            <li>
              <a>Figma</a>: for wireframing, prototyping & general UI / UX
              design.
            </li>
            <li>
              <a>Illustrator</a>: for logo work and other more complex vectors.
            </li>
            <li>
              <a>Photoshop</a>: for editing photos.
            </li>
            <li>
              <a>InDesign</a>: for print documents.
            </li>
          </ul>
          <h2>Dev</h2>
          <ul>
            <li>
              <a>VSCode</a>: for editing code.
            </li>
            <li>
              <a>Warp</a>: is a blazingly fast, Rust-based terminal.
            </li>
            <li>
              <a>GitHub Desktop</a>: for managing git repositories.
            </li>
            <li>
              <a>SnippetsLab</a>: is a tool for collecting snippets of code.
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}

export default Uses;
