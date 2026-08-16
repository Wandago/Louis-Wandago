import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="border-b border-ink/10 dark:border-paper/10 sticky top-0 z-40 bg-paper/80 dark:bg-ink/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
          Louis Wandago
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
