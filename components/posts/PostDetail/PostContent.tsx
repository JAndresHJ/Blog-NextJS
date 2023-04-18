import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';
import classes from './postContent.module.css';
import { FC } from 'react';
import { PostDetailProps } from '@/pages/posts/[slug]';
import { Components } from 'react-markdown';
import Image from 'next/image';
import { Element } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent: FC<PostDetailProps> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const components: Components = {
    code: (code) => {
      const classNameSplitted = code.className?.split('-');
      const codeStr = code.children[0] as string;
      const language = classNameSplitted![1];

      return (
        <SyntaxHighlighter style={coldarkDark} language={language}>
          {codeStr}
        </SyntaxHighlighter>
      );
    },
    p: (paragraph) => {
      const { node } = paragraph;
      const child = node.children[0] as Element;
      if (child?.tagName === 'img') {
        const img = node.children[0] as Element;

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${img.properties!.src}`}
              alt={img.properties!.alt as string}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
