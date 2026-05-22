import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

export default function PermitsPage() {
  return (
    <main className="min-h-screen install-skip-bg text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.075] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">Permit Checks</p>
          <h1 className="mt-2 text-4xl font-black">AI Permit Helper</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Demo permit workflow. If the skip is on the road, the AI flags permit needed and hands complex cases to the office.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Private driveway", "No permit needed", "Ready to book"],
            ["Public road", "Permit needed", "Office approval required"],
            ["Narrow lane", "Manual review", "Send to real person"],
          ].map(([place, result, note]) => (
            <div key={place} className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5">
              <h2 className="text-xl font-black">{place}</h2>
              <p className="mt-2 text-sm font-bold text-yellow-300">{result}</p>
              <p className="mt-2 text-sm text-slate-300">{note}</p>
            </div>
          ))}
        </div>

        <Link href="/install-skips-demo/book" className="mt-6 inline-flex rounded-2xl bg-yellow-300 px-5 py-4 text-sm font-black text-black">
          Back to Booking
        </Link>
      </section>
    </main>
  );
}


