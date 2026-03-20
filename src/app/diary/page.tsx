import Link from "next/link";

export default function DiaryPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-16 sm:px-12">
      <h1 className="text-3xl font-bold">Diary</h1>
      <p className="mt-4 text-base">This page includes logs, notes, and regular development updates.</p>

      <ul className="list bg-base-100 rounded-box shadow-md">
  
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
  
        <li className="list-row">
          <Link href="/diary/day2" className="flex gap-4 items-center w-full">
            <div className="text-2xl font-thin opacity-30 tabular-nums">3/11/2026 (Tue)</div>
              <div><img className="size-10 rounded-box" src="/icon/study.png"/></div>
              <div>Day2 Diary!!</div>
              <div className="text-xs uppercase font-semibold opacity-60">Learn about AWS</div>
          </Link>
        </li>

         <li className="list-row">
          <Link href="/diary/day1" className="flex gap-4 items-center w-full">
            <div className="text-2xl font-thin opacity-30 tabular-nums">3/10/2026 (Tue)</div>
              <div><img className="size-10 rounded-box" src="/icon/study.png"/></div>
              <div>Day1 Diary!!</div>
              <div className="text-xs uppercase font-semibold opacity-60">Learn about HTML</div>
          </Link>
        </li>
        
      </ul>

      <Link href="/" className="mt-8 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white">
        Back to Home
      </Link>
    </main>
  );
}
