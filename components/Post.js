import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";
import gfm from "remark-gfm";
import Link from "next/link";

export default function Post({ title, description, date, content }) {
  const parsedContent = unified()
    .use(parse)
    .use(gfm)
    .use(remark2react)
    .processSync(content).result;
  return (
    <article>
      <Link href="/">
        <h3 className="text-2xl font-bold cursor-pointer">Where I Ride</h3>
      </Link>
      <h2 className="text-3xl font-bold mt-6">{title}</h2>
      <p className="mt-3">
        Published <strong>{date}</strong>
      </p>
      <div className="mt-8 prose max-w-none">{parsedContent}</div>
    </article>
  );
}
