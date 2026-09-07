"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Operations demo", href: "/operations-demo" },
  { label: "Quotes", href: "/customer-demo/quotes" },
  { label: "Messages", href: "/customer-demo/messages" },
  // De-emphasised launch surfaces (routes kept, not required for launch)
  { label: "AI Call (optional)", href: "/ai-call-demo" },
  { label: "Customer portal (optional)", href: "/customer-demo" },
];

export default function DemoSidebar() {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-full border-r border-slate-800 bg-slate-950 p-5 text-white md:w-72">
      <Link href="/" className="mb-8 block">
        <div className="text-xl font-black">TradeConnectAI</div>
        <div className="text-sm text-slate-400">Plumber operations demo</div>
      </Link>

      <nav className="space-y-2">
        {links.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-2xl px-4 py-3 text-sm transition ${
                active
                  ? "bg-cyan-400 text-slate-950"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <div className="text-sm font-bold text-white">Demo mode</div>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          Illustrative jobs and updates for the plumber launch flow. Not live phone-AI.
        </p>
      </div>
    </aside>
  );
}
