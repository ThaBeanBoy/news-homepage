import React from 'react';
import { Link } from 'gatsby';

type layoutProps = {
  children: React.ReactElement;
};

const navLinks: {
  title: string;
  link: string;
}[] = [
  { title: 'home', link: '/' },
  { title: 'new', link: '/new' },
  { title: 'popular', link: '/populer' },
  { title: 'trending', link: '/trending' },
  { title: 'categories', link: '/categories' },
];

export default function Layout({ children }: layoutProps) {
  return (
    <div id='wrapper' className='min-h-screen w-screen bg-off-white'>
      <div className='mx-auto h-full w-full max-w-[1110px] px-16'>
        <header className='flex w-full justify-between py-24'>
          <Link to='./'>
            <img src='/logo.svg' alt='logo' className='w-48' />
          </Link>

          <img
            src='/icon-menu.svg'
            alt='menu'
            className='cursor-pointer header:hidden'
          />

          <nav className='hidden header:block'>
            {navLinks.map(({ title, link }, index) => (
              <Link
                to={link}
                key={index}
                className='mr-40 capitalize last:mr-0'
              >
                {title}
              </Link>
            ))}
          </nav>
        </header>

        {children}

        <footer>footer</footer>
      </div>
    </div>
  );
}
