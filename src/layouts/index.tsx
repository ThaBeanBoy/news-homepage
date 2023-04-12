import React, { useState } from 'react';

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
  const [mobileNavOpen, setmobileNavOpen] = useState<boolean>(false);
  const openMenu = (): void => setmobileNavOpen(true);
  const closeMenu = (): void => setmobileNavOpen(false);

  const navLinksStyles: string =
    'important semi-bold text-lg-1  capitalize hover:text-soft-red';

  return (
    <div id='wrapper' className='min-h-screen w-screen bg-off-white'>
      {mobileNavOpen && (
        <div
          id='mobile-nav-wrapper'
          className='fixed top-0 z-50 h-screen w-screen bg-dark-grayish-blue bg-opacity-70'
        >
          <div
            id='mobile-nav'
            className='absolute top-0 right-0 h-full w-[256px] bg-off-white pl-24 pr-16'
          >
            <div id='top' className='relative w-full py-24'>
              <img
                src='/icon-menu-close.svg'
                alt='close'
                className='absolute right-0 cursor-pointer'
                onClick={closeMenu}
              />
            </div>

            <nav className='mt-96 flex flex-col'>
              {navLinks.map(({ title, link }, index) => (
                <Link
                  to={link}
                  key={index}
                  className={`${navLinksStyles} mb-32 last:mb-0`}
                  onClick={closeMenu}
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className='mx-auto h-full w-full max-w-[1110px] px-16'>
        <header className='sticky top-0 z-40 flex w-full justify-between border-b-2 border-b-grayish-blue bg-off-white py-24'>
          <Link to='./'>
            <img src='/logo.svg' alt='logo' className='w-48' />
          </Link>

          <img
            src='/icon-menu.svg'
            alt='menu'
            className='cursor-pointer sm:hidden'
            onClick={openMenu}
          />

          <nav className='hidden sm:block'>
            {navLinks.map(({ title, link }, index) => (
              <Link
                to={link}
                key={index}
                className={`${navLinksStyles} mr-40 text-[grey] last:mr-0`}
              >
                {title}
              </Link>
            ))}
          </nav>
        </header>

        <main className='min-h-screen bg-off-white'>{children}</main>

        <footer>footer</footer>
      </div>
    </div>
  );
}
