import { getCategoryBySlug } from "@/app/lib/api";
import CategoryForm from "../components/CategoryForm";

const Category = async ({ params }) => {
  const category = await getCategoryBySlug(params.slug);
  if (!category) {
    return <div>Catégorie introuvable ou erreur serveur</div>;
  }
  return (
    <div>
      <CategoryForm category={category} />
    </div>
  );
};

export default Category;
