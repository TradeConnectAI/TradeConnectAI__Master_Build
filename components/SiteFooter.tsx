import Link from "next/link";
import Wordmark from "@/components/site/Wordmark";
import {
  APP_PRIVACY_URL,
  APP_SIGNIN_URL,
  APP_SIGNUP_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  FEEDBACK_PATH,
} from "@/lib/site-links";

const linkClass = "inline-flex min-h-[44px] items-center text-cream/90 underline-offset-4 hover:text-copper hover:underline";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-copper bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Wordmark tone="light" />
          <p className="mt-4 max-w-sm text-base text-cream/85">
            Less admin. More time. TradeConnectAI is in beta and works in your phone&apos;s browser — nothing to install.
          </p>
          <p className="mt-4 text-base font-semibold">Steve · TradeConnectAI</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} break-all`}>
            {CONTACT_EMAIL}
          </a>
          <br />
          <a href={CONTACT_PHONE_TEL} className={linkClass}>
            {CONTACT_PHONE}
          </a>
        </div>

        <nav aria-label="Footer – app">
          <p className="tc-display text-lg font-bold">The app</p>
          <ul className="mt-2">
            <li><a href={APP_SIGNUP_URL} className={linkClass}>Try the app</a></li>
            <li><a href={APP_SIGNIN_URL} className={linkClass}>Sign in</a></li>
            <li><Link href="/#how-it-works" className={linkClass}>How it works</Link></li>
            <li><Link href="/pricing" className={linkClass}>Pricing</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer – company">
          <p className="tc-display text-lg font-bold">Talk to us</p>
          <ul className="mt-2">
            <li><Link href={FEEDBACK_PATH} className={linkClass}>Tell us what you think</Link></li>
            <li><Link href="/#about" className={linkClass}>About</Link></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>Email Steve</a></li>
            <li><a href={APP_PRIVACY_URL} className={linkClass}>Privacy</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-base text-cream/75 sm:px-6">
          © {new Date().getFullYear()} TradeConnectAI. Beta software — check every quote and message before you send it.
        </p>
      </div>
    </footer>
  );
}
