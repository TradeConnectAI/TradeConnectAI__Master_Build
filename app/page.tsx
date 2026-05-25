import Link from "next/link";

const logoPath = "/brand/tradeconnect-logo-clean.png";
const heroImage = "/homepage/trade-engineer-tools.svg";
const cardImageOne = "/homepage/trade-van-worker.svg";
const cardImageTwo = "/homepage/trade-job-site.svg";

const stats = [
  ["Missed calls captured", "24/7"],
  ["Jobs organised", "Fast"],
  ["Customer updates", "Automatic"],
];

const features = [
  {
    title: "AI Call Helper",
    text: "Answers missed calls, captures job details and turns enquiries into organised work.",
    href: "/ai-call-demo",
  },
  {
    title: "Job Toolbox",
    text: "Manage jobs, customers, quotes, invoices and follow-ups from one practical dashboard.",
    href: "/operations-demo",
  },
  {
    title: "Customer Updates",
    text: "Keep customers informed with clear updates, ETAs, quote approvals and job progress.",
    href: "/customer-portal",
  },
];

const trades = [
  ["Plumbers", "Capture urgent leaks, boiler jobs and follow-ups while you are on the tools."],
  ["Electricians", "Log callouts, quote small works and keep customers updated on arrival times."],
  ["Builders", "Organise enquiries, site visits, quote requests and job notes without drowning in messages."],
  ["Landscapers", "Turn garden enquiries into booked visits, quotes and customer updates."],
  ["Cleaners", "Handle recurring work, new enquiries, quote requests and reminders."],
  ["Decorators", "Capture room details, access notes, photos and quote requests in one flow."],
];

const steps = [
  ["1", "Customer calls or messages", "TradeConnectAI catches the enquiry while you are busy."],
  ["2", "AI captures the job details", "Name, contact, address, issue, urgency and notes are organised."],
  ["3", "Job appears in your dashboard", "You can quote, assign, update or follow up from one place."],
  ["4", "Customer gets updates", "Professional messages keep people informed without extra admin."],
];

const activity = [
  ["09:42", "Missed call captured from Mrs Jenkins"],
  ["09:44", "Job card created: leaking tap"],
  ["09:46", "Quote draft generated"],
  ["09:48", "Customer update sent"],
  ["10:05", "Engineer assigned"],
];

const pricing = [
  ["Starter", "£49/mo", "Sole traders testing AI calls and customer updates."],
  ["Trade Pro", "£99/mo", "Small teams needing calls, quotes, jobs and customer updates."],
  ["Managed Setup", "£249 setup + £149/mo", "Done-for-you setup, scripts, workflows and onboarding."],
];

const trust = [
  "Built in the UK for small trade businesses",
  "No technical setup needed to understand the demo",
  "AI drafts, you stay in control",
  "Human handover when the job needs judgement",
];

export default function HomePage({
  searchParams,
}: {
  searchParams?: { beta?: string };
}) {
  const betaThanks = searchParams?.beta === "thanks";

  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      <section className="relative isolate min-h-screen">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-75"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.30),transparent_34%),linear-gradient(90deg,rgba(2,8,23,0.98),rgba(2,8,23,0.76),rgba(2,8,23,0.95))]" />

        <header className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={logoPath}
              alt="TradeConnectAI"
              className="h-11 w-auto rounded-2xl object-contain sm:h-14 md:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1 text-sm font-semibold text-slate-200 backdrop-blur md:flex">
            <a href="#how" className="rounded-full px-4 py-2 hover:bg-white/10">How it works</a>
            <a href="#trades" className="rounded-full px-4 py-2 hover:bg-white/10">Trades</a>
            <a href="#pricing" className="rounded-full px-4 py-2 hover:bg-white/10">Pricing</a>
            <a href="/book-demo" className="rounded-full px-4 py-2 hover:bg-white/10">Beta</a>
          </nav>

          <Link
            href="/book-demo"
            className="rounded-full bg-cyan-300 px-4 py-3 text-xs font-black text-slate-950 shadow-xl shadow-cyan-950/30 sm:px-5 sm:text-sm"
          >
            Book demo
          </Link>
        </header>

        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 pb-12 pt-6 sm:px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pb-24 md:pt-16">
          <section>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
              AI receptionist and operations assistant for trade businesses
            </p>

            <h1 className="mt-6 max-w-5xl text-[3.35rem] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl md:mt-7 md:text-8xl">
              Stop missed calls becoming missed work.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:mt-7 md:text-xl">
              TradeConnectAI helps small trade businesses answer enquiries,
              organise jobs, create quotes and keep customers updated while the
              team is out doing the work.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/book-demo"
                className="w-full rounded-full bg-white px-6 py-4 text-center text-sm font-black text-slate-950 shadow-2xl shadow-black/30 sm:w-auto"
              >
                Request beta access
              </Link>
              <Link
                href="/operations-demo"
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-sm font-black text-white backdrop-blur hover:bg-white/15 sm:w-auto"
              >
                Open operations demo
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-4 shadow-2xl shadow-cyan-950/20 md:hidden">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Demo snapshot
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              New enquiry captured
            </h2>
            <div className="mt-4 grid gap-2">
              {[
                "Customer details saved",
                "Job card created",
                "Quote draft ready",
                "Customer update prepared",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="relative hidden md:block">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                <img
                  src={cardImageOne}
                  alt="Trade team dashboard"
                  className="h-72 w-full object-cover opacity-100 md:h-96"
                />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                        Live job captured
                      </p>
                      <h2 className="mt-3 text-3xl font-black">
                        Emergency call logged
                      </h2>
                    </div>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-bold text-emerald-300">
                      New
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      "Customer details captured",
                      "Job card created",
                      "Quote ready to send",
                      "Customer update prepared",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur md:block">
              <img
                src={cardImageTwo}
                alt="Customer update dashboard"
                className="h-44 w-full rounded-2xl object-cover"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <h2 className="text-3xl font-black">{feature.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {feature.text}
              </p>
              <p className="mt-6 text-sm font-black text-cyan-300">
                Open demo
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            From missed call to organised job.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-xl font-black text-slate-950">
                {number}
              </div>
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="trades" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Built for trades
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Practical help for busy teams.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Start with one workflow, then build towards the full beta.
              The aim is simple: fewer missed enquiries, less admin and better
              customer communication.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trades.map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Demo preview
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">
              Today&apos;s live activity.
            </h2>

            <div className="mt-8 space-y-3">
              {activity.map(([time, text]) => (
                <div
                  key={`${time}-${text}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-black text-cyan-200">
                    {time}
                  </span>
                  <p className="text-sm text-slate-200">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Demo stats
            </p>
            <div className="mt-8 grid gap-4">
              {[
                ["Calls captured", "12"],
                ["Jobs created", "8"],
                ["Quotes sent", "5"],
                ["Customer updates", "17"],
                ["Estimated missed revenue saved", "£1,840"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-1 text-3xl font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
            Founding beta offer
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Free access for the first 15 companies.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricing.map(([plan, price, text]) => (
            <div
              key={plan}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7"
            >
              <h3 className="text-2xl font-black">{plan}</h3>
              <p className="mt-4 text-4xl font-black text-cyan-200">{price}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
              <a
                href="/book-demo"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950"
              >
                Request beta access
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
            Trust
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {trust.map((item) => (
              <div key={item} className="rounded-2xl bg-black/30 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beta" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Beta access
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Want to try it with your trade business?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Tell us what you do and what you need help with. The first 15 trade businesses that sign up and give honest feedback get beta access free.
            </p>

            {betaThanks ? (
              <div className="mt-6 rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-emerald-100">
                Thanks. Your beta request has been captured.
              </div>
            ) : null}
          </div>

          <form
            action="/api/beta-leads"
            method="post"
            className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"
          >
            <input name="name" required placeholder="Your name" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            <input name="business" required placeholder="Business name" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            <input name="trade" required placeholder="Trade, e.g. plumber, electrician, builder" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            <div className="grid gap-4 md:grid-cols-2">
              <input name="phone" placeholder="Phone" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
              <input name="email" type="email" required placeholder="Email" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            </div>
            <textarea name="help" rows={4} placeholder="What do you need help with most?" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            <button type="submit" className="rounded-full bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950">
              Request beta access
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
