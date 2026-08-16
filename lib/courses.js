import fs from "fs";
import path from "path";
import matter from "gray-matter";

const COURSES_DIR = path.join(process.cwd(), "content/courses");

function readMeta(slug) {
  const raw = fs.readFileSync(path.join(COURSES_DIR, slug, "meta.json"), "utf8");
  return JSON.parse(raw);
}

function readLessonsMeta(slug) {
  const lessonsDir = path.join(COURSES_DIR, slug, "lessons");
  const files = fs.readdirSync(lessonsDir).filter((f) => f.endsWith(".mdx"));
  const lessons = files.map((file) => {
    const raw = fs.readFileSync(path.join(lessonsDir, file), "utf8");
    const { data } = matter(raw);
    const slugPart = file.replace(/^\d+-/, "").replace(/\.mdx$/, "");
    return { ...data, slug: slugPart, file };
  });
  return lessons.sort((a, b) => a.order - b.order);
}

export function getAllCourses() {
  const slugs = fs
    .readdirSync(COURSES_DIR)
    .filter((entry) => fs.statSync(path.join(COURSES_DIR, entry)).isDirectory());
  return slugs.map((slug) => {
    const meta = readMeta(slug);
    const lessons = readLessonsMeta(slug);
    return { slug, ...meta, lessonCount: lessons.length };
  });
}

export function getCourse(slug) {
  const meta = readMeta(slug);
  const lessons = readLessonsMeta(slug);
  return { slug, ...meta, lessons };
}

export function getLesson(courseSlug, lessonSlug) {
  const lessons = readLessonsMeta(courseSlug);
  const index = lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return null;
  const lesson = lessons[index];
  const raw = fs.readFileSync(
    path.join(COURSES_DIR, courseSlug, "lessons", lesson.file),
    "utf8"
  );
  const { data, content } = matter(raw);
  return {
    ...data,
    slug: lessonSlug,
    content,
    prev: lessons[index - 1] || null,
    next: lessons[index + 1] || null,
    total: lessons.length,
    position: index + 1,
  };
}
