import Link from "next/link";

export default function day1Diary() {
    return (
        <main className="max-auto w-full max-w-5xl px-8 py-16 sm:px-12">
            <div>
                <h1 className="text-3xl font-bold">day2 diary</h1>

            </div>

            <Link href="/diary" className="mt-8 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white">
                Back to Diary List
            </Link>
        </main>
    )
}