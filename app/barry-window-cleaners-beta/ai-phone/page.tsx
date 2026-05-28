import Link from "next/link";
import BarryLogo from "@/components/BarryLogo";
import { barryBeta } from "@/lib/barry-window-cleaners-data";

export default function BarryAIPhonePage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-4">
          <BarryLogo size="sm" />
          <Link href="/barry-window-cleaners-beta" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/15">
            Beta home
          </Link>
        </div>
        <Link href="/barry-window-cleaners-beta" className="text-sm font-bold text-cyan-300">
          ← Back to beta home
        </Link>

        <header className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                AI phone answering demo
              </p>
              <h1 className="mt-3 text-4xl font-black md:text-6xl">Missed call turned into a quote request</h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                This shows what happens when a customer calls while the cleaner is busy. The AI asks the right questions and creates a clean job summary.
              </p>
            </div>
            <div className="rounded-3xl bg-emerald-300 p-5 text-slate-950">
              <p className="text-sm font-black">CALL STATUS</p>
              <p className="text-3xl font-black">Answered</p>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <h2 className="text-2xl font-black">Call summary</h2>

            <div className="mt-5 space-y-3 text-sm">
              {[
                ["Customer", "John Price"],
                ["Phone", "07700 900111"],
                ["Service", "Gutter Clearing"],
                ["Area", "Barry, CF62"],
                ["Property", "3-bed semi"],
                ["Access", "Rear access available, no conservatory"],
                ["Urgency", "This week"],
                ["Next step", "Send quote and booking slot"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-900 p-4">
                  <p className="text-xs font-black uppercase text-slate-500">{label}</p>
                  <p className="mt-1 font-bold text-slate-100">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              <Link href="/barry-window-cleaners-beta/quote" className="rounded-2xl bg-cyan-300 px-5 py-4 text-center font-black text-slate-950">
                Create quote from call
              </Link>
              <Link href="/barry-window-cleaners-beta/bookings" className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-center font-black">
                Book appointment
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <h2 className="text-2xl font-black">Live transcript</h2>
            <div className="mt-5 space-y-4">
              {barryBeta.transcript.map((item, index) => (
                <div
                  key={`${item.speaker}-${index}`}
                  className={`max-w-[92%] rounded-3xl p-4 ${
                    item.speaker === "AI Assistant"
                      ? "ml-auto bg-cyan-300 text-slate-950"
                      : "bg-white/10 text-slate-100"
                  }`}
                >
                  <p className="text-xs font-black uppercase opacity-70">{item.speaker}</p>
                  <p className="mt-1 font-semibold">{item.line}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <h2 className="text-2xl font-black">AI handover note to the business</h2>
          <p className="mt-3 rounded-2xl bg-slate-900 p-5 text-slate-300">
            John Price in CF62 wants full-property gutter clearing this week. Three-bed semi. Rear access is available and there is no conservatory. Customer should be sent a quote estimate and earliest available booking slot. Good chance to upsell fascia cleaning after gutter job is confirmed.
          </p>
        </section>
      </div>
    </main>
  );
}


