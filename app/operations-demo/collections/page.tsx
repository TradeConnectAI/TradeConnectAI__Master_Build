import Link from "next/link";

const collections = [
  ["8 Yard Skip", "Barry", "Due 11:30", "Dean Horgan"],
  ["6 Yard Skip", "Cardiff", "Overdue", "Mark Lewis"],
  ["Hardcore Skip", "Penarth", "Due 14:00", "Ryan Cole"],
];

export default function Page(){
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/install-skips-demo" className="font-bold text-orange-400">← Back to Dashboard</Link>
      <h1 className="mt-6 text-4xl font-black">Collections</h1>
      <p className="mt-2 text-slate-400">Skips due for pickup, overdue jobs and driver assignment.</p>

      <div className="mt-6 space-y-4">
        {collections.map(([skip, area, time, driver]) => (
          <div key={skip + area} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-5">
            <b>{skip}</b>
            <span>{area}</span>
            <span className={time === "Overdue" ? "text-red-400" : "text-orange-300"}>{time}</span>
            <span>{driver}</span>
            <button className="rounded-2xl bg-orange-500 px-4 py-2 font-bold">Reassign</button>
          </div>
        ))}
      </div>
    </main>
  );
}
