import Reveal from "@/components/Reveal";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Articles on AI tools, design fundamentals, and practical tech skills.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold mb-2">
          Blog
        </h1>
        <p className="text-ink/60 dark:text-paper/60 mb-12 max-w-lg">
          Short, practical write-ups on AI, design, and tech — no fluff.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 0.08}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
