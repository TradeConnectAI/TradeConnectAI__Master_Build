import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

const stats = [
  ["Revenue Today", "£4,820"],
  ["Jobs Booked", "21"],
  ["Skips Out", "38"],
  ["Ready Collection", "14"],
  ["Drivers Active", "6"],
  ["Tickets Sent", "18"],
];

const modules = [
  {
    title: "Book Skip Demo",
    text: "Customer books general waste, hardcore, aggregates, waste removal or grab hire.",
    href: "/install-skips-demo/book",
    button: "Open Booking Flow",
  },
  {
    title: "AI Webchat",
    text: "Fake AI conversation that qualifies the customer and books the right service.",
    href: "/install-skips-demo/webchat",
    button: "Open Webchat",
  },
  {
    title: "Operations Dashboard",
    text: "Office view for revenue, jobs, drivers, collections, payments and dispatch.",
    href: "/install-skips-demo/operations",
    button: "Open Ops",
  },
  {
    title: "Live Skip Map",
    text: "Barry demo map with fake skip and lorry locations.",
    href: "/install-skips-demo/live-map",
    button: "Open Map",
  },
  {
    title: "Skip Locations",
    text: "Track skip ID, site address, exact placement, driver, permit and status.",
    href: "/install-skips-demo/skip-operations",
    button: "View Locations",
  },
  {
    title: "Digital Skip Ticket",
    text: "Contents, contamination checks, photos, customer signature and yard copy.",
    href: "/install-skips-demo/skip-ticket",
    button: "Open Ticket",
  },
];

export default function InstallSkipsDemoHome() {
  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-400/20 via-white/[0.04] to-black p-6 shadow-2xl shadow-black/30 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">
            Install Integrated Skips Limited Demo
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
            AI Skip Hire Control Room
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            A branded clickable demo showing how AI can book skips, organise permits,
            check driver and skip availability, take payment, send jobs to driver phones,
            track TACO details, create digital skip tickets and pass complex jobs to a real person.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/install-skips-demo/book" className="rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-black text-black hover:bg-emerald-300">
              Start Customer Booking
            </Link>
            <Link href="/install-skips-demo/operations" className="rounded-2xl border border-white/15 px-5 py-4 text-sm font-black text-white hover:bg-white/10">
              Open Operations Dashboard
            </Link>
            <Link href="/install-skips-demo/skip-operations" className="rounded-2xl border border-white/15 px-5 py-4 text-sm font-black text-white hover:bg-white/10">
              View Skip Locations
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20 hover:border-emerald-300/40 hover:bg-emerald-400/10"
            >
              <h2 className="text-2xl font-black">{module.title}</h2>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-300">{module.text}</p>
              <span className="mt-5 inline-flex rounded-2xl bg-white px-4 py-3 text-sm font-black text-black">
                {module.button}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
