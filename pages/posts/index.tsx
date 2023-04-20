import AllPosts from '@/components/posts/AllPosts';
import { Post } from '@/components/posts/PostsTypes';
import { getAllPosts } from '@/lib/postsUtil';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage: NextPage<AllPostsPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name='decription'
          content='A list of all programming-related tutorials and posts.'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<AllPostsPageProps> = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
