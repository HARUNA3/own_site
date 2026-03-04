import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-16 sm:px-12">
      <h1 className="text-3xl font-bold">Work</h1>
      <p className="mt-4 text-base">This page contains project details, case studies, and delivered outcomes.</p>
      <Link href="/" className="mt-8 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white">
        Back to Home
      </Link>
    </main>
  );
}
