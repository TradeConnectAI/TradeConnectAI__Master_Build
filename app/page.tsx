import Link from "next/link";

export default function HomePage() {
    const features = [
        "AI Lead Assistant",
        "CRM & Pipeline",
        "Bookings & Scheduling",
        "Quotes & Invoices",
        "Customer Portal",
        "Team Management",
        "Analytics Dashboard",
        "AI Automation",
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            {/* HERO */}
            <section className="border-b border-slate-800">
                <div className="mx-auto max-w-7xl px-6 py-24">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                            TradeConnectAI
                        </p>

                        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
                            AI-powered operating system for modern trade businesses.
                        </h1>

                        <p className="mt-6 text-lg text-slate-400">
                            Manage leads, quotes, engineers, invoices, scheduling and customer
                            communication from one intelligent platform.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/dashboard"
                                className="rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                            >
                                Open Dashboard
                            </Link>

                            <Link
                                href="/portal"
                                className="rounded-2xl border border-slate-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-900"
                            >
                                Customer Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                            Platform Features
                        </p>

                        <h2 className="mt-3 text-4xl font-bold">
                            Built for real trade companies.
                        </h2>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/40"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                ✓
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">{feature}</h3>

                            <p className="mt-3 text-sm text-slate-400">
                                Premium SaaS tooling designed to streamline operations and
                                automate repetitive admin work.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-slate-800">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 md:p-16">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                                Ready to scale?
                            </p>

                            <h2 className="mt-4 text-4xl font-bold">
                                Run your entire trade business from one platform.
                            </h2>

                            <p className="mt-5 text-slate-400">
                                AI workflows, CRM, scheduling, invoicing and customer
                                communication — all unified into a modern operating system.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="/dashboard"
                                    className="rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950"
                                >
                                    Launch Dashboard
                                </Link>

                                <Link
                                    href="/portal/dashboard"
                                    className="rounded-2xl border border-slate-700 px-6 py-4 text-sm font-semibold"
                                >
                                    View Customer Portal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}