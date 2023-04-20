import PostContent from '@/components/posts/PostDetail/PostContent';
import { PostData, getPostData, getPostsFiles } from '@/lib/postsUtil';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  slug: string;
}

export interface PostDetailProps {
  post: PostData;
}

const PostDetailPage: NextPage<PostDetailProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PostDetailProps, Params> = (
  context
) => {
  const { params } = context;
  const slug = params?.slug;

  const postData = getPostData(slug!);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

// Since this is a dynamic page, it need to be paired with getStaticPaths
// to let Next know which concrete slug values it should pre-generate.
export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
