import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { APP_SIGNUP_URL } from "@/lib/site-links";

export default function NotFound() {
  return (
    <main className="tc-site min-h-screen bg-cream text-ink">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <p className="tc-eyebrow">404</p>
        <h1 className="mt-2 text-5xl font-bold text-navy">That page isn&apos;t here.</h1>
        <p className="mt-4 text-lg text-ink">The link might be old, or the page has moved. Try one of these instead.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="tc-btn tc-btn-navy">Back to the homepage</Link>
          <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary">Try the app</a>
          <Link href="/feedback" className="tc-btn tc-btn-outline">Tell us what you think</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
