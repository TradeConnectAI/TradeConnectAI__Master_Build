import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { APP_SIGNUP_URL, FEEDBACK_PATH } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Pricing — TradeConnectAI",
  description:
    "One van or two. Straight prices. 14-day free trial, no card required. Then One Van £29/month or Two Vans £49/month.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    name: "One Van",
    who: "One person, one phone.",
    price: "£29",
    points: [
      "Every part of the app: enquiries, jobs, photos, quotes, parts links, slots and replies",
      "Room measure and design",
      "Photo checks for quotes",
    ],
  },
  {
    name: "Two Vans",
    who: "Two people, each with their own sign-in.",
    price: "£49",
    points: [
      "Everything in One Van, for two people",
      "Each person keeps their jobs on their own phone — shared team job lists are not built yet",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="tc-site min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="tc-beta">Beta</span>
            <p className="tc-eyebrow">Simple pricing</p>
          </div>
          <h1 className="mt-4 text-5xl font-bold text-navy md:text-6xl">One van or two. Straight prices.</h1>
          <p className="mt-4 text-xl font-semibold text-navy">14-day free trial. No card required.</p>
          <p className="mt-2 text-lg text-ink">
            Monthly only. Cancel any time. The app is in beta and works in your phone&apos;s browser — nothing to install.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary text-lg">Start 14-day free trial</a>
            <Link href={FEEDBACK_PATH} className="tc-btn tc-btn-outline">Tell us what you think</Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className="tc-card flex flex-col p-6 md:p-7">
              <h2 className="text-3xl font-bold uppercase tracking-wide text-navy">{plan.name}</h2>
              <p className="mt-1 text-base text-ink-muted">{plan.who}</p>
              <p className="tc-display mt-4 text-5xl font-bold text-navy">
                {plan.price}
                <span className="text-xl font-semibold text-ink-muted"> /month</span>
              </p>
              <p className="mt-1 text-base font-semibold text-copper-edge">after the 14-day free trial</p>
              <ul className="mt-4 grid gap-2">
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base text-ink">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-copper" />
                    {point}
                  </li>
                ))}
              </ul>
              <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-navy mt-6 w-full sm:w-auto sm:self-start">
                Start free trial — {plan.name}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-base text-ink-muted">
          Both plans start with the same free trial in the app. No card required to start, and you choose a plan inside the app
          when you&apos;re ready.
        </p>

        <section className="mt-12 border-t-2 border-navy pt-8">
          <h2 className="text-3xl font-bold text-navy">What it does, plainly</h2>
          <p className="mt-4 max-w-3xl text-lg text-ink">
            Log an enquiry, turn it into a job, add photos, draft a quote, check parts through Screwfix or Plumbfix links, offer
            a slot and draft the customer reply. AI drafts. You decide. Nothing is sent to customers without you, supplier
            prices are never shown as live, and appointments are not synced to outside calendars.
          </p>
          <p className="mt-6 text-base text-ink-muted">
            Need a wider team setup or want to talk first?{" "}
            <Link href="/book-demo" className="inline-block py-[11px] font-semibold text-navy underline underline-offset-4">
              Talk to us
            </Link>
            .
          </p>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
