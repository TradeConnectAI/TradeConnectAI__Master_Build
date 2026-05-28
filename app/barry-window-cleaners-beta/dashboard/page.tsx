import Link from "next/link";
import BarryLogo from "@/components/BarryLogo";
import { barryBeta } from "@/lib/barry-window-cleaners-data";

export default function BarryDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-4">
          <BarryLogo size="sm" />
          <Link href="/barry-window-cleaners-beta" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/15">
            Beta home
          </Link>
        </div>
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/barry-window-cleaners-beta" className="text-sm font-bold text-cyan-300">
              ← Back to beta home
            </Link>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">Barry Booking Dashboard</h1>
            <p className="mt-2 text-slate-300">
              Missed calls, quote requests, bookings and payment status in one place.
            </p>
          </div>
          <Link
            href="/barry-window-cleaners-beta/ai-phone"
            className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950"
          >
            Simulate AI call
          </Link>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {barryBeta.stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
              <p className="text-3xl font-black text-cyan-200">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">Today’s jobs</h2>
              <Link href="/barry-window-cleaners-beta/bookings" className="text-sm font-bold text-cyan-300">
                View bookings
              </Link>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-slate-300">
                  <tr>
                    <th className="p-4">Time</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Service</th>
                    <th className="p-4">Area</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {barryBeta.jobs.map((job) => (
                    <tr key={`${job.time}-${job.customer}`} className="border-t border-white/10">
                      <td className="p-4 font-black text-cyan-200">{job.time}</td>
                      <td className="p-4">{job.customer}</td>
                      <td className="p-4">{job.service}</td>
                      <td className="p-4">{job.area}</td>
                      <td className="p-4">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                          {job.status}
                        </span>
                      </td>
                      <td className="p-4 font-black">{job.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <h2 className="text-2xl font-black">New AI leads</h2>
            <div className="mt-5 space-y-4">
              {barryBeta.leads.map((lead) => (
                <div key={`${lead.name}-${lead.phone}`} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-black">{lead.name}</h3>
                      <p className="text-sm text-slate-400">{lead.phone}</p>
                    </div>
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                      {lead.status}
                    </span>
                  </div>
                  <div className="mt-4 grid gap-2 text-sm text-slate-300">
                    <p><span className="font-bold text-white">Service:</span> {lead.service}</p>
                    <p><span className="font-bold text-white">Postcode:</span> {lead.postcode}</p>
                    <p><span className="font-bold text-white">Property:</span> {lead.property}</p>
                    <p><span className="font-bold text-white">Urgency:</span> {lead.urgency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["Create quote", "/barry-window-cleaners-beta/quote"],
            ["Book job", "/barry-window-cleaners-beta/bookings"],
            ["Take payment", "/barry-window-cleaners-beta/payments"],
            ["AI phone demo", "/barry-window-cleaners-beta/ai-phone"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 font-black hover:bg-white/10">
              {label} →
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}


