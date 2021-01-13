import { getAllPosts } from "@api";
import Post from "@components/Post";
import Link from "next/link";

export default function PostPage(post) {
  return (
    <>
      <Link href="/">
        <h3 className="text-2xl font-bold cursor-pointer border-brand border-b-2 hover:text-brand inline">
          Where I Ride
        </h3>
      </Link>
      <Post
        title={post.title}
        date={post.date}
        content={post.content}
        description={post.description}
      />
    </>
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
