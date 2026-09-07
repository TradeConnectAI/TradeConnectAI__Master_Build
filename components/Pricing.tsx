// TODO(stripe): Wire real Stripe Checkout when STRIPE_* keys and checkout routes exist.
export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#030b18] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-300">
            PRICING
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Simple pricing for UK plumbers
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Sole-trader and 2-van teams. Plain £29 / £49 — no free founding beta.
            Stripe checkout is not live yet.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              STARTER
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-6xl font-black">£29</span>
              <span className="mb-2 text-white/60">/month</span>
            </div>

            <p className="mt-6 text-white/70">
              Sole-trader plumber. Enquiry → job card → quote or customer text.
            </p>

            <div className="mt-8 space-y-4 text-white/80">
              <div>✓ Missed enquiry capture</div>
              <div>✓ Job cards</div>
              <div>✓ Quote drafts</div>
              <div>✓ Customer texts</div>
            </div>

            <a
              href="/book-demo"
              className="mt-10 flex w-full justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/15"
            >
              Get started
            </a>
          </div>

          <div className="relative rounded-[32px] border border-blue-500/40 bg-blue-500/10 p-8 backdrop-blur-xl shadow-2xl shadow-blue-500/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em]">
              2-VAN
            </div>

            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">
              GROWTH
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-6xl font-black">£49</span>
              <span className="mb-2 text-white/60">/month</span>
            </div>

            <p className="mt-6 text-white/80">
              Small 2-van plumbing team. Same core flow, more room to organise work.
            </p>

            <div className="mt-8 space-y-4 text-white/90">
              <div>✓ Everything in Starter</div>
              <div>✓ Multi-job overview</div>
              <div>✓ Customer updates</div>
              <div>✓ Operations demo access</div>
            </div>

            <a
              href="/book-demo"
              className="mt-10 flex w-full justify-center rounded-2xl bg-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
