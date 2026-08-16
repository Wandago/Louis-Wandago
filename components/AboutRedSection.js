"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const skills = ["AI TOOLS", "PROMPTING", "DESIGN BASICS", "NO-CODE", "TECH SKILLS", "AI TOOLS", "PROMPTING", "DESIGN BASICS", "NO-CODE", "TECH SKILLS"];

export default function AboutRedSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#FF0000] flex flex-col overflow-hidden">
      <motion.div
        className="flex-1 flex flex-col items-center w-full pt-20 sm:pt-28 md:pt-36 pb-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center w-full px-8 text-center relative max-w-[900px] mx-auto">
          <motion.svg
            variants={item}
            width="72"
            height="72"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-10"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z"
              fill="white"
            />
          </motion.svg>

          <motion.p
            variants={item}
            className="font-manrope text-white text-[15px] sm:text-[16px] w-full max-w-[420px] leading-[1.7] mb-10 uppercase tracking-wider mx-auto"
          >
            I built this site with one purpose: to make AI, design, and tech
            skills feel learnable, not intimidating.
          </motion.p>

          <motion.div
            variants={item}
            className="font-marck text-white text-[96px] sm:text-[120px] leading-none mb-8"
          >
            L.W.
          </motion.div>

          <motion.div
            variants={item}
            className="font-manrope text-white leading-[1.7] mb-4 w-full flex flex-col items-center font-light"
          >
            <p className="mb-6 text-[15px] sm:text-[16px] max-w-[420px] text-center">
              I Was Frustrated By Tutorials That Explained Everything Except
              What Actually Mattered. That Is Why I Started Teaching The Way
              I Wished Someone Had Taught Me — Plainly, And Without The
              Filler.
            </p>
            <p className="text-[15px] sm:text-[16px] max-w-[420px] text-center">
              Your Time Is Too Valuable To Spend Guessing. Let Every Article
              And Course Here Do The Work Of Turning Confusion Into A Skill
              You Actually Keep.
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="/courses"
              className="rounded-full bg-white text-[#FF0000] px-6 py-3 text-sm font-manrope font-semibold hover:bg-white/90 transition-colors"
            >
              Start a course
            </a>
            <a
              href="mailto:hello@louiswandago.dev"
              className="rounded-full border border-white/40 text-white px-6 py-3 text-sm font-manrope font-semibold hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative w-full shrink-0 border-t border-white/20 py-6">
        <div className="flex overflow-hidden select-none">
          <motion.div
            className="flex shrink-0 gap-10 pr-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="font-manrope text-white/70 text-sm tracking-[0.2em] whitespace-nowrap"
              >
                {s} <span className="mx-2 text-white/40">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
