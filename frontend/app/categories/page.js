import { getCategories } from "@/app/lib/api";
import Link from "next/link";

export default async function Categories() {
  const categories = await getCategories();
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
