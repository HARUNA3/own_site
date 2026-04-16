---
title: "Day 2: Three Next.js Notes I Keep Forgetting"
excerpt: "A short memo about global CSS, app router routes, and markdown rendering."
date: "2026-04-16"
author: "Haru"
tags:
	- diary
	- nextjs
	- markdown
featured: false
---

# Day 2: Three Next.js Notes I Keep Forgetting

I wrote this as a reminder to future me.

## 1) Keep a stable global CSS entry

In App Router, import global CSS in `src/app/layout.tsx`.
Even when I move styles to another folder, I keep `src/app/globals.css` as a bridge file.

## 2) Dynamic route pages must export a module

If `src/app/blog/[slug]/page.tsx` is empty, build fails because the route is not a module.

## 3) Markdown files are enough for a small diary

For now, markdown + frontmatter gives me everything I need:

- title
- date
- tags
- excerpt

No dashboard required.

## Next step

I want to add an RSS feed and a tag filter page soon.
