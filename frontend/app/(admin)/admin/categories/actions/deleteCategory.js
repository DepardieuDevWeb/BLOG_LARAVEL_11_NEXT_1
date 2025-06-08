"use server";
import { deleteCategoryBySlug } from "@/app/lib/api";

const deleteCategory = async (formData) => {
  const category = formData.get("category");
  if (!category) return;
  await deleteCategoryBySlug(category);
};

export default deleteCategory;
