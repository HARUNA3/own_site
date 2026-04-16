import React from "react";

interface BlogLayoutProps {
  title?: string;
  date?: string;
  readingTime?: number;
  children: React.ReactNode;
  tags?: string[];
}

export default function BlogLayout({
  title,
  date,
  readingTime,
  tags,
  children,
}: BlogLayoutProps) {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <div className="max-w-3xl mx-auto px-4 py-12">
        
        {/* Header */}
        <header className="mb-10">
          {title && (
            <h1 className="text-4xl font-bold leading-tight mb-3">
              {title}
            </h1>
          )}

          <div className="flex items-center gap-3 text-sm text-base-content/70">
            {date && <span>{new Date(date).toDateString()}</span>}
            {readingTime && (
              <>
                <span>•</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary">
          {children}
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-base-300 text-sm text-base-content/60">
          <p>Thanks for reading ✨</p>
        </footer>
      </div>
    </main>
  );
}