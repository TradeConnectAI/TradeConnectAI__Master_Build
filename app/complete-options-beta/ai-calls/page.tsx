import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";
import { aiCalls } from "@/lib/completeOptionsData";

export default function AiCallsPage() {
  return (
    <CompleteOptionsShell
      title="AI call helper"
      subtitle="The part customers understand instantly: missed calls answered, useful details captured, and jobs created while the business is busy."
    >
      <section className="grid gap-4">
        {aiCalls.map((call) => (
          <DemoCard key={call.caller}>
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <StatusPill>{call.outcome}</StatusPill>
                <h3 className="mt-4 text-2xl font-black">{call.caller}</h3>
                <p className="mt-1 text-sm text-slate-400">{call.time}</p>
              </div>
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-black text-emerald-100">
                Job created automatically
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {call.transcript.map((line, index) => (
                <div key={line} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/10 text-xs font-black">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{line}</p>
                </div>
              ))}
            </div>
          </DemoCard>
        ))}
      </section>
    </CompleteOptionsShell>
  );
}
