import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';
import classes from './postContent.module.css';
import { FC } from 'react';
import { PostDetailProps } from '@/pages/posts/[slug]';

const PostContent: FC<PostDetailProps> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
