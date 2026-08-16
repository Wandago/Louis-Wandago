# Louis Wandago — Teaching Site

A personal site for teaching AI, design, and tech skills through articles and
structured courses. Built with Next.js (App Router) + Tailwind CSS. No
database, no auth — everything is static content in the repo, so publishing
is just editing a file and pushing.

## Run locally

```
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Where things live

```
app/page.js                     Homepage (hero + latest posts/courses)
app/blog/page.js                Blog index
app/blog/[slug]/page.js         Blog post page (renders MDX)
app/courses/page.js             Courses index
app/courses/[slug]/page.js      Course overview + lesson list
app/courses/[slug]/[lesson]/    Individual lesson page (renders MDX)
app/about/page.js               About page
components/Nav.js               Site header/nav
components/Footer.js            Site footer
components/ThemeToggle.js       Light/dark mode toggle
lib/posts.js                    Reads + sorts content/blog/*.mdx
lib/courses.js                  Reads content/courses/*/meta.json + lessons
content/blog/*.mdx               Blog posts (one file per post)
content/courses/<slug>/meta.json         Course title/level/summary/description
content/courses/<slug>/lessons/*.mdx     Lessons, in order
```

## Adding a blog post

Create `content/blog/your-slug.mdx`:

```mdx
---
title: "Your Post Title"
date: "2026-08-20"
tag: "AI"
excerpt: "One sentence shown on the blog index and homepage."
---

Your content here, in Markdown/MDX.
```

It appears automatically on `/blog` and the homepage, sorted by date.

## Adding a course

1. Create `content/courses/your-course-slug/meta.json`:

   ```json
   {
     "title": "Your Course Title",
     "level": "Beginner",
     "summary": "One sentence for the course cards.",
     "description": "A longer paragraph shown on the course overview page."
   }
   ```

2. Add lessons in `content/courses/your-course-slug/lessons/`, named with a
   number prefix to control order (`01-first-lesson.mdx`, `02-...`):

   ```mdx
   ---
   title: "Lesson Title"
   order: 1
   duration: "6 min"
   ---

   Lesson content in Markdown/MDX.
   ```

The course automatically appears on `/courses`, and lessons get prev/next
navigation based on `order`.

## Before you launch

- Replace the placeholder email in `app/about/page.js`.
- Replace the LinkedIn/X links in `components/Footer.js` (currently `#`).
- Update `metadataBase` in `app/layout.js` and the sitemap base URL in
  `app/sitemap.js` if you're not using `louiswandago.dev`.

## Deploy on Vercel

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, keep the
   default Next.js settings, and deploy.
3. Add a custom domain under the Vercel project's Settings → Domains once
   you've picked one.

No environment variables are required — the site has no backend.
