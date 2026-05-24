import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";
import { aiCalls, betaStats, jobs, quotes } from "@/lib/completeOptionsData";

export default function CompleteOptionsBetaPage() {
  return (
    <CompleteOptionsShell
      title="Operations dashboard"
      subtitle="A live-feeling control room for calls, customers, jobs, quotes and follow-ups. Built to show how TradeConnectAI keeps Complete Options moving while the team is on the tools."
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {betaStats.map((stat) => (
          <DemoCard key={stat.label}>
            <p className="text-sm font-bold text-slate-400">{stat.label}</p>
            <p className="mt-3 text-4xl font-black">{stat.value}</p>
            <p className="mt-2 text-sm text-cyan-200">{stat.detail}</p>
          </DemoCard>
        ))}
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <DemoCard>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl font-black">Latest jobs</h3>
              <p className="mt-1 text-sm text-slate-400">AI captured, quoted or assigned these jobs.</p>
            </div>
            <StatusPill>Live feed</StatusPill>
          </div>

          <div className="mt-5 grid gap-3">
            {jobs.slice(0, 4).map((job) => (
              <div key={job.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-black">{job.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{job.customer} · {job.address}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">{job.status}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span>{job.id}</span>
                  <span>•</span>
                  <span>{job.date}</span>
                  <span>•</span>
                  <span>{job.value}</span>
                  <span>•</span>
                  <span>{job.source}</span>
                </div>
              </div>
            ))}
          </div>
        </DemoCard>

        <DemoCard>
          <h3 className="text-2xl font-black">Demo flow</h3>
          <p className="mt-1 text-sm text-slate-400">The sellable journey in one glance.</p>

          <div className="mt-5 grid gap-3">
            {[
              "Missed call answered by AI",
              "Job details captured",
              "Customer receives SMS confirmation",
              "Quote draft created",
              "Admin sees job on dashboard",
              "Follow-up reminder scheduled"
            ].map((step, index) => (
              <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-cyan-300 text-sm font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm font-bold text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </DemoCard>
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-2">
        <DemoCard>
          <h3 className="text-2xl font-black">Recent AI calls</h3>
          <div className="mt-4 grid gap-3">
            {aiCalls.map((call) => (
              <div key={call.caller} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black">{call.caller}</p>
                  <span className="text-xs font-bold text-slate-400">{call.time}</span>
                </div>
                <p className="mt-2 text-sm text-cyan-200">{call.outcome}</p>
              </div>
            ))}
          </div>
        </DemoCard>

        <DemoCard>
          <h3 className="text-2xl font-black">Quote pipeline</h3>
          <div className="mt-4 grid gap-3">
            {quotes.map((quote) => (
              <div key={quote.ref} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black">{quote.title}</p>
                  <p className="font-black text-cyan-200">{quote.amount}</p>
                </div>
                <p className="mt-1 text-sm text-slate-400">{quote.customer} · {quote.status}</p>
              </div>
            ))}
          </div>
        </DemoCard>
      </section>
    </CompleteOptionsShell>
  );
}
