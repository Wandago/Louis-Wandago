import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Reveal from "@/components/Reveal";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  try {
    const post = getPostBySlug(params.slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default function BlogPost({ params }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-accent hover:underline">
        ← All articles
      </Link>
      <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50">
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
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold mt-3 mb-10 leading-tight">
        {post.title}
      </h1>
      <Reveal>
        <div className="prose-custom">
          <MDXRemote source={post.content} />
        </div>
      </Reveal>
    </article>
  );
}
