import Link from "next/link";

const stats = [
  ["Revenue today", "£4,820"],
  ["Jobs active", "38"],
  ["Teams out", "6"],
  ["Jobs booked", "21"],
];

const modules = [
  {
    title: "AI Webchat Booking",
    text: "Capture enquiries, ask the right questions, check availability and create organised job cards.",
    href: "/operations-demo/ai-webchat",
  },
  {
    title: "Calls & Transcripts",
    text: "Review captured calls, customer details, job notes and follow-up actions in one place.",
    href: "/operations-demo/calls",
  },
  {
    title: "Team Tasks",
    text: "Send clear job tasks to workers with customer details, notes, routes and status updates.",
    href: "/operations-demo/team member-jobs",
  },
  {
    title: "Job Follow-ups",
    text: "Track open work, customer updates, return visits, parts needed and completed tasks.",
    href: "/operations-demo/follow-ups",
  },
  {
    title: "Live Job Map",
    text: "See a simple overview of active jobs, teams on the move, customer locations and job progress.",
    href: "/operations-demo/map",
  },
  {
    title: "Revenue Dashboard",
    text: "View daily bookings, revenue, quotes, invoices, payments and follow-up opportunities.",
    href: "/operations-demo/revenue",
  },
  {
    title: "Quotes",
    text: "Create practical quote drafts from customer details and send them for approval.",
    href: "/operations-demo/quotes",
  },
  {
    title: "Invoices & Receipts",
    text: "Generate invoices, receipts, payment records and customer confirmations.",
    href: "/operations-demo/invoice-receipts",
  },
  {
    title: "Customer Updates",
    text: "Send clear updates so customers know what is happening without chasing you.",
    href: "/operations-demo/conversations",
  },
];

const activity = [
  ["09:12", "New enquiry captured: leaking tap"],
  ["09:18", "Job card created and marked urgent"],
  ["09:27", "Quote draft prepared for customer approval"],
  ["09:35", "Team member assigned to afternoon visit"],
  ["09:48", "Customer update sent automatically"],
];

export default function OperationsDemoPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              TradeConnectAI Operations Demo
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Operations Control Room
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              A clickable demo showing how TradeConnectAI can capture enquiries,
              organise jobs, create quotes, send updates and keep a small trade
              business moving.
            </p>
          </div>

          <Link
            href="/book-demo"
            className="rounded-full bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950"
          >
            Book a beta demo
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div
              key={label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-slate-950/20"
            >
              <p className="text-sm text-cyan-200/80">{label}</p>
              <p className="mt-4 text-4xl font-black text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.75fr]">
          <section className="grid gap-5 md:grid-cols-2">
            {modules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <h2 className="text-2xl font-black">{module.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {module.text}
                </p>
                <p className="mt-6 text-sm font-black text-cyan-300">
                  Open module →
                </p>
              </Link>
            ))}
          </section>

          <aside className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Live activity
            </p>
            <h2 className="mt-3 text-3xl font-black">Today&apos;s workflow</h2>

            <div className="mt-6 space-y-3">
              {activity.map(([time, text]) => (
                <div
                  key={`${time}-${text}`}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-sm font-black text-cyan-200">{time}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-slate-400">Demo journey</p>
              <p className="mt-2 text-lg font-black">
                Missed call → Job card → Quote → Update → Team assigned
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
