import Link from "next/link";

function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/95 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          className="text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-sky-700"
          href="/"
        >
          Sardar Favorite Books
        </Link>
        <div className="flex items-center gap-2">
          <Link
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            href="/"
          >
            Home
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            href="/create-blog"
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
