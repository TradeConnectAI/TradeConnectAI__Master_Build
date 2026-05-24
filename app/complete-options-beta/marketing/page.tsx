import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";
import { marketingTasks } from "@/lib/completeOptionsData";

export default function MarketingPage() {
  return (
    <CompleteOptionsShell
      title="Marketing assistant"
      subtitle="Simple AI campaigns for quote chasing, review requests, cold leads and local posts."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {marketingTasks.map((task) => (
          <DemoCard key={task.title}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black">{task.title}</h3>
                <p className="mt-2 text-slate-400">{task.channel} · {task.target}</p>
              </div>
              <StatusPill>{task.status}</StatusPill>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-bold text-slate-300">
                Suggested message
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Hi, it’s Complete Options. Just checking if you had any questions about your quote. We can help with timing, options or next steps.
              </p>
            </div>

            <button className="mt-4 w-full rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950">
              Launch demo campaign
            </button>
          </DemoCard>
        ))}
      </section>
    </CompleteOptionsShell>
  );
}
