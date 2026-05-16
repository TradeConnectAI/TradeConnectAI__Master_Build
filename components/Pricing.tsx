const calendlyLink = "https://calendly.com/stevenneilsonvoda/30min";

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
            Simple Pricing For Trades
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Start capturing more leads and automating your bookings today.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              STARTER
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-6xl font-black">£49</span>
              <span className="mb-2 text-white/60">/month</span>
            </div>

            <p className="mt-6 text-white/70">
              Perfect for solo trades and small local businesses.
            </p>

            <div className="mt-8 space-y-4 text-white/80">
              <div>✓ AI Web Chat</div>
              <div>✓ Lead Qualification</div>
              <div>✓ SMS Notifications</div>
              <div>✓ Basic Booking</div>
            </div>

            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/15"
            >
              Get Started
            </a>
          </div>

          <div className="relative rounded-[32px] border border-blue-500/40 bg-blue-500/10 p-8 backdrop-blur-xl shadow-2xl shadow-blue-500/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em]">
              MOST POPULAR
            </div>

            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">
              PRO
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-6xl font-black">£149</span>
              <span className="mb-2 text-white/60">/month</span>
            </div>

            <p className="mt-6 text-white/80">
              Built for growing trades businesses that need automation.
            </p>

            <div className="mt-8 space-y-4 text-white/90">
              <div>✓ Everything In Starter</div>
              <div>✓ AI Call Handling</div>
              <div>✓ Smart Calendar Booking</div>
              <div>✓ Missed Call Recovery</div>
              <div>✓ CRM Dashboard</div>
            </div>

            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full justify-center rounded-2xl bg-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Book Demo
            </a>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              ENTERPRISE
            </p>

            <div className="mt-6">
              <span className="text-5xl font-black">Custom</span>
            </div>

            <p className="mt-6 text-white/70">
              For larger companies needing custom AI workflows and integrations.
            </p>

            <div className="mt-8 space-y-4 text-white/80">
              <div>✓ Multi Staff Support</div>
              <div>✓ Multi Location Setup</div>
              <div>✓ Custom Integrations</div>
              <div>✓ Priority Support</div>
              <div>✓ Dedicated Onboarding</div>
            </div>

            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/15"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}