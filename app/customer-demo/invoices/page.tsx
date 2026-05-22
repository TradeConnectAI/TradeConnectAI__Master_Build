import DemoSidebar from "@/components/DemoSidebar";

const invoices = [
  {
    id: "INV-2210",
    title: "Emergency callout",
    amount: "£95",
    status: "Paid",
    date: "Paid today",
    note: "Emergency attendance and first inspection.",
  },
  {
    id: "INV-2211",
    title: "Boiler parts and labour",
    amount: "£268",
    status: "Due",
    date: "Due in 7 days",
    note: "Replacement valve and labour after quote approval.",
  },
];

export default function InvoicesPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 text-white md:flex">
      <DemoSidebar />

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Customer Invoices
        </p>

        <h1 className="mt-2 text-4xl font-black md:text-5xl">
          Clear invoices without the chasing.
        </h1>

        <p className="mt-3 max-w-3xl leading-8 text-slate-400">
          Customers can see what is paid, what is due, and what each invoice relates to.
        </p>

        <div className="mt-8 space-y-5">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-500">{invoice.id}</div>
                  <h2 className="mt-1 text-2xl font-black">{invoice.title}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">{invoice.note}</p>
                  <div className="mt-3 text-sm text-slate-500">{invoice.date}</div>
                </div>

                <div className="text-left md:text-right">
                  <div className="text-3xl font-black text-cyan-300">{invoice.amount}</div>
                  <div className="mt-1 text-sm text-slate-400">{invoice.status}</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950">
                  View invoice
                </button>
                <button className="rounded-full border border-slate-700 px-5 py-3 font-bold text-white">
                  Download PDF
                </button>
                {invoice.status === "Due" && (
                  <button className="rounded-full border border-slate-700 px-5 py-3 font-bold text-white">
                    Pay now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

