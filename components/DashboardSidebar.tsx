"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Inbox,
  CalendarDays,
  Bot,
  Users,
  FileText,
  Receipt,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

export default function DashboardSidebar() {
  const links = [
    { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { title: "Leads Inbox", href: "/dashboard/leads", icon: Inbox },
    { title: "Bookings", href: "/dashboard/bookings", icon: CalendarDays },
    { title: "AI Conversations", href: "/dashboard/conversations", icon: Bot },
    { title: "Customers", href: "/dashboard/customers", icon: Users },
    { title: "Quotes", href: "/dashboard/quotes", icon: FileText },
    { title: "Invoices", href: "/dashboard/invoices", icon: Receipt },
    { title: "Payments", href: "/dashboard/payments", icon: CreditCard },
    { title: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { title: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-full border-r border-white/10 bg-slate-950 lg:w-72">
      <div className="p-6">
        <h2 className="text-3xl font-black text-white">
          Trade<span className="text-cyan-400">Connect</span>AI
        </h2>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">
          AI Operations Platform
        </p>
      </div>

      <nav className="space-y-2 px-4 pb-6">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.title}
              href={link.href}
              className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              <Icon className="h-5 w-5 text-cyan-300" />
              <span className="font-semibold">{link.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
