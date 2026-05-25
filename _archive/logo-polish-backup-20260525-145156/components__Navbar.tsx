import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img src="/brand/tradeconnect-logo.jpeg" alt="TradeConnectAI" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <div className="text-xl font-black text-white">
              Trade<span className="text-cyan-400">Connect</span>AI
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
              AI Operations Platform
            </div>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-2 text-xs font-bold text-white sm:gap-4 sm:text-sm">
          <Link href="/" className="hover:text-cyan-300">Home</Link>
          <Link href="/#features" className="hover:text-cyan-300">Features</Link>
          <Link href="/ai-tools" className="hover:text-cyan-300">AI Tools</Link>
          <Link href="/operations-demo" className="hover:text-cyan-300">Operations Demo</Link>
          <Link href="/customer-demo" className="hover:text-cyan-300">Customer Demo</Link>
          <Link href="/login" className="rounded-xl bg-cyan-400 px-3 py-2 text-slate-950 hover:bg-cyan-300">Login</Link>
        </nav>
      </div>
    </header>
  );
}

