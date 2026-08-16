import Reveal from "@/components/Reveal";
import CourseCard from "@/components/CourseCard";
import { getAllCourses } from "@/lib/courses";

export const metadata = {
  title: "Courses",
  description: "Structured, hands-on courses on AI, design, and tech skills.",
};

export default function CoursesIndex() {
  const courses = getAllCourses();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Reveal>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold mb-2">
          Courses
        </h1>
        <p className="text-ink/60 dark:text-paper/60 mb-12 max-w-lg">
          Multi-lesson, hands-on tracks. Work through them at your own pace.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {courses.map((course, i) => (
          <Reveal key={course.slug} delay={(i % 2) * 0.08}>
            <CourseCard course={course} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
