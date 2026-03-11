import Link from "next/link";

export default function DiaryPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-16 sm:px-12">
      <h1 className="text-3xl font-bold">Diary</h1>
      <p className="mt-4 text-base">This page includes logs, notes, and regular development updates.</p>

      <ul className="list bg-base-100 rounded-box shadow-md">
  
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
  
        <li className="list-row">
          <Link href="/diary/day1">
            <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
              <div className="list-col-grow">
                <div>Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
              </button>
          </Link>
          
        </li>
        
        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
          <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
          <div className="list-col-grow">
            <div>Ellie Beilish</div>
            <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
          </div>
          <button className="btn btn-square btn-ghost">
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        
      </ul>

      <Link href="/" className="mt-8 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white">
        Back to Home
      </Link>
    </main>
  );
}
