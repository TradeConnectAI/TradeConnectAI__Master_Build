import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const betaCards = [
  {
    title: "Founding Beta",
    price: "Free",
    text: "For the first 15 suitable trade businesses that sign up and give honest feedback.",
  },
  {
    title: "What we ask",
    price: "Feedback",
    text: "Use the beta, test the workflows, and tell us what would actually help your business day to day.",
  },
  {
    title: "After beta",
    price: "Paid plans later",
    text: "Founding Beta will open after the founding beta once the product is shaped around real trade businesses.",
  },
];

const feedbackAreas = [
  "AI call handling",
  "Job cards and notes",
  "Quote workflow",
  "Customer updates",
  "Dashboard clarity",
  "What would make you pay for it later",
];

export default function FoundingBetaPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-100">
            Founding beta offer
          </p>

          <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
            Free for the first 15 trade businesses.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            TradeConnectAI is opening a founding beta. The first 15 suitable trade
            businesses get free beta access in exchange for honest feedback.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-emerald-300/30 bg-emerald-300/10 p-6 text-emerald-100">
          <p className="text-sm font-black uppercase tracking-[0.2em]">
            Limited founding beta
          </p>
          <p className="mt-2 text-xl font-black text-white">
            No payment during the founding beta.
          </p>
          <p className="mt-2 text-sm leading-6 text-emerald-100/85">
            In return, we ask for honest feedback on the AI call, job, quote and
            customer update workflows so the product is built around real trade businesses.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {betaCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7"
            >
              <h2 className="text-2xl font-black">{card.title}</h2>
              <p className="mt-4 text-4xl font-black text-cyan-200">
                {card.price}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-10 grid gap-6 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              What feedback means
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">
              Help shape something trades actually want.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The free founding beta is not a gimmick. It is an exchange: you get
              early access, and we get honest feedback so the product becomes useful
              before paid plans open.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {feedbackAreas.map((item) => (
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
            Claim free beta spot
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





