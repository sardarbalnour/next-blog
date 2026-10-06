import Link from "next/link";

function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate bg-slate-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.24),transparent_55%)]"
        />
        <div className="container mx-auto px-4 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-semibold tracking-wide text-sky-200">
              STORIES, IDEAS & FAVORITE BOOKS
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              A place for the books and ideas worth{" "}
              <span className="text-sky-300">sharing.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Welcome to Sardar Favorite Books websit a space to collect reflections,
              share what you are reading, and discover a new idea along the way.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                href="/blogs"
              >
                Explore articles
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="/create-blog"
              >
                Share your thoughts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-bold tracking-widest text-sky-700">
                01
              </p>
              <h2 className="text-xl font-bold text-slate-900">
                Find your next read
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Browse articles and book notes for a fresh perspective or your
                next favorite.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-bold tracking-widest text-sky-700">
                02
              </p>
              <h2 className="text-xl font-bold text-slate-900">
                Keep good ideas close
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Save the insights, stories, and recommendations that stay with
                you after the last page.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-bold tracking-widest text-sky-700">
                03
              </p>
              <h2 className="text-xl font-bold text-slate-900">
                Add your voice
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Write an article and share what you have been reading, learning,
                or thinking about.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
