"use client";

export default function HumanProblemSection() {
  const problems = [
    "Phone ringing while you’re on the tools",
    "Customers asking where you are",
    "Quotes forgotten after a long day",
    "WhatsApp messages everywhere",
    "Missed calls becoming lost work",
    "Admin waiting at night",
  ];

  return (
    <section className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
            Sound familiar?
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Most trade businesses don’t need more software.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            They need less chaos, fewer missed calls and better visibility of what’s happening during the day.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="text-lg font-semibold text-white">
                {problem}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
