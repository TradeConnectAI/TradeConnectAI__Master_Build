export default function WhoItsForSection() {
  const points = [
    "Sole-trader plumbers",
    "2-van plumbing teams",
    "UK callout and boiler work",
    "Missed-call recovery on the tools",
  ];

  return (
    <section className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Who it helps
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
          One customer type: sole-trader and 2-van UK plumbers.
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
          Launch messaging stays on plumbing only. Builders, landscapers, cleaners,
          decorators and other multi-trade audiences are not the public pitch.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {points.map((item) => (
            <span key={item} className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
