import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RealImageCard from "@/components/RealImageCard";
import { tradeImages } from "@/components/tradeImages";

const tools = [
  {
    title: "Today’s jobs",
    text: "See what’s booked, what’s urgent and what needs following up.",
    image: tradeImages.tools,
  },
  {
    title: "Missed calls",
    text: "Keep track of enquiries that came in while you were working.",
    image: tradeImages.phone,
  },
  {
    title: "Customer updates",
    text: "Reduce chasing with simple updates about ETAs, quotes and job progress.",
    image: tradeImages.engineer,
  },
];

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-800">
        <img
          src={tradeImages.tools}
          alt="Trade tools"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
            Job Toolbox
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Keep jobs, calls and admin from slipping through the cracks.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A simple place for the bits that usually end up scattered across calls, texts, notes and WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/operations-demo" className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">
              Try business demo
            </Link>

            <Link href="/quote-creator" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white">
              Quote creator
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="max-w-4xl text-4xl font-black md:text-5xl">
          Practical tools for a messy working day.
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          Small businesses don’t need a giant system. They need a useful toolbox that helps them stay on top of the day.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <RealImageCard
              key={tool.title}
              title={tool.title}
              text={tool.text}
              image={tool.image}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
