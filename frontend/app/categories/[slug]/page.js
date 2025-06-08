import { getACategoryBySlug } from "@/app/lib/api";
import Link from "next/link";

const Category = async ({ params }) => {
  const category = await getACategoryBySlug(params.slug);
  // const category = data.data;

  return (
    <div>
      <h1>Categorie : {category.name}</h1>
      <ul>
        {category.articles && category.articles.length > 0 ? (
          category.articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          ))
        ) : (
          <li>Aucun article</li>
        )}
      </ul>
    </div>
  );
};

export default Category;
