import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCourses, getCourse, getLesson } from "@/lib/courses";

export function generateStaticParams() {
  return getAllCourses().flatMap((course) => {
    const full = getCourse(course.slug);
    return full.lessons.map((lesson) => ({
      slug: course.slug,
      lesson: lesson.slug,
    }));
  });
}

export function generateMetadata({ params }) {
  const lesson = getLesson(params.slug, params.lesson);
  if (!lesson) return {};
  return { title: lesson.title };
}

export default function LessonPage({ params }) {
  const course = getCourse(params.slug);
  const lesson = getLesson(params.slug, params.lesson);
  if (!lesson) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href={`/courses/${params.slug}`}
        className="text-sm text-accent hover:underline"
      >
        ← {course.title}
      </Link>

      <p className="text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mt-6 mb-2">
        Lesson {lesson.position} of {lesson.total}
      </p>
      <h1 className="font-serif text-3xl font-semibold mb-10 leading-tight">
        {lesson.title}
      </h1>

      <div className="prose-custom">
        <MDXRemote source={lesson.content} />
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-ink/10 dark:border-paper/10 pt-8">
        {lesson.prev ? (
          <Link
            href={`/courses/${params.slug}/${lesson.prev.slug}`}
            className="text-sm text-accent hover:underline"
          >
            ← {lesson.prev.title}
          </Link>
        ) : (
          <span />
        )}
        {lesson.next ? (
          <Link
            href={`/courses/${params.slug}/${lesson.next.slug}`}
            className="text-sm text-accent hover:underline"
          >
            {lesson.next.title} →
          </Link>
        ) : (
          <Link
            href={`/courses/${params.slug}`}
            className="text-sm text-accent hover:underline"
          >
            Back to course overview →
          </Link>
        )}
      </div>
    </div>
  );
}
