import Link from "next/link";

export default function WorkPage() {
  const projectUrl = "https://habit-tracker-mocha-ten.vercel.app/";

  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-16 sm:px-12">
      <h1 className="text-3xl font-bold">Work</h1>
      <p className="mt-4 text-base">This page contains project details, case studies, and delivered outcomes.</p>

      <section id="project1">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 block w-fit"
        >
          <div className="card bg-base-100 w-96 shadow-sm transition hover:shadow-md">
            <div className="card-body">
              <h2 className="card-title">Habit Tracker</h2>
              <p>A responsive habit tracking application built with Next.js and Tailwind CSS. Users can create, complete, and delete daily habits, with smooth animations and persistent state management to maintain progress.</p>
            </div>
            <figure>
              <img
                src="/habit_tracker.png"
                alt="habit_tracker_screenShot" />
            </figure>
          </div>
        </a>
      </section>

      <Link href="/" className="mt-8 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white">
        Back to Home
      </Link>
    </main>
  );
}
