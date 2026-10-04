import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { APP_SIGNIN_URL, APP_SIGNUP_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, FEEDBACK_PATH } from "@/lib/site-links";

const workflow = [
  ["Customer gets in touch", "A call, text or message comes in. Log it as a new enquiry before it gets lost."],
  ["Create the job", "Name, address, the issue and how urgent it is — one job, one place."],
  ["Add photos and measurements", "Snap the job on site and keep the measurements and notes with it."],
  ["Build the quote", "Labour, materials, call-out and VAT. Your figures, your words."],
  ["Book it into the calendar", "Pick a slot and keep it with the job and the customer."],
  ["Keep the customer updated", "Send a clear update without typing the same message again."],
  ["Complete the job", "Mark it done with the photos and notes kept on the job history."],
];

const founderFlow = ["Enquiry comes in", "Create the job", "Photos & details", "Build the quote", "Keep the customer updated"];

const quoteHelp = [
  ["Job photos", "Photos stay on the job they belong to, not lost in your camera roll."],
  ["Measurements", "Write dimensions down once and keep them with the job."],
  ["Notes", "What you saw, what you need, what to check next time."],
  ["Customer info", "Name, address and contact details ready when you need them."],
  ["Materials", "List the materials you need for the job and build them into the quote."],
  ["Quote preparation", "Pull it together into an editable quote you check before it goes out."],
];

const dailyApp = [
  ["Today", "Enquiries, quotes to send, callbacks, parts to collect and today’s jobs."],
  ["Jobs", "Every job with its status, history and next action."],
  ["Customers", "Contact details and the work you’ve done for them."],
  ["Quotes", "Draft, check and send — nothing sends itself."],
  ["Calendar", "Book jobs into slots and see the week ahead."],
  ["Messages", "Replies and updates to customers, ready to review."],
  ["Photos", "Site photos kept with the right job."],
  ["Job notes", "The details you’d normally scribble on a receipt."],
];

const aiHelp = [
  "Help writing replies to customers",
  "Organising rough notes into something tidy",
  "Preparing a first draft of a quote",
  "Turning photos and measurements into job info",
  "Cutting down the repetitive admin",
];

function BetaBadge({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`tc-beta ${tone === "light" ? "!text-copper" : ""}`}>
      <span aria-hidden="true" className="inline-block h-2 w-2 bg-copper" />
      Beta
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="tc-site min-h-screen bg-cream text-ink">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pb-20 md:pt-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BetaBadge tone="light" />
              <span className="tc-eyebrow !text-cream/85">Built for trades · Van Desk</span>
            </div>
            <h1 className="mt-5 text-[2.6rem] font-bold leading-[1.02] sm:text-6xl md:text-[4.1rem]">
              Your jobs. Your quotes. Your customers. <span className="text-copper">One app.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90 md:text-xl">
              Manage enquiries, jobs, photos, quotes, appointments and customer updates without
              spending your evenings catching up on paperwork.
            </p>
            <p className="mt-4 border-l-4 border-copper pl-3 text-lg font-semibold">Less admin. More time.</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary text-lg sm:min-w-[180px]">
                Try the app
              </a>
              <a href="#how-it-works" className="tc-btn tc-btn-ghost-light">
                See how it works
              </a>
            </div>
            <p className="mt-4 text-base text-cream/90">
              <span className="font-bold text-copper">Beta · 14-day free trial</span>{" · "}no card required{" · "}works in your phone&apos;s browser, nothing to install.
            </p>
            <p className="mt-2 text-base text-cream/90">
              Already using it?{" "}
              <a href={APP_SIGNIN_URL} className="inline-flex min-h-[44px] items-center font-bold text-cream underline underline-offset-4 hover:text-copper">
                Sign in
              </a>
            </p>
          </div>

          <figure className="mx-auto w-full max-w-[300px] md:max-w-[320px]">
            <div className="rounded-[22px] border-[3px] border-navy-deep bg-navy-deep p-2.5 shadow-[0_6px_0_#071722]">
              <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-cream/25" aria-hidden="true" />
              <Image
                src="/app/app-preview-0.png"
                alt="The Today’s Board screen in the TradeConnectAI app: new enquiries, quotes to send, needs callback, parts to collect and today’s jobs."
                width={720}
                height={1392}
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="h-auto w-full rounded-[12px]"
              />
            </div>
            <figcaption className="mt-3 text-center text-base text-cream/80">Today&apos;s Board, from the app&apos;s own preview.</figcaption>
          </figure>
        </div>
      </section>

      {/* Workflow */}
      <section id="how-it-works" className="scroll-mt-20 border-b-2 border-copper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <p className="tc-eyebrow">How it works</p>
          <h2 className="mt-2 text-4xl font-bold text-navy md:text-5xl">From first call to finished job.</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">
            The same seven steps you already do. Just without the scraps of paper and the late-night catch-up.
          </p>
          <ol className="mt-10 grid gap-0 border-t-2 border-navy md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
            {workflow.map(([title, text], i) => (
              <li key={title} className="flex gap-4 border-b border-line/50 py-5">
                <span className="tc-display flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-xl font-bold text-cream">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-base text-ink-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Photos & quoting */}
      <section id="photos-and-quotes" className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="tc-eyebrow">Photos &amp; job quoting</p>
            <h2 className="mt-2 text-4xl font-bold text-navy md:text-5xl">Take the photos. Write it down once. Build the quote.</h2>
            <p className="mt-3 max-w-2xl text-lg text-ink-muted">
              Everything you gather on site stays with the job, so the quote is half done before you&apos;re back in the van.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {quoteHelp.map(([title, text]) => (
                <li key={title} className="border-l-4 border-copper bg-surface px-4 py-3">
                  <h3 className="text-xl font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-base text-ink-muted">{text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-base text-ink">
              Add materials from the merchants you already use — open Screwfix, Plumbfix or Toolstation from the app and
              check price and stock yourself before it goes on the quote.
            </p>
            <p className="mt-3 max-w-2xl text-base text-ink-muted">
              Photo suggestions are estimates, not diagnoses. Confirm measurements, parts and prices on site before you send a quote.
            </p>
          </div>
          <div className="grid content-start gap-5">
            <Image
              src="/app/app-preview-1.png"
              alt="Job sheet preview from the app: customer, address, issue and urgency with photos, parts, quote, appointment, reply and next action."
              width={720}
              height={636}
              sizes="(max-width: 768px) 100vw, 420px"
              className="h-auto w-full"
            />
            <Image
              src="/app/app-preview-2.png"
              alt="Photo to quote preview from the app: likely work, materials to check and what’s uncertain, marked as an AI estimate to verify on site."
              width={720}
              height={636}
              sizes="(max-width: 768px) 100vw, 420px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Daily app */}
      <section id="the-app" className="border-y-2 border-copper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <p className="tc-eyebrow">Inside the Van Desk</p>
          <h2 className="mt-2 text-4xl font-bold text-navy md:text-5xl">A working day in your pocket.</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">Simple on purpose. Open it in the morning and the day is laid out.</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dailyApp.map(([title, text]) => (
              <li key={title} className="tc-card p-5">
                <h3 className="text-2xl font-bold text-navy">{title}</h3>
                <p className="mt-1 text-base text-ink-muted">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 border-l-4 border-navy bg-surface p-5 md:flex-row md:items-center md:justify-between">
            <p className="text-base text-ink">
              <strong className="text-navy">Works in your phone&apos;s browser — nothing to install.</strong> Tip: open it in
              your browser and use &ldquo;Add to Home Screen&rdquo; to keep it one tap away.
            </p>
            <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-navy shrink-0">Try the app</a>
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="extra-help">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <p className="tc-eyebrow">Extra help</p>
            <h2 className="mt-2 text-4xl font-bold text-navy md:text-5xl">Extra help when you need it.</h2>
            <p className="mt-3 text-lg text-ink-muted">
              There&apos;s AI built in for the fiddly bits. It drafts. You decide. You stay in control of every quote and message.
            </p>
          </div>
          <ul className="grid content-start gap-3">
            {aiHelp.map((item) => (
              <li key={item} className="flex min-h-[52px] items-center gap-3 border-b border-line/50 text-lg text-ink">
                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-copper" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder */}
      <section id="about" className="scroll-mt-20 bg-navy text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-[280px_1fr] md:gap-12 md:py-20">
          <div className="w-full max-w-[210px] md:max-w-[280px]">
            <div className="relative aspect-[4/5] w-full max-w-[210px] overflow-hidden rounded-xl border-[3px] border-copper bg-surface md:max-w-[280px]">
              <Image
                src="/founder/steve-headshot.webp"
                alt="Steve, founder of TradeConnectAI"
                fill
                sizes="(max-width: 768px) 210px, 280px"
                className="object-cover object-center"
              />
            </div>
            <p className="tc-display mt-3 text-base font-bold tracking-wide text-copper">Built in South Wales.</p>
          </div>
          <div>
            <p className="tc-eyebrow">Who&apos;s behind TradeConnectAI</p>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Built by Steve, for trades.</h2>
            <p className="mt-4 border-l-4 border-copper pl-3 text-lg font-semibold">Less admin. More time.</p>
            <p className="mt-5 max-w-2xl text-lg text-cream/90">
              I&apos;m Steve. I work in engineering myself, and I built TradeConnectAI to give small trade businesses one place to
              keep the everyday job admin under control. <strong className="font-bold text-cream">No big AI promises.</strong>
            </p>
            <ol aria-label="How a job flows" className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {founderFlow.map((step, i) => (
                <li
                  key={step}
                  className="tc-display relative rounded-[2px] border-2 border-cream/60 px-2.5 py-1 text-base font-bold text-cream"
                >
                  {step}
                  {i < founderFlow.length - 1 ? (
                    <span aria-hidden="true" className="absolute -right-5 top-1/2 -translate-y-1/2 text-lg text-copper">
                      &rarr;
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary mt-7 w-full text-lg sm:w-auto">
              Try TradeConnectAI free
            </a>
          </div>
        </div>
      </section>

      {/* Early access */}
      <section id="early-access" className="border-b-2 border-copper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="tc-card p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <BetaBadge />
              <p className="tc-eyebrow">Early access</p>
            </div>
            <h2 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Make room for more work.</h2>
            <p className="mt-4 max-w-2xl text-lg text-ink">
              We&apos;re looking for a small group of tradespeople to use TradeConnectAI properly and tell us what works — and
              what doesn&apos;t.
            </p>
            <p className="mt-3 text-lg font-semibold text-navy">Try it. Use it on real jobs. Tell us what needs improving.</p>
            <p className="mt-3 max-w-2xl text-base text-ink-muted">
              The app is in beta, so some things will be rough round the edges. You get a 14-day free trial to use it on real work.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary text-lg">Try TradeConnectAI</a>
              <Link href={FEEDBACK_PATH} className="tc-btn tc-btn-outline">Tell us what you think</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section id="feedback" className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-16">
          <div>
            <p className="tc-eyebrow">Honest feedback wanted</p>
            <h2 className="mt-2 text-4xl font-bold text-navy md:text-5xl">Tell us what you think.</h2>
            <p className="mt-3 max-w-2xl text-lg text-ink">
              What helps, what gets in the way, what&apos;s confusing, what&apos;s missing. Criticism is welcome — it&apos;s the most
              useful thing you can send us while the app is in beta.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href={FEEDBACK_PATH} className="tc-btn tc-btn-navy text-lg">Tell us what you think</Link>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("TradeConnectAI feedback")}`} className="tc-btn tc-btn-outline">
              Or email Steve directly
            </a>
            <a href={CONTACT_PHONE_TEL} className="tc-btn tc-btn-outline">
              Or call Steve on {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" aria-labelledby="pricing-teaser">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="pricing-teaser" className="text-2xl font-bold text-navy">One van or two. Straight prices.</h2>
            <p className="mt-1 text-base text-ink-muted">
              14-day free trial. No card required. After the free trial: One Van £29/month · Two Vans £49/month.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary">Start 14-day free trial</a>
            <Link href="/pricing" className="tc-btn tc-btn-outline">See pricing</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
