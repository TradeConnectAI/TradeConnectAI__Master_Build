import Link from "next/link";

const invoice = {
  customer: "Mrs Jenkins",
  job: "Leaking tap repair",
  address: "Barry",
  jobCheck: "Access and parts checked",
  visit: "Today 10:30",
  followUp: "Friday 14:00",
  subtotal: 245,
  vat: 49,
  total: 294,
};

const lines = [
  ["Call captured", "AI captured the enquiry and contact details."],
  ["Job card created", "Urgency, address and notes were organised."],
  ["Quote prepared", "Draft price prepared for customer approval."],
  ["Invoice ready", "Receipt and payment record ready to send."],
];

export default function InvoiceReceiptsPage() {
  return (
    <main className="min-h-screen bg-[#020817] p-6 text-white">
      <Link href="/operations-demo" className="text-sm font-black text-cyan-300">
        ← Back to operations
      </Link>

      <h1 className="mt-6 text-4xl font-black">Invoices & Receipts</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        Generate invoices, receipts, payment records and customer confirmations.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm text-slate-400">Customer</p>
          <h2 className="mt-2 text-3xl font-black">{invoice.customer}</h2>

          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            <p><b>Job:</b> {invoice.job}</p>
            <p><b>Address:</b> {invoice.address}</p>
            <p><b>Job check:</b> {invoice.jobCheck}</p>
            <p><b>Visit:</b> {invoice.visit}</p>
            <p><b>Follow up:</b> {invoice.followUp}</p>
            <p><b>Job notes:</b> Route and timing checked</p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-3xl font-black">Payment summary</h2>

          <div className="mt-6 grid gap-3">
            <div className="flex justify-between rounded-2xl bg-black/30 p-4">
              <span>Subtotal</span>
              <b>£{invoice.subtotal}</b>
            </div>
            <div className="flex justify-between rounded-2xl bg-black/30 p-4">
              <span>VAT</span>
              <b>£{invoice.vat}</b>
            </div>
            <div className="flex justify-between rounded-2xl bg-white p-4 text-slate-950">
              <span>Total</span>
              <b>£{invoice.total}</b>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        {lines.map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
          >
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
