import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FeedbackForm from "@/components/site/FeedbackForm";
import { APP_SIGNUP_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Tell us what you think — TradeConnectAI",
  description:
    "TradeConnectAI is in beta. Tell us what helps, what gets in the way, what’s confusing and what’s missing. Honest feedback from trades shapes the app.",
  alternates: { canonical: "/feedback" },
};

export default function FeedbackPage() {
  return (
    <main className="tc-site min-h-screen bg-cream text-ink">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <span className="tc-beta">Beta</span>
        <h1 className="mt-4 text-5xl font-bold text-navy">Tell us what you think.</h1>
        <p className="mt-4 text-lg text-ink">
          TradeConnectAI is in beta and we want honest feedback from trades. Good, bad or &ldquo;why on earth does it do
          that?&rdquo; — criticism is welcome. A few words is plenty.
        </p>
        <div className="tc-card mt-8 p-5 md:p-8">
          <FeedbackForm />
        </div>
        <p className="mt-8 text-base text-ink-muted">
          Prefer to just email? <a href={`mailto:${CONTACT_EMAIL}?subject=TradeConnectAI%20feedback`} className="inline-block py-[11px] font-semibold text-navy underline underline-offset-4 break-all">{CONTACT_EMAIL}</a>{" "}
          or call{" "}
          <a href={CONTACT_PHONE_TEL} className="inline-block py-[11px] font-semibold text-navy underline underline-offset-4">{CONTACT_PHONE}</a>.
          Haven&apos;t tried it yet?{" "}
          <a href={APP_SIGNUP_URL} className="inline-block py-[11px] font-semibold text-navy underline underline-offset-4">Try the app</a>.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
