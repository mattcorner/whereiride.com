import { getAllPosts } from "@api";
import Link from "next/link";

export default function Home(props) {
  return (
    <div>
      <h1>Hello world!</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
