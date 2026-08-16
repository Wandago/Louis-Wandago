import Link from "next/link";

// TODO: replace with your real profile links
const socials = [
  { href: "https://github.com/Wandago", label: "GitHub" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "X" },
];

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink/10 dark:border-paper/10 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-grid-glow opacity-60" />
      <div className="relative max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <p className="font-serif text-xl font-semibold mb-2">Louis Wandago</p>
            <p className="text-sm text-ink/60 dark:text-paper/60 max-w-xs">
              Practical AI, design, and tech skills — taught plainly, one
              lesson at a time.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-4">
            <nav className="flex items-center gap-5 text-sm font-medium">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-ink/70 dark:text-paper/70 hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-5 text-sm">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink/50 dark:text-paper/50 hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-ink/40 dark:text-paper/40">
          © {new Date().getFullYear()} Louis Wandago. Built to teach, not to
          impress.
        </p>
      </div>
    </footer>
  );
}
