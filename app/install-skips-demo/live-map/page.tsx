import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

export default function LiveMapPage() {
  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">Barry Live Map</p>
          <h1 className="mt-2 text-4xl font-black">Fake Satellite Dispatch Map</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Demo map showing skips, lorries, collections and route notes.
          </p>
        </div>

        <div className="relative mt-6 min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.24),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(132,204,22,0.2),transparent_28%),linear-gradient(135deg,#10251a,#07110d)]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

          {[
            ["SKIP-014", "Ready", "left-[14%] top-[22%]", "bg-emerald-300 text-black"],
            ["SKIP-021", "On Site", "left-[57%] top-[28%]", "bg-yellow-300 text-black"],
            ["SKIP-033", "Full", "left-[72%] top-[61%]", "bg-red-400 text-white"],
            ["SKIP-041", "Delivered", "left-[31%] top-[70%]", "bg-sky-300 text-black"],
            ["Lorry 2", "Route", "left-[44%] top-[48%]", "bg-white text-black"],
            ["Lorry 4", "Collecting", "left-[20%] top-[52%]", "bg-white text-black"],
          ].map(([name, label, pos, cls]) => (
            <Link
              key={name}
              href="/install-skips-demo/skip-operations"
              className={`absolute ${pos} rounded-2xl border border-black/20 px-3 py-2 text-xs font-black shadow-xl ${cls}`}
            >
              <div>{name}</div>
              <div className="text-[10px] opacity-75">{label}</div>
            </Link>
          ))}

          <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-black/55 p-4 backdrop-blur">
            <p className="text-sm font-black text-white">AI Dispatch Note</p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              SKIP-033 is full with rear lane access only. Driver phone task sent to Rhys.
              Paperwork needs customer signature before tipping.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

