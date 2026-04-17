---
title: "Day 1: Started My Engineering Diary"
excerpt: "Why I started writing daily logs and how this markdown blog is structured."
date: "2026-04-15"
author: "Haru"
tags:
  - diary
  - setup
  - nextjs
featured: true
---

# Day 1: Started My Engineering Diary

Today I connected my Next.js site to markdown posts.

## Why diary style?

I wanted a place where I can write:

- what I built
- what failed
- what I learned

without opening a CMS.

## My current workflow

1. Create a new `.md` file in `src/content/blog`.
2. Add frontmatter for title, date, excerpt, and tags.
3. Write the body in markdown.
4. Push to git and deploy.

## Small win

I finally have a simple writing loop that feels fast enough to keep daily updates.

```ts
export const habit = "write one post per day";
```

See you tomorrow with Day 2.
