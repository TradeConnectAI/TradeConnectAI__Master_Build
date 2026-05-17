import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Beta coming soon
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Platform Access
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            TradeConnectAI will have a real operations login for trade
            businesses, plus secure customer links for their customers.
            For now, explore the beta demo experiences.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <Link
            href="/operations-demo"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-400/40"
          >
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Public Beta
            </p>
            <h2 className="mt-3 text-3xl font-black">Business Demo</h2>
            <p className="mt-3 text-slate-300">
              See what trade businesses will use to manage leads, quotes,
              jobs, payments, AI workflows, and customers.
            </p>
          </Link>

          <Link
            href="/customer-demo"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-400/40"
          >
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Public Beta
            </p>
            <h2 className="mt-3 text-3xl font-black">Customer Portal Demo</h2>
            <p className="mt-3 text-slate-300">
              See what their customers receive through a simple professional
              portal link.
            </p>
          </Link>

          <Link
            href="/operations"
            className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 hover:bg-cyan-400/20"
          >
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Real Build
            </p>
            <h2 className="mt-3 text-3xl font-black">Operations Platform</h2>
            <p className="mt-3 text-slate-300">
              Placeholder for the real logged-in SaaS platform.
            </p>
          </Link>

          <Link
            href="/customer/job/demo-token"
            className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 hover:bg-cyan-400/20"
          >
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Real Build
            </p>
            <h2 className="mt-3 text-3xl font-black">Secure Customer Link</h2>
            <p className="mt-3 text-slate-300">
              Placeholder for real customer job, quote, invoice, and message
              links.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}

