import Link from "next/link";

export default function ToolPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/operations-demo" className="hover:text-cyan-300">
            Business Demo
          </Link>

          <span>/</span>

          <span className="text-cyan-300">
            AI Tool
          </span>
        </div>

        <section className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            AI Tool Demo
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            AI Operations Assistant
          </h1>

          <p className="mt-4 text-slate-300">
            Demo AI workflow tool for trade businesses.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <textarea
            className="min-h-48 w-full rounded-2xl border border-white/10 bg-slate-950 p-4 text-white outline-none focus:border-cyan-400"
            placeholder="Enter job details..."
          />

          <button className="mt-5 rounded-2xl bg-cyan-400 px-6 py-3 font-black text-slate-950 hover:bg-cyan-300">
            Generate Demo Output
          </button>
        </section>

      </div>
    </main>
  );
}

