export default function PictureShowcase() {
  const cards = [
    {
      title: "Answer the phone when you can’t",
      text: "When you’re up a ladder, under a sink, on a roof or driving between jobs, TradeConnectAI helps capture the enquiry so it doesn’t disappear.",
      badge: "Missed calls",
    },
    {
      title: "Keep customers updated",
      text: "Simple updates for ETAs, bookings, quotes and invoices so customers aren’t chasing you all day.",
      badge: "Less chasing",
    },
    {
      title: "Know where the day stands",
      text: "See today’s jobs, urgent calls and follow-ups without digging through texts, WhatsApp, notes and voicemails.",
      badge: "Clear day",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8">
        <p className="text-sm font-bold text-cyan-300">Built for real working days</p>
        <h2 className="mt-3 max-w-4xl text-4xl font-black md:text-5xl">
          Less admin. Fewer missed calls. Customers kept in the loop.
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          This is for sole traders and small teams who are busy doing the work, not sitting behind a desk all day.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <div key={card.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035]">
            <div className="relative h-44 bg-slate-900">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,1),rgba(30,41,59,0.95),rgba(8,47,73,0.45))]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="text-xs text-cyan-300">{card.badge}</div>
                <div className="mt-1 text-2xl font-black">0{index + 1}</div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-black text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
