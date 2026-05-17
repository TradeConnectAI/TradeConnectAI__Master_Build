"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Business Overview", href: "/operations-demo" },
  { label: "AI Call Demo", href: "/ai-call-demo" },
  { label: "Customer Portal", href: "/customer-demo" },
  { label: "Quotes", href: "/customer-demo/quotes" },
  { label: "Invoices", href: "/customer-demo/invoices" },
  { label: "Messages", href: "/customer-demo/messages" },
];

export default function DemoSidebar() {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-full border-r border-slate-800 bg-slate-950 p-5 text-white md:w-72">
      <Link href="/" className="mb-8 block">
        <div className="text-xl font-black">TradeConnectAI</div>
        <div className="text-sm text-slate-400">Practical demo toolbox</div>
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
          Fake jobs, calls and updates so you can see how it helps during a normal working day.
        </p>
      </div>
    </aside>
  );
}
