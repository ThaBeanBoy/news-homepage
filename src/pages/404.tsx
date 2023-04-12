import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

import { H1, H3, P } from '../components/typography';

export default function NotFoundPag() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <H1 className='text-center'>404</H1>
      <H3 className='mt-32 text-center font-semibold'>Page not found</H3>
      <P className='mt-8 text-center'>
        This project is not a full project, other pages were not provided by{' '}
        <a
          className='text-soft-red'
          href='https://www.frontendmentor.io/'
          target='_blank'
        >
          Front End Mentor
        </a>
        . The only design provided was for{' '}
        <Link className='text-soft-red' to='/'>
          home.
        </Link>
      </P>
    </div>
  );
}

// export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
