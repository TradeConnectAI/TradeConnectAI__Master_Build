const appointments = [
  ["Today", "10:30", "Skip delivery", "8 Yard General Waste", "Confirmed"],
  ["Today", "14:00", "Collection", "Hardcore skip", "Driver assigned"],
  ["Tomorrow", "09:15", "Grab hire", "Aggregates delivery", "Awaiting payment"],
];

export default function CustomerAppointmentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto w-full max-w-5xl px-4 py-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
            Customer Portal
          </p>
          <h1 className="mt-3 text-3xl font-black">Appointments</h1>
          <p className="mt-2 text-sm text-slate-400">
            Your upcoming deliveries, collections and site visits.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3">
          {appointments.map(([day, time, title, detail, status]) => (
            <article
              key={day + time + title}
              className="rounded-3xl border border-white/10 bg-slate-900 p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-300">
                    {day} � {time}
                  </p>
                  <h2 className="mt-1 text-xl font-black">{title}</h2>
                  <p className="mt-1 text-sm text-slate-400">{detail}</p>
                </div>
                <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">
                  {status}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="/customer-demo"
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-bold"
          >
            Back to portal
          </a>
          <a
            href="/book-skip"
            className="rounded-2xl bg-emerald-400 px-4 py-3 text-center text-sm font-black text-slate-950"
          >
            Book another job
          </a>
        </div>
      </section>
    </main>
  );
}
