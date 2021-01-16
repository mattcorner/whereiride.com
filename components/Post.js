import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";
import gfm from "remark-gfm";
import Link from "next/link";
import { format, formatDistanceToNow, parseISO } from "date-fns";

export default function Post({ title, date, content }) {
  const parsedContent = unified()
    .use(parse)
    .use(gfm)
    .use(remark2react)
    .processSync(content).result;
  return (
    <article>
      <h2 className="text-3xl font-bold mt-6">{title}</h2>
      <p className="mt-3">
        Published <strong>{format(parseISO(date), "MMMM do, uu")}</strong> (
        {formatDistanceToNow(parseISO(date), { addSuffix: true })})
      </p>
      <div className="mt-8 prose max-w-none">{parsedContent}</div>
    </article>
  );
}
