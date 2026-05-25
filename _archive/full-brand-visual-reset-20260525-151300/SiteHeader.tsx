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
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#020817]/88 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-3 sm:px-6">
        <TradeConnectLogo variant="nav" />

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/demo"
          className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300 sm:inline-flex"
        >
          Try demo
        </Link>
      </div>
    </header>
  );
}
