import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import styles from "../styles/Archive.module.css";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
      <section className={styles.header}>
        <h1 className="text-4xl font-bold">Diary</h1>
        <p>Daily engineering notes, experiments, and what I learned.</p>
      </section>

      <div className="mb-6 flex justify-end">
        <Link href="/blog/admin" className="btn bg-white text-black border-[#e5e5e5]">
          Write New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
          No diary post yet. Add markdown files in src/content/blog.
        </div>
      ) : (
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.postItem}>
              <span className={styles.date}>{formatDate(post.date)}</span>
              <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                <div className="font-semibold">{post.title}</div>
                <p className="mt-1 text-sm text-gray-600">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Link href="/" className="mt-10 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white">
        Back to Home
      </Link>
    </main>
  );
}
