import { FC } from 'react';
import PostsGrid from './PostsGrid';
import classes from './allPosts.module.css';
import { Post } from './PostsTypes';

interface AllPostsProps {
  posts: Post[];
}

const AllPosts: FC<AllPostsProps> = (props) => {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
