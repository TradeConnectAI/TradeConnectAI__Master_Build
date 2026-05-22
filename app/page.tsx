import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RealImageCard from "@/components/RealImageCard";
import { tradeImages } from "@/components/tradeImages";

const cards = [
  {
    title: "Missed calls",
    text: "Capture the enquiry when you’re on the tools, driving or already with a customer.",
    image: tradeImages.phone,
  },
  {
    title: "Jobs remembered",
    text: "Keep job notes, follow-ups and reminders together before the day gets messy.",
    image: tradeImages.tools,
  },
  {
    title: "Customers updated",
    text: "Simple updates help customers feel looked after without constant chasing.",
    image: tradeImages.engineer,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-800">
        <img src={tradeImages.engineer} alt="Engineer working" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/72" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Built for sole traders and small trade businesses
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              Stop missed calls becoming missed work.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
              TradeConnectAI is a practical AI toolbox for calls, jobs, quotes and customer updates.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Built from an engineer’s perspective for real working days that rarely go to plan.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/operations-demo" className="rounded-full bg-cyan-400 px-7 py-4 text-lg font-bold text-slate-950">
                Try business demo
              </Link>

              <Link href="/ai-call-demo" className="rounded-full border border-white/20 px-7 py-4 text-lg font-bold text-white hover:bg-white/10">
                Try AI call demo
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="text-sm font-bold text-cyan-300">Latest enquiry</div>
              <p className="mt-3 text-2xl font-black leading-tight text-white">
                “Boiler leaking. Need someone today if possible.”
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Customer details captured. Urgency marked. Follow-up ready.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-3xl font-black text-cyan-300">43</div>
                <div className="mt-2 text-sm text-slate-300">Calls captured</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-3xl font-black text-cyan-300">17</div>
                <div className="mt-2 text-sm text-slate-300">Jobs organised today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Real trade problems
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
          Small businesses don’t need more tech noise. They need practical help.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <RealImageCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900/50 px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-950 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
            Early beta
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            I’m looking for 15-30 sole traders and small businesses to help shape this.
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            Early users get a lifetime founding-user benefit for helping build TradeConnectAI around real trade work, not boardroom guesses.
          </p>
          <a href="mailto:info@tradeconnectai.co.uk?subject=Founding Beta Access" className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">
            Ask about beta access
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
