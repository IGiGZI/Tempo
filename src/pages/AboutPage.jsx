import Navbar from "../components/Navbar"

const features = [
  {
    code: "01",
    title: "Start, pause, lap",
    desc: "A stopwatch that does the fundamentals precisely — centisecond accuracy, instant pause, and lap capture without missing a beat.",
  },
  {
    code: "02",
    title: "Lap-to-lap deltas",
    desc: "Every lap shows the difference from the one before it, so you see your pace change in real time, not just a growing list of totals.",
  },
  {
    code: "03",
    title: "Accounts & sync",
    desc: "Sign up, log in, and your saved runs follow you. Everything is scoped to your account and backed by a real auth system.",
  },
  {
    code: "04",
    title: "Saved time marks",
    desc: "Save any run with a note attached — a race, a rep, a habit you're timing. Come back later and your history is all there.",
  },
]

const timeline = [
  {
    code: "00:00",
    title: "A useRef exercise",
    desc: "Tempo started as a small React exercise to actually understand useRef — a stopwatch felt like the cleanest way to feel the difference between a ref and state.",
  },
  {
    code: "00:14",
    title: "It didn't want to stop there",
    desc: "Once seconds and centiseconds were ticking cleanly, laps were the obvious next step — and laps needed a real UI, not just a console.log.",
  },
  {
    code: "00:37",
    title: "From a page to a product",
    desc: "A stopwatch that resets and forgets everything felt incomplete. So Tempo grew a backend — Node, Express, and MongoDB — to actually hold on to a run.",
  },
  {
    code: "01:02",
    title: "Where it stands now",
    desc: "Accounts, saved time marks with notes, and a history you can come back to. What began as 'learn one hook' turned into a full-stack app.",
  },
]

function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#70707033]">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -right-10 -top-6 font-mono font-bold text-[22vw] leading-none text-[#00C39A] opacity-[0.06] sm:text-[16vw]"
          >
            00:00:00
          </span>

          <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
            <p className="font-mono text-sm tracking-widest text-[#00C39A]">
              ABOUT
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
              Tempo
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#454545]">
              A stopwatch, but one that remembers. Built to track a moment,
              hold onto it, and make it easy to find again.
            </p>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[auto,1fr] sm:items-start">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#70707055] font-mono text-4xl text-[#00C39A] sm:h-24 sm:w-24">
              G
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest text-[#707070]">
                ABOUT ME
              </p>
              <h2 className="mt-2 text-3xl font-bold">Hey, I'm Gigz</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-[#454545]">
                I'm a frontend developer building my way into full-stack
                work — React on the front, Node and Express underneath,
                MongoDB holding it all together. Tempo is one of the
                projects I've used to actually learn that path, one
                feature at a time, rather than just reading about it.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#70707055] px-3 py-1 font-mono text-xs text-[#454545]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT TEMPO — FEATURES */}
        <section className="border-t border-[#70707033] bg-black py-20 text-white">
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-mono text-xs tracking-widest text-[#00C39A]">
              ABOUT TEMPO
            </p>
            <h2 className="mt-2 text-3xl font-bold">What it does</h2>
            <p className="mt-3 max-w-xl text-[#707070]">
              Every feature exists because a plain stopwatch stopped being
              enough.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-[#454545] sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.code} className="bg-black p-8">
                  <span className="font-mono text-sm text-[#00C39A]">
                    {f.code}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#707070]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT TEMPO — ORIGIN STORY */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-mono text-xs tracking-widest text-[#707070]">
              THE ORIGIN
            </p>
            <h2 className="mt-2 text-3xl font-bold">How it started</h2>

            <div className="mt-12 border-l border-[#70707055]">
              {timeline.map((step) => (
                <div key={step.code} className="relative pb-12 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-[#00C39A]" />
                  <span className="font-mono text-sm text-[#00C39A]">
                    {step.code}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#454545]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutPage