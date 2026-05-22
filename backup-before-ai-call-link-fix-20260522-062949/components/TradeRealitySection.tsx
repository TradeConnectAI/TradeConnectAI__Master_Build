export default function TradeRealitySection() {
  const items = [
    {
      title: "A customer calls while you’re mid-job",
      text: "TradeConnectAI helps capture the enquiry, contact details and urgency so you can follow up properly.",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "A job overruns and customers start chasing",
      text: "Send clearer updates so people know what’s happening without you typing the same message all day.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "You get home and the admin is still waiting",
      text: "Keep quotes, follow-ups, invoices and job notes together before the day gets away from you.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Real working days
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Built around the stuff that actually causes stress.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900">
              <div className="relative h-56">
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
