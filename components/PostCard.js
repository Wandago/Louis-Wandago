"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { tagGradient } from "@/lib/gradients";

export default function PostCard({ post }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-2xl overflow-hidden card-surface"
      >
        <div
          className={`h-28 relative bg-gradient-to-br ${tagGradient(post.tag)} flex items-end p-4 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          <div className="absolute -right-6 -bottom-8 w-28 h-28 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
          <span className="relative text-xs uppercase tracking-wide font-semibold text-white/90">
            {post.tag}
          </span>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-serif text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-ink/60 dark:text-paper/60 line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
