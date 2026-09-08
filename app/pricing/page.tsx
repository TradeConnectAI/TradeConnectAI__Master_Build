import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CheckoutButton from "@/components/CheckoutButton";

const planCards = [
  {
    title: "Starter",
    plan: "starter" as const,
    price: "£29",
    text: "The core enquiry → job card → quote or customer-update workflow.",
  },
  {
    title: "Growth",
    plan: "growth" as const,
    price: "£49",
    text: "Everything in Starter, plus TradeConnectAI captures and organises the incoming job details for you, reducing the admin you need to do yourself.",
  },
];

const included = [
  "Missed enquiry capture",
  "Job cards and notes",
  "Quote draft workflow",
  "Customer text updates",
  "Phone-usable operations demo",
  "Built for plumbers — not multi-trade",
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            AI POWERED. TRADE FOCUSED.
          </p>

          <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
            Plain £29 / £49 for UK plumbers.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            One customer type: sole-trader and 2-van UK plumbers. Start Starter or Growth
            with Stripe Checkout — or book a demo if you prefer to talk first.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {planCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7"
            >
              <h2 className="text-2xl font-black">{card.title}</h2>
              <p className="mt-4 text-4xl font-black text-cyan-200">
                {card.price}
                <span className="text-lg font-bold text-slate-400"> / month</span>
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {card.text}
              </p>
              <CheckoutButton
                plan={card.plan}
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 disabled:opacity-70"
              >
                Get started — {card.price}/mo
              </CheckoutButton>
            </article>
          ))}
        </div>

        <section className="mt-10 grid gap-6 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              What is included
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">
              The one launch flow that matters.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Enquiry in → job card → quote or customer text. AI Call Demo and Customer
              Portal routes stay available but are not launch requirements.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-bold text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/book-demo"
            className="rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950"
          >
            Get started
          </Link>
          <Link
            href="/operations-demo"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white"
          >
            View operations demo
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
