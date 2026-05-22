import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";
import InstallSkipsLogo from "@/components/InstallSkipsLogo";

const stats = [
  ["Revenue Today", "£4,820", "Card payments, account jobs and new bookings"],
  ["Jobs Booked", "21", "AI bookings plus office-added jobs"],
  ["Skips Out", "38", "Live skips currently on customer sites"],
  ["Ready Collection", "14", "Full skips waiting for driver collection"],
  ["Drivers Active", "6", "Driver phone tasks and route updates"],
  ["Tickets Sent", "18", "Digital waste tickets sent to yard/customer"],
];

const modules = [
  {
    title: "Book Skip Demo",
    text: "Customer books general waste, hardcore, aggregates, waste removal or grab hire. AI checks address, service, permit need and availability.",
    href: "/install-skips-demo/book",
    button: "Open Booking Flow",
    icon: "🧾",
  },
  {
    title: "AI Webchat",
    text: "Fake AI conversation that qualifies the customer, checks restricted items, confirms skip placement and moves the job into dispatch.",
    href: "/install-skips-demo/webchat",
    button: "Open Webchat",
    icon: "💬",
  },
  {
    title: "Operations Dashboard",
    text: "Office view for revenue, jobs, drivers, collections, payments, escalations and live dispatch decisions.",
    href: "/install-skips-demo/operations",
    button: "Open Ops",
    icon: "📊",
  },
  {
    title: "Live Skip Map",
    text: "Barry demo map with fake skip and lorry locations, collection alerts, driver routes and site notes.",
    href: "/install-skips-demo/live-map",
    button: "Open Map",
    icon: "📍",
  },
  {
    title: "Skip Locations",
    text: "Track skip ID, site address, exact placement, driver, permit status, load level and ticket state.",
    href: "/install-skips-demo/skip-operations",
    button: "View Locations",
    icon: "🚛",
  },
  {
    title: "Digital Skip Ticket",
    text: "Contents, contamination checks, drop-off photos, collection photos, customer signature and yard copy.",
    href: "/install-skips-demo/skip-ticket",
    button: "Open Ticket",
    icon: "✍️",
  },
];

export default function InstallSkipsDemoHome() {
  return (
    <main className="min-h-screen install-skip-bg text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2.5rem] border border-yellow-300/25 bg-gradient-to-br from-emerald-400/20 via-white/[0.05] to-black p-6 shadow-2xl shadow-black/40 sm:p-10">
            <div className="mb-6">
              <InstallSkipsLogo />
            </div>

            <p className="text-sm font-black uppercase tracking-[0.32em] text-yellow-200">
              Install Integrated Skips Limited Demo
            </p>

            <h1 className="mt-4 max-w-[1400px] text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              AI Skip Hire Control Room
            </h1>

            <p className="mt-5 max-w-[1200px] text-base leading-8 text-slate-200 sm:text-lg">
              A branded clickable demo showing how AI can book skips, organise permits,
              check driver and skip availability, take payment, send jobs to driver phones,
              track TACO details, create digital skip tickets and pass complex jobs to a real person.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/install-skips-demo/book"
                className="rounded-2xl bg-yellow-300 px-6 py-4 text-sm font-black text-black shadow-xl shadow-emerald-950/50 hover:bg-white"
              >
                Start Customer Booking
              </Link>
              <Link
                href="/install-skips-demo/operations"
                className="rounded-2xl border border-white/15 px-6 py-4 text-sm font-black text-white hover:bg-white/10"
              >
                Open Operations Dashboard
              </Link>
              <Link
                href="/install-skips-demo/skip-operations"
                className="rounded-2xl border border-white/15 px-6 py-4 text-sm font-black text-white hover:bg-white/10"
              >
                View Skip Locations
              </Link>
            </div>
          </div>

          <aside className="rounded-[2.5rem] border border-white/10 bg-white/[0.075] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">
              Live Demo Snapshot
            </p>
            <h2 className="mt-3 text-3xl font-black">Today’s Control Board</h2>

            <div className="mt-5 space-y-3">
              {[
                ["AI answered missed call", "Customer wanted 8 yard general waste skip"],
                ["Permit checked", "Private driveway, no road permit required"],
                ["Driver task sent", "Dean Horgan assigned collection route"],
                ["Ticket generated", "Customer contents and signatures captured"],
                ["Escalation ready", "Complex/restricted waste goes to real person"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-black/25 p-4">
                  <p className="font-black text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map(([label, value, note]) => (
            <Link
              key={label}
              href="/install-skips-demo/operations"
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.085] p-5 shadow-xl shadow-black/20 hover:border-yellow-300/60 hover:bg-yellow-300/10"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">{label}</p>
              <p className="mt-2 text-4xl font-black">{value}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">{note}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="group rounded-[2.25rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-yellow-300/60 hover:bg-yellow-300/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-4xl">{module.icon}</div>
                  <h2 className="mt-4 text-3xl font-black">{module.title}</h2>
                </div>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-black text-yellow-200">
                  CLICKABLE
                </span>
              </div>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-300 sm:text-base">
                {module.text}
              </p>

              <span className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-black text-black group-hover:bg-white">
                {module.button}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}



