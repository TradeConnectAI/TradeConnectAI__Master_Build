import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { tradeImages } from "@/components/tradeImages";

const quoteItems = [
  { item: "Emergency callout", qty: "1", price: "£95" },
  { item: "Replacement valve", qty: "1", price: "£148" },
  { item: "Labour", qty: "2 hrs", price: "£120" },
];

export default function QuoteCreatorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-800">
        <img
          src={tradeImages.tools}
          alt="Tools and quote work"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
            Quote Creator
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Turn job notes into a quote customers can approve.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Create a simple quote from the job details, email it to the customer, and let them approve it before work starts.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-3xl font-black">Example quote</h2>

          <div className="mt-6 space-y-3">
            {quoteItems.map((line) => (
              <div key={line.item} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div>
                  <div className="font-bold">{line.item}</div>
                  <div className="text-sm text-slate-500">{line.qty}</div>
                </div>
                <div className="font-black text-cyan-300">{line.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <div className="text-sm text-cyan-300">Total quote</div>
            <div className="mt-1 text-4xl font-black">£363</div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-3xl font-black">Email approval preview</h2>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <div className="text-sm text-slate-500">To: sarah@example.com</div>
            <div className="mt-2 font-bold">Quote for boiler leak repair</div>

            <p className="mt-5 leading-7 text-slate-300">
              Hi Sarah, here’s the quote for the boiler leak repair discussed today. Please review the details and approve if you’re happy for us to go ahead.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950">
                Approve quote
              </button>

              <button className="rounded-full border border-slate-700 px-5 py-3 font-bold text-white">
                Ask a question
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <h3 className="font-black">What happens next?</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>✓ Customer receives quote by email</li>
              <li>✓ Customer approves from their phone</li>
              <li>✓ Job status updates automatically</li>
              <li>✓ You know who needs chasing</li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
