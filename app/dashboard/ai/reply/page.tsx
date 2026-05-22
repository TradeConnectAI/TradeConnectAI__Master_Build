import Link from "next/link";

export default function ToolPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <Link href="/dashboard/ai" className="text-cyan-300 font-bold">
          ? Back to AI Customer Replys
        </Link>

        <section className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Demo Tool
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            AI Customer Reply
          </h1>

          <p className="mt-4 text-slate-300">
            Enter job details below. Full AI generation will be connected soon.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <textarea
            className="min-h-48 w-full rounded-2xl border border-white/10 bg-slate-950 p-4 text-white outline-none focus:border-cyan-400"
            placeholder="Example: Replace faulty socket in kitchen, supply materials, test circuit, customer in Cardiff..."
          />

          <button className="mt-5 rounded-2xl bg-cyan-400 px-6 py-3 font-black text-slate-950 hover:bg-cyan-300">
            Generate Demo Output
          </button>
        </section>
      </div>
    </main>
  );
}



