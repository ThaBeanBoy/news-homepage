import * as React from 'react';
import type { HeadFC } from 'gatsby';

export default function IndexPage() {
  return (
    <main>
      <h1 className='text-lime-500 text-3xl font-bold underline'>
        Hello world
      </h1>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
