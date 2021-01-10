export default function Post({ title, description, date, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <span>{description}</span>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
