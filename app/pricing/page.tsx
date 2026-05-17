import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FoundingBetaSection from "@/components/FoundingBetaSection";

const plans = [
  {
    name: "Solo",
    price: "£29",
    future: "Expected future price: £39-£49/mo",
    description: "For sole traders who want fewer missed calls and less admin.",
    features: ["Missed call capture", "Job notes", "Customer updates", "Quote and invoice overview"],
  },
  {
    name: "Small Team",
    price: "£79",
    future: "Expected future price: £99-£149/mo",
    description: "For 2-5 person teams who need to keep jobs and customers organised.",
    features: ["Everything in Solo", "Team job view", "Engineer workload", "Follow-up reminders"],
  },
  {
    name: "Growing Business",
    price: "£149",
    future: "Expected future price: £179-£249/mo",
    description: "For 5-15 person businesses that need a clearer job view.",
    features: ["Everything in Small Team", "Job Toolbox", "AI recommendations", "Advanced reporting"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold text-cyan-300">Beta pricing</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black md:text-6xl">
          Start small. Help shape it. Keep your Day 1 benefit.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          The first 15-30 sole traders and small businesses will get early beta access and a lifetime founding-user benefit for helping build TradeConnectAI properly.
        </p>

        <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
          <h2 className="text-2xl font-black text-cyan-300">No inflated software nonsense.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            The pricing is designed to start approachable for small trade businesses, then grow as the platform becomes more useful and more powerful.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-2xl font-black">{plan.name}</h2>

              <div className="mt-4 text-5xl font-black text-cyan-300">
                {plan.price}
                <span className="text-base text-slate-400">/mo beta</span>
              </div>

              <p className="mt-2 text-sm text-cyan-200">{plan.future}</p>
              <p className="mt-4 min-h-20 text-sm leading-6 text-slate-300">{plan.description}</p>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="text-sm text-slate-300">✓ {feature}</div>
                ))}
              </div>

              <a href="mailto:info@tradeconnectai.co.uk?subject=Founding Beta Access" className="mt-8 block rounded-full bg-cyan-400 px-5 py-3 text-center font-bold text-slate-950">
                Ask about beta access
              </a>
            </div>
          ))}
        </div>
      </section>

      <FoundingBetaSection />
      <SiteFooter />
    </main>
  );
}

