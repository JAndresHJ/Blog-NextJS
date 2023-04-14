import { FC } from 'react';
import classes from './postsGrid.module.css';
import PostItem from './PostItem';
import { Post } from './PostsTypes';

interface PostsGridProps {
  posts: Post[];
}

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
