import { getAllPosts } from "@/lib/posts";
import { getAllCourses, getCourse } from "@/lib/courses";

export default function sitemap() {
  const base = "https://louiswandago.dev";
  const staticRoutes = ["", "/blog", "/courses", "/about"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const courses = getAllCourses().flatMap((course) => {
    const full = getCourse(course.slug);
    return [
      { url: `${base}/courses/${course.slug}`, lastModified: new Date() },
      ...full.lessons.map((lesson) => ({
        url: `${base}/courses/${course.slug}/${lesson.slug}`,
        lastModified: new Date(),
      })),
    ];
  });

  return [...staticRoutes, ...posts, ...courses];
}
