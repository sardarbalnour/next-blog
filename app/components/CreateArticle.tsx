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
    <div className="mx-auto my-10 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold tracking-wide text-sky-700">
          YOUR BLOG
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Create an article
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share an idea, story, or something you have learned.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-slate-800"
            htmlFor="article-title"
          >
            Title
          </label>
          <input
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            id="article-title"
            type="text"
            placeholder="Give your article a clear title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-slate-800"
            htmlFor="article-description"
          >
            Description
          </label>
          <textarea
            className="min-h-48 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            id="article-description"
            placeholder="Write your article here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:w-auto sm:self-end cursor-pointer"
          onClick={createArticleHandler}
        >
          Publish article
        </button>
      </div>
    </div>
  );
}

export default CreateArticle;
