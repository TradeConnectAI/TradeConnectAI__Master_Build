import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { title: "Recent Leads", value: "7", note: "3 need replies" },
    { title: "Quotes Waiting", value: "4", note: "2 over 48 hours" },
    { title: "Follow-ups Due", value: "6", note: "Today" },
    { title: "AI Time Saved", value: "4.5h", note: "This week" },
  ];

  const suggestions = [
    "Reply to Sarah about the boiler quote before lunchtime.",
    "Follow up with Mark after yesterday’s site visit.",
    "Send appointment reminder for tomorrow morning.",
    "Create quote draft for kitchen tap replacement.",
  ];

  const activity = [
    "AI drafted a customer reply for Sarah.",
    "New lead added: leaking radiator in Cardiff.",
    "Quote marked as waiting approval.",
    "Follow-up reminder created for Mark.",
  ];

  const timeline = [
    { time: "09:15", title: "New enquiry", text: "Customer asked for a boiler service quote." },
    { time: "10:05", title: "AI reply drafted", text: "Polite response prepared and ready to send." },
    { time: "11:20", title: "Quote reminder", text: "Customer has not replied after 48 hours." },
    { time: "14:00", title: "Job update", text: "Tomorrow’s appointment needs confirmation." },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Welcome to the demo
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-5xl">
            Your trade business at a glance
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300">
            This demo shows how TradeConnectAI could help small trade businesses
            manage leads, quotes, follow-ups, customer messages, and daily admin.
          </p>
        </div>

        <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-sm text-slate-400">{item.title}</p>
              <h2 className="mt-3 text-4xl font-black">{item.value}</h2>
              <p className="mt-2 text-sm text-cyan-300">{item.note}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-1 md:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
            <h2 className="text-2xl font-black">AI Suggestions</h2>
            <p className="mt-2 text-sm text-slate-300">
              Helpful next steps your AI assistant could recommend.
            </p>

            <div className="mt-5 space-y-3">
              {suggestions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Demo Activity Feed</h2>
            <p className="mt-2 text-sm text-slate-400">
              Example activity from leads, quotes, and customer follow-ups.
            </p>

            <div className="mt-5 space-y-3">
              {activity.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-1 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Customer Timeline</h2>

            <div className="mt-5 space-y-4">
              {timeline.map((item) => (
                <div
                  key={item.time}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-bold text-cyan-300">{item.time}</p>
                  <h3 className="mt-1 font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6">
            <h2 className="text-2xl font-black">Overdue Reminders</h2>
            <p className="mt-2 text-sm text-slate-300">
              Demo warnings for jobs and customers needing attention.
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-amber-400/20 bg-slate-950/60 p-4">
                <p className="font-bold text-amber-300">Quote not followed up</p>
                <p className="mt-1 text-sm text-slate-400">
                  Kitchen tap replacement quote is waiting after 2 days.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-400/20 bg-slate-950/60 p-4">
                <p className="font-bold text-amber-300">Appointment not confirmed</p>
                <p className="mt-1 text-sm text-slate-400">
                  Tomorrow morning’s boiler service needs customer confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-black">Quick Demo Actions</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/dashboard/ai/quote" className="rounded-2xl bg-cyan-400 px-5 py-4 text-center font-bold text-slate-950 hover:bg-cyan-300">
              Generate Quote
            </Link>

            <Link href="/dashboard/ai/reply" className="rounded-2xl border border-white/10 px-5 py-4 text-center font-bold hover:bg-white/10">
              Draft Reply
            </Link>

            <Link href="/dashboard/ai/jobsheet" className="rounded-2xl border border-white/10 px-5 py-4 text-center font-bold hover:bg-white/10">
              Job Sheet
            </Link>

            <Link href="/dashboard/leads" className="rounded-2xl border border-white/10 px-5 py-4 text-center font-bold hover:bg-white/10">
              View Leads
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

