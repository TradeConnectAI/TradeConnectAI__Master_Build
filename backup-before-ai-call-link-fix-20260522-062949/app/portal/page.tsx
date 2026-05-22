import Link from "next/link";

export default function CustomerPortalPage() {
  const cards = [
    {
      title: "Upcoming Appointment",
      value: "Boiler Service",
      text: "Tomorrow · 08:00 - 10:00",
      href: "/portal/appointments",
    },
    {
      title: "Quote Waiting",
      value: "£420",
      text: "Heating repair quote ready to review",
      href: "/portal/quotes",
    },
    {
      title: "Messages",
      value: "3 New",
      text: "Updates from your trade professional",
      href: "/portal/messages",
    },
    {
      title: "Invoice",
      value: "Pending",
      text: "View invoice and payment status",
      href: "/portal/invoices",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Customer Portal Demo
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Your job, quote, messages, and invoices in one place
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300">
            This is the customer-facing side of TradeConnectAI. Customers can
            check appointments, approve quotes, view invoices, and message the
            trade business without chasing through calls and texts.
          </p>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="block rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                {card.title}
              </p>

              <h2 className="mt-3 text-3xl font-black">{card.value}</h2>

              <p className="mt-2 text-slate-300">{card.text}</p>

              <p className="mt-5 text-sm font-bold text-cyan-300">
                Open demo →
              </p>
            </Link>
          ))}
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-black">Demo Customer Timeline</h2>

          <div className="mt-5 space-y-4">
            {[
              "Quote received for boiler service.",
              "Appointment scheduled for tomorrow morning.",
              "Customer message sent to confirm access.",
              "Invoice will appear here after job completion.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

