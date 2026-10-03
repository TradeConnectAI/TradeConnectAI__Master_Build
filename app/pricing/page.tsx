import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CheckoutButton from "@/components/CheckoutButton";
import { APP_SIGNUP_URL, FEEDBACK_PATH } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Pricing — TradeConnectAI",
  description:
    "Straight prices for tradespeople. Try the TradeConnectAI beta free for 14 days, then £29 or £49 a month.",
  alternates: { canonical: "/pricing" },
};

const planCards = [
  {
    title: "Starter",
    plan: "starter" as const,
    price: "£29",
    text: "The core enquiry → job → quote and customer-update workflow.",
  },
  {
    title: "Growth",
    plan: "growth" as const,
    price: "£49",
    text: "Everything in Starter, plus TradeConnectAI captures and organises the incoming job details for you, reducing the admin you need to do yourself.",
  },
];

const included = [
  "Enquiries and job cards",
  "Job photos, measurements and notes",
  "Quotes you check before sending",
  "Calendar and customer updates",
  "Works in your phone’s browser",
  "Built for trades",
];

export default function PricingPage() {
  return (
    <main className="tc-site min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="max-w-3xl">
          <span className="tc-beta">Beta</span>
          <h1 className="mt-4 text-5xl font-bold text-navy md:text-6xl">Straight prices when you&apos;re ready.</h1>
          <p className="mt-4 text-lg text-ink">
            Try the app first — it&apos;s in beta with a 14-day free trial. After your trial, plans are £29 or £49 a month.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary text-lg">Try the app</a>
            <Link href={FEEDBACK_PATH} className="tc-btn tc-btn-outline">Tell us what you think</Link>
          </div>
        </div>

        <h2 className="mt-14 text-3xl font-bold text-navy">After your trial</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {planCards.map((card) => (
            <article key={card.title} className="tc-card p-6 md:p-7">
              <h3 className="text-3xl font-bold text-navy">{card.title}</h3>
              <p className="tc-display mt-3 text-5xl font-bold text-navy">
                {card.price}
                <span className="text-xl font-semibold text-ink-muted"> / month</span>
              </p>
              <p className="mt-3 text-base text-ink-muted">{card.text}</p>
              <CheckoutButton
                plan={card.plan}
                className="tc-btn tc-btn-navy mt-6 w-full disabled:opacity-70 sm:w-auto"
              >
                Subscribe — {card.price}/month
              </CheckoutButton>
            </article>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-base text-ink-muted">
          The Subscribe buttons take you to secure Stripe checkout and start a paid monthly plan straight away. To try
          TradeConnectAI before paying, use the free trial in the app.
        </p>

        <section className="mt-12 border-t-2 border-navy pt-8">
          <h2 className="text-3xl font-bold text-navy">What you get</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li key={item} className="flex min-h-[52px] items-center gap-3 border-l-4 border-copper bg-surface px-4 text-base font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-ink-muted">
            Need a wider team setup or want to talk first? <Link href="/book-demo" className="inline-block py-[11px] font-semibold text-navy underline underline-offset-4">Talk to us</Link>.
          </p>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
