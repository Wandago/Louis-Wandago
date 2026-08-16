import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllCourses } from "@/lib/courses";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const courses = getAllCourses().slice(0, 2);

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-accent font-medium text-sm mb-4 tracking-wide uppercase">
          AI · Design · Tech
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-tight max-w-2xl">
          I teach people how to actually use AI, design, and tech skills —
          not just talk about them.
        </h1>
        <p className="mt-6 text-lg text-ink/70 dark:text-paper/70 max-w-xl">
          I'm Louis Wandago. Through short articles and hands-on courses, I
          break down the tools and skills that matter right now, so you can
          go build something instead of drowning in tabs.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/courses"
            className="rounded-full bg-ink text-paper dark:bg-paper dark:text-ink px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start a course
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-ink/15 dark:border-paper/20 px-6 py-3 text-sm font-medium hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
          >
            Read the blog
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-ink/10 dark:border-paper/10">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl font-semibold">Latest articles</h2>
          <Link href="/blog" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <p className="text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mb-2">
                {post.tag}
              </p>
              <h3 className="font-serif text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60 dark:text-paper/60">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-ink/10 dark:border-paper/10">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl font-semibold">Courses</h2>
          <Link href="/courses" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group block rounded-2xl border border-ink/10 dark:border-paper/10 p-6 hover:border-accent transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-accent mb-2">
                {course.level} · {course.lessonCount} lessons
              </p>
              <h3 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">
                {course.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60 dark:text-paper/60">
                {course.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
