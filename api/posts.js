import marked from "marked";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const fullPath = join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const meta = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      ...meta.data,
    };
  });
  return posts;
}

export function getPostBySlug(slug) {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const meta = matter(fileContents);
  const content = marked(meta.content);
  return {
    slug,
    ...meta.data,
    content,
  };
}
