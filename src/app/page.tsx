import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-24 px-8 sm:px-12">
        {/*1st group*/}
        <div className="flex">
          {/*name icon section*/}
          <section aria-label="myself" className="stack">
              <div className="mt-4 inline-flex flex-col items-center justify-center rounded-3xl bg-purple-600 p-9">
                <Image src="/myIcon.png" alt="My icon" width={180} height={180} />
                <p className="mt-10 text-white font-bold">I'm Haruna</p>
                <p className="text-white max-w-[24ch] sm:max-w-[28ch] text-center mt-4"> A passionate engineer / Enthusiastic coder with bilingual fluency in English and Japanese</p>
              </div>
          </section>
        
          {/*service section*/}
          <section  className="ml-10">
            <h2 className="mb-5 inline-flex items-center gap-2 p-2 rounded-[0.375rem]" style={{ backgroundColor: "oklch(71.8% 0.202 349.761)"} }>
              Service
            </h2>
            <div className="p-2" style={{ backgroundColor: "oklch(82.3% 0.12 346.018)"}}>
              <ul>
                <li className="flex flex-col items-start gap-2">
                  <Image src="/icon/fullstuck.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Full-Stack Development
                </li>
                <li> 
                  <Image src="/icon/fullstuck.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Cloud & System Architecture </li>
                <li> 
                  <Image src="/icon/fullstuck.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Data & Database Engineering </li>
                <li> 
                  <Image src="/icon/fullstuck.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Automation & Process Optimization </li>
                <li> 
                  <Image src="/icon/fullstuck.jpg" alt="Full-Stack icon" width={120} height={120} />
                  Enterprise System Support (Regulated Environment) </li>
              </ul>
            </div>
          </section>
        </div>
        
        {/*2nd group*/}
        <div>
          <section>
          <h2>Work</h2>
          
          </section>

          <section>
            <h2>Blog</h2>
            
          </section>
        </div>
        
        {/*3rd group*/}
        <section>
          <h2>Number</h2>
          
        </section>

        <section>
          <h2>Contact</h2>
          
        </section>

        <section>
          <h2>Footer card</h2>
          
        </section>
        

      </main>
    </div>
  );
}
