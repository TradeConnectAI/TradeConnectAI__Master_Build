import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { APP_SIGNUP_URL } from "@/lib/site-links";

export default function ThanksPage() {
  return (
    <main className="tc-site min-h-screen bg-cream text-ink">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="tc-eyebrow">Request received</p>
        <h1 className="mt-2 text-5xl font-bold text-navy">Thanks. We&apos;ve got your details.</h1>
        <p className="mt-4 text-lg text-ink">
          Steve will get back to you. In the meantime you can try the app — it&apos;s in beta with a 14-day free trial.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary">Try the app</a>
          <Link href="/" className="tc-btn tc-btn-outline">Back to the homepage</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
