import Link from "next/link";

const teamMembers = [
  ["Dean Horgan", "Van 08", "On job", "3h 25m", "13:20"],
  ["Mark Lewis", "Van 02", "Travelling", "2h 05m", "12:45"],
  ["Ryan Cole", "Van 11", "Returning", "4h 10m", "Break now"],
  ["Sarah Jones", "Van 04", "Available", "1h 40m", "Ready"],
];

export default function TeamMembersPage() {
  return (
    <main className="min-h-screen bg-[#020817] p-6 text-white">
      <Link href="/operations-demo" className="text-sm font-black text-cyan-300">
        ← Back to operations
      </Link>

      <h1 className="mt-6 text-4xl font-black">Team Members</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        View team status, job progress, route notes and availability.
      </p>

      <div className="mt-8 grid gap-4">
        {teamMembers.map(([name, vehicle, status, time, next]) => (
          <div
            key={name}
            className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-5"
          >
            <b>{name}</b>
            <span>{vehicle}</span>
            <span className="text-cyan-300">{status}</span>
            <span>{time}</span>
            <span>{next}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
