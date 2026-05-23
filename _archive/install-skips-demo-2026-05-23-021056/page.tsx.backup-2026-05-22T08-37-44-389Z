export default function Page() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <h1 className="text-4xl font-black">Live Skip Dispatch Map</h1>
      <p className="mt-2 text-slate-400">
        Barry satellite-style dispatch dashboard.
      </p>

      <section className="mt-6 grid gap-4 md:grid-cols-6">
        {[
          ["Revenue", "£4,820"],
          ["Jobs", "21"],
          ["Skips Out", "38"],
          ["Drivers", "6"],
          ["Collections", "14"],
          ["Invoices", "18"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl bg-white/[0.05] p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-3xl font-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div className="relative h-[620px] overflow-hidden rounded-3xl border border-orange-500/20 bg-[radial-gradient(circle_at_25%_25%,#14532d,transparent_22%),radial-gradient(circle_at_70%_65%,#1d4ed8,transparent_18%),linear-gradient(135deg,#111827,#020617)]">
          {[
            ["SK08", "top-[25%] left-[35%]"],
            ["GH02", "top-[48%] left-[58%]"],
            ["Skip 18", "top-[38%] left-[68%]"],
            ["Pickup", "top-[68%] left-[30%]"],
            ["Permit", "top-[22%] left-[72%]"],
          ].map(([name, pos]) => (
            <div
              key={name}
              className={`absolute ${pos} rounded-2xl bg-orange-500 px-4 py-2 font-black shadow-2xl`}
            >
              {name}
            </div>
          ))}

          <div className="absolute bottom-5 left-5 rounded-2xl bg-black/75 p-4">
            <p className="font-black">Barry Dispatch Live</p>
            <p className="text-slate-300">
              6 lorries active - 38 skips out - 14 collections
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
