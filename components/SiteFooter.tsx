import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="text-xl font-black">TradeConnectAI</div>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            A practical AI toolbox for sole traders and small trade businesses.
          </p>
          <p className="mt-4 text-sm text-slate-500">info@TradeConnectAI.co.uk</p>
        </div>

        <div>
          <div className="font-bold text-white">Toolbox</div>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link href="/ai-call-demo" className="block hover:text-white">AI Call Helper</Link>
            <Link href="/operations" className="block hover:text-white">Job Toolbox</Link>
            <Link href="/quote-creator" className="block hover:text-white">Quote Creator</Link>
            <Link href="/customer-portal" className="block hover:text-white">Customer Updates</Link>
          </div>
        </div>

        <div>
          <div className="font-bold text-white">Who it helps</div>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link href="/industries/plumbers" className="block hover:text-white">Plumbers</Link>
            <Link href="/industries/electricians" className="block hover:text-white">Electricians</Link>
            <Link href="/industries/hvac" className="block hover:text-white">Heating & HVAC</Link>
          </div>
        </div>

        <div>
          <div className="font-bold text-white">Try it</div>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link href="/operations-demo" className="block hover:text-white">Business Demo</Link>
            <Link href="/customer-demo" className="block hover:text-white">Customer Demo</Link>
            <Link href="/ai-call-demo" className="block hover:text-white">AI Call Demo</Link>
            <Link href="/Founding Beta" className="block hover:text-white">Founding Beta</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



