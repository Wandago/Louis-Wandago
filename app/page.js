import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import PostCard from "@/components/PostCard";
import CourseCard from "@/components/CourseCard";
import { getAllPosts } from "@/lib/posts";
import { getAllCourses } from "@/lib/courses";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const courses = getAllCourses().slice(0, 2);

  return (
    <div>
      <Hero />

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-ink/10 dark:border-paper/10">
        <Reveal className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl font-semibold">Latest articles</h2>
          <Link href="/blog" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-ink/10 dark:border-paper/10">
        <Reveal className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl font-semibold">Courses</h2>
          <Link href="/courses" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={i * 0.08}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
