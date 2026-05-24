import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";
import { quotes } from "@/lib/completeOptionsData";

export default function QuotesPage() {
  return (
    <CompleteOptionsShell
      title="Quote creator"
      subtitle="AI-assisted quote drafts, customer-ready follow-ups and a visible money pipeline."
    >
      <section className="grid gap-4">
        {quotes.map((quote) => (
          <DemoCard key={quote.ref}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <StatusPill>{quote.ref}</StatusPill>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">{quote.status}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black">{quote.title}</h3>
                <p className="mt-2 text-slate-400">{quote.customer} · Updated {quote.updated}</p>
              </div>

              <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-right">
                <p className="text-sm text-cyan-100">Quote amount</p>
                <p className="mt-1 text-4xl font-black">{quote.amount}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <button className="rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950">
                Preview quote
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black">
                Send follow-up
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black">
                Convert to job
              </button>
            </div>
          </DemoCard>
        ))}
      </section>
    </CompleteOptionsShell>
  );
}
