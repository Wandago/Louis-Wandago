"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 dark:border-paper/10 bg-paper/70 dark:bg-ink/70 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 rounded-lg bg-accent-gradient flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-accent/20 group-hover:scale-105 transition-transform">
            L
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Louis Wandago
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-ink dark:text-paper"
                    : "text-ink/60 dark:text-paper/60 hover:text-ink dark:hover:text-paper"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-3 right-3 -bottom-px h-px bg-accent-gradient origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
          <div className="ml-2 pl-2 border-l border-ink/10 dark:border-paper/10">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
