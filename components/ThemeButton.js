import { motion } from 'framer-motion';

function handleClick() {
  if (localStorage.theme !== 'dark') {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
  } else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  }
}

export default function ThemeButton() {
  return (
    <motion.button
      onClick={handleClick}
      className='-m-3 grid h-12 w-12 place-items-center rounded-full transition-colors'
      whileHover={{ rotate: -45 }}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='sm:h-5 sm:w-5'
      >
        <path
          d='M12 21V3c-4.96286 0-9 4.03714-9 9 0 4.9629 4.03714 9 9 9Z'
          className='dark:fill-primary-600'
          fill='#000'
        />
        <circle
          cx='12'
          cy='12'
          r='9'
          className='dark:stroke-primary-600'
          stroke='#000'
          strokeWidth='2.62'
        />
      </svg>
    </motion.button>
  );
}
