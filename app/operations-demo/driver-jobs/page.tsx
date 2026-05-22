import Link from "next/link";

const jobs = [
  ["10:30", "Deliver", "8 Yard Skip", "Barry", "Dean Horgan"],
  ["12:15", "Collect", "6 Yard Skip", "Cardiff", "Mark Lewis"],
  ["14:00", "Deliver", "Hardcore Skip", "Penarth", "Ryan Cole"],
];

export default function Page(){
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/install-skips-demo" className="font-bold text-orange-400">← Back to Dashboard</Link>
      <h1 className="mt-6 text-4xl font-black">Driver Jobs</h1>

      <div className="mt-6 space-y-4">
        {jobs.map(([time, type, skip, area, driver]) => (
          <div key={time + area} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-5">
            <b>{time}</b>
            <span className="text-orange-300">{type}</span>
            <span>{skip}</span>
            <span>{area}</span>
            <span>{driver}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
