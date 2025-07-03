import { getArticles } from "@/app/lib/api";
import fecthInvoicePages from "@/components/fetchInvoicePages";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import deleteArticle from "./actions/deleteArticle";

const Articles = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);

  const articles = await getArticles(currentPage, query);
  const totalPages = await fecthInvoicePages(query);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">Tous les articles</h1>
        <Link
          href={`/admin/articles/new`}
          className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg text-white"
        >
          Ajouter un article
        </Link>
      </div>
      <table className="table min-w-full bg-white border border-gray-200 rounded-md shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 border-b">id</th>
            <th className="text-left px-6 py-3 border-b">Article</th>
            <th className="text-left px-6 py-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.data.map((article) => (
            <tr key={article.id}>
              <td className="px-6 py-3 border-b">#{article.id}</td>
              <td className="px-6 py-3 border-b">{article.title}</td>
              <td className="px-6 py-3 border-b space-x-2">
                <Link
                  href={`/admin/articles/${encodeURIComponent(article.slug)}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-white"
                >
                  Modifier
                </Link>
                <form
                  action={deleteArticle}
                  className="inline-block bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white"
                >
                  <input type="hidden" name="article" value={article.slug} />
                  <button type="submit">Supprimer</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default Articles;
