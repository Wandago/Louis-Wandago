"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { tagGradient } from "@/lib/gradients";

export default function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        href={`/courses/${course.slug}`}
        className="group flex flex-col h-full rounded-2xl overflow-hidden card-surface"
      >
        <div
          className={`h-32 relative bg-gradient-to-br ${tagGradient(course.theme)} flex items-end p-5 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
          <span className="relative text-xs uppercase tracking-wide font-semibold text-white/90">
            {course.level} · {course.lessonCount} lessons
          </span>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-ink/60 dark:text-paper/60">
            {course.summary}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
