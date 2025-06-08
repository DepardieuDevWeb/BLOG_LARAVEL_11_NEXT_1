"use client";
import { Input } from "@/components/forms/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CategoryForm = ({ category = {} }) => {
  const [name, setName] = useState(category.name || "");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = category.name
      ? `http://127.0.0.1:8000/api/categories/${category.slug}`
      : `http://127.0.0.1:8000/api/categories`;
    const method = category.name ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      router.push("/admin/categories");
    } else {
      alert("Erreur lors de la soumission");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          value={name}
          placeholder={
            category.name ? "Modifier une catégorie" : "Ajouter une catégorie"
          }
          onChange={setName}
        />
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg">
          {category.name ? "Modifier" : "Créer"}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
