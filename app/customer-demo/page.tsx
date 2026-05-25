const timeline = [
  ["08:12", "Booking confirmed", "Your appointment was booked and confirmed."],
  ["08:46", "Worker assigned", "Tom Hughes has been assigned to your job."],
  ["09:20", "On the way", "Estimated arrival between 09:45 and 10:10."],
  ["09:32", "Job notes updated", "Likely replacement valve added to the notes."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
          Customer Demo
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
          A simple customer update page.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Customers can see what is happening without constantly calling or
          messaging for updates.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Current job
            </p>

            <h2 className="mt-4 text-3xl font-black">Boiler leak repair</h2>

            <p className="mt-4 text-slate-300">
              Tom Hughes is on the way. Current ETA is 09:45 to 10:10.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
              <p className="text-sm text-emerald-200">Job progress</p>
              <p className="mt-1 text-2xl font-black text-white">On the way</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-slate-400">Assigned worker</p>
              <h3 className="mt-2 text-xl font-black">Tom Hughes</h3>
              <p className="text-sm text-slate-400">Heating engineer</p>
              <p className="mt-4 rounded-2xl bg-white/[0.06] p-4 text-sm leading-6 text-slate-200">
                "I am on my way now. I will check the leak first and confirm
                parts before any work starts."
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-3xl font-black">Timeline</h2>

            <div className="mt-6 space-y-4">
              {timeline.map(([time, title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-black/30 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {text}
                      </p>
                    </div>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-200">
                      {time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}