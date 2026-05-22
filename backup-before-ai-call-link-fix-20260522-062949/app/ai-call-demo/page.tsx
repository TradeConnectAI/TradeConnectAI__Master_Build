import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RealImageCard from "@/components/RealImageCard";
import { tradeImages } from "@/components/tradeImages";

const examples = [
  {
    title: "Plumber call",
    trade: "Plumbing",
    issue: "Boiler leaking under pressure",
    customer: "Sarah Collins",
    result: "Urgent job captured. Follow-up ready.",
    image: tradeImages.plumber,
  },
  {
    title: "Electrician call",
    trade: "Electrical",
    issue: "Fuse board tripping repeatedly",
    customer: "Mark Evans",
    result: "Safety issue flagged. Same-day callback suggested.",
    image: tradeImages.electrician,
  },
];

export default function AiCallDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-800">
        <img src={tradeImages.phone} alt="Phone call demo" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
            AI Call Demo
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Hear how a missed call becomes a useful job note.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A realistic preview of how TradeConnectAI could capture a call, understand the job and give you something useful to act on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {examples.map((example) => (
            <div key={example.title} className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900">
              <div className="relative h-64">
                <img src={example.image} alt={example.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </div>

              <div className="p-6">
                <div className="text-sm font-bold uppercase tracking-wider text-cyan-300">
                  {example.trade}
                </div>

                <h2 className="mt-3 text-3xl font-black">{example.title}</h2>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="font-bold">Fake call audio preview</div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
                      Demo
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950">
                      ▶ Play
                    </button>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-2/3 rounded-full bg-cyan-400" />
                    </div>

                    <div className="text-sm text-slate-400">00:42</div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    Audio file placeholder. We can wire this to generated audio or uploaded MP3 samples later.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <div className="text-xs text-slate-500">Customer</div>
                    <div className="mt-1 font-bold">{example.customer}</div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <div className="text-xs text-slate-500">Issue</div>
                    <div className="mt-1 font-bold">{example.issue}</div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <div className="text-xs text-cyan-300">AI result</div>
                  <div className="mt-1 font-bold">{example.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
