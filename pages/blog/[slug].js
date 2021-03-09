import { getAllPosts } from "@api";
import Post from "@components/Post";
import PostNavigation from "@components/PostNavigation";
import Link from "next/link";
import Head from "next/head";

export default function PostPage({
  title,
  date,
  content,
  description,
  next,
  previous,
}) {
  return (
    <>
      <Head>
        <title>{title} | WhereIRide</title>
      </Head>
      <Link href="/">
        <h3 className="text-2xl font-bold cursor-pointer border-brand border-b-2 hover:text-brand inline">
          Where I Ride
        </h3>
      </Link>
      <Post
        title={title}
        date={date}
        content={content}
        description={description}
      />
      <PostNavigation next={next} previous={previous} />
    </>
  );
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === context.params.slug);
  const previous = posts[index + 1] ?? null;
  const next = posts[index - 1] ?? null;
  return {
    props: { ...posts[index], next, previous },
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
