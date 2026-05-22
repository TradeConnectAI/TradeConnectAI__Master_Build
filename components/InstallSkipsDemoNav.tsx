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
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#050805]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-black text-white hover:border-emerald-300/50 hover:bg-emerald-400/10"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
