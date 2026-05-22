import { calls } from "@/data/mock/calls";

export default function LiveCallsPage() {
  const active = calls[2];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <p className="text-cyan-300 font-semibold">AI Reception</p>
          <h1 className="text-4xl font-bold">Live Call View</h1>
          <p className="text-slate-300 mt-2">Watch the AI qualify a caller and decide whether to book, reject, or escalate.</p>
        </div>

        <section className="rounded-2xl border border-cyan-700 bg-slate-900 p-6">
          <div className="flex justify-between gap-4 flex-wrap">
            <div>
              <p className="text-slate-400">Current caller</p>
              <h2 className="text-2xl font-bold">{active.caller}</h2>
              <p className="text-slate-300">{active.phone}</p>
            </div>
            <div className="rounded-xl bg-emerald-400 text-slate-950 px-4 py-2 font-black">
              Intent {active.intentScore}%
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Card title="Issue" value={active.issue} />
            <Card title="Postcode" value={active.postcode} />
            <Card title="Urgency" value={active.urgency} />
            <Card title="AI Decision" value={active.outcome} />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-4">Transcript Preview</h2>
          <div className="space-y-4 text-slate-200">
            <p><strong>AI:</strong> Hi, you’re through to the booking assistant. What do you need help with today?</p>
            <p><strong>Customer:</strong> My boiler is not firing and I’ve got no heating.</p>
            <p><strong>AI:</strong> I can help. Is there any smell of gas or visible leak?</p>
            <p><strong>Customer:</strong> No smell of gas, just no heating.</p>
            <p><strong>AI:</strong> Thanks. This sounds urgent. I’ll alert the engineer and offer the next emergency slot.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="font-bold mt-1">{value}</p>
    </div>
  );
}

