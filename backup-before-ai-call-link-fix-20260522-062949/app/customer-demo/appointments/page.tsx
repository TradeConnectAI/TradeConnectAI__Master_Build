import Link from "next/link";

export default function CustomerDemoSubPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <Link href="/customer-demo" className="font-bold text-cyan-300">
          ← Back to Customer Demo
        </Link>

        <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Customer Portal Demo
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Appointments
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            This is what their customer sees from a secure portal link.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
            Demo Status
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Boiler Service
          </h2>

          <p className="mt-2 text-cyan-300">
            Tomorrow · 08:00 - 10:00
          </p>

          <p className="mt-6 max-w-2xl text-slate-300">
            Your trade professional is scheduled to arrive during this window.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-cyan-400 px-5 py-3 font-black text-slate-950">
              Confirm
            </button>

            <Link href="/customer-demo/messages" className="rounded-2xl border border-white/10 px-5 py-3 font-black hover:bg-white/10">
              Send Message
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

