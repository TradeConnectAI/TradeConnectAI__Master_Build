import DemoSidebar from "@/components/DemoSidebar";

const stats = [
  { label: "Jobs Today", value: "17" },
  { label: "People Out Working", value: "6/8" },
  { label: "Calls Captured", value: "43" },
  { label: "Quotes Followed Up", value: "£12,480" },
];

const jobs = [
  { customer: "Sarah Collins", job: "Boiler leak", status: "On the way", time: "09:20" },
  { customer: "Mark Evans", job: "Fuse board fault", status: "Quote waiting", time: "10:45" },
  { customer: "Amira Patel", job: "Bathroom pipework", status: "In progress", time: "12:10" },
  { customer: "James Walker", job: "Emergency callout", status: "Needs attention", time: "13:30" },
];

export default function OperationsDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white md:flex">
      <DemoSidebar />

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Business Demo
        </p>

        <h1 className="mt-2 text-4xl font-black md:text-5xl">
          A practical view of the working day.
        </h1>

        <p className="mt-3 max-w-3xl leading-8 text-slate-400">
          See jobs, missed calls, customer updates, quotes and reminders without digging through messages everywhere.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="text-3xl font-black text-cyan-300">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-xl font-black">Today’s jobs</h2>

          <div className="mt-5 space-y-3">
            {jobs.map((job) => (
              <div key={`${job.customer}-${job.time}`} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-bold">{job.customer}</div>
                    <div className="text-sm text-slate-400">{job.job}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-cyan-300">{job.status}</div>
                    <div className="text-xs text-slate-500">{job.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
