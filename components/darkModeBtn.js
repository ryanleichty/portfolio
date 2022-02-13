function DarkModeBtn() {
  function handleClick() {
    if (localStorage.theme !== 'dark') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <button onClick={handleClick} className='transition-colors'>
      <DarkModeIcon />
    </button>
  );
}

const DarkModeIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      className='dark:stroke-[#898775]'
      d='M12 22c5.5228 0 10-4.4772 10-10 0-5.52285-4.4772-10-10-10C6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10Z'
      stroke='#000'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      className='dark:fill-[#898775]'
      d='M12 22c5.5228 0 10-4.4772 10-10 0-5.52285-4.4772-10-10-10v20Z'
      fill='#000'
    />
  </svg>
);

export default DarkModeBtn;
