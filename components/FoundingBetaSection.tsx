
export default function FoundingBetaSection() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-10">
        <p className="text-sm font-bold text-cyan-300">Pricing for UK plumbers</p>

        <h2 className="mt-3 max-w-4xl text-4xl font-black md:text-5xl">
          £29 or £49 a month — plain offer, no free founding-beta framing.
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          TradeConnectAI is for sole traders and small 2-van plumbing teams who miss
          calls while on the tools, then need a job card, quote or customer text
          without desk admin.
        </p>

        <p className="mt-4 max-w-3xl text-slate-300">
          Start with Stripe Checkout on the homepage pricing, or request a demo if you prefer to talk first.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <h3 className="text-xl font-black text-cyan-300">Starter · £29/mo</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Sole-trader plumber. Enquiry in → job card → quote or customer text.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <h3 className="text-xl font-black text-cyan-300">Growth · £49/mo</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Small 2-van plumbing team. Same core flow with a bit more room to organise work.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/book-demo" className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">
            Get started
          </a>
          <a href="/pricing" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
