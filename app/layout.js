import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://louiswandago.dev"),
  title: {
    default: "Louis Wandago — AI, Design & Tech, taught plainly",
    template: "%s — Louis Wandago",
  },
  description:
    "Louis Wandago teaches practical AI tools, design fundamentals, and tech skills through hands-on articles and courses.",
  openGraph: {
    title: "Louis Wandago",
    description:
      "Practical AI, design, and tech skills — taught plainly, one lesson at a time.",
    type: "website",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Nav />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
