import { getArticleBySlug } from "@/app/lib/api";
import ArticleClient from "@/components/ArticleClient";

export default async function Article({ params }) {
  console.log(params);

  const data = await getArticleBySlug(params.slug);
  const article = data.data;

  return <ArticleClient article={article} />;
}
