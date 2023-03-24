import * as React from 'react';
import { HeadFC, Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import { H1, H2, H3, P, SM } from '../components/typography';

const createHyperLink = (title: string, prefix?: string): string => {
  const url: string = title.replace(/ /g, '-').toLowerCase();
  return prefix !== undefined ? `${prefix}/${url}` : url;
};

const mainArticle = 'The Bright Future of Web 3.0';

const newArticles: {
  title: string;
  shortDescription: string;
}[] = [
  {
    title: 'Hydrogen VS Electric Cars',
    shortDescription: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    shortDescription:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    shortDescription:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

export default function IndexPage() {
  return (
    <main className='bg-off-white'>
      <div id='top' className='mt-32 flex flex-col'>
        <div id='main-article'>
          <StaticImage
            src='../assets/images/image-web-3-mobile.jpg'
            alt='web 3 article image'
            className='w-full'
          />
          <H1 className='mt-32'>{mainArticle}</H1>
          <div id='right-side'>
            <P className='mt-28 text-dark-grayish-blue'>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </P>

            <Link
              to={createHyperLink(mainArticle, 'articles')}
              className='mt-28 block bg-soft-red p-32 py-16'
            >
              <SM className='uppercase tracking-[4.5px] text-off-white'>
                Read more
              </SM>
            </Link>
          </div>
        </div>

        <div
          id='new-articles'
          className='mt-64 bg-very-dark-blue p-28 text-off-white'
        >
          <H2 className='font-bold text-soft-orange'>New</H2>
          <ul className='mt-4'>
            {newArticles.map(({ title, shortDescription }, index) => (
              <li className='group border-b-2 border-b-dark-grayish-blue last:border-b-0'>
                <Link
                  to={createHyperLink(title, 'articles')}
                  key={index}
                  className='block py-32 group-last:pb-0'
                >
                  <H3 className='mb-16 font-bold'>{title}</H3>
                  <P className='text-grayish-blue'>{shortDescription}</P>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id='articles'></div>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
