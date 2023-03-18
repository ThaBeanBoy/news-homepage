import React from 'react';
import { Link } from 'gatsby';

type layoutProps = {
  children: React.ReactElement;
};

export default function Layout({ children }: layoutProps) {
  return (
    <div className='min-h-screen w-screen bg-off-white px-16'>
      <header className='flex w-full justify-between py-24'>
        <Link to='./'>
          <img src='/logo.svg' alt='logo' className='w-48' />
        </Link>
        <img src='/icon-menu.svg' alt='menu' className='cursor-pointer' />
      </header>

      {children}

      <footer>footer</footer>
    </div>
  );
}
