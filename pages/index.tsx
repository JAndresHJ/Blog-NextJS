import FeaturedPosts from '@/components/home/FeaturedPosts';
import Hero from '../components/home/Hero';
import { Fragment } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { getFeaturedPosts } from '@/lib/postsUtil';
import { Post } from '@/components/posts/PostsTypes';

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

// Since our posts are not changing every second, getStaticProps
// is a better choice than getServerSideProps.
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const featuredPosts = getFeaturedPosts();

  // if revalidate is not specified, getStaticProps will only
  // be executed once, when we build the application for production
  // and never after.
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Home;
