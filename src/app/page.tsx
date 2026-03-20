import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans">
      <main className="flex w-full max-w-7xl flex-col items-center px-6 py-0 sm:px-10 lg:px-14">
      {/*1st group*/}
        <div className="grid w-full grid-cols-1 items-start gap-14 lg:grid-cols-[auto,1fr]">
          {/*name icon section*/}
          <section id="myself" aria-label="myself" className="stack section-fade delay-1">
              <div className="grid w-fit h-fit grid-cols-[auto_50ch] grid-rows-1 items-center gap-4 rounded-3xl bg-purple-600 px-7 py-6">
                <div className="flex flex-col items-start">
                  <Image src="/myIcon.png" alt="My icon" width={180} height={180} />
                  <p className="mt-4 text-white font-bold">I&apos;m Haruna</p>
                </div>
                <p className="pl-6 text-left text-white leading-relaxed max-w-[34ch] sm:max-w-[40ch]">A passionate engineer and enthusiastic coder with bilingual fluency in English and Japanese</p>
              </div>
          </section>
        
          {/*service section*/}
          <section id="service" className="section-fade delay-2">
            <h2 className="mb-5 inline-flex items-center gap-2 p-2 rounded-[0.375rem]" style={{ backgroundColor: "oklch(71.8% 0.202 349.761)"} }>
              <Link href="/service">Service</Link>
            </h2>
            <div className="p-2 rounded-3xl" style={{ backgroundColor: "oklch(98.7% 0.022 95.277)"}}>
              <ul className="list-none flex flex-wrap items-start justify-center gap-14 [&>li]:min-w-[170px] [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:gap-2 [&>li]:text-center">
                <li className="text-center">
                  <Image className="h-[120px] w-[120px] object-cover" src="/icon/fullstuck.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Full-Stack Development
                </li>
                <li> 
                  <Image className="h-[120px] w-[120px] object-cover" src="/icon/cloud.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Cloud & System Architecture </li>
                <li> 
                  <Image className="h-[120px] w-[120px] object-cover" src="/icon/database.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Data & Database Engineering </li>
                <li> 
                  <Image className="h-[120px] w-[120px] object-cover" src="/icon/automation.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Automation & Process Optimization </li>
                <li> 
                  <Image className="h-[120px] w-[120px] object-cover" src="/icon/enterprise.png" alt="Full-Stack icon" width={120} height={120} />
                  Enterprise System Support (Regulated Environment) </li>
              </ul>
            </div>
          </section>
        </div>
        
        {/*2nd group*/}
        <div className="mt-12 grid w-full grid-cols-1 gap-10 sm:grid-cols-3">
          <section id="resume" className="section-fade delay-3">
            <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{ backgroundColor: "oklch(72% 0.17 248)" }}>
              <Link href="/resume">Resume</Link>
            </h2>
            <div className="min-h-32 rounded-3xl p-4" style={{ backgroundColor: "oklch(97% 0.02 248)" }}>
              Career summary and skills.
            </div>
          </section>

          <section id="work" className="section-fade delay-4">
            <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{ backgroundColor: "oklch(77% 0.16 153)" }}>
              <Link href="/work">Work</Link>
            </h2>
            <div className="min-h-32 rounded-3xl p-4" style={{ backgroundColor: "oklch(97% 0.03 153)" }}>
              Featured projects and achievements.
            </div>
          </section>

          <section id="diary" className="section-fade delay-5">
            <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{ backgroundColor: "oklch(78% 0.14 34)" }}>
              <Link href="/diary">Diary</Link>
            </h2>
            <div className="min-h-32 rounded-3xl p-4" style={{ backgroundColor: "oklch(97% 0.03 34)" }}>
              Notes, updates, and daily logs.
            </div>
          </section>
        </div>
        
        {/*3rd group*/}
        <div className="mt-10 w-full">
          <section id="number" className="section-fade delay-6">
            <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{ backgroundColor: "oklch(74% 0.13 309)" }}>
              Number
            </h2>
            <div className="min-h-24 rounded-3xl p-4" style={{ backgroundColor: "oklch(97% 0.02 309)" }}>
              Key stats and highlights.
            </div>
          </section>
        </div>

        <section id="contact" className="section-fade delay-6 mt-12 w-full">
          <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{ backgroundColor: "oklch(74% 0.13 218)" }}>
            Footer card
          </h2>
          <div className="grid gap-8 rounded-3xl p-6 sm:grid-cols-2 lg:grid-cols-5" style={{ backgroundColor: "oklch(97% 0.02 218)" }}>
            <div>
              <h3 className="mb-2 font-semibold">Contact</h3>
              <ul className="space-y-1 text-sm">
                <li>Name: Haruna</li>
                <li>Email: hello@haruna.dev</li>
                <li>Location: Toronto / Remote</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Pages</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Sections</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/diary">Diary</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">SNS</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="https://github.com/HARUNA3" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/haruna-fujishima-812b7a1b8/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Newsletter</h3>
              <form className="space-y-2">
                <label htmlFor="newsletter-email" className="text-sm">Subscribe to my newsletter</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
                <button type="submit" className="rounded-md px-3 py-2 text-sm text-white" style={{ backgroundColor: "oklch(55% 0.22 218)" }}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
        

      </main>
    </div>
  );
}
