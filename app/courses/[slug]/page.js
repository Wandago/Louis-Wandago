import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCourses, getCourse } from "@/lib/courses";

export function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }) {
  try {
    const course = getCourse(params.slug);
    return { title: course.title, description: course.summary };
  } catch {
    return {};
  }
}

export default function CoursePage({ params }) {
  let course;
  try {
    course = getCourse(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/courses" className="text-sm text-accent hover:underline">
        ← All courses
      </Link>
      <p className="text-xs uppercase tracking-wide text-accent mt-6 mb-2">
        {course.level} · {course.lessons.length} lessons
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 leading-tight">
        {course.title}
      </h1>
      <p className="text-ink/70 dark:text-paper/70 max-w-xl mb-10">
        {course.description}
      </p>

      <ol className="flex flex-col divide-y divide-ink/10 dark:divide-paper/10 border-y border-ink/10 dark:border-paper/10">
        {course.lessons.map((lesson, i) => (
          <li key={lesson.slug}>
            <Link
              href={`/courses/${course.slug}/${lesson.slug}`}
              className="group flex items-center gap-4 py-5 hover:text-accent transition-colors"
            >
              <span className="text-sm font-mono text-ink/40 dark:text-paper/40 w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-medium">{lesson.title}</span>
              <span className="ml-auto text-sm text-ink/40 dark:text-paper/40">
                {lesson.duration}
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <Link
          href={`/courses/${course.slug}/${course.lessons[0].slug}`}
          className="inline-block rounded-full bg-ink text-paper dark:bg-paper dark:text-ink px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start course →
        </Link>
      </div>
    </div>
  );
}
