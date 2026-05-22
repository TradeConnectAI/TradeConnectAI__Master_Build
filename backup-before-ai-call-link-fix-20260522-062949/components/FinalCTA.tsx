const calendlyLink = "https://calendly.com/stevenneilsonvoda/30min";

export default function FinalCTA() {
  return (
    <section className="bg-[#030b18] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-blue-500/30 bg-blue-500/10 p-10 text-center shadow-2xl shadow-blue-500/20 backdrop-blur-xl md:p-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-300">
          READY TO CAPTURE MORE JOBS?
        </p>

        <h2 className="text-4xl font-black tracking-tight md:text-6xl">
          Stop Letting Missed Enquiries Cost You Money
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
          Book a short demo and see how TradeConnectAI can turn missed calls,
          web enquiries and messages into booked jobs.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:bg-blue-400"
          >
            Book A Demo →
          </a>

          <a
            href="#pricing"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}