import Link from "next/link";
import TradeConnectLogo from "@/components/TradeConnectLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#020817]/95 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <TradeConnectLogo variant="nav" />

        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-semibold text-slate-300 lg:flex">
          <Link href="/ai-receptionist" className="hover:text-cyan-300">AI Call Helper</Link>
          <Link href="/operations" className="hover:text-cyan-300">Job Toolbox</Link>
          <Link href="/quote-creator" className="hover:text-cyan-300">Quote Creator</Link>
          <Link href="/customer-portal" className="hover:text-cyan-300">Customer Updates</Link>
          <Link href="/pricing" className="hover:text-cyan-300">Pricing</Link>
        </nav>

        <Link
          href="/demo"
          className="hidden shrink-0 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300 sm:inline-flex"
        >
          Try demo
        </Link>
      </div>
    </header>
  );
}
