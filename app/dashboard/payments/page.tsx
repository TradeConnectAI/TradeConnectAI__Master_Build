export default function PaymentsPage() {
    return (
        <main className="min-h-screen bg-[#020817] text-white">
            <div className="flex">
                <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-[#061226] p-6 lg:block">
                    <div className="mb-12">
                        <h1 className="text-2xl font-black text-blue-400">
                            TradeConnectAI
                        </h1>
                        <p className="mt-2 text-sm text-white/50">
                            AI Operations Platform
                        </p>
                    </div>

                    <nav className="space-y-3">
                        <a href="/dashboard" className="block rounded-2xl px-4 py-3 text-white/70 hover:bg-white/5">
                            Dashboard
                        </a>
                        <a href="/dashboard/leads" className="block rounded-2xl px-4 py-3 text-white/70 hover:bg-white/5">
                            Leads Inbox
                        </a>
                        <a href="/dashboard/bookings" className="block rounded-2xl px-4 py-3 text-white/70 hover:bg-white/5">
                            Bookings
                        </a>
                        <a href="/dashboard/conversations" className="block rounded-2xl px-4 py-3 text-white/70 hover:bg-white/5">
                            AI Conversations
                        </a>
                        <a href="/dashboard/customers" className="block rounded-2xl px-4 py-3 text-white/70 hover:bg-white/5">
                            Customers
                        </a>

                        <div className="rounded-2xl bg-blue-500 px-4 py-3 font-semibold text-white">
                            Payments
                        </div>

                        <a href="/dashboard/settings" className="block rounded-2xl px-4 py-3 text-white/70 hover:bg-white/5">
                            Settings
                        </a>
                    </nav>
                </aside>

                <section className="flex-1 p-6 md:p-10">
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                                Payments
                            </p>

                            <h2 className="mt-2 text-4xl font-black">
                                Quotes, Invoices & Payments
                            </h2>

                            <p className="mt-2 text-white/50">
                                Track quotes, invoices and paid jobs from one place.
                            </p>
                        </div>

                        <button className="rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-400">
                            + Create Invoice
                        </button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                            <p className="text-sm text-white/50">Paid This Month</p>
                            <p className="mt-4 text-5xl font-black text-blue-400">£4.2k</p>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                            <p className="text-sm text-white/50">Outstanding</p>
                            <p className="mt-4 text-5xl font-black text-yellow-300">£1.1k</p>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                            <p className="text-sm text-white/50">Quotes Pending</p>
                            <p className="mt-4 text-5xl font-black text-blue-400">6</p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6">
                        <h3 className="mb-6 text-2xl font-black">Recent Transactions</h3>

                        <div className="space-y-4">
                            {[
                                ["Fuse Board Investigation", "Mark Williams", "£240", "Paid"],
                                ["Boiler Repair", "Sarah Jenkins", "£180", "Outstanding"],
                                ["Bathroom Renovation Quote", "Tom Evans", "£3,800", "Quote Sent"],
                                ["Leak Investigation", "Helen Morris", "£120", "Paid"],
                            ].map(([job, customer, amount, status]) => (
                                <div
                                    key={job}
                                    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#0b1220] p-5"
                                >
                                    <div>
                                        <p className="font-bold">{job}</p>
                                        <p className="mt-1 text-sm text-white/50">{customer}</p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xl font-black text-blue-300">{amount}</p>
                                        <p className="mt-1 text-sm text-white/50">{status}</p>
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