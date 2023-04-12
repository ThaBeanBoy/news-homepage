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
    <div className='flex flex-col items-center'>
      <div
        id='top'
        className='mt-32 flex flex-col items-center laptop:flex laptop:flex-row laptop:gap-32'
      >
        <div id='main-article' className='flex flex-col items-center'>
          <StaticImage
            src='../assets/images/image-web-3-mobile.jpg'
            alt='web 3 article image'
            className='w-full max-w-[730px] sm:hidden'
          />
          <StaticImage
            src='../assets/images/image-web-3-desktop.jpg'
            alt='web 3 article image'
            className='hidden w-full sm:block'
          />

          <div className='flex max-w-[603px] flex-col laptop:max-w-none laptop:flex-row'>
            <H1 className='mt-32'>{mainArticle}</H1>
            <div
              id='right-side'
              className='laptop:mt-32 laptop:flex laptop:flex-col laptop:justify-between'
            >
              <P className='mt-28 text-dark-grayish-blue laptop:mt-0'>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </P>

              <Link
                to={createHyperLink(mainArticle, 'articles')}
                className='mt-28 inline-block w-full max-w-[200px] bg-soft-red px-32 py-16 laptop:mt-0'
              >
                <SM className='uppercase tracking-[4.5px] text-off-white'>
                  Read more
                </SM>
              </Link>
            </div>
          </div>
        </div>

        <div
          id='new-articles'
          className='mt-64 max-w-[730px] bg-very-dark-blue p-28 text-off-white laptop:mt-0 laptop:w-[350px] laptop:shrink-0'
        >
          <H2 className='font-bold text-soft-orange'>New</H2>
          <ul className='mt-4'>
            {newArticles.map(({ title, shortDescription }, index) => (
              <li
                className='group border-b-2 border-b-dark-grayish-blue last:border-b-0'
                key={index}
              >
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

      <ul
        id='articles'
        className='my-64 w-full max-w-[603px] laptop:flex laptop:max-w-none'
      >
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
    </div>
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
