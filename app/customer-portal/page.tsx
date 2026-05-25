import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const features = [
  "Live ETA updates",
  "Job timeline",
  "Engineer messages",
  "Quote approvals",
  "Invoice history",
  "Less chasing",
];

export default function CustomerPortalPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-800">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop" alt="Customer phone update" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Customer Updates</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Customers donï¿½t mind delays. They mind silence.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Give customers clear updates on bookings, ETAs, quotes, invoices and job progress without endless chasing calls.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/customer-demo" className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950">Open customer demo</Link>
            <Link href="/pricing" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white">Beta pricing</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-1 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-black text-white">{feature}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">Automatic job updates that make your business feel organised before you even pick up the phone.</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}



