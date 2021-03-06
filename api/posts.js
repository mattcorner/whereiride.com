import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import parseISO from "date-fns/parseISO";

const postsDirectory = join(process.cwd(), "_posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const fullPath = join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      ...data,
      content,
    };
  });
  return posts
    .filter((post) => !post.draft || process.env.NODE_ENV === "development")
    .sort((a, b) => parseISO(b.date) - parseISO(a.date));
}
