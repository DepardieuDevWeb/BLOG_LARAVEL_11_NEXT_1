import Image from "next/image";
import { getArticles } from "./lib/api";
import Link from "next/link";
import fecthInvoicePages from "@/components/fecthInvoicePages";
import Pagination from "@/components/Pagination";

const getExcerpt = (text, length = 60) =>
  text.length > 60 ? text.substring(0, 60) + "..." : article.content;

export default async function Home({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);
  console.log(currentPage);

  const articles = await getArticles(currentPage, query);
  const totalPages = await fecthInvoicePages(query);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Bienvenue sur mon blog</h1>
      <ul className="grid grid-cols-4 gap-4 ">
        {articles.data.map((article) => (
          <li key={article.id} className="border">
            <div>
              <img src="/assets/images/trump.jpg" alt="" />
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
