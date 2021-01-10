import { getPostBySlug, getAllPosts } from "@api";
import Post from "@components/Post";

export default function PostPage({ title, date, content, description }) {
  return (
    <Post
      title={title}
      date={date}
      content={content}
      description={description}
    />
  );
}

export async function getStaticProps(context) {
  return {
    props: getPostBySlug(context.params.slug),
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
