import Link from "next/link";
import TradeConnectLogo from "@/components/TradeConnectLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#020817]/88 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-3 sm:px-6">
        <TradeConnectLogo variant="nav" />

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
          <Link href="/ai-receptionist" className="hover:text-cyan-300">AI Call Helper</Link>
          <Link href="/operations" className="hover:text-cyan-300">Job Toolbox</Link>
          <Link href="/quote-creator" className="hover:text-cyan-300">Quote Creator</Link>
          <Link href="/pricing" className="hover:text-cyan-300">Pricing</Link>
        </nav>

        <Link
          href="/demo"
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300"
        >
          Try demo
        </Link>
      </div>
    </header>
  );
}
