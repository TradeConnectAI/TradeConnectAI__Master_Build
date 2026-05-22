import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HvacPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold text-cyan-300">For HVAC Teams</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black md:text-7xl">
          Smarter scheduling for heating, ventilation and maintenance teams.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Track urgent jobs, planned maintenance, engineers and customer updates with AI-assisted operations.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/operations-demo" className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">Try the demo</Link>
          <Link href="/customer-portal" className="rounded-full border border-white/15 px-6 py-3 font-bold text-white">Customer Portal</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

