import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { APP_SIGNUP_URL, CONTACT_EMAIL, FEEDBACK_PATH } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Talk to us — TradeConnectAI",
  description:
    "Want a walk-through of TradeConnectAI or a wider team setup? Send us your details and Steve will get back to you.",
  alternates: { canonical: "/book-demo" },
};

const needs = ["Enquiries", "Quotes", "Job organisation", "Photos and measurements", "Customer updates", "Calendar"];

const trades = [
  "Plumbing & heating",
  "Electrical",
  "Building & joinery",
  "Roofing",
  "Painting & decorating",
  "Landscaping & gardening",
  "Cleaning",
  "Other trade",
];

export default function BookDemoPage() {
  return (
    <main className="tc-site min-h-screen bg-cream text-ink">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="tc-eyebrow">Talk to us</p>
          <h1 className="mt-2 text-5xl font-bold text-navy md:text-6xl">Want a walk-through first?</h1>
          <p className="mt-4 text-lg text-ink">
            Tell us about your business and what eats your time. We&apos;ll show you round the app and talk about a wider
            team setup if you need one.
          </p>
          <div className="tc-card mt-6 p-5">
            <div className="flex items-center gap-3">
              <span className="tc-beta">Beta</span>
              <p className="font-semibold text-navy">Quickest way in</p>
            </div>
            <p className="mt-3 text-base text-ink">
              You don&apos;t need a demo to start. The app is in beta with a 14-day free trial, and it works in your phone&apos;s
              browser.
            </p>
            <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary mt-4 w-full sm:w-auto">Try the app</a>
          </div>
          <p className="mt-6 text-base text-ink-muted">
            Prefer email? Contact Steve at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-block py-[11px] font-semibold text-navy underline underline-offset-4 break-all">{CONTACT_EMAIL}</a>.
            Already tried it? <Link href={FEEDBACK_PATH} className="inline-block py-[11px] font-semibold text-navy underline underline-offset-4">Tell us what you think</Link>.
          </p>
        </div>

        <section id="form" className="tc-card p-5 md:p-7" aria-labelledby="form-title">
          <h2 id="form-title" className="text-3xl font-bold text-navy">Send us your details</h2>
          <p className="mt-2 text-base text-ink-muted">Enquiry form only — no payment taken here.</p>

          <form action="/api/beta-leads" method="post" className="mt-6 grid gap-4">
            <input type="hidden" name="source" value="book-demo" />
            <input type="hidden" name="offer" value="One Van £29 / Two Vans £49 per month after 14-day free trial" />

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-1.5 font-semibold text-navy">
                Your name
                <input name="name" required autoComplete="name" className="tc-input" />
              </label>
              <label className="grid gap-1.5 font-semibold text-navy">
                Business name
                <input name="business" required autoComplete="organization" className="tc-input" />
              </label>
            </div>

            <label className="grid gap-1.5 font-semibold text-navy">
              Trade
              <select name="trade" required className="tc-input">
                <option value="">Choose your trade</option>
                {trades.map((trade) => (
                  <option key={trade} value={trade}>{trade}</option>
                ))}
              </select>
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-1.5 font-semibold text-navy">
                Phone
                <input name="phone" type="tel" autoComplete="tel" className="tc-input" />
              </label>
              <label className="grid gap-1.5 font-semibold text-navy">
                Email
                <input name="email" type="email" required autoComplete="email" className="tc-input" />
              </label>
            </div>

            <label className="grid gap-1.5 font-semibold text-navy">
              Team size
              <select name="teamSize" className="tc-input">
                <option value="">Choose team size</option>
                <option value="Sole trader">Sole trader</option>
                <option value="2 vans">2 vans</option>
                <option value="3+ vans">3+ vans</option>
              </select>
            </label>

            <fieldset className="border-2 border-line/60 p-4">
              <legend className="px-1 font-semibold text-navy">What do you need help with?</legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {needs.map((need) => (
                  <label key={need} className="flex min-h-[44px] items-center gap-3 text-base text-ink">
                    <input type="checkbox" name="needs" value={need} className="h-5 w-5 accent-[#0f2a3d]" />
                    {need}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-1.5 font-semibold text-navy">
              What gets missed when you&apos;re out working?
              <textarea name="help" rows={4} className="tc-input font-normal" />
            </label>

            <button type="submit" className="tc-btn tc-btn-navy text-lg">Send details</button>
          </form>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
