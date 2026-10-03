import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { APP_SIGNUP_URL, FEEDBACK_PATH } from "@/lib/site-links";

type Props = { trade: string; examples: string };

export default function IndustryPage({ trade, examples }: Props) {
  return (
    <main className="tc-site min-h-screen bg-cream text-ink">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="tc-beta">Beta</span>
          <p className="tc-eyebrow">Built for trades · including {trade}</p>
        </div>
        <h1 className="mt-4 text-5xl font-bold text-navy md:text-6xl">Your jobs. Your quotes. Your customers. One app.</h1>
        <p className="mt-4 text-lg text-ink">
          TradeConnectAI is the job, quote and customer app for tradespeople — {trade} included. Keep {examples} with the
          job, build the quote, book it in and keep the customer updated, without the evening paperwork.
        </p>
        <p className="mt-3 text-base text-ink-muted">In beta with a 14-day free trial. Works in your phone&apos;s browser — nothing to install.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary text-lg">Try the app</a>
          <Link href="/#how-it-works" className="tc-btn tc-btn-outline">See how it works</Link>
          <Link href={FEEDBACK_PATH} className="tc-btn tc-btn-outline">Tell us what you think</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
