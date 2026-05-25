"use client";

export default function RealWorldSection() {
  const sections = [
    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
      title: "The phone rings while you’re already busy.",
      text:
        "Missed calls, customer updates, quotes to send and jobs overrunning. TradeConnectAI is designed around real working days, not perfect office schedules.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092919535-7146ff1a5902?q=80&w=1600&auto=format&fit=crop",
      title: "Customers don’t mind delays. They mind silence.",
      text:
        "Simple updates, clearer communication and fewer chasing calls help small businesses feel more professional without adding more admin.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
      title: "Built from an engineer’s perspective.",
      text:
        "This platform is being shaped around real trade-life pressure: changing ETAs, emergency jobs, missed enquiries and long evenings catching up on admin.",
    },
  ];

  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px]">
                <img
                  src={section.image}
                  alt={section.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
              </div>

              <div className="flex items-center p-8 md:p-12">
                <div>
                  <h2 className="max-w-xl text-3xl font-black leading-tight md:text-5xl">
                    {section.title}
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    {section.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
