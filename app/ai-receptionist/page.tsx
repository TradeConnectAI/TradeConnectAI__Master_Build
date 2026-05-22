import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RealImageCard from "@/components/RealImageCard";
import { tradeImages } from "@/components/tradeImages";

const features = [
  {
    title: "Missed call capture",
    text: "Helps capture who called, what they need and how urgent it sounds.",
    image: tradeImages.phone,
  },
  {
    title: "Useful job notes",
    text: "Turns messy call details into something you can actually follow up.",
    image: tradeImages.tools,
  },
  {
    title: "Trade-specific calls",
    text: "Built around plumbers, electricians, cleaners, maintenance and small service businesses.",
    image: tradeImages.workshop,
  },
];

export default function AiReceptionistPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-800">
        <img
          src={tradeImages.electrician}
          alt="Electrician working"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/72" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
            AI Call Helper
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            For the calls you miss while you�re doing the job.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            When you�re on the tools, driving or dealing with a customer, TradeConnectAI helps capture enquiries so they don�t vanish into voicemail.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/ai-call-demo" className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">
              Try call demo
            </Link>

            <Link href="/pricing" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white">
              Beta pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="max-w-4xl text-4xl font-black md:text-5xl">
          Not a robot receptionist. A practical call helper.
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          Small businesses don�t need tech theatre. They need the basics handled when they�re too busy to answer.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-1 md:grid-cols-3">
          {features.map((feature) => (
            <RealImageCard
              key={feature.title}
              title={feature.title}
              text={feature.text}
              image={feature.image}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}


