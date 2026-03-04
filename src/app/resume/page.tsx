import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-16 sm:px-12">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="mt-4 text-base">This page shows experience summary, skills, and professional highlights.</p>
      
      <section id="resume-top" className="section-fade delay-3">
        <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{backgroundColor: ""}}>Career Objective</h2>

      </section>

      <section id="pic" className="section-fade delay-3">
        <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{backgroundColor: ""}}></h2>

      </section>

      <section id="education" className="section-fade delay-3">
        <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{backgroundColor: ""}}>Education</h2>

      </section>

      <section id="experience" className="section-fade delay-3">
        <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{backgroundColor: ""}}>Experience</h2>

      </section>

      <section id="skills" className="section-fade delay-3">
        <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{backgroundColor: ""}}>Skills</h2>

      </section>

      <section id="works" className="section-fade delay-3">
        <h2 className="mb-4 inline-flex items-center gap-2 rounded-[0.375rem] p-2" style={{backgroundColor: ""}}>Works</h2>

      </section>

      
      
      
      <Link href="/" className="mt-8 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white">
        Back to Home
      </Link>
    </main>
  );
}
