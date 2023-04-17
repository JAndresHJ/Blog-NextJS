import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Data {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
}

export type PostData = {
  slug: string;
  content: string;
} & Pick<Data, keyof Data>;

// process.cwd() point to the overall project folder not to the lib directory.
const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => {
  // Read syncronously. In a blocking way
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // Removes the file extension leaving only the slug
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Returns and object with two properties
  // data: The metadata of the md file
  // content: Contains the markdown text as a string
  const { data, content } = matter(fileContent);
  const postData: PostData = {
    slug: postSlug,
    ...(data as Data),
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  // Read syncronously. In a blocking way
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  // Sort the post to have the latests at the beginning
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
