import AllPosts from '@/components/posts/AllPosts';
import { Post } from '@/components/posts/PostsTypes';
import { getAllPosts } from '@/lib/postsUtil';
import { GetStaticProps, NextPage } from 'next';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage: NextPage<AllPostsPageProps> = (props) => {
  return <AllPosts posts={props.posts} />;
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
