import Link from "next/link";

const navItems = [
  { href: "/complete-options-beta", label: "Dashboard", icon: "📊" },
  { href: "/complete-options-beta/jobs", label: "Jobs", icon: "🧰" },
  { href: "/complete-options-beta/customers", label: "Customers", icon: "👥" },
  { href: "/complete-options-beta/quotes", label: "Quotes", icon: "🧾" },
  { href: "/complete-options-beta/ai-calls", label: "AI Calls", icon: "☎️" },
  { href: "/complete-options-beta/marketing", label: "Marketing", icon: "📣" },
  { href: "/complete-options-beta/job-finder", label: "Job Finder", icon: "🎯" },
  { href: "/complete-options-beta/calendar", label: "Calendar", icon: "📅" },
  { href: "/complete-options-beta/settings", label: "Settings", icon: "⚙️" },
];

export function CompleteOptionsShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 p-3 sm:p-5 lg:flex-row">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)] lg:w-72">
          <Link href="/complete-options-beta" className="block">
            <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 p-4 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[0.24em]">TradeConnectAI</p>
              <h1 className="mt-2 text-2xl font-black leading-tight">Complete Options</h1>
              <p className="mt-1 text-sm font-semibold opacity-80">AI Receptionist & Ops Assistant</p>
            </div>
          </Link>

          <nav className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-base">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-4 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4">
            <p className="text-sm font-black text-cyan-100">Live demo mode</p>
            <p className="mt-1 text-xs leading-5 text-slate-300">
              Fake but believable data so customers can feel the system working before the backend is wired in.
            </p>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl sm:p-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
                  Complete Options beta
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
                  {title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
                  {subtitle}
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm">
                <p className="font-black text-emerald-200">AI is active</p>
                <p className="mt-1 text-slate-300">Calls, jobs, quotes and follow-ups are being captured.</p>
              </div>
            </div>
          </header>

          <div className="mt-4">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

export function DemoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-100">
      {children}
    </span>
  );
}

