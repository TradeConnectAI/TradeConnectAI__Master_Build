import Link from "next/link";

const navItems = [
  { label: "Demo Home", href: "/install-skips-demo" },
  { label: "Book Skip", href: "/install-skips-demo/book" },
  { label: "AI Webchat", href: "/install-skips-demo/webchat" },
  { label: "Operations", href: "/install-skips-demo/operations" },
  { label: "Live Map", href: "/install-skips-demo/live-map" },
  { label: "Skip Locations", href: "/install-skips-demo/skip-operations" },
  { label: "Digital Ticket", href: "/install-skips-demo/skip-ticket" },
  { label: "Contents Form", href: "/install-skips-demo/customer-ticket" },
  { label: "Drivers", href: "/install-skips-demo/drivers" },
  { label: "Permits", href: "/install-skips-demo/permits" },
  { label: "Payments", href: "/install-skips-demo/payments" },
  { label: "Admin", href: "/install-skips-demo/admin" },
];

export default function InstallSkipsDemoNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-300/20 bg-[#071008]/95 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="mx-auto max-w-[1800px] px-4 py-3 sm:px-6 lg:px-8">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-300">
              Install Integrated Skips Demo
            </p>
            <p className="text-sm font-bold text-emerald-100">
              AI booking, dispatch, drivers, tickets, permits and payments
            </p>
          </div>

          <Link
            href="/install-skips-demo"
            className="hidden rounded-2xl border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-xs font-black text-yellow-200 hover:bg-yellow-300 hover:text-black sm:inline-flex"
          >
            Control Room
          </Link>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-2xl border px-4 py-3 text-sm font-black shadow-lg shadow-black/20 transition ${
                index === 1
                  ? "border-yellow-300 bg-yellow-300 text-black hover:bg-white"
                  : "border-white/10 bg-white/[0.07] text-white hover:border-yellow-300 hover:bg-yellow-300 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
