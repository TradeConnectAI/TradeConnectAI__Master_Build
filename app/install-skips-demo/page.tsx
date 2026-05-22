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
];

const mapPins = [
  ["SK08", "🚛", "top-[22%] left-[32%]"],
  ["GH02", "🚚", "top-[58%] left-[62%]"],
  ["Skip 18", "📦", "top-[42%] left-[45%]"],
  ["Pickup", "⚠️", "top-[72%] left-[24%]"],
  ["Permit", "📝", "top-[30%] left-[74%]"],
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
              <Link
                key={url}
                href={url}
                className="block rounded-2xl bg-white/[0.04] px-4 py-3 font-bold hover:bg-orange-500"
              >
                {title}
              </Link>
            ))}
          </nav>

          <div className="mt-6 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-4">
            <p className="text-sm text-orange-300">AI Assistant</p>
            <p className="mt-1 font-black">Online and booking</p>
            <Link
              href="/operations-demo/ai-webchat"
              className="mt-4 block rounded-2xl bg-orange-500 px-4 py-3 text-center font-black"
            >
              Open Chat
            </Link>
          </div>
        </aside>

        <section className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black">Operations Control Room</h1>
              <p className="text-slate-400">AI booking • permits • payments • dispatch • live map</p>
            </div>
            <Link href="/operations-demo/ai-webchat" className="rounded-2xl bg-orange-500 px-6 py-4 font-black">
              + New Booking
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {stats.map(([a,b]) => (
              <div key={a} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">{a}</p>
                <p className="mt-2 text-3xl font-black">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black">Live Dispatch Map</h2>
                  <p className="text-sm text-slate-400">Barry, Cardiff, Penarth and Dinas Powys</p>
                </div>
                <Link href="/operations-demo/map" className="rounded-2xl bg-white/[0.08] px-4 py-3 font-bold">
                  Full Map
                </Link>
              </div>

              <div className="relative mt-5 h-[430px] overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_25%_25%,#14532d,transparent_22%),radial-gradient(circle_at_70%_65%,#1d4ed8,transparent_18%),linear-gradient(135deg,#111827,#020617)]">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute left-[10%] top-0 h-full w-px bg-white" />
                  <div className="absolute left-[35%] top-0 h-full w-px bg-white" />
                  <div className="absolute left-[60%] top-0 h-full w-px bg-white" />
                  <div className="absolute left-[85%] top-0 h-full w-px bg-white" />
                  <div className="absolute left-0 top-[20%] h-px w-full bg-white" />
                  <div className="absolute left-0 top-[45%] h-px w-full bg-white" />
                  <div className="absolute left-0 top-[70%] h-px w-full bg-white" />
                </div>

                {mapPins.map(([name, icon, pos]) => (
                  <div key={name} className={`absolute ${pos}`}>
                    <div className="rounded-2xl bg-orange-500 px-4 py-2 text-sm font-black shadow-xl">
                      <span className="mr-2">{icon}</span>{name}
                    </div>
                    <div className="mx-auto h-8 w-1 bg-orange-500/70" />
                    <div className="mx-auto h-4 w-4 rounded-full bg-orange-500 ring-4 ring-orange-500/25" />
                  </div>
                ))}

                <div className="absolute bottom-4 left-4 rounded-2xl bg-black/70 p-4 text-sm">
                  <p className="font-black">Live status</p>
                  <p className="text-slate-300">2 lorries moving • 1 permit check • 14 collections due</p>
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-2xl font-black">Live Jobs</h2>
                <div className="mt-4 space-y-3">
                  {jobs.map(([job, area, time, status]) => (
                    <div key={job} className="grid gap-2 rounded-2xl bg-black p-4 md:grid-cols-4">
                      <b>{job}</b>
                      <span>{area}</span>
                      <span className="text-orange-300">{time}</span>
                      <span className="text-emerald-300">{status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5">
                <h2 className="text-2xl font-black">AI Activity</h2>
                <div className="mt-4 space-y-3">
                  <p className="rounded-2xl bg-black p-4">Customer booked 8 yard skip</p>
                  <p className="rounded-2xl bg-orange-500 p-4 font-bold">Permit checked automatically</p>
                  <p className="rounded-2xl bg-black p-4">Invoice + receipt generated</p>
                  <p className="rounded-2xl bg-black p-4">Driver task sent to phone</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
