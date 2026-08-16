// TODO: replace with your real profile links
const socials = [
  { href: "https://github.com/Wandago", label: "GitHub" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "X" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-paper/10 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink/60 dark:text-paper/60">
        <p>© {new Date().getFullYear()} Louis Wandago. Built to teach, not to impress.</p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink dark:hover:text-paper transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
