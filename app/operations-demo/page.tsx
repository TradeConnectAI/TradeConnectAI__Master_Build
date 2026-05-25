import Link from "next/link";

const modules = [
  {
    title: "AI Webchat Booking",
    href: "/operations-demo/ai-webchat",
    desc: "AI books jobs, checks access check needs, confirms availability and takes payment.",
  },
  {
    title: "Invoices & Receipts",
    href: "/operations-demo/invoice-receipts",
    desc: "Generate invoices, receipts, payment records and customer confirmations.",
  },
  {
    title: "Driver Jobs",
    href: "/operations-demo/driver-jobs",
    desc: "Send job tasks to driver phones with route, notes and tacho awareness.",
  },
  {
    title: "Collections",
    href: "/operations-demo/collections",
    desc: "Track job collections, driver assignment and overdue pickups.",
  },
  {
    title: "Live Map",
    href: "/operations-demo/map",
    desc: "Fake live map view for jobs, teams, collections and deliveries.",
  },
  {
    title: "Revenue Dashboard",
    href: "/operations-demo/revenue",
    desc: "Daily bookings, revenue, jobs active, teams out and payments.",
  },
];

export default function OperationsDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <p className="text-sm font-semibold text-blue-300">
            TradeConnectAI Operations Demo
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            Operations Control Room
          </h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            A clickable demo showing AI booking, payments, access checks, driver jobs,
            collections, invoices and job movements.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          {[
            ["Revenue today", "£4,820"],
            ["Jobs active", "38"],
            ["Teams out", "6"],
            ["Jobs booked", "21"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-bold">{value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <h2 className="text-xl font-bold">{module.title}</h2>
              <p className="mt-3 text-slate-300">{module.desc}</p>
              <p className="mt-5 text-sm font-semibold text-blue-300">
                Open module →
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
