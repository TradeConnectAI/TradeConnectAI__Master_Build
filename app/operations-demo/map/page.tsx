import Link from "next/link";

export default function Page(){
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/install-jobs-demo" className="font-bold text-orange-400">← Back to Dashboard</Link>
      <h1 className="mt-6 text-4xl font-black">Live Map</h1>
      <p className="mt-2 text-slate-400">Demo live job map for teams, jobs, deliveries and follow ups.</p>
      <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <div className="relative h-[520px] overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_30%_30%,#14532d,transparent_25%),radial-gradient(circle_at_70%_60%,#1d4ed8,transparent_20%),linear-gradient(135deg,#111827,#020617)]">
          {[
            ["SK08", "top-[20%] left-[30%]"],
            ["GH02", "top-[55%] left-[60%]"],
            ["Job 18", "top-[40%] left-[45%]"],
            ["Pickup", "top-[70%] left-[25%]"],
            ["job detail", "top-[28%] left-[72%]"]
          ].map(([name,pos]) => (
            <div key={name} className={`absolute ${pos} rounded-full bg-orange-500 px-4 py-2 font-black shadow-xl`}>
              {name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

