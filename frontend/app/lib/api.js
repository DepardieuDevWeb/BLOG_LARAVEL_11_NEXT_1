export async function getArticles(page = 1, query = "") {
  const res = await fetch(
    `${process.env.API_URL}/api/articles?page=${page}&query=${query}`,
    { cache: "no-store" }
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
  const res = await fetch(`${process.env.API_URL}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Erreur lors de la récupération des categories");
  const data = await res.json();
  return data.data;
}

export async function getCategoryBySlug(slug) {
  const res = await fetch(`${process.env.API_URL}/api/categories/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération de la catégorie");
  }

  const data = await res.json();
  return data.data;
}

export async function deleteCategoryBySlug(slug) {
  const res = await fetch(`${process.env.API_URL}/api/categories/${slug}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const rtext = await res.text();
  // console.log("reponse brut", rtext);

  if (!res.ok) {
    throw new Error("Erreur lors de la suppression de la catégorie");
  }
}

export async function getACategoryBySlug(slug) {
  try {
    // const res = await fetch(`${process.env.API_URL}/api/categories`);
    const res = await fetch(`${process.env.API_URL}/api/categories/${slug}`, {
      cache: "no-store",
    });
    const contentType = res.headers.get("content-type") || "";
    if (!res.ok || !contentType.includes("application/json")) {
      console.error(`Erreur API: ${res.status} pour le slug ${slug}`);
      return { data: null };
    }
    return await res.json();
  } catch (error) {
    console.error("Erreur lors de la récupération de la catégorie: ", error);
    return { data: null };
  }
}
