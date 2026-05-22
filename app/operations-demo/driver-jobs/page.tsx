import Link from "next/link";

export default function Page(){
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/install-skips-demo" className="text-orange-400 font-bold">
        ← Back to Install Dashboard
      </Link>

      <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h1 className="text-4xl font-black">Driver Jobs</h1>
        <p className="mt-2 text-slate-400">
          Demo module for Install Integrated Skips.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Live", "Assigned", "Complete"].map((item) => (
            <div key={item} className="rounded-2xl bg-black p-5">
              <p className="text-slate-400">{item}</p>
              <p className="mt-2 text-3xl font-black">12</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
