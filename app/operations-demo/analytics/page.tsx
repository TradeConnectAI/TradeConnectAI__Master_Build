import Link from "next/link";

export default function OperationsDemoSubPage() {
  const nav = [
    ["Dashboard", "/operations-demo"],
    ["Leads Inbox", "/operations-demo/leads"],
    ["Bookings", "/operations-demo/bookings"],
    ["AI Conversations", "/operations-demo/conversations"],
    ["Customers", "/operations-demo/customers"],
    ["Quotes", "/operations-demo/quotes"],
    ["Invoices", "/operations-demo/invoices"],
    ["Payments", "/operations-demo/payments"],
    ["Analytics", "/operations-demo/analytics"],
    ["Settings", "/operations-demo/settings"],
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 bg-slate-900/40 p-5">
          <h1 className="text-2xl font-black">
            Trade<span className="text-cyan-400">Connect</span>AI
          </h1>

          <p className="mt-2 text-sm font-bold text-cyan-300">
            Business Demo
          </p>

          <nav className="mt-8 space-y-2">
            {nav.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 font-bold hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="px-4 py-8 md:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              AI toolbox
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              Analytics
            </h2>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                    Demo Record
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Lead Conversion
                  </h3>

                  <p className="mt-2 text-slate-400">
                    68%
                  </p>

                  <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-100">
                    Up 12% from last week.
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button className="rounded-2xl bg-cyan-400 px-5 py-3 font-black text-slate-950">
                      Open
                    </button>

                    <button className="rounded-2xl border border-white/10 px-5 py-3 font-black hover:bg-white/10">
                      AI Suggestion
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

