"use client";
import React, { useState } from "react";
import { Input } from "./forms/Input";
import { Textarea } from "./forms/Textarea";

const ArticleClient = ({ article }) => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState(article.comments || []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        content,
        article_id: article.id,
      }),
    });
    if (response.ok) {
      const result = await response.json();

      const newComment = result.comment;
      setComments((prevComments) => [newComment, ...prevComments]);

      setName("");
      setContent("");
      alert("Commentaire envoyé !");
    }
  };
  return (
    <div>
      <article>
        <div className="mb-4">
          <p>
            <img src="/assets/images/trump.jpg" alt="" />
          </p>
          <h1 className="mb-4 font-bold">{article.title}</h1>
          <p>{article.content}</p>
        </div>
      </article>
      <div>
        <h2>
          <strong>Commentaires</strong>
        </h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div>
            {/* <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
            /> */}
            <Input placeholder="Votre nom" value={name} onChange={setName} />
          </div>
          <div>
            {/* <textarea
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Votre commentaire"
            ></textarea> */}
            <Textarea
              placeholder="Votre commentaire"
              value={content}
              onChange={setContent}
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="mb-4">
              <p>
                <strong>{comment.name}</strong>
              </p>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleClient;
