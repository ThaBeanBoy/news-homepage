import * as React from 'react';
import type { HeadFC } from 'gatsby';

export default function IndexPage() {
  return <main>Hello world</main>;
}

export const Head: HeadFC = () => <title>Home Page</title>;
