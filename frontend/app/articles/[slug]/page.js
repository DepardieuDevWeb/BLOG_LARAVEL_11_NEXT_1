import { getArticleBySlug } from "@/app/lib/api";

export default async function Article({ params }) {
  const data = await getArticleBySlug(params.slug);
  const article = data.data;
  return (
    <article>
      <p>
        <img src="/assets/images/trump.jpg" alt="" />
      </p>
      <h1 className="font-bold mb-4">{article.title}</h1>
      <p>{article.content}</p>
    </article>
  );
}
