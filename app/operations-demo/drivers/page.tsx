import Link from "next/link";

const drivers = [
  ["Dean Horgan", "SK08", "Driving", "3h 25m", "13:20"],
  ["Mark Lewis", "GH02", "Loading", "2h 05m", "12:45"],
  ["Ryan Cole", "SK11", "Returning", "4h 10m", "Break now"],
];

export default function Page(){
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/install-jobs-demo" className="font-bold text-orange-400">← Back to Dashboard</Link>
      <h1 className="mt-6 text-4xl font-black">Drivers</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {drivers.map(([name,vehicle,status,driven,breakDue]) => (
          <div key={name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-2xl font-black">{name}</h2>
            <p className="mt-2 text-orange-300">{vehicle}</p>
            <p className="mt-4">Status: <b>{status}</b></p>
            <p>Driven today: <b>{driven}</b></p>
            <p>Break: <b>{breakDue}</b></p>
          </div>
        ))}
      </div>
    </main>
  );
}
