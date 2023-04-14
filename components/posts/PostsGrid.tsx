import { FC } from 'react';
import classes from './postsGrid.module.css';
import PostItem from './PostItem';
import { PostsGridProps } from './PostsTypes';

const PostsGrid: FC<PostsGridProps> = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={`${post.title}-${post.slug}`} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
