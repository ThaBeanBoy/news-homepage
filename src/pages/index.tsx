import * as React from 'react';
import type { HeadFC } from 'gatsby';

export default function IndexPage() {
  return (
    <main className='bg-off-white'>
      <h1 className='text-soft-red text-3xl font-bold underline'>
        Hello world
      </h1>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
