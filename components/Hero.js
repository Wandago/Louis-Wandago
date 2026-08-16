"use client";

import Link from "next/link";
import { motion } from "motion/react";

const lineOne = "I teach people how to actually use";
const lineTwo = "AI, design, and tech skills.";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const word = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

function AnimatedLine({ text, gradient = false }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="block"
    >
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={`inline-block mr-[0.28em] ${gradient ? "text-gradient" : ""}`}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/30 blur-[100px] animate-float"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 right-0 w-80 h-80 rounded-full bg-accent2/20 blur-[110px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-6 tracking-wide uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gradient animate-pulse" />
          AI · Design · Tech
        </motion.p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] max-w-3xl tracking-tight">
          <AnimatedLine text={lineOne} />
          <AnimatedLine text={lineTwo} gradient />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg text-ink/70 dark:text-paper/70 max-w-xl"
        >
          I'm Louis Wandago. Through short articles and hands-on courses, I
          break down the tools and skills that matter right now, so you can
          go build something instead of drowning in tabs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/courses"
              className="relative inline-flex items-center rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
            >
              Start a course
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-ink/15 dark:border-paper/20 px-6 py-3 text-sm font-medium hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
            >
              Read the blog
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
