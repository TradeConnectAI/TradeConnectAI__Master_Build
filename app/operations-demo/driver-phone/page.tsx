import Link from "next/link";

export default function Page(){
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/install-jobs-demo" className="font-bold text-orange-400">← Back to Dashboard</Link>
      <div className="mx-auto mt-6 max-w-sm rounded-[2rem] border border-white/10 bg-slate-950 p-5">
        <h1 className="text-center text-3xl font-black">Driver Phone</h1>
        <p className="text-center text-slate-400">Dean Horgan • SK08</p>
        <div className="mt-6 rounded-3xl bg-orange-500 p-5">
          <p className="text-sm font-bold">NEXT JOB</p>
          <h2 className="mt-1 text-2xl font-black">8 Yard Skip</h2>
          <p>12 Harbour Road, Barry</p>
          <p className="mt-2">Deliver by 10:30</p>
        </div>
        <div className="mt-4 grid gap-3">
          <button className="rounded-2xl bg-white/[0.08] p-4 font-bold">Accept Job</button>
          <button className="rounded-2xl bg-white/[0.08] p-4 font-bold">Navigate</button>
          <button className="rounded-2xl bg-white/[0.08] p-4 font-bold">Upload Photo</button>
          <button className="rounded-2xl bg-emerald-500 p-4 font-bold">Complete Job</button>
        </div>
      </div>
    </main>
  );
}
