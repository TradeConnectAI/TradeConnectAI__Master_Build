import DemoSidebar from "@/components/DemoSidebar";

const quotes = [
  {
    id: "Q-1042",
    title: "Boiler leak repair",
    amount: "£363",
    status: "Ready to approve",
    note: "Emergency callout, replacement valve and 2 hours labour.",
  },
  {
    id: "Q-1043",
    title: "Bathroom pipework",
    amount: "£285",
    status: "Sent",
    note: "Pipework adjustment, fittings and materials.",
  },
];

export default function QuotesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white md:flex">
      <DemoSidebar />

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Customer Quotes
        </p>

        <h1 className="mt-2 text-4xl font-black md:text-5xl">
          Quotes ready to review.
        </h1>

        <p className="mt-3 max-w-3xl leading-8 text-slate-400">
          Customers can approve a quote, ask a question, or see what is included from their phone.
        </p>

        <div className="mt-8 space-y-5">
          {quotes.map((quote) => (
            <div key={quote.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-500">{quote.id}</div>
                  <h2 className="mt-1 text-2xl font-black">{quote.title}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">{quote.note}</p>
                </div>

                <div className="text-left md:text-right">
                  <div className="text-3xl font-black text-cyan-300">{quote.amount}</div>
                  <div className="mt-1 text-sm text-slate-400">{quote.status}</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="text-sm font-bold text-white">Customer approval</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This is what a customer would receive after the quote is emailed to them.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950">
                    Approve quote
                  </button>
                  <button className="rounded-full border border-slate-700 px-5 py-3 font-bold text-white">
                    Ask a question
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}