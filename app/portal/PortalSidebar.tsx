"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Dashboard", href: "/portal/dashboard" },
  { name: "Quotes", href: "/portal/quotes" },
  { name: "Invoices", href: "/portal/invoices" },
  { name: "Appointments", href: "/portal/appointments" },
  { name: "Documents", href: "/portal/documents" },
  { name: "Messages", href: "/portal/messages" },
  { name: "Account", href: "/portal/account" },
];

export default function PortalSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const renderLinks = () =>
    links.map((item) => {
      const isActive = pathname === item.href;

      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setOpen(false)}
          className={`flex w-full rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
              ? "bg-cyan-400 text-slate-950"
              : "text-slate-300 hover:bg-slate-900 hover:text-white"
            }`}
        >
          {item.name}
        </Link>
      );
    });

  return (
    <>
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-4 lg:hidden">
        <h2 className="text-xl font-bold text-white">TradeConnectAI</h2>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-white"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-b border-slate-800 bg-slate-950 p-4 lg:hidden">
          <div className="space-y-2">{renderLinks()}</div>
        </div>
      )}

      <aside className="hidden w-72 border-r border-slate-800 bg-slate-950 lg:block">
        <div className="border-b border-slate-800 p-6">
          <h2 className="text-2xl font-bold text-white">TradeConnectAI</h2>
          <p className="mt-1 text-sm text-slate-400">Customer Portal</p>
        </div>

        <nav className="p-4">
          <div className="space-y-2">{renderLinks()}</div>
        </nav>

        <div className="absolute bottom-0 w-72 border-t border-slate-800 p-6">
          <div className="rounded-xl bg-slate-900 p-4">
            <p className="text-sm font-medium text-white">Need help?</p>
            <p className="mt-1 text-sm text-slate-400">
              Chat with support or upload photos for faster assistance.
            </p>

            <Link
              href="/portal/messages"
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
