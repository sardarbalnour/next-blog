import { TGetArticles } from "../blogs/page";

function Article({ title, description }: TGetArticles) {
  return (
    <div className="group h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-200/70">
      <div className="mb-4 h-1 w-10 rounded-full bg-sky-500 transition-all duration-200 group-hover:w-16" />
      <h2 className="wrap-break-word text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700">
        {title}
      </h2>
      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default Article;
