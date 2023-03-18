import React from 'react';

type layoutProps = {
  children: React.ReactElement;
};

export default function Layout({ children }: layoutProps) {
  return (
    <div className='bg-off-white w-screen'>
      <header>Header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
}
