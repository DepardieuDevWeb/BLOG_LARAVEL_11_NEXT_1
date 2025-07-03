import { getArticleBySlug } from "@/app/lib/api";
import ArticleForm from "../components/ArticleForm";

const Article = async ({ params }) => {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return <div>Article introuvable ou erreur serveur</div>;
  }
  return (
    <div>
      <ArticleForm category={article} />
    </div>
  );
};

export default Article;
