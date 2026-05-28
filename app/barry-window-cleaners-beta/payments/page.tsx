import Link from "next/link";
import BarryLogo from "@/components/BarryLogo";

const payments = [
  {
    customer: "John Price",
    service: "Gutter Clearing",
    amount: "£85",
    deposit: "£25",
    status: "Payment link ready",
  },
  {
    customer: "Claire Morgan",
    service: "Fascia & Soffit Cleaning",
    amount: "£160",
    deposit: "£40",
    status: "Deposit pending",
  },
  {
    customer: "Gareth Lewis",
    service: "Full Exterior Bundle",
    amount: "£240",
    deposit: "£50",
    status: "Deposit paid",
  },
];

export default function BarryPaymentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-4">
          <BarryLogo size="sm" />
          <Link href="/barry-window-cleaners-beta" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/15">
            Beta home
          </Link>
        </div>
        <Link href="/barry-window-cleaners-beta" className="text-sm font-bold text-cyan-300">
          ← Back to beta home
        </Link>

        <header className="mt-5">
          <h1 className="text-4xl font-black md:text-6xl">Payments</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Deposit links, full quote payments and manual bank transfer/cash tracking.
          </p>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Today’s payments", "£75"],
            ["Pending deposits", "£65"],
            ["Accepted quotes", "£485"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-4xl font-black text-cyan-200">{value}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <h2 className="text-2xl font-black">Payment requests</h2>

          <div className="mt-5 space-y-4">
            {payments.map((payment) => (
              <div key={`${payment.customer}-${payment.service}`} className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900 p-5 md:grid-cols-[1fr_1fr_0.5fr_0.5fr_0.8fr] md:items-center">
                <div>
                  <p className="font-black">{payment.customer}</p>
                  <p className="text-sm text-slate-400">{payment.service}</p>
                </div>
                <p className="text-sm text-slate-300">Stripe payment link preview</p>
                <p className="font-black">{payment.amount}</p>
                <p className="font-black text-cyan-200">{payment.deposit}</p>
                <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-black">{payment.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <h2 className="text-2xl font-black">Send payment link</h2>
            <div className="mt-5 grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-300" placeholder="Customer phone" />
              <input className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-300" placeholder="Amount, e.g. £25" />
              <select className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-300">
                <option>Deposit</option>
                <option>Full quote</option>
                <option>Balance payment</option>
              </select>
              <button className="rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950">
                Generate payment link preview
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/10 p-6">
            <h2 className="text-2xl font-black text-emerald-100">Customer SMS preview</h2>
            <p className="mt-5 rounded-2xl bg-slate-950 p-5 text-slate-300">
              Hi John, your Barry Window Cleaners gutter clearing quote has been accepted. Please pay your £25 deposit here: [payment link]. We’ll confirm your slot once paid.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Real version: connect Stripe Payment Links or Stripe Checkout. Never let the AI take card details directly.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}


