// lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Configure markdown-it with code highlighting
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
        );
      } catch {}
    }
    return '<pre class="hljs"><code>' + escapeHtml(str) + '</code></pre>';
  },
});

export interface PostMetadata {
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
}

export interface Post extends PostMetadata {
  slug: string;
  content: string;
  html: string;
  readingTime: number;
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    return getPostBySlug(slug);
  });

  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((post) => new Date(post.date) <= new Date()); // Hide future posts
}

// Get post by slug
export function getPostBySlug(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const metadata = data as Partial<PostMetadata>;
  const html = md.render(content);
  const readingTime = calculateReadingTime(content);

  const title = metadata.title?.trim() || slug.replace(/-/g, ' ');
  const excerpt =
    metadata.excerpt?.trim() ||
    content
      .replace(/[#>*`\-\n]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 150);
  const date = metadata.date || new Date().toISOString().slice(0, 10);

  return {
    slug,
    content,
    html,
    readingTime,
    title,
    excerpt,
    date,
    author: metadata.author,
    tags: metadata.tags,
    featured: metadata.featured,
  };
}

// Get all post slugs
export async function getAllPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md'));
  return files.map((file) => file.replace(/\.md$/, ''));
}

// Calculate reading time (words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Get featured posts
export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured).slice(0, 3);
}

// Search posts by tags
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}