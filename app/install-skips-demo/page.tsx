import Link from "next/link";

const links = [
  ["Dashboard", "/install-skips-demo"],
  ["Jobs", "/operations-demo/driver-jobs"],
  ["Collections", "/operations-demo/collections"],
  ["Drivers", "/operations-demo/drivers"],
  ["Driver Phone", "/operations-demo/driver-phone"],
  ["AI Chat", "/operations-demo/ai-webchat"],
  ["Invoices", "/operations-demo/invoice-receipts"],
  ["Revenue", "/operations-demo/revenue"],
  ["Live Map", "/operations-demo/map"],
];

const stats = [
  ["Revenue", "£4,820"],
  ["Jobs", "21"],
  ["Skips Out", "38"],
  ["Drivers", "6"],
  ["Collections", "14"],
  ["Invoices", "18"],
];

const jobs = [
  ["8 Yard Skip", "Barry", "10:30", "Paid"],
  ["Grab Hire", "Penarth", "On route", "Invoice"],
  ["Hardcore Skip", "Cardiff", "Permit", "Pending"],
  ["Aggregates", "Dinas Powys", "Assigned", "Paid"],
];

export default function Page(){
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-white/10 bg-[#05070d] p-5">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-orange-500 font-black">I</div>
            <div>
              <p className="text-2xl font-black leading-none">INSTALL</p>
              <p className="text-xs font-bold text-orange-500">INTEGRATED SKIPS</p>
            </div>
          </div>

          <nav className="space-y-2">
            {links.map(([title,url]) => (
              <Link key={url} href={url} className="block rounded-2xl bg-white/[0.04] px-4 py-3 font-bold hover:bg-orange-500">
                {title}
              </Link>
            ))}
          </nav>

          <div className="mt-6 rounded-3xl border border-white/10 bg-black p-4">
            <p className="font-bold">Dean Horgan</p>
            <p className="text-sm text-slate-400">Operations Manager</p>
          </div>
        </aside>

        <section className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black">Operations Control Room</h1>
              <p className="text-slate-400">AI booking • permits • payments • dispatch</p>
            </div>
            <Link href="/operations-demo/ai-webchat" className="rounded-2xl bg-orange-500 px-6 py-4 font-black">
              Open Chat
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {stats.map(([a,b]) => (
              <div key={a} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-slate-400">{a}</p>
                <p className="mt-2 text-3xl font-black">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_420px]">
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-black">Live Jobs</h2>
              <div className="mt-5 space-y-3">
                {jobs.map(([job, area, time, status]) => (
                  <div key={job} className="grid gap-3 rounded-2xl bg-black p-4 md:grid-cols-4">
                    <b>{job}</b>
                    <span>{area}</span>
                    <span className="text-orange-300">{time}</span>
                    <span className="text-emerald-300">{status}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-black">AI Activity</h2>
              <div className="mt-5 space-y-3">
                <p className="rounded-2xl bg-slate-900 p-4">Customer booked 8 yard skip</p>
                <p className="rounded-2xl bg-orange-500 p-4 font-bold">Permit checked automatically</p>
                <p className="rounded-2xl bg-slate-900 p-4">Invoice + receipt generated</p>
                <p className="rounded-2xl bg-slate-900 p-4">Driver task sent to phone</p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
