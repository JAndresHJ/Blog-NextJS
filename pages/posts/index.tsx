import AllPosts from '@/components/posts/AllPosts';
import { NextPage } from 'next';
import { DUMMY_POSTS } from '..';

const AllPostsPage: NextPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
