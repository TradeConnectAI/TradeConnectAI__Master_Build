import Link from "next/link";
import BarryLogo from "@/components/BarryLogo";
import { barryBeta } from "@/lib/barry-window-cleaners-data";

const nav = [
  { label: "Dashboard", href: "/barry-window-cleaners-beta/dashboard" },
  { label: "AI Phone", href: "/barry-window-cleaners-beta/ai-phone" },
  { label: "Quote", href: "/barry-window-cleaners-beta/quote" },
  { label: "Bookings", href: "/barry-window-cleaners-beta/bookings" },
  { label: "Payments", href: "/barry-window-cleaners-beta/payments" },
];

export default function BarryWindowCleanersBetaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.16),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <BarryLogo size="md" />

            <nav className="flex flex-wrap gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <div className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                Live beta concept for {barryBeta.businessName}
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
                AI phone answering, booking, quoting and payments for window cleaners.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A working beta built around Barry Window Cleaners. It captures missed calls, asks the right gutter and window cleaning questions, creates quote requests, books jobs and sends payment links.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/barry-window-cleaners-beta/ai-phone"
                  className="rounded-2xl bg-cyan-300 px-6 py-4 font-black text-slate-950 hover:bg-cyan-200"
                >
                  Try AI phone demo
                </Link>
                <Link
                  href="/barry-window-cleaners-beta/dashboard"
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-black text-white hover:bg-white/15"
                >
                  Open business dashboard
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl">
              <div className="rounded-[1.5rem] bg-slate-900 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Incoming call</p>
                    <h2 className="text-2xl font-black">{barryBeta.phone}</h2>
                  </div>
                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-slate-950">
                    AI ANSWERED
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {barryBeta.transcript.slice(0, 5).map((item, index) => (
                    <div
                      key={`${item.speaker}-${index}`}
                      className={`rounded-2xl p-4 ${
                        item.speaker === "AI Assistant"
                          ? "bg-cyan-300 text-slate-950"
                          : "bg-white/10 text-slate-100"
                      }`}
                    >
                      <p className="text-xs font-black uppercase opacity-70">{item.speaker}</p>
                      <p className="mt-1 text-sm font-semibold">{item.line}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4">
                  <p className="text-sm font-black text-emerald-200">Lead created</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Gutter clearing quote request, CF62, full property, this week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="grid gap-4 pb-10 md:grid-cols-4">
            {barryBeta.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-3xl font-black text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {barryBeta.services.map((service) => (
            <div key={service.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-black">{service.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{service.description}</p>
              <p className="mt-4 rounded-full bg-white/10 px-3 py-2 text-sm font-black text-cyan-200">
                Demo estimate: {service.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <h2 className="text-3xl font-black">What this beta proves</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "It catches enquiries while the cleaner is up a ladder.",
              "It asks the right questions before a human gets involved.",
              "It turns calls into quotes, bookings and payment links.",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-900 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


