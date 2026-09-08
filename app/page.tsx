import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import TradeConnectLogo from "@/components/TradeConnectLogo";

const heroImage = "/homepage/trade-engineer-tools.svg";
const cardImageOne = "/homepage/trade-van-worker.svg";
const cardImageTwo = "/homepage/trade-job-site.svg";

const stats = [
  ["Missed calls", "Captured"],
  ["Job cards", "Organised"],
  ["Customer texts", "Ready to send"],
];

const features = [
  {
    title: "Enquiry in",
    text: "A customer calls or messages while you are on a job. The details are caught so the lead does not disappear.",
  },
  {
    title: "Job card",
    text: "Name, address, issue and urgency land as a clear job card you can open on your phone.",
  },
  {
    title: "Quote or customer text",
    text: "Draft a quote or send a short update from the same flow — built for a sole-trader or 2-van plumber day.",
  },
];

const plumberFocus = [
  ["Sole trader / 2-van", "Built for UK plumbers running one or two vans — not a multi-trade platform."],
  ["Leaks and boilers", "Capture urgent callouts, boiler jobs and follow-ups while you are on the tools."],
  ["Phone-usable", "Check the job card, send a quote draft or customer text without sitting at a desk."],
];

const steps = [
  ["1", "Customer calls or messages", "TradeConnectAI catches the enquiry while you are busy."],
  ["2", "Job card is created", "Name, contact, address, issue, urgency and notes are organised."],
  ["3", "Quote or customer text", "Send a quote draft or a clear update from your phone."],
  ["4", "You stay in control", "AI drafts; you check and send. No fake live phone AI claims."],
];

const activity = [
  ["09:42", "Missed call captured — leaking tap"],
  ["09:44", "Job card created"],
  ["09:46", "Quote draft ready to check"],
  ["09:48", "Customer text prepared"],
];

const plans = [
  [
    "Starter",
    "starter",
    "£29",
    "The core enquiry → job card → quote or customer-update workflow.",
  ],
  [
    "Growth",
    "growth",
    "£49",
    "Everything in Starter, plus TradeConnectAI captures and organises the incoming job details for you, reducing the admin you need to do yourself.",
  ],
] as const;

const trust = [
  "Built in the UK for sole-trader and 2-van plumbers",
  "One clear launch flow — not a multi-trade suite",
  "AI drafts, you stay in control",
  "Demo shows the workflow; live phone-AI is not claimed here",
];

export default function HomePage({
  searchParams,
}: {
  searchParams?: { beta?: string; checkout?: string };
}) {
  const leadThanks = searchParams?.beta === "thanks";
  const checkoutSuccess = searchParams?.checkout === "success";
  const checkoutCancelled = searchParams?.checkout === "cancelled";

  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      {checkoutSuccess ? (
        <div className="border-b border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-center text-sm font-bold text-emerald-100 md:px-8">
          Checkout complete — thanks. We will confirm your plumber plan shortly.
        </div>
      ) : null}
      {checkoutCancelled ? (
        <div className="border-b border-amber-300/30 bg-amber-300/10 px-5 py-3 text-center text-sm font-bold text-amber-100 md:px-8">
          Checkout cancelled. You can try again below or{" "}
          <Link href="/book-demo" className="underline">
            book a demo
          </Link>
          .
        </div>
      ) : null}
      <section className="relative isolate min-h-screen">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-75"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.30),transparent_34%),linear-gradient(90deg,rgba(2,8,23,0.98),rgba(2,8,23,0.76),rgba(2,8,23,0.95))]" />

        <header className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 md:px-8">
          <TradeConnectLogo variant="nav" />

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1 text-sm font-semibold text-slate-200 backdrop-blur md:flex">
            <a href="#how" className="rounded-full px-4 py-2 hover:bg-white/10">How it works</a>
            <a href="#pricing" className="rounded-full px-4 py-2 hover:bg-white/10">Pricing</a>
          </nav>

          <Link
            href="/book-demo"
            className="rounded-full bg-cyan-300 px-4 py-3 text-xs font-black text-slate-950 shadow-xl shadow-cyan-950/30 sm:px-5 sm:text-sm"
          >
            Get started
          </Link>
        </header>

        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 pb-12 pt-6 sm:px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pb-24 md:pt-16">
          <section>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
              For sole-trader and 2-van UK plumbers
            </p>

            <h1 className="mt-6 max-w-5xl text-[3.35rem] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl md:mt-7 md:text-8xl">
              Stop missed calls becoming missed jobs.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:mt-7 md:text-xl">
              TradeConnectAI helps UK plumbers catch enquiries, turn them into
              job cards, and send a quote or customer text — while you are still
              on the tools.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="#how"
                className="w-full rounded-full bg-white px-6 py-4 text-center text-sm font-black text-slate-950 shadow-2xl shadow-black/30 sm:w-auto"
              >
                See how it works
              </Link>
              <Link
                href="/book-demo"
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-sm font-black text-white backdrop-blur hover:bg-white/15 sm:w-auto"
              >
                Get started — from £29/mo
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
              Launch flow
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Enquiry → job card → quote or text
            </h2>
            <div className="mt-4 grid gap-2">
              {[
                "Customer details saved",
                "Job card created",
                "Quote draft ready",
                "Customer text prepared",
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
                  alt="Plumber job dashboard"
                  className="h-72 w-full object-cover opacity-100 md:h-96"
                />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                        Job captured
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
                      "Customer text prepared",
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
                alt="Customer update on phone"
                className="h-44 w-full rounded-2xl object-cover"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl shadow-slate-950/20"
            >
              <h2 className="text-3xl font-black">{feature.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="#how"
            className="inline-flex rounded-full bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950"
          >
            See how it works
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Built for when you are out working
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              You are on the tools. The office still needs to move.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Most plumbers do not lose work because they are bad at the job.
              They lose it because the phone rings while they are driving,
              under a sink, finishing a boiler job or talking to a customer.
            </p>

            <div className="mt-6 rounded-[2rem] border border-cyan-300/30 bg-cyan-300/10 p-6 text-cyan-100">
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                Simple pricing
              </p>
              <p className="mt-2 text-lg font-black text-white">
                £29 or £49 per month — no free founding-beta framing.
              </p>
              <p className="mt-2 text-sm leading-6 text-cyan-100/85">
                Self-serve Stripe checkout for Starter (£29) and Growth (£49). If keys are
                missing, you can still book a demo.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                time: "08:14",
                title: "Phone rings while driving to first job",
                text: "Enquiry details are captured: customer name, address, issue and urgency.",
              },
              {
                time: "09:37",
                title: "Customer asks for an update while you are working",
                text: "A short customer text is prepared so they know what is happening.",
              },
              {
                time: "11:22",
                title: "Quote request comes in during a job",
                text: "Details are organised into a quote draft for you to check later.",
              },
              {
                time: "14:05",
                title: "Missed call becomes a job card",
                text: "Instead of a voicemail disappearing, the lead lands ready to follow up.",
              },
            ].map((item) => (
              <div
                key={item.time}
                className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-black text-cyan-200">
                    {item.time}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      <section id="plumbers" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              One customer type
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Sole-trader and 2-van UK plumbers.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Launch focus is plumbing only. Multi-trade messaging for builders,
              landscapers, cleaners and decorators is parked — not the public pitch.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {plumberFocus.map(([title, text]) => (
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
              Example day (illustrative)
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">
              What the flow looks like.
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
              What you get
            </p>
            <div className="mt-8 grid gap-4">
              {[
                ["Core flow", "Enquiry → job → quote/text"],
                ["Built for", "UK plumbers"],
                ["Demo", "Operations demo"],
                ["Pricing", "£29 / £49"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-1 text-2xl font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Plain £29 / £49 for plumbers.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Start Starter or Growth with Stripe Checkout — £29 or £49 a month.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {plans.map(([plan, planKey, price, text]) => (
            <div
              key={plan}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7"
            >
              <h3 className="text-2xl font-black">{plan}</h3>
              <p className="mt-4 text-4xl font-black text-cyan-200">
                {price}
                <span className="text-lg font-bold text-slate-400"> / month</span>
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CheckoutButton
                  plan={planKey}
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 disabled:opacity-70"
                >
                  Get started — {price}/mo
                </CheckoutButton>
                <Link
                  href="/book-demo"
                  className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white"
                >
                  Book demo
                </Link>
              </div>
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

      <section id="get-started" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Get started
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Running a plumbing van and drowning in missed calls?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Tell us about your setup. Plans are £29 or £49 per month for
              sole-trader and 2-van UK plumbers.
            </p>

            <div className="mt-6 text-sm leading-6 text-slate-300">
              <p className="font-bold text-white">Steve · TradeConnectAI</p>
              <a
                href="mailto:steven.neilson@tradeconnectai.co.uk"
                className="text-cyan-200 underline underline-offset-4 hover:text-cyan-100"
              >
                steven.neilson@tradeconnectai.co.uk
              </a>
            </div>

            {leadThanks ? (
              <div className="mt-6 rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-emerald-100">
                Thanks. Your request has been captured.
              </div>
            ) : null}
          </div>

          <form
            action="/api/beta-leads"
            method="post"
            className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"
          >
            <input type="hidden" name="offer" value="Plumber plans: £29 / £49 per month (Stripe Checkout)" />
            <input name="name" required placeholder="Your name" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            <input name="business" required placeholder="Business name" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            <input name="trade" required defaultValue="Plumber" placeholder="Trade (plumber)" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            <div className="grid gap-4 md:grid-cols-2">
              <input name="phone" placeholder="Phone" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
              <input name="email" type="email" required placeholder="Email" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            </div>
            <textarea name="help" rows={4} placeholder="What do you need help with most?" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-500" />
            <button type="submit" className="rounded-full bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950">
              Get started
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
