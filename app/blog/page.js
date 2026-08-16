import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Articles on AI tools, design fundamentals, and practical tech skills.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl font-semibold mb-2">Blog</h1>
      <p className="text-ink/60 dark:text-paper/60 mb-12">
        Short, practical write-ups on AI, design, and tech — no fluff.
      </p>
      <div className="flex flex-col divide-y divide-ink/10 dark:divide-paper/10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group py-6 first:pt-0"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mb-2">
              <span>{post.tag}</span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <h2 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-ink/60 dark:text-paper/60">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
