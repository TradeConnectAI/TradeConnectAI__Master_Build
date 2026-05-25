import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[#020817] px-5 py-12 text-white">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center">
        <img
          src="/brand/tradeconnect-logo-clean.png"
          alt="TradeConnectAI"
          className="mx-auto h-16 w-auto rounded-2xl object-contain"
        />

        <p className="mt-8 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-100">
          Beta request received
        </p>

        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em]">
          Thanks. Your beta request has been captured.
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          We&apos;ll review the details and, if you are one of the first 15 suitable trade businesses, we&apos;ll contact you about free founding beta access in exchange for honest feedback.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/operations-demo"
            className="rounded-full bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950"
          >
            View operations demo
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white"
          >
            Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
