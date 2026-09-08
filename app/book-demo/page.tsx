import Link from "next/link";
import TradeConnectLogo from "@/components/TradeConnectLogo";

const needs = [
  "Missed calls",
  "Quotes",
  "Job organisation",
  "Customer updates",
  "Operations dashboard",
];

const trades = [
  "Plumber — sole trader",
  "Plumber — 2-van team",
];

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <header className="flex items-center justify-between gap-5">
          <TradeConnectLogo variant="nav" />

          <Link
            href="/operations-demo"
            className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white hover:bg-white/15"
          >
            View demo
          </Link>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <section>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
              For sole-trader and 2-van UK plumbers
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
              Get started from £29 / £49 a month.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us about your plumbing setup and what happens when you are out working.
              We&apos;ll shape the demo around missed calls, job cards, quotes and customer texts.
            </p>

            <div className="mt-6 rounded-[2rem] border border-cyan-300/30 bg-cyan-300/10 p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Plain paid offer
              </p>
              <h2 className="mt-3 text-3xl font-black">
                £29 Starter or £49 Growth — no free founding beta.
              </h2>
              <p className="mt-3 text-sm leading-6 text-cyan-100/85">
                Start with Stripe Checkout on the homepage pricing, or request a demo if you prefer to talk first.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Best for", "Sole-trader / 2-van UK plumbers"],
                ["Demo focus", "Enquiry → job → quote or text"],
                ["Setup", "Simple, practical, phone-usable"],
                ["Goal", "Capture more jobs while you are busy"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"
                >
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-2 text-xl font-black">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
              <h2 className="text-2xl font-black">What the demo can show</h2>
              <div className="mt-5 grid gap-3">
                {[
                  "Missed call captured by AI",
                  "Job card created automatically",
                  "Quote draft generated",
                  "Customer update sent",
                  "Worker assigned",
                  "Dashboard view for the business owner",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="form"
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-cyan-950/25 md:p-7"
          >
            <h2 className="text-3xl font-black">Request access</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Fill this in to send your details to TradeConnectAI. Prefer email? Contact{" "}
              <span className="font-bold text-white">Steve</span> at{" "}
              <a
                href="mailto:steven.neilson@tradeconnectai.co.uk"
                className="text-cyan-200 underline underline-offset-4 hover:text-cyan-100"
              >
                steven.neilson@tradeconnectai.co.uk
              </a>
              .
            </p>

            <form
              action="/api/beta-leads"
              method="post"
              className="mt-7 grid gap-4"
            >
              <input type="hidden" name="source" value="book-demo" />
              <input
                type="hidden"
                name="offer"
                value="Plumber plans: £29 / £49 per month (Stripe Checkout)"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-300">
                  Your name
                  <input
                    name="name"
                    required
                    placeholder="Steve"
                    className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/30 placeholder:text-slate-600 focus:ring-4"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-300">
                  Business name
                  <input
                    name="business"
                    required
                    placeholder="Example Plumbing Ltd"
                    className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/30 placeholder:text-slate-600 focus:ring-4"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Trade
                <select
                  name="trade"
                  required
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/30 focus:ring-4"
                >
                  <option value="">Choose your trade</option>
                  {trades.map((trade) => (
                    <option key={trade} value={trade}>
                      {trade}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-300">
                  Phone
                  <input
                    name="phone"
                    placeholder="Mobile number"
                    className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/30 placeholder:text-slate-600 focus:ring-4"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-300">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@business.co.uk"
                    className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/30 placeholder:text-slate-600 focus:ring-4"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Team size
                <select
                  name="teamSize"
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/30 focus:ring-4"
                >
                  <option value="">Choose team size</option>
                  <option value="Sole trader">Sole trader</option>
                  <option value="2-van team">2-van team</option>
                </select>
              </label>

              <fieldset className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <legend className="px-2 text-sm font-black text-cyan-200">
                  What do you need help with?
                </legend>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {needs.map((need) => (
                    <label
                      key={need}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
                    >
                      <input
                        type="checkbox"
                        name="needs"
                        value={need}
                        className="h-4 w-4 accent-cyan-300"
                      />
                      {need}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="grid gap-2 text-sm font-bold text-slate-300">
                What gets missed when you are out working?
                <textarea
                  name="help"
                  rows={5}
                  placeholder="Example: I miss calls while driving or on jobs, forget quote follow-ups after work, and customers chase for updates..."
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-cyan-300/30 placeholder:text-slate-600 focus:ring-4"
                />
              </label>

              <button
                type="submit"
                className="rounded-full bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/40"
              >
                Get started
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Enquiry form only — no payment taken here. Plans are £29 or £49/month. Prefer self-serve? Use Stripe Checkout on the homepage pricing.
              </p>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
