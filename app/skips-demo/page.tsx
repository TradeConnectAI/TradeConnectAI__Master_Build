import Link from "next/link";

const bookings = [
  {
    customer: "Dave Roberts",
    job: "6 yard skip",
    address: "Rhyl High Street",
    status: "Booked",
    time: "Today 10:30",
    notes: "Driveway drop-off. Customer asked for collection Friday.",
  },
  {
    customer: "Claire Hughes",
    job: "8 yard builders skip",
    address: "Prestatyn renovation",
    status: "Payment pending",
    time: "Tomorrow 08:00",
    notes: "AI sent payment link and permit reminder.",
  },
  {
    customer: "North Wales Roofing",
    job: "12 yard skip",
    address: "Commercial yard",
    status: "Urgent",
    time: "Today 14:00",
    notes: "Repeat customer. Needs exchange before end of day.",
  },
];

const messages = [
  "Hi Dave, your 6 yard skip is booked for today around 10:30.",
  "Claire, we have sent your payment link. Your booking is held until 5pm.",
  "North Wales Roofing, exchange request flagged urgent. Driver notified.",
];

export default function SkipsDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Skip Hire Demo
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            AI bookings, reminders and job updates for a skip company.
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            This demo shows how TradeConnectAI could help a skip hire business
            handle calls, book skips, send payment links, manage urgent
            exchanges and keep customers updated automatically.
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
              View customer side
            </Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-4">
          {[
            ["Calls handled", "24"],
            ["Skips booked", "11"],
            ["Payments chased", "6"],
            ["Urgent exchanges", "2"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-4xl font-bold">{value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold">Today&apos;s skip bookings</h2>

            <div className="mt-6 space-y-4">
              {bookings.map((booking) => (
                <article
                  key={booking.customer}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">{booking.time}</p>
                      <h3 className="mt-1 text-xl font-bold">{booking.job}</h3>
                      <p className="text-slate-300">{booking.customer}</p>
                      <p className="text-sm text-slate-400">{booking.address}</p>
                    </div>

                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-200">
                      {booking.status}
                    </span>
                  </div>

                  <p className="mt-4 text-slate-300">{booking.notes}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold">AI customer updates</h2>

            <div className="mt-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <p className="text-sm text-slate-300">{message}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-2xl font-bold">How the AI helps</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              "Answers missed calls",
              "Checks skip size needed",
              "Captures address and access notes",
              "Sends booking confirmation",
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
