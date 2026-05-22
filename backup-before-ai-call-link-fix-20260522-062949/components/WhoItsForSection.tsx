export default function WhoItsForSection() {
  const trades = [
    "Plumbers",
    "Electricians",
    "Window cleaners",
    "Roofers",
    "Cleaners",
    "Gardeners",
    "Locksmiths",
    "Property maintenance",
    "Heating engineers",
    "CCTV installers",
    "Pest control",
    "Mobile mechanics",
  ];

  return (
    <section className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Who it helps
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
          For small service businesses where the phone, jobs and customers all need attention.
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
          It starts with trades, but the same problem exists across any business that takes calls, books jobs, sends quotes and keeps customers updated.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {trades.map((trade) => (
            <span key={trade} className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300">
              {trade}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
