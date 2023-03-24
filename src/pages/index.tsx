import * as React from 'react';
import type { HeadFC } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import { H1, P } from '../components/typography';

export default function IndexPage() {
  return (
    <main className='bg-off-white'>
      {/* <h1 className='text-soft-red text-3xl font-bold underline'>
        Hello world
      </h1> */}

      <div id='top' className='mt-56'>
        <div id='main-article'>
          <StaticImage
            src='../assets/images/image-web-3-desktop.jpg'
            alt='web 3 article image'
          />
          <H1>The Bright Future of Web 3.0</H1>
          <P>We dive into</P>
        </div>
        <div id='new-articles'></div>
      </div>
      <div id='articles'></div>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
