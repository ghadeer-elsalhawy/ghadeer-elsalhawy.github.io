# Ghadeer Elsalhawy — Portfolio

Next.js 16 (App Router) + Tailwind v4 + MDX. Static export, deployable to GitHub Pages
or any static host.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for deployment

```bash
npm run build
```

Outputs a static site to `out/`. This is configured via `output: "export"` in
`next.config.ts`.

### Deploying to GitHub Pages

1. If this repo will live at `https://<username>.github.io` (a root user-page repo), no
   changes needed.
2. If it will live at `https://<username>.github.io/<repo-name>` instead, uncomment and
   set `basePath` / `assetPrefix` in `next.config.ts`.
3. Push `out/` via a GitHub Actions workflow (the standard `actions/deploy-pages` action
   works well), or push the contents of `out/` directly to a `gh-pages` branch.

## Editing content

| What                                | Where                                 |
| ----------------------------------- | ------------------------------------- |
| Name, bio, skills, nav, email       | `src/lib/site-config.ts`              |
| Blog posts                          | `content/blog/*.mdx`                  |
| Project write-ups                   | `content/projects/*.mdx`              |
| Teaching courses & student feedback | `src/data/teaching.ts`                |
| Testimonials                        | `src/data/testimonials.ts`            |
| Journey timeline                    | `src/data/journey.ts`                 |
| Colors, fonts                       | `src/app/globals.css` (`:root` block) |

### Writing a blog post or project write-up

Drop a new `.mdx` file in `content/blog/` or `content/projects/`:

```mdx
---
title: "Post title"
date: "2026-07-01"
description: "One or two sentences for the card and SEO."
tags: ["Kubernetes", "Terraform"]
views: 0
draft: false
---

Your content here. Standard markdown, GFM tables/checkboxes work, plus you can
import and use React components if needed.
```
