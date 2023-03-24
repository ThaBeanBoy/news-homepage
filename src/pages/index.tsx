import * as React from 'react';
import type { HeadFC } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import { H1, P, SM } from '../components/typography';

export default function IndexPage() {
  return (
    <main className='bg-off-white'>
      {/* <h1 className='text-soft-red text-3xl font-bold underline'>
        Hello world
      </h1> */}

      <div id='top' className='mt-32 flex flex-col'>
        <div id='main-article'>
          <StaticImage
            src='../assets/images/image-web-3-mobile.jpg'
            alt='web 3 article image'
            className='w-full'
          />
          <H1 className='mt-32'>The Bright Future of Web 3.0</H1>
          <div id='right-side'>
            <P className='mt-28 text-dark-grayish-blue'>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </P>

            <button className='mt-28 bg-soft-red p-32 py-16'>
              <SM className='uppercase tracking-[4.5px] text-off-white'>
                Read more
              </SM>
            </button>
          </div>
        </div>
        <div id='new-articles'></div>
      </div>
      <div id='articles'></div>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
