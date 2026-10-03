import Link from "next/link";
import { APP_SIGNUP_URL } from "@/lib/site-links";

type Props = {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  transcript: string[];
};

export default function SeoLandingPage({
  badge,
  title,
  description,
  bullets,
  transcript,
}: Props) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/" className="text-sm text-blue-300 hover:text-blue-200">
          ← Back to TradeConnectAI
        </Link>

        <div className="mt-10 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 w-fit">
          {badge}
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={APP_SIGNUP_URL}
            className="rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-400"
          >
            Try the app
          </a>
          <Link
            href="/pricing"
            className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white hover:bg-white/10"
          >
            Pricing £29 / £49
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {bullets.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-2xl">✅</div>
              <p className="mt-4 font-semibold text-slate-100">{item}</p>
            </div>
          ))}
        </div>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h2 className="text-3xl font-black">See the AI workflow</h2>
          <p className="mt-3 text-slate-300">
            A realistic example of how TradeConnectAI turns a missed enquiry into an organised job.
          </p>

          <div className="mt-6 space-y-3">
            {transcript.map((line) => (
              <div key={line} className="rounded-2xl border border-white/10 bg-slate-900 p-4 text-slate-200">
                {line}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-blue-500 p-8 text-white">
          <h2 className="text-3xl font-black">Built for trades. Try the beta.</h2>
          <p className="mt-3 max-w-2xl">
            TradeConnectAI is in beta with a 14-day free trial, then £29 or £49 a month. It works in your phone&apos;s browser.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={APP_SIGNUP_URL}
              className="inline-flex min-h-[44px] items-center rounded-2xl bg-white px-6 py-3 font-black text-slate-950"
            >
              Try the app
            </a>
            <Link
              href="/pricing"
              className="inline-flex min-h-[44px] items-center rounded-2xl border border-white/60 px-6 py-3 font-black text-white"
            >
              See pricing
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
