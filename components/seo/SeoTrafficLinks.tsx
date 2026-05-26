import Link from "next/link";

export default function SeoTrafficLinks() {
  const links = [
    {
      title: "AI Receptionist",
      href: "/ai-receptionist-for-trades",
      text: "Capture missed calls, qualify enquiries and book jobs while you are busy on-site.",
    },
    {
      title: "Missed Call Software",
      href: "/missed-call-software",
      text: "Turn missed calls into organised enquiries, customer replies and job records.",
    },
    {
      title: "Quote Generator",
      href: "/quote-generator-for-trades",
      text: "Create clearer quote drafts from job details, labour and materials.",
    },
    {
      title: "Customer Updates",
      href: "/customer-updates-for-trades",
      text: "Keep customers informed automatically before, during and after the job.",
    },
    {
      title: "Trade Business AI",
      href: "/trade-business-ai",
      text: "Practical AI tools built around real trade workflows, not corporate fluff.",
    },
    {
      title: "Job Management",
      href: "/trade-job-management",
      text: "Organise bookings, customer records, job notes, quotes and updates in one place.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">
            Explore TradeConnectAI
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            AI tools for busy trade businesses
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Find the right workflow for missed calls, quotes, customer updates and job management.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-black">{item.title}</h3>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200 transition group-hover:bg-blue-500 group-hover:text-white">
                  Open
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {item.text}
              </p>

              <p className="mt-5 text-sm font-bold text-blue-300">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
