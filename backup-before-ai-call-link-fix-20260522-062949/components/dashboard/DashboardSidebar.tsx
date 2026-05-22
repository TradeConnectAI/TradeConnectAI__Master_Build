"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { name: "Overview", href: "/dashboard" },
    { name: "CRM", href: "/dashboard/crm" },
    { name: "Jobs", href: "/dashboard/jobs" },
    { name: "Quotes", href: "/dashboard/quotes" },
    { name: "Invoices", href: "/dashboard/invoices" },
    { name: "Customers", href: "/dashboard/customers" },
    { name: "Analytics", href: "/dashboard/analytics" },
    { name: "AI Assistant", href: "/dashboard/ai" },
];

export default function DashboardSidebar() {
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
                    className={`flex rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
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
            <div className="xl:hidden">
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-4">
                    <div>
                        <h2 className="text-xl font-bold text-white">TradeConnectAI</h2>
                        <p className="text-xs text-slate-400">Operations Platform</p>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-white"
                    >
                        Menu
                    </button>
                </div>

                {open && (
                    <div className="border-b border-slate-800 bg-slate-950 p-4">
                        <div className="space-y-2">{renderLinks()}</div>
                    </div>
                )}
            </div>

            <aside className="hidden w-72 border-r border-slate-800 bg-slate-950 xl:flex xl:flex-col">
                <div className="border-b border-slate-800 p-6">
                    <h2 className="text-2xl font-bold text-white">TradeConnectAI</h2>
                    <p className="mt-1 text-sm text-slate-400">Operations Platform</p>
                </div>

                <nav className="flex-1 p-4">
                    <div className="space-y-2">{renderLinks()}</div>
                </nav>
            </aside>
        </>
    );
}