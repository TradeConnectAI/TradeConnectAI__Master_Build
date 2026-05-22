import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

const tasks = [
  ["Dean Horgan", "SKIP-014", "Collect 8 Yard", "Get customer signature", "Driving 3h 20m"],
  ["Rhys Evans", "SKIP-033", "Collect 12 Yard", "Check plasterboard", "Driving 4h 05m"],
  ["Dai Morgan", "GRAB-009", "Grab hire", "Take site photo", "Driving 2h 45m"],
  ["Ceri Price", "AGG-017", "Aggregates delivery", "Confirm delivery photo", "Driving 1h 50m"],
];

export default function DriversPage() {
  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">Driver Phone Tasks</p>
          <h1 className="mt-2 text-4xl font-black">Jobs Sent to Drivers</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Fake driver app view with route tasks, photos, signatures, TACO driving time and break reminders.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {tasks.map(([driver, skip, job, note, taco]) => (
            <article key={`${driver}-${skip}`} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-black text-emerald-300">{driver}</p>
              <h2 className="mt-1 text-2xl font-black">{job}</h2>
              <p className="mt-2 text-sm text-slate-300">{skip} · {note}</p>
              <div className="mt-4 rounded-2xl bg-black/25 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">TACO / Hours</p>
                <p className="mt-2 text-sm font-black">{taco} · Break reminder active</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/install-skips-demo/skip-ticket" className="rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-black text-black">Open Ticket</Link>
                <Link href="/install-skips-demo/live-map" className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-black text-white">View Route</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

