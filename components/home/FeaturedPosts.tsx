import { FC } from 'react';
import PostsGrid from '../posts/PostsGrid';
import classes from './featuredPosts.module.css';

interface FeaturedPostsProps {
  posts: any;
}

const FeaturedPosts: FC<FeaturedPostsProps> = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
