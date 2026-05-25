import BrandWatermark from "@/components/BrandWatermark";
import Image from "next/image";

const calendlyLink = "https://calendly.com/stevenneilsonvoda/30min";

export default function Hero() {
  return (
    <section className="relative overflow-hidden relative min-h-screen overflow-hidden bg-[#020817] px-6 py-10 text-white md:px-12 lg:px-20">
      <BrandWatermark position="hero" />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP BRANDING */}
        <div className="mb-20 flex flex-col items-center justify-center text-center">

          <Image
            src="/brand/tradeconnect-logo.jpeg"
            alt="TradeConnectAI"
            width={260}
            height={260}
            priority
            className="mb-6 w-[180px] md:w-[260px] h-auto object-contain"
          />

          <p className="text-sm md:text-xl font-semibold uppercase tracking-[0.6em] text-white">
            FOR TRADES
          </p>

          <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.35em] text-blue-300">
            AI Receptionist For Busy Trades
          </p>

        </div>

        {/* HERO CONTENT */}
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-sm md:text-base font-bold uppercase tracking-[0.4em] text-blue-300">
            Built For UK Trades
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            AI That Turns <br />
            Missed Enquiries Into Booked Jobs
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-white/70">
            TradeConnectAI answers calls, replies instantly, books jobs and keeps
            your business organised while you're on the tools.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            {/* BOOK DEMO */}
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-4 text-base md:text-lg font-bold text-white no-underline shadow-xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400"
            >
              Book A Demo â†’
            </a>

            {/* HOW IT WORKS */}
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base md:text-lg font-bold text-white no-underline backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Watch How It Works
            </a>

            {/* DASHBOARD */}
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 px-8 py-4 text-base md:text-lg font-bold text-blue-100 no-underline backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500/20"
            >
              View Dashboard
            </a>

          </div>

          {/* FEATURE TAGS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-5 py-2 text-sm font-semibold text-blue-100">
              24/7 AI Replies
            </span>

            <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-5 py-2 text-sm font-semibold text-blue-100">
              Smart Booking
            </span>

            <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-5 py-2 text-sm font-semibold text-blue-100">
              Built For UK Trades
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}

