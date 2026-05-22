import Link from "next/link";
import InstallSkipsLogo from "@/components/InstallSkipsLogo";

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
      <div className="mx-auto max-w-[1800px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <InstallSkipsLogo />

          <div className="hidden rounded-2xl border border-yellow-300/30 bg-yellow-300/10 px-5 py-3 text-right lg:block">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-200">
              AI Demo Control Room
            </p>
            <p className="mt-1 text-sm font-black text-white">
              Waste disposal · Skip hire · Grab hire
            </p>
          </div>
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
