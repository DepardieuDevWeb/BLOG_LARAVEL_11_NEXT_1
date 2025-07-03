"use client";
import { Input } from "@/components/forms/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ArticleForm = ({ article = {} }) => {
  const [title, setTitle] = useState(article.title || "");
  const [content, setContent] = useState(article.content || "");
  const [thumbnail, setThumbnail] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", 1);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }
    const isEditing = !!article.slug;
    if (isEditing) formData.append("_method", "PUT");
    const url = article.slug
      ? `http://127.0.0.1:8000/api/articles/${article.slug}`
      : `http://127.0.0.1:8000/api/articles`;
    const method = article.slug ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      body: formData,
    });
    const data = await res.json();
    if (res.ok) {
      router.push("/admin/articles");
    } else {
      alert("Erreur lors de la soumission");
      console.error("VALIDATION ERRORS", data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Input
          value={title}
          placeholder={
            article.title ? "Modifier un article" : "Ajouter un article"
          }
          onChange={setTitle}
        />
        <Input
          value={content}
          placeholder={
            article.content ? "Modifier un contenu" : "Ajouter un contenu"
          }
          onChange={setContent}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files[0])}
        />
        <button className="px-4 py-2 text-white bg-green-600 rounded-lg">
          {article.title ? "Modifier" : "Créer"}
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
