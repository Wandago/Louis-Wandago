import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <p className="text-accent font-medium text-sm uppercase tracking-wide mb-4">
        404
      </p>
      <h1 className="font-serif text-3xl font-semibold mb-4">
        This page doesn't exist.
      </h1>
      <p className="text-ink/60 dark:text-paper/60 mb-8">
        The link might be broken, or the page may have moved.
      </p>
      <Link
        href="/"
        className="inline-block rounded-full bg-ink text-paper dark:bg-paper dark:text-ink px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Back home
      </Link>
    </div>
  );
}
