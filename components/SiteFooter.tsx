import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="text-xl font-black">TradeConnectAI</div>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Practical job flow for sole-trader and 2-van UK plumbers.
          </p>
          <p className="mt-4 text-sm text-slate-500">info@TradeConnectAI.co.uk</p>
        </div>

        <div>
          <div className="font-bold text-white">Launch</div>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link href="/" className="block hover:text-white">Home</Link>
            <Link href="/operations-demo" className="block hover:text-white">Operations demo</Link>
            <Link href="/pricing" className="block hover:text-white">Pricing</Link>
            <Link href="/book-demo" className="block hover:text-white">Get started</Link>
          </div>
        </div>

        <div>
          <div className="font-bold text-white">Who it helps</div>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link href="/industries/plumbers" className="block hover:text-white">UK plumbers</Link>
            <p className="text-slate-600">Multi-trade pages are not part of the public launch pitch.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
