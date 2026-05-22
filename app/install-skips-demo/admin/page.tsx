import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">Admin</p>
          <h1 className="mt-2 text-4xl font-black">Dean Horgan Control Panel</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Demo admin panel for settings, escalation, service types, driver availability and business rules.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["AI Escalation", "Send complex bookings to real person"],
            ["Service Types", "Skips, grab hire, waste removal, aggregates"],
            ["Driver Rules", "Availability, TACO reminders and break checks"],
            ["Paperwork Rules", "Contents forms, contamination flags and digital tickets"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>

        <Link href="/install-skips-demo/operations" className="mt-6 inline-flex rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-black text-black">
          Open Operations
        </Link>
      </section>
    </main>
  );
}

