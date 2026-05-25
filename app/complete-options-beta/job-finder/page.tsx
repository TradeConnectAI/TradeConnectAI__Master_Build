import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";
import { jobFinderLeads } from "@/lib/completeOptionsData";

export default function JobFinderPage() {
  return (
    <CompleteOptionsShell
      title="Job finder"
      subtitle="A demo of how Trade Connect AI could surface possible local work from enquiries, planning signals and public lead sources."
    >
      <section className="grid gap-4">
        {jobFinderLeads.map((lead) => (
          <DemoCard key={lead.title}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <StatusPill>{lead.source}</StatusPill>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">{lead.confidence} confidence</span>
                </div>
                <h3 className="mt-4 text-2xl font-black">{lead.title}</h3>
                <p className="mt-2 text-slate-400">{lead.area}</p>
              </div>
              <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm text-cyan-100">Potential value</p>
                <p className="mt-1 text-3xl font-black">{lead.estimate}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <button className="rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950">
                Add to CRM
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black">
                Draft outreach
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black">
                Mark not suitable
              </button>
            </div>
          </DemoCard>
        ))}
      </section>
    </CompleteOptionsShell>
  );
}

