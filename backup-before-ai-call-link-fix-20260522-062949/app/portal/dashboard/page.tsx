export default function PortalDashboardPage() {
  const cards = [
    {
      label: "Upcoming Appointment",
      title: "Boiler Inspection",
      text: "15 May 2026 · 08:00 - 10:00",
    },
    {
      label: "Outstanding Quote",
      title: "£420",
      text: "Heating repair quote awaiting approval",
    },
    {
      label: "Messages",
      title: "3",
      text: "Customer updates and job messages",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-xl">
        <p className="text-cyan-300">Customer Portal</p>

        <h1 className="mt-2 text-4xl font-black">Dashboard</h1>

        <section className="mt-8 space-y-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
            >
              <p className="text-slate-400">{card.label}</p>
              <h2 className="mt-3 text-3xl font-black">{card.title}</h2>
              <p className="mt-2 text-slate-300">{card.text}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

