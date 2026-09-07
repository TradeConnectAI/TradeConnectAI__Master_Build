import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PlumbersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold text-cyan-300">For sole-trader and 2-van UK plumbers</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black md:text-7xl">
          Enquiry in → job card → quote or customer text.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Capture emergency leaks, boiler issues and follow-ups without losing the thread —
          built for plumbers on the tools, from £29 / £49 a month.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/operations-demo" className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">
            Open operations demo
          </Link>
          <Link href="/pricing" className="rounded-full border border-white/15 px-6 py-3 font-bold text-white">
            Pricing
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
