import Link from "next/link";

const jobs = [
  ["09:20", "Urgent", "Leaking tap repair", "Barry", "Dean Horgan"],
  ["10:10", "Quote", "Bathroom refurb estimate", "Cardiff", "Sarah Jones"],
  ["11:30", "Visit", "Kitchen socket fault", "Penarth", "Mark Lewis"],
  ["13:45", "Follow-up", "Boiler noise check", "Newport", "Ryan Cole"],
];

export default function TeamTasksPage() {
  return (
    <main className="min-h-screen bg-[#020817] p-6 text-white">
      <Link href="/operations-demo" className="text-sm font-black text-cyan-300">
        ← Back to operations
      </Link>

      <h1 className="mt-6 text-4xl font-black">Team Tasks</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        Send clear job tasks to workers with customer details, notes, routes and status updates.
      </p>

      <div className="mt-8 space-y-4">
        {jobs.map(([time, type, job, area, teamMember]) => (
          <div
            key={`${time}-${job}`}
            className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-5"
          >
            <b>{time}</b>
            <span className="text-orange-300">{type}</span>
            <span>{job}</span>
            <span>{area}</span>
            <span>{teamMember}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
