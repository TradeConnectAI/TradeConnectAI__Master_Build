import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">Payment Demo</p>
          <h1 className="mt-2 text-4xl font-black">Payment Link Ready</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Demo payment step showing how the AI can take payment or send a secure payment link.
          </p>
        </div>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
          <div className="grid gap-3">
            {[
              ["Customer", "A. Jenkins"],
              ["Service", "8 Yard General Waste Skip"],
              ["Delivery", "Tomorrow morning"],
              ["Total", "£285.00"],
              ["Payment Status", "Demo payment authorised"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between rounded-2xl bg-black/25 p-4 text-sm">
                <span className="text-slate-400">{label}</span>
                <span className="font-black">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/install-skips-demo/operations" className="rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-black text-black">
              Send Job to Operations
            </Link>
            <Link href="/install-skips-demo/customer-ticket" className="rounded-2xl border border-white/15 px-5 py-4 text-sm font-black text-white">
              Customer Contents Form
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
