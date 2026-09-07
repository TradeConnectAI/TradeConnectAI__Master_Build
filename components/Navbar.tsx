import Link from "next/link";
import TradeConnectLogo from "@/components/TradeConnectLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#020817]/96 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-4 sm:px-8">
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-cyan-400/5 blur-2xl" />
          <TradeConnectLogo variant="nav" />
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
          <Link href="/#how" className="hover:text-cyan-300">How it works</Link>
          <Link href="/operations-demo" className="hover:text-cyan-300">Operations demo</Link>
          <Link href="/pricing" className="hover:text-cyan-300">Pricing</Link>
        </nav>

        <Link
          href="/operations-demo"
          className="hidden shrink-0 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300 sm:inline-flex"
        >
          Open demo
        </Link>
      </div>
    </header>
  );
}
