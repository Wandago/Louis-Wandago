"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="rounded-full border border-ink/10 dark:border-paper/15 w-9 h-9 flex items-center justify-center text-sm hover:bg-ink/5 dark:hover:bg-paper/10 transition-colors"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
