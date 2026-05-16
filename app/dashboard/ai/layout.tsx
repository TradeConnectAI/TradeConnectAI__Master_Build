import Link from "next/link";

const navItems = [
  { label: "AI Tools", href: "/dashboard/ai" },
  { label: "Quote Generator", href: "/dashboard/ai/quote" },
  { label: "Job Sheet Creator", href: "/dashboard/ai/jobsheet" },
  { label: "Customer Reply", href: "/dashboard/ai/reply" },
];

export default function AiToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen md:grid-cols-[288px_1fr]">
        <aside className="border-r border-white/10 bg-zinc-950 p-6">
          <Link href="/dashboard" className="mb-8 block text-3xl font-bold">
            TradeConnectAI
          </Link>

          <nav className="space-y-3">
            <Link
              href="/dashboard"
              className="block rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-cyan-200 hover:bg-cyan-400/20"
            >
              ← Back to Dashboard
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Platform Status</p>
            <p className="mt-2 text-sm text-emerald-400">
              ● AI routes temporarily locked
            </p>
          </div>
        </aside>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}