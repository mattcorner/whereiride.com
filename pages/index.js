import { getAllPosts } from "@api";
import Link from "next/link";
import Bio from "@components/Bio";

export default function Home({ posts }) {
  return (
    <>
      <h1 className="mb-8 text-3xl font-semibold md:text-5xl">Where I Ride</h1>
      <Bio />
      <section>
        <h3 className="mb-4 text-xl font-semibold md:text-3xl">
          Latest Writings
        </h3>
        {posts.map((post) => (
          <article className="mb-8" key={post.slug}>
            <h2 className="mb-2 text-xl md:text-2xl">
              <Link href={`/blog/${post.slug}`}>
                <a className="border-b-2 border-brand hover:text-brand">
                  {post.title}
                </a>
              </Link>
              {post.draft && <span className="text-sm ml-2">(draft)</span>}
            </h2>
            <p className="italic md:text-lg">{post.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
