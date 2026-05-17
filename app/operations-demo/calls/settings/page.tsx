export default function CallSettingsPage() {
  const settings = [
    "Service area postcodes",
    "Minimum job value",
    "Call-out fee",
    "Emergency keywords",
    "Working hours",
    "Auto-booking on/off",
    "Human handoff rules",
    "Tyre kicker strictness",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <p className="text-cyan-300 font-semibold">AI Reception</p>
          <h1 className="text-4xl font-bold">Call Answering Settings</h1>
          <p className="text-slate-300 mt-2">
            Control how strict the AI is before it books a job or filters the caller.
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-4">
          {settings.map((setting) => (
            <div key={setting} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="font-bold">{setting}</p>
              <div className="mt-4 h-10 rounded-xl bg-slate-950 border border-slate-800 px-3 flex items-center text-slate-400">
                Demo control
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-bold">Tyre Kicker Filter</h2>
          <p className="text-slate-300 mt-2">
            Current mode: Strict. The AI blocks vague pricing calls, outside-area jobs, free-advice seekers, and callers who refuse basic details.
          </p>
        </section>
      </div>
    </main>
  );
}

