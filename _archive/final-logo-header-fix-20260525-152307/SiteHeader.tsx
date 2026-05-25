import Link from "next/link";
import TradeConnectLogo from "@/components/TradeConnectLogo";

const navItems = [
  { label: "AI Call Helper", href: "/ai-receptionist" },
  { label: "Job Toolbox", href: "/operations" },
  { label: "Quote Creator", href: "/quote-creator" },
  { label: "Customer Updates", href: "/customer-portal" },
  { label: "Pricing", href: "/pricing" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#020817]/95 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-4 sm:px-8">
        <TradeConnectLogo variant="nav" />

        <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
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
