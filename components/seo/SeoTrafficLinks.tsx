import Link from "next/link";

export default function SeoTrafficLinks() {
  const links = [
    ["AI Receptionist for Trades", "/ai-receptionist-for-trades"],
    ["Missed Call Software", "/missed-call-software"],
    ["Trade Business AI", "/trade-business-ai"],
    ["Quote Generator for Trades", "/quote-generator-for-trades"],
    ["Customer Updates for Trades", "/customer-updates-for-trades"],
    ["Trade Job Management", "/trade-job-management"],
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
          Explore TradeConnectAI
        </p>
        <h2 className="mt-3 text-3xl font-black">
          AI tools built for real trade businesses
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-white/10 bg-slate-900 p-4 font-semibold hover:bg-slate-800"
            >
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
