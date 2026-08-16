import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getAllCourses, getCourse } from "@/lib/courses";
import { tagGradient } from "@/lib/gradients";

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
    <div>
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${tagGradient(course.theme)}`}
      >
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-16">
          <Link
            href="/courses"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            ← All courses
          </Link>
          <p className="text-xs uppercase tracking-wide text-white/80 mt-6 mb-2 font-semibold">
            {course.level} · {course.lessons.length} lessons
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 leading-tight text-white">
            {course.title}
          </h1>
          <p className="text-white/85 max-w-xl">{course.description}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <ol className="flex flex-col divide-y divide-ink/10 dark:divide-paper/10 border-y border-ink/10 dark:border-paper/10">
            {course.lessons.map((lesson, i) => (
              <li key={lesson.slug}>
                <Link
                  href={`/courses/${course.slug}/${lesson.slug}`}
                  className="group flex items-center gap-4 py-5 hover:text-accent hover:translate-x-1 transition-all"
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
              className="inline-block rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
            >
              Start course →
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
