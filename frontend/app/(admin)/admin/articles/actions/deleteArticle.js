"use server";

import { deleteArticleBySlug } from "@/app/lib/api";

const deleteArticle = async (formData) => {
  const article = formData.get("article");
  if (!article) return;
  await deleteArticleBySlug(article);
};

export default deleteArticle;
