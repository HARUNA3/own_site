import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section>
          <h1 className="text-3xl font-bold tracking-tight">Welcome💛This is Haru's homepage! </h1>

          <p className="text-gray-700">
            I'm building my engineering portfolio and sharing daily learning outputs.
            This site will evolve into a paid knowledge platform in the furture.
          </p>

          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Current Focus</h2>
            <ul className="mt-3 list-inside list-disc text-gray-700">
              <li>Next.js + TypeScript</li>
              <li>System design & coding practice</li>
              <li>Building in public</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
