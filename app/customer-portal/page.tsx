import Link from "next/link";

const features = [
  [
    "Live ETA updates",
    "Send customers automatic ETA updates so they know when someone is on the way.",
  ],
  [
    "Job timeline",
    "Show a clear job timeline from booking confirmed to work complete.",
  ],
  [
    "Engineer messages",
    "Let engineers send quick updates without typing the same message all day.",
  ],
  [
    "Quote approvals",
    "Give customers a simple place to approve quotes without chasing.",
  ],
  [
    "Invoice history",
    "Keep invoices and job history easy to find after the work is done.",
  ],
  [
    "Less chasing",
    "Reduce repeat chasing calls by keeping customers informed first.",
  ],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
          Customer Updates
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Customers do not mind delays. They mind silence.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Give customers clear updates on bookings, ETAs, quotes, invoices and
          job progress without endless chasing calls.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/customer-demo"
            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950"
          >
            Open customer demo
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white"
          >
            Beta pricing
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}