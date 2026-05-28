import Link from "next/link";
import BarryLogo from "@/components/BarryLogo";
import { barryBeta } from "@/lib/barry-window-cleaners-data";

export default function BarryBookingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-4">
          <BarryLogo size="sm" />
          <Link href="/barry-window-cleaners-beta" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/15">
            Beta home
          </Link>
        </div>
        <Link href="/barry-window-cleaners-beta" className="text-sm font-bold text-cyan-300">
          ← Back to beta home
        </Link>

        <header className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-black md:text-6xl">Bookings</h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              A simple booking board for daily rounds, one-off gutter jobs and quote follow-ups.
            </p>
          </div>
          <Link href="/barry-window-cleaners-beta/quote" className="rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950">
            New quote
          </Link>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-4">
          {["08:00-10:00", "10:00-12:00", "12:00-14:00", "14:00-16:00"].map((slot, index) => (
            <div key={slot} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
              <p className="text-sm font-black text-cyan-300">{slot}</p>
              <h2 className="mt-2 text-xl font-black">
                {index === 0 ? "Regular window round" : index === 1 ? "Gutter job" : index === 2 ? "Fascia clean" : "Quote visit"}
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {index === 0 ? "Barry route, repeat customers." : index === 1 ? "Sully customer, full property." : index === 2 ? "Dinas Powys, payment pending." : "Wenvoe, access check needed."}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <h2 className="text-2xl font-black">Today’s schedule</h2>
          <div className="mt-5 grid gap-4">
            {barryBeta.jobs.map((job) => (
              <div key={`${job.time}-${job.customer}`} className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900 p-5 md:grid-cols-[0.2fr_1fr_1fr_0.8fr_0.5fr] md:items-center">
                <div>
                  <p className="text-2xl font-black text-cyan-200">{job.time}</p>
                </div>
                <div>
                  <p className="font-black">{job.customer}</p>
                  <p className="text-sm text-slate-400">{job.area}</p>
                </div>
                <div>
                  <p className="font-bold">{job.service}</p>
                  <p className="text-sm text-slate-400">{job.notes}</p>
                </div>
                <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-black">{job.status}</span>
                <p className="font-black">{job.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-2xl font-black text-cyan-100">AI booking rule</h2>
          <p className="mt-3 text-slate-300">
            The AI should not promise a fixed appointment unless a slot is available. For the beta, it should create a booking request and mark it as “Needs confirmation”.
          </p>
        </section>
      </div>
    </main>
  );
}


