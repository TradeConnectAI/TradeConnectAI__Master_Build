
export default function FoundingBetaSection() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-10">
        <p className="text-sm font-bold text-cyan-300">Early Beta Access</p>

        <h2 className="mt-3 max-w-4xl text-4xl font-black md:text-5xl">
          Iâ€™m looking for 15-30 sole traders and small businesses to help shape this.
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          TradeConnectAI is being built for people doing real jobs every day: missed calls, late updates, quotes to send, customers chasing, and admin waiting when you get home.
        </p>

        <p className="mt-4 max-w-3xl text-slate-300">
          Iâ€™m an engineer myself, so this isnâ€™t being guessed from a boardroom. I want feedback from the people who actually live this kind of work.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <h3 className="text-xl font-black text-cyan-300">Day 1 benefit</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Early beta users will get a lifetime founding-user benefit as thanks for helping build it properly from the start.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <h3 className="text-xl font-black text-cyan-300">Built from feedback</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The aim is to build what actually helps: calls, bookings, reminders, quotes, invoices and customer updates.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <h3 className="text-xl font-black text-cyan-300">No big setup headache</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The goal is simple: help you stay organised without needing office staff, spreadsheets everywhere or another complicated system.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="mailto:info@tradeconnectai.co.uk?subject=Founding Beta Access" className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">
            Ask about beta access
          </a>
          <a href="/Founding Beta" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white">
            See Founding Beta
          </a>
        </div>
      </div>
    </section>
  );
}


