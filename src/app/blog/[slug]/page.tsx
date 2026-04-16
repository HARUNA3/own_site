import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import styles from "../../styles/Post.module.css";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	const slugs = await getAllPostSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	try {
		const post = getPostBySlug(slug);
		return {
			title: `${post.title} | Diary`,
			description: post.excerpt,
		};
	} catch {
		return {
			title: "Post Not Found | Diary",
		};
	}
}

export default async function BlogPostPage({ params }: Props) {
	const { slug } = await params;

	let post;
	try {
		post = getPostBySlug(slug);
	} catch {
		notFound();
	}

	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
			<article className={styles.article}>
				<header className={styles.header}>
					<h1>{post.title}</h1>
					<div className={styles.meta}>
						<span>{formatDate(post.date)}</span>
						<span className={styles.readTime}>{post.readingTime} min read</span>
						{post.author ? <span className={styles.author}>By {post.author}</span> : null}
					</div>
				</header>

				<div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />

				{post.tags && post.tags.length > 0 ? (
					<section className={styles.tags}>
						<span>Tags</span>
						<div className={styles.tagsList}>
							{post.tags.map((tag) => (
								<span key={tag} className={styles.tag}>
									#{tag}
								</span>
							))}
						</div>
					</section>
				) : null}

				<nav className={styles.nav}>
					<Link href="/blog" className={styles.backLink}>
						Back to Diary
					</Link>
				</nav>
			</article>
		</main>
	);
}
