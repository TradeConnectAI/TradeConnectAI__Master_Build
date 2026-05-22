import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

const services = [
  "General waste skip",
  "Hardcore skip",
  "Waste removal service",
  "Grab hire service",
  "Aggregates delivery",
  "Aggregates collection / return",
];

export default function BookSkipPage() {
  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">Customer Booking</p>
          <h1 className="mt-2 text-4xl font-black">Book a Skip or Grab Hire</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Demo booking flow. The AI checks service type, address, permit need, skip availability,
            driver availability and whether the customer needs a real person.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <label key={service} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold">
              <input type="checkbox" className="h-5 w-5 accent-emerald-400" defaultChecked={service === "General waste skip"} />
              {service}
            </label>
          ))}
        </div>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
          <h2 className="text-2xl font-black">Booking Details</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <input defaultValue="22 Redbrink Crescent, Barry, CF62" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none" />
            <input defaultValue="8 Yard Skip" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none" />
            <input defaultValue="Private driveway" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none" />
            <input defaultValue="Collection after 2pm" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none" />
          </div>

          <div className="mt-5 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-5">
            <p className="font-black text-emerald-200">AI Check Result</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Skip available. No permit required because it is on a private driveway.
              Driver slot found. Payment link ready.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/install-skips-demo/customer-ticket" className="rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-black text-black hover:bg-emerald-300">
              Continue to Contents Form
            </Link>
            <Link href="/install-skips-demo/payments" className="rounded-2xl border border-white/15 px-5 py-4 text-sm font-black text-white hover:bg-white/10">
              Take Payment
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}

