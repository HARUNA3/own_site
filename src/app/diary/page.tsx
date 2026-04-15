import Link from "next/link";

export default function DiaryPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-16 sm:px-12">
      <h1 className="text-3xl font-bold">Diary</h1>
      <p className="mt-4 text-base">This page includes logs, notes, and regular development updates.</p>

      <div>
        
        <Link href="/diary/admin" className="">
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Edit Diary
          </button>
        </Link>
      </div>
      
      <ul className="list bg-base-100 rounded-box shadow-md mt-10">
  
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
