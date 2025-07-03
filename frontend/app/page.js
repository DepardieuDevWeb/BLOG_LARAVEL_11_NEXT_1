import fetchInvoicePages from "@/components/fetchInvoicePages";
import { getArticles } from "./lib/api";
import Link from "next/link";
import Pagination from "@/components/Pagination";

const getExcerpt = (text, length = 60) =>
  text.length > 60 ? text.substring(0, length) + "..." : text;

export default async function Home({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);

  const articles = await getArticles(currentPage, query);
  const totalPages = await fetchInvoicePages(query);
  const getThumb = (thumb) => {
    const clean = (thumb || "").trim();
    return clean
      ? `${process.env.API_URL}/storage/${clean}`
      : "/assets/images/trump.jpg";
  };
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Bienvenue sur mon blog</h1>
      <ul className="grid grid-cols-4 gap-4 ">
        {articles.data.map((article) => (
          <li key={article.id} className="border">
            <div>
              <img src={getThumb(article.thumbnail)} alt="" />
              <h2>
                <Link href={`/articles/${article.slug}`} className="font-bold">
                  {article.title}
                </Link>
              </h2>
              <h3>
                <Link
                  href={`/categories/${article.category.id}`}
                  className="font-bold"
                >
                  {article.category.name}
                </Link>
                <p>{getExcerpt(article.content)}</p>
              </h3>
            </div>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
