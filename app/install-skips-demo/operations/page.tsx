import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

const stats = [
  ["Revenue", "£4,820"],
  ["Jobs", "21"],
  ["Skips Out", "38"],
  ["Drivers", "6"],
  ["Collections", "14"],
  ["Invoices", "18"],
];

const jobs = [
  ["08:30", "Deliver 8 Yard", "A. Jenkins", "Dean Horgan", "Complete"],
  ["10:00", "Collect 12 Yard", "Vale Roofing", "Rhys Evans", "Needs signature"],
  ["11:30", "Grab Hire", "Barry Builders Ltd", "Dai Morgan", "On route"],
  ["14:00", "Aggregates Delivery", "M. Thomas", "Ceri Price", "Scheduled"],
];

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">Operations Dashboard</p>
          <h1 className="mt-2 text-4xl font-black">Dean Horgan Admin View</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Office control room for bookings, dispatch, drivers, collections, paperwork and payments.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(([label, value]) => (
            <Link key={label} href="/install-skips-demo/skip-operations" className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 hover:bg-emerald-400/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-black">{value}</p>
            </Link>
          ))}
        </div>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-black">Today’s Jobs</h2>
            <Link href="/install-skips-demo/drivers" className="rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-black text-black">
              Driver Phone Tasks
            </Link>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="text-xs uppercase tracking-widest text-slate-400">
                <tr>
                  <th className="p-3">Time</th>
                  <th className="p-3">Job</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Driver</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map(([time, job, customer, driver, status]) => (
                  <tr key={`${time}-${job}`} className="border-t border-white/10">
                    <td className="p-3 font-black">{time}</td>
                    <td className="p-3">{job}</td>
                    <td className="p-3">{customer}</td>
                    <td className="p-3">{driver}</td>
                    <td className="p-3 text-emerald-300">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/install-skips-demo/live-map" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 hover:bg-emerald-400/10">
            <h3 className="text-xl font-black">Live Map</h3>
            <p className="mt-2 text-sm text-slate-300">See fake skips and lorries around Barry.</p>
          </Link>
          <Link href="/install-skips-demo/skip-ticket" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 hover:bg-emerald-400/10">
            <h3 className="text-xl font-black">Digital Ticket</h3>
            <p className="mt-2 text-sm text-slate-300">Open waste contents and signatures.</p>
          </Link>
          <Link href="/install-skips-demo/permits" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 hover:bg-emerald-400/10">
            <h3 className="text-xl font-black">Permits</h3>
            <p className="mt-2 text-sm text-slate-300">Road permit checks and council notes.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

