export default function FounderNoteSection() {
  return (
    <section className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 lg:grid-cols-2">
        <div className="relative min-h-[340px]">
          <img
            src="https://images.unsplash.com/photo-1581092916357-5896ebc48073?q=80&w=1600&auto=format&fit=crop"
            alt="Engineer working with tools"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="flex items-center p-8 md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
              Built from the tools side
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              This isn’t being built from a boardroom.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              I know what it’s like when the day changes, jobs run over, customers chase, the phone keeps ringing and the admin still needs doing later.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              TradeConnectAI is being shaped with real sole traders and small businesses so it solves the problems that actually matter.
            </p>

            <a href="mailto:info@tradeconnectai.co.uk?subject=Founding Beta Access" className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">
              Join the early beta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
