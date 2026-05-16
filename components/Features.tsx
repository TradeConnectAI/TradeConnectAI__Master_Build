import Image from "next/image";

const features = [
  ["AI Lead Assistant", "Replies instantly to web, SMS and missed call enquiries."],
  ["Smart Booking", "Suggests times, books jobs and sends confirmations."],
  ["Unified Inbox", "Keeps every customer conversation in one place."],
  ["Quotes & Invoices", "Creates job notes, quote drafts and invoice-ready details."],
  ["Dashboard", "See leads, booked work and follow-ups at a glance."],
  ["Payments", "Designed to support deposits, invoices and paid jobs."],
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-24 bg-[#020617]">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-300 font-bold uppercase tracking-[0.3em] mb-4">
            Features
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Everything your trade business needs
          </h2>

          <p className="text-slate-300 text-xl mt-6 max-w-3xl mx-auto">
            All the tools to capture leads, book jobs, manage conversations and keep work moving.
          </p>
        </div>

        <Image
          src="/features.png"
          alt="TradeConnectAI features"
          width={1600}
          height={1000}
          className="rounded-3xl border border-white/10 shadow-2xl mx-auto w-full h-auto mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:bg-white/10 hover:border-blue-400/40 transition shadow-xl"
            >
              <h3 className="text-2xl font-black mb-3">{title}</h3>
              <p className="text-slate-300 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}