export interface Post {
  title: string;
  image: string; // Image file name
  excerpt: string;
  date: string;
  slug: string;
}

export interface PostItemProps {
  post: Post;
}
