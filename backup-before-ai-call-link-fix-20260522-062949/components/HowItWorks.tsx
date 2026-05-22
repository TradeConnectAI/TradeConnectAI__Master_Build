export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#020817] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-300">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Simple. Fast. Automated.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            TradeConnectAI works in the background while you stay focused on the job.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-400/30">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-black shadow-lg shadow-blue-500/30">
              1
            </div>

            <h3 className="text-2xl font-bold">
              Customer Enquiry
            </h3>

            <p className="mt-4 leading-relaxed text-white/70">
              A customer contacts your business through web chat, SMS,
              missed call or Facebook enquiry.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-400/30">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-black shadow-lg shadow-blue-500/30">
              2
            </div>

            <h3 className="text-2xl font-bold">
              AI Responds Instantly
            </h3>

            <p className="mt-4 leading-relaxed text-white/70">
              The AI qualifies the lead, gathers job details and filters
              time-wasters automatically.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-400/30">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-black shadow-lg shadow-blue-500/30">
              3
            </div>

            <h3 className="text-2xl font-bold">
              Job Gets Booked
            </h3>

            <p className="mt-4 leading-relaxed text-white/70">
              Qualified leads are sent directly to your dashboard and
              booked into your calendar automatically.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}