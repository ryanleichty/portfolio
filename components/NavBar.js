import Link from 'next/link';

function NavBar() {
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
    <div>
      <nav className='flex justify-end gap-16'>
        <ul className='flex justify-end gap-16'>{listItems}</ul>
      </nav>
    </div>
  );
}

export default NavBar;
