import Link from "next/link";

const invoice = {
  number: "INV-2026-1048",
  date: "22 May 2026",
  customer: "John Davies",
  address: "12 Harbour Road, Barry, CF62",
  service: "Priority site clearance job",
  accessCheck: "Council access check included",
  delivery: "Today 10:30",
  collection: "Friday 14:00",
  subtotal: 245,
  vat: 49,
  total: 294,
  payment: "Card ending 4482",
  driver: "Dean Horgan",
  vehicle: "Skip team SK08",
};

export default function InvoiceReceiptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-300">
              TradeConnectAI Operations Demo
            </p>
            <h1 className="text-4xl font-bold tracking-tight">
              Invoice & Skip Receipt Generator
            </h1>
            <p className="mt-2 max-w-3xl text-slate-300">
              AI creates invoices, skip receipts, payment confirmations, access check notes,
              and driver-ready job records automatically.
            </p>
          </div>

          <Link
            href="/operations-demo"
            className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-semibold hover:bg-white/15"
          >
            Back to Operations
          </Link>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          {[
            ["Invoices today", "18"],
            ["Paid online", "£4,820"],
            ["Receipts sent", "16"],
            ["Awaiting payment", "2"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-bold">{value}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Invoice Preview</h2>

            <div className="mt-6 rounded-3xl bg-white p-6 text-slate-950 shadow-2xl">
              <div className="flex flex-wrap justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <h3 className="text-3xl font-black">INVOICE</h3>
                  <p className="text-slate-500">{invoice.number}</p>
                  <p className="text-slate-500">{invoice.date}</p>
                </div>

                <div className="text-right">
                  <p className="font-black">TradeConnectAI Ltd</p>
                  <p className="text-slate-600">Barry, South Wales</p>
                  <p className="text-slate-600">jobs, trade services & materials</p>
                </div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase text-slate-500">Bill to</p>
                  <p className="mt-1 font-bold">{invoice.customer}</p>
                  <p>{invoice.address}</p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase text-slate-500">Booking</p>
                  <p>Delivery: {invoice.delivery}</p>
                  <p>Collection: {invoice.collection}</p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-[1fr_120px] bg-slate-100 p-4 font-bold">
                  <span>Description</span>
                  <span className="text-right">Amount</span>
                </div>

                <div className="grid grid-cols-[1fr_120px] p-4">
                  <div>
                    <p className="font-bold">{invoice.service}</p>
                    <p className="text-sm text-slate-600">{invoice.accessCheck}</p>
                    <p className="text-sm text-slate-600">
                      Includes delivery, collection and waste transfer record.
                    </p>
                  </div>
                  <p className="text-right font-bold">£{invoice.subtotal}</p>
                </div>
              </div>

              <div className="mt-6 ml-auto max-w-sm space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{invoice.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT</span>
                  <span>£{invoice.vat}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-3 text-2xl font-black">
                  <span>Total</span>
                  <span>£{invoice.total}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <p className="text-sm font-semibold text-emerald-300">
                Payment confirmed
              </p>
              <h2 className="mt-1 text-2xl font-bold">Skip Receipt Generated</h2>

              <div className="mt-5 space-y-3 text-slate-200">
                <p><b>Customer:</b> {invoice.customer}</p>
                <p><b>Service:</b> {invoice.service}</p>
                <p><b>Total paid:</b> £{invoice.total}</p>
                <p><b>Payment:</b> {invoice.payment}</p>
                <p><b>Status:</b> Receipt sent to customer</p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-slate-400">
                  AI customer message
                </p>
                <p className="mt-2 text-slate-100">
                  Hi John, your job booking is confirmed. Your invoice and receipt have
                  been sent. Delivery is booked for today at 10:30. We’ll message again
                  when the driver is on route.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">Actions</h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                {[
                  "Send invoice",
                  "Send receipt",
                  "Download PDF",
                  "Mark paid",
                  "Text customer",
                  "Send to driver",
                ].map((action) => (
                  <button
                    key={action}
                    className="rounded-2xl bg-white/10 px-4 py-3 font-semibold hover:bg-white/15"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-6">
              <h2 className="text-xl font-bold">Driver Job Record</h2>
              <div className="mt-4 space-y-2 text-slate-200">
                <p><b>Driver:</b> {invoice.driver}</p>
                <p><b>Vehicle:</b> {invoice.vehicle}</p>
                <p><b>Tacho:</b> 3h 25m driven today</p>
                <p><b>Break due:</b> 13:20</p>
                <p><b>Job sent:</b> Driver phone app</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
