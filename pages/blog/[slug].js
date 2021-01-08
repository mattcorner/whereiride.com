import { getPostBySlug, getAllPosts } from "@api";

export default function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <caption>{props.description}</caption>
      <p>{props.published}</p>{" "}
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = getAllPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
