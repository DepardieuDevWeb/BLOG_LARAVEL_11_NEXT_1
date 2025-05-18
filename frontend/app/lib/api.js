export async function getArticles(page = 1, query = "") {
  const res = await fetch(
    `${process.env.API_URL}/api/articles?page=${page}&query=${query}`
  );
  if (!res.ok) throw new Error("Erreur lors de la récupération des articles");
  return res.json();
}

export async function getArticleBySlug(slug) {
  const res = await fetch(`${process.env.API_URL}/api/articles/${slug}`);
  if (!res.ok) throw new Error("Erreur lors de la récupération de l'article");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${process.env.API_URL}/api/categories`);
  if (!res.ok) throw new Error("Erreur lors de la récupération des categories");
  return res.json();
}

export async function getACategoryBySlug(slug) {
  const res = await fetch(`${process.env.API_URL}/api/categories/${slug}`);
  if (!res.ok)
    throw new Error("Erreur lors de la récupération de la catégorie");
  return res.json();
}
