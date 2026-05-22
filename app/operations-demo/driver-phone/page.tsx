import Link from "next/link";

export default function Page(){
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/install-skips-demo" className="font-bold text-orange-400">
        ← Back to Dashboard
      </Link>

      <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h1 className="text-4xl font-black">Driver Phone</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Mobile job sheet view for the driver with delivery, pickup and customer notes.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Live", "Assigned", "Completed"].map((item, index) => (
            <div key={item} className="rounded-2xl bg-black p-5">
              <p className="text-slate-400">{item}</p>
              <p className="mt-2 text-3xl font-black">{12 + index}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {[
            "8 Yard Skip - Barry - Dean Horgan",
            "Grab Hire - Penarth - Vehicle GH02",
            "Collection - Cardiff - Due 14:30",
            "Aggregates - Dinas Powys - Paid"
          ].map((job) => (
            <div key={job} className="rounded-2xl border border-white/10 bg-black p-4">
              {job}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
