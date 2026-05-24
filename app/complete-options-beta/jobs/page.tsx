import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";
import { jobs } from "@/lib/completeOptionsData";

export default function JobsPage() {
  return (
    <CompleteOptionsShell
      title="Jobs board"
      subtitle="Every enquiry becomes a trackable job card with source, value, status, notes and next action."
    >
      <section className="grid gap-4">
        {jobs.map((job) => (
          <DemoCard key={job.id}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusPill>{job.id}</StatusPill>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">{job.priority}</span>
                  <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200">{job.status}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black">{job.title}</h3>
                <p className="mt-2 text-slate-300">{job.customer} · {job.address}</p>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{job.notes}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-4 lg:min-w-64">
                <p className="text-sm text-slate-400">Estimated value</p>
                <p className="mt-1 text-3xl font-black text-cyan-200">{job.value}</p>
                <p className="mt-3 text-sm text-slate-300">{job.date}</p>
                <p className="mt-1 text-xs font-bold text-slate-500">Source: {job.source}</p>
              </div>
            </div>
          </DemoCard>
        ))}
      </section>
    </CompleteOptionsShell>
  );
}
