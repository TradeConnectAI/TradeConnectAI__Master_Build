import Link from "next/link";

const logoPath = "/brand/tradeconnect-logo-clean.png";
const heroImage = "";
const cardImageOne = "";
const cardImageTwo = "";

const features = [
  {
    title: "AI Call Helper",
    text: "Answers missed calls, captures the job details and keeps enquiries from disappearing into voicemail.",
    href: "/ai-call-demo",
  },
  {
    title: "Job Toolbox",
    text: "Keep jobs, customers, quotes, invoices and updates in one practical dashboard.",
    href: "/operations-demo",
  },
  {
    title: "Customer Updates",
    text: "Give customers clear updates without endless chasing calls and repeated messages.",
    href: "/customer-demo",
  },
];

const stats = [
  ["Missed calls captured", "24/7"],
  ["Jobs organised", "Fast"],
  ["Customer updates", "Automatic"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      <section className="relative isolate min-h-screen">
        {heroImage ? (
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-45"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        ) : null}

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.28),transparent_34%),linear-gradient(90deg,rgba(2,8,23,0.96),rgba(2,8,23,0.78),rgba(2,8,23,0.92))]" />

        <header className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            {logoPath ? (
              <img
                src={logoPath}
                alt="TradeConnectAI"
                className="h-14 w-auto rounded-2xl object-contain md:h-16"
              />
            ) : (
              <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-xl font-black text-cyan-200">
                TradeConnectAI
              </div>
            )}
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1 text-sm font-semibold text-slate-200 backdrop-blur md:flex">
            <Link href="/ai-receptionist" className="rounded-full px-4 py-2 hover:bg-white/10">
              AI Call Helper
            </Link>
            <Link href="/operations" className="rounded-full px-4 py-2 hover:bg-white/10">
              Job Toolbox
            </Link>
            <Link href="/quote-creator" className="rounded-full px-4 py-2 hover:bg-white/10">
              Quote Creator
            </Link>
            <Link href="/customer-portal" className="rounded-full px-4 py-2 hover:bg-white/10">
              Customer Updates
            </Link>
            <Link href="/pricing" className="rounded-full px-4 py-2 hover:bg-white/10">
              Pricing
            </Link>
          </nav>

          <Link
            href="/operations-demo"
            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30"
          >
            View demo
          </Link>
        </header>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24 md:pt-16">
          <section>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200 backdrop-blur">
              AI receptionist and operations assistant for trade businesses
            </p>

            <h1 className="mt-7 max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.06em] text-white md:text-8xl">
              Stop missed calls becoming missed work.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              TradeConnectAI helps small trade businesses answer enquiries,
              organise jobs, create quotes and keep customers updated while the
              team is out doing the work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/ai-call-demo"
                className="rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-2xl shadow-black/30"
              >
                Try AI call demo
              </Link>
              <Link
                href="/operations-demo"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur hover:bg-white/15"
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

          <section className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                {cardImageOne ? (
                  <img
                    src={cardImageOne}
                    alt="Trade team at work"
                    className="h-56 w-full object-cover opacity-90 md:h-72"
                  />
                ) : (
                  <div className="h-56 bg-cyan-300/10 md:h-72" />
                )}

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

            {cardImageTwo ? (
              <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur md:block">
                <img
                  src={cardImageTwo}
                  alt="Trade business work"
                  className="h-36 w-full rounded-2xl object-cover"
                />
              </div>
            ) : null}
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
    </main>
  );
}
