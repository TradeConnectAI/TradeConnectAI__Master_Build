import Link from "next/link";

const calls = [
  {
    customer: "Sarah Mitchell",
    trade: "Kitchen leak",
    time: "08:14 AM",
    duration: "2m 14s",
    status: "Booked",
    summary:
      "Customer reported a leak under the kitchen sink. AI collected address, urgency, access notes and booked a same-day visit.",
  },
  {
    customer: "Mark Evans",
    trade: "Boiler issue",
    time: "09:02 AM",
    duration: "3m 02s",
    status: "Quote sent",
    summary:
      "Customer asked about a boiler repair. AI captured make, fault notes, photos request and sent a follow-up quote message.",
  },
  {
    customer: "Jenny Roberts",
    trade: "Emergency callout",
    time: "10:37 AM",
    duration: "1m 46s",
    status: "Urgent",
    summary:
      "Customer had water coming through a ceiling. AI flagged it as urgent, notified the engineer and prepared a job card.",
  },
];

export default function AICallDemoPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            AI Call Helper Demo
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            See how TradeConnectAI handles missed calls.
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            This demo shows how an AI receptionist could answer trade calls,
            collect job details, spot urgent work and keep customers updated
            while you are on the tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/operations-demo"
              className="rounded-full bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-400"
            >
              Open operations demo
            </Link>

            <Link
              href="/customer-demo"
              className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              View customer demo
            </Link>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-1 md:grid-cols-3">
          {calls.map((call) => (
            <article
              key={call.customer}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">{call.time}</p>
                  <h2 className="mt-2 text-xl font-bold">{call.trade}</h2>
                  <p className="mt-1 text-slate-300">{call.customer}</p>
                </div>

                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-200">
                  {call.status}
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Duration: {call.duration}
              </p>

              <p className="mt-4 text-slate-300">{call.summary}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-2xl font-bold">Live call flow</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {[
              "AI answers call",
              "Customer explains job",
              "AI captures details",
              "Job appears in dashboard",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
              >
                <p className="text-sm text-blue-300">Step {index + 1}</p>
                <p className="mt-2 font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

// deploy refresh 2026-05-22 06:38:46


