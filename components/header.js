import React, { useState } from 'react';
import Link from 'next/link';
import DarkModeBtn from './DarkModeBtn';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const pages = [
    {
      id: 1,
      title: 'About',
      slug: '/about',
    },
    {
      id: 2,
      title: 'Uses',
      slug: '/uses',
    },
  ];

  const listItems = pages.map((page) => {
    return (
      <li key={page.id.toString()}>
        <Link href={page.slug}>
          <a>{page.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <header className='p-8 grid gap-4 grid-cols-[1fr_auto] font-serif text-4xl'>
      <Link href='/'>
        <a className='sm:text-3xl'>Ryan Leichty</a>
      </Link>

      <div className='flex items-center justify-end'>
        <DarkModeBtn />
      </div>

      {/* <div className='flex items-center justify-end gap-16 md:gap-8'>
        <nav className='md:hidden'>
          <ul className='flex gap-16'>{listItems}</ul>
        </nav>
        <DarkModeBtn />
        <button
          onClick={handleClick}
          className='hidden md:flex flex-col justify-center gap-3 w-[40px] h-[40px]'
        >
          <span className='block w-full h-[1px] bg-black'></span>
          <span className='block w-full h-[1px] bg-black'></span>
        </button>
      </div> */}

      {/* <div className={`fixed inset-0 ${!isOpen ? 'pointer-events-none' : ''}`}>
        <div
          onClick={handleClick}
          className={`absolute inset-0 h-full bg-black transition-opacity duration-300 ${
            !isOpen ? 'opacity-0' : 'opacity-10'
          }`}
        ></div>
        <div
          className={`${
            isOpen
              ? 'shadow-xl translate-x-0 ease-out'
              : 'translate-x-full ease-in'
          } relative flex flex-col justify-between gap-8 p-8 max-w-sm h-full ml-auto bg-slate-400 transition-transform duration-300`}
        >
          <nav>
            <ul className='flex flex-col gap-8'>{listItems}</ul>
          </nav>
          <DarkModeBtn />
        </div>
      </div> */}
    </header>
  );
}
