import Link from "next/link";
import BarryLogo from "@/components/BarryLogo";
import { barryBeta } from "@/lib/barry-window-cleaners-data";

export default function BarryQuotePage() {
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
          <h1 className="text-4xl font-black md:text-6xl">Quote Builder</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Create window, gutter and fascia cleaning quotes from AI phone calls or web enquiries.
          </p>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <form className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <h2 className="text-2xl font-black">Customer details</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                ["Customer name", "John Price"],
                ["Phone", "07700 900111"],
                ["Email", "john@example.com"],
                ["Address", "12 Example Street, Barry"],
                ["Postcode", "CF62"],
                ["Property type", "3-bed semi"],
              ].map(([label, placeholder]) => (
                <label key={label} className="block">
                  <span className="text-sm font-bold text-slate-300">{label}</span>
                  <input
                    placeholder={placeholder}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
                  />
                </label>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-300">Service</span>
                <select className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300">
                  {barryBeta.services.map((service) => (
                    <option key={service.name}>{service.name}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-300">Urgency</span>
                <select className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300">
                  <option>ASAP</option>
                  <option>This week</option>
                  <option>Flexible</option>
                  <option>Monthly regular clean</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-300">Access notes</span>
              <textarea
                rows={5}
                placeholder="Rear access available. No conservatory. Full-property gutter clear."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
              />
            </label>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                ["Quote amount", "£85"],
                ["Deposit", "£25"],
                ["Payment status", "Payment link ready"],
              ].map(([label, placeholder]) => (
                <label key={label} className="block">
                  <span className="text-sm font-bold text-slate-300">{label}</span>
                  <input
                    placeholder={placeholder}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
                  />
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950">
                Generate quote
              </button>
              <button type="button" className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-black">
                Send SMS preview
              </button>
              <Link href="/barry-window-cleaners-beta/payments" className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-5 py-4 font-black text-emerald-200">
                Create payment link
              </Link>
            </div>
          </form>

          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
              <h2 className="text-2xl font-black">Demo price bands</h2>
              <div className="mt-5 space-y-3">
                {barryBeta.services.map((service) => (
                  <div key={service.name} className="rounded-2xl bg-slate-900 p-4">
                    <p className="font-black">{service.name}</p>
                    <p className="text-sm text-cyan-200">{service.price}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Demo estimates only. Final prices should be confirmed by the business owner.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
              <h2 className="text-2xl font-black">Customer SMS</h2>
              <p className="mt-4 rounded-2xl bg-slate-900 p-4 text-sm text-slate-300">
                Hi John, thanks for contacting Barry Window Cleaners. Your gutter clearing quote estimate is £85. Reply YES to accept and we’ll send the booking/payment link.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}


