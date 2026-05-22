import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PlumbersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold text-cyan-300">For Plumbers</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black md:text-7xl">
          AI call handling and job control for plumbing businesses.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Capture emergency leaks, boiler issues, bathroom jobs and customer updates without losing the thread.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/operations-demo" className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">Try the demo</Link>
          <Link href="/ai-receptionist" className="rounded-full border border-white/15 px-6 py-3 font-bold text-white">AI Receptionist</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

