// lib/utils.ts
import { formatDistanceToNow, parse } from 'date-fns';

export function formatDate(dateString: string): string {
  const date = parse(dateString, 'yyyy-MM-dd', new Date());
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateRelative(dateString: string): string {
  const date = parse(dateString, 'yyyy-MM-dd', new Date());
  return formatDistanceToNow(date, { addSuffix: true });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getExcerpt(content: string, length: number = 160): string {
  return content
    .replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, '')
    .substring(0, length)
    .concat('...');
}