import Link from "next/link";

const followUps = [
  ["Leaking tap repair", "Barry", "Due 11:30", "Dean Horgan"],
  ["Kitchen socket issue", "Cardiff", "Overdue", "Mark Lewis"],
  ["Urgent boiler visit", "Penarth", "Due 14:00", "Ryan Cole"],
  ["Bathroom quote follow-up", "Newport", "Tomorrow", "Sarah Jones"],
];

export default function FollowUpsPage() {
  return (
    <main className="min-h-screen bg-[#020817] p-6 text-white">
      <Link href="/operations-demo" className="text-sm font-black text-cyan-300">
        ← Back to operations
      </Link>

      <h1 className="mt-6 text-4xl font-black">Job Follow-ups</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        Track open work, customer updates, return visits, parts needed and completed tasks.
      </p>

      <div className="mt-8 grid gap-4">
        {followUps.map(([job, area, status, owner]) => (
          <div
            key={`${job}-${area}`}
            className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-4"
          >
            <b>{job}</b>
            <span>{area}</span>
            <span className="text-cyan-300">{status}</span>
            <span>{owner}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
