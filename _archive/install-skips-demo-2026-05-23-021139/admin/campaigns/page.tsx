export default function InstallSkipsPausedPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
          Install Skips beta paused
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Install Skips is parked for now
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          This branded beta is paused while we focus the build on Complete Options.
          Nothing has been deleted. The module can be brought back later if needed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/complete-options-beta/job-finder"
            className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 hover:bg-cyan-200"
          >
            Open Complete Options Job Finder
          </a>

          <a
            href="/complete-options-beta/marketing"
            className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15"
          >
            Open Complete Options Marketing
          </a>
        </div>
      </section>
    </main>
  );
}
