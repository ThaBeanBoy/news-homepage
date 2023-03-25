import * as React from 'react';
import { graphql, HeadFC, Link } from 'gatsby';
import Img from 'gatsby-image';

import { StaticImage } from 'gatsby-plugin-image';

import { H1, H2, H3, H4, P, SM } from '../components/typography';

const createHyperLink = (title: string, prefix?: string): string => {
  const url: string = title.replace(/ /g, '-').toLowerCase();
  return prefix !== undefined ? `${prefix}/${url}` : url;
};

type article = {
  title: string;
  shortDescription: string;
  image?: {
    src: string;
    alt: string;
  };
};
const mainArticle = 'The Bright Future of Web 3.0';

const newArticles: article[] = [
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

const articles: article[] = [
  {
    title: 'Reviving Retro PCs',
    shortDescription: 'What happens when old PCs are given modern upgrades?',
    image: {
      src: 'image-retro-pcs',
      alt: 'retro pc',
    },
  },
  {
    title: 'Top 10 Laptops of 2022',
    shortDescription: 'Our best picks for various needs and budgets.',
    image: {
      src: 'image-top-laptops',
      alt: 'top laptops',
    },
  },
  {
    title: 'The Growth of Gaming',
    shortDescription: 'How the pandemic has sparked fresh opportunities.',
    image: {
      src: 'image-gaming-growth',
      alt: 'gaming growth',
    },
  },
];

export default function IndexPage({ data }: any) {
  const images: any[] = data.allFile.nodes;

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

      <ul id='articles' className='my-64 w-full'>
        {articles.map(({ title, shortDescription, image }, index) => {
          const img = images.filter((img) => img.name === image?.src)[0]
            .childrenImageSharp[0].fixed;

          return (
            <li key={index} className='mb-32 w-full last:mb-0'>
              <Link
                to={createHyperLink(title, 'articles')}
                className='flex flex-row'
              >
                <Img fixed={img} className='mr-24 w-[100px] shrink-0' />

                <div id='article-properties' className='flex flex-col'>
                  <H2 className='flex-1 font-bold text-grayish-blue'>{`0${
                    index + 1
                  }`}</H2>

                  <H4 className='font-bold'>{title}</H4>
                  <P className='text-dark-grayish-blue'>{shortDescription}</P>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;

export const pageQuery = graphql`
  query MyQuery {
    allFile(filter: { relativeDirectory: { eq: "articles" } }) {
      nodes {
        name
        childrenImageSharp {
          fixed(height: 129, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;
