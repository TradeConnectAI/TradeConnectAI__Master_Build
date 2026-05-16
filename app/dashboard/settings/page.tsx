export default function SettingsPage() {
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
                        <a href="/dashboard/payments" className="block rounded-2xl px-4 py-3 text-white/70 hover:bg-white/5">
                            Payments
                        </a>

                        <div className="rounded-2xl bg-blue-500 px-4 py-3 font-semibold text-white">
                            Settings
                        </div>
                    </nav>
                </aside>

                <section className="flex-1 p-6 md:p-10">
                    <div className="mb-10">
                        <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                            Settings
                        </p>

                        <h2 className="mt-2 text-4xl font-black">
                            Business & AI Setup
                        </h2>

                        <p className="mt-2 text-white/50">
                            Configure how TradeConnectAI handles leads, bookings and customer replies.
                        </p>
                    </div>

                    <div className="grid gap-8 xl:grid-cols-2">
                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                            <h3 className="text-2xl font-black">Business Profile</h3>

                            <div className="mt-6 space-y-4">
                                {[
                                    ["Business Name", "Cardiff Electrical Services"],
                                    ["Trade Type", "Electrician"],
                                    ["Service Area", "Cardiff, Newport, Caerphilly"],
                                    ["Contact Number", "02920 000000"],
                                ].map(([label, value]) => (
                                    <div key={label}>
                                        <p className="mb-2 text-sm text-white/40">{label}</p>
                                        <div className="rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white/80">
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                            <h3 className="text-2xl font-black">AI Behaviour</h3>

                            <div className="mt-6 space-y-4">
                                {[
                                    ["Reply Tone", "Professional & friendly"],
                                    ["Lead Qualification", "Ask job type, urgency, postcode"],
                                    ["Emergency Handling", "Prioritise same-day urgent jobs"],
                                    ["Human Takeover", "Alert owner when high-value lead arrives"],
                                ].map(([label, value]) => (
                                    <div key={label} className="rounded-2xl bg-[#0b1220] p-4">
                                        <p className="text-sm text-white/40">{label}</p>
                                        <p className="mt-2 font-bold text-blue-300">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                            <h3 className="text-2xl font-black">Notifications</h3>

                            <div className="mt-6 space-y-4">
                                {[
                                    "New qualified lead",
                                    "Emergency job detected",
                                    "Customer confirms booking",
                                    "Quote follow-up needed",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center justify-between rounded-2xl bg-[#0b1220] p-4"
                                    >
                                        <span className="font-semibold text-white/80">{item}</span>
                                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-bold text-green-300">
                                            On
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                            <h3 className="text-2xl font-black">Integrations</h3>

                            <div className="mt-6 space-y-4">
                                {[
                                    ["Google Calendar", "Connected"],
                                    ["SMS Alerts", "Connected"],
                                    ["Stripe Payments", "Pending"],
                                    ["WhatsApp", "Coming Soon"],
                                ].map(([name, status]) => (
                                    <div
                                        key={name}
                                        className="flex items-center justify-between rounded-2xl bg-[#0b1220] p-4"
                                    >
                                        <span className="font-semibold text-white/80">{name}</span>
                                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-bold text-blue-300">
                                            {status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}