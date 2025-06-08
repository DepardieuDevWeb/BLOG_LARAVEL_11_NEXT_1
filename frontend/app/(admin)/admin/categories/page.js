import { getCategories } from "@/app/lib/api";
import Link from "next/link";
import deleteCategory from "./actions/deleteCategory";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">Toutes les categories</h1>
        <Link
          href={`/admin/categories/new`}
          className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg text-white"
        >
          Ajouter une categorie
        </Link>
      </div>
      <table className="table min-w-full bg-white border border-gray-200 rounded-md shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 border-b">id</th>
            <th className="text-left px-6 py-3 border-b">Catégorie</th>
            <th className="text-left px-6 py-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.data.map((category) => (
            <tr key={category.id}>
              <td className="px-6 py-3 border-b">#{category.id}</td>
              <td className="px-6 py-3 border-b">{category.name}</td>
              <td className="px-6 py-3 border-b space-x-2">
                <Link
                  href={`/admin/categories/${encodeURIComponent(
                    category.slug
                  )}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-white"
                >
                  Modifier
                </Link>
                <form
                  action={deleteCategory}
                  className="inline-block bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white"
                >
                  <input type="hidden" name="category" value={category.slug} />
                  <button type="submit">Supprimer</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
