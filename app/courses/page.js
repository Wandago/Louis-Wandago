import Link from "next/link";
import { getAllCourses } from "@/lib/courses";

export const metadata = {
  title: "Courses",
  description: "Structured, hands-on courses on AI, design, and tech skills.",
};

export default function CoursesIndex() {
  const courses = getAllCourses();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl font-semibold mb-2">Courses</h1>
      <p className="text-ink/60 dark:text-paper/60 mb-12">
        Multi-lesson, hands-on tracks. Work through them at your own pace.
      </p>
      <div className="flex flex-col gap-6">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group block rounded-2xl border border-ink/10 dark:border-paper/10 p-6 hover:border-accent transition-colors"
          >
            <p className="text-xs uppercase tracking-wide text-accent mb-2">
              {course.level} · {course.lessonCount} lessons
            </p>
            <h2 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">
              {course.title}
            </h2>
            <p className="mt-2 text-sm text-ink/60 dark:text-paper/60">
              {course.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
