import { getCategories } from "@/app/lib/api";
import Link from "next/link";

export default async function Categories() {
  const categories = await getCategories();
  // const res = await fetch("http://127.0.0.1:8000/api/categories");
  // if (!res.ok) throw new Error("Erreur lors de la récupération des categories");
  // const data = await res.json();
  // const categories = data.data;
  // console.log(categories.data);

  return (
    <div>
      <ul className="grid grid-cols-4 gap-4 ">
        {categories.data.map((category) => (
          <li key={category.id} className="border">
            <div>
              <h2>
                <Link href={`/categories/${category.slug}`}>
                  {category.name}
                </Link>
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
