import Link from "next/link";

const nav = [
  { label: "AI Call Helper", href: "/ai-call-demo" },
  { label: "Job Toolbox", href: "/operations" },
  { label: "Quote Creator", href: "/quote-creator" },
  { label: "Customer Updates", href: "/customer-portal" },
  { label: "Pricing", href: "/pricing" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 px-4 py-4 text-white backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link href="/" className="block">
          <div className="text-lg font-black tracking-tight md:text-xl">TradeConnectAI</div>
          <div className="text-xs text-slate-400">Your AI toolbox for busy trade days</div>
        </Link>

        <nav className="order-3 flex w-full gap-3 overflow-x-auto text-sm md:order-2 md:w-auto md:items-center md:gap-5 md:overflow-visible">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-normal md:whitespace-nowrap text-slate-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/operations-demo" className="order-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 md:order-3">
          Try demo
        </Link>
      </div>
    </header>
  );
}

