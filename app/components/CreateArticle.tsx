"use client";

import { useState } from "react";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createArticleHandler = () => {
    fetch("http://localhost:3008/articles", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
    });
  };

  return (
    <div className="flex flex-col py-20 px-10 rounded my-4 bg-sky-100">
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button onClick={createArticleHandler}>Submit</button>
    </div>
  );
}

export default CreateArticle;
