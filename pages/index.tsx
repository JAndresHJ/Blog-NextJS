import FeaturedPosts from '@/components/home/FeaturedPosts';
import Hero from '../components/home/Hero';
import { Fragment } from 'react';
import { NextPage } from 'next';

const DUMMY_POSTS = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs2',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs3',
  },
];

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default Home;
