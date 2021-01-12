import { getAllPosts } from "@api";
import Post from "@components/Post";

export default function PostPage(post) {
  return (
    <Post
      title={post.title}
      date={post.date}
      content={post.content}
      description={post.description}
    />
  );
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === context.params.slug);
  return {
    props: posts[index],
  };
}

export async function getStaticPaths() {
  const paths = getAllPosts().map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
