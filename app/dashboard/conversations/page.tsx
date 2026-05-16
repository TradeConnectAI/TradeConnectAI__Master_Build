export default function ConversationsPage() {
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
                        <div className="rounded-2xl px-4 py-3 text-white/70">
                            Bookings
                        </div>
                        <div className="rounded-2xl bg-blue-500 px-4 py-3 font-semibold text-white">
                            AI Conversations
                        </div>
                        <div className="rounded-2xl px-4 py-3 text-white/70">Customers</div>
                        <div className="rounded-2xl px-4 py-3 text-white/70">Payments</div>
                        <div className="rounded-2xl px-4 py-3 text-white/70">Settings</div>
                    </nav>
                </aside>

                <section className="flex-1 p-6 md:p-10">
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                                AI Conversations
                            </p>
                            <h2 className="mt-2 text-4xl font-black">
                                Emergency Electrician Lead
                            </h2>
                            <p className="mt-2 text-white/50">
                                AI qualified the customer and offered a booking slot automatically.
                            </p>
                        </div>

                        <a
                            href="/dashboard/leads"
                            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10"
                        >
                            ← Back To Leads
                        </a>
                    </div>

                    <div className="grid gap-8 xl:grid-cols-3">
                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:col-span-2">
                            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                                <div>
                                    <h3 className="text-2xl font-black">Mark Williams</h3>
                                    <p className="mt-1 text-sm text-white/50">
                                        Cardiff • Residential • Web Chat
                                    </p>
                                </div>

                                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300">
                                    Qualified
                                </span>
                            </div>

                            <div className="space-y-5">
                                <div className="flex justify-end">
                                    <div className="max-w-[80%] rounded-3xl rounded-br-md bg-blue-500 px-5 py-4">
                                        Need an emergency electrician in Cardiff tonight.
                                        <p className="mt-2 text-xs text-blue-100/70">Customer • 18:42</p>
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-3xl rounded-bl-md border border-white/10 bg-[#0b1220] px-5 py-4">
                                        Hi 👋 We can help with that. Is this residential or commercial?
                                        <p className="mt-2 text-xs text-white/40">TradeConnectAI • 18:42</p>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <div className="max-w-[80%] rounded-3xl rounded-br-md bg-blue-500 px-5 py-4">
                                        Residential. Power keeps tripping downstairs.
                                        <p className="mt-2 text-xs text-blue-100/70">Customer • 18:43</p>
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-3xl rounded-bl-md border border-white/10 bg-[#0b1220] px-5 py-4">
                                        Thanks — we’ve got availability tonight between 7pm–9pm. What’s the property postcode?
                                        <p className="mt-2 text-xs text-white/40">TradeConnectAI • 18:43</p>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <div className="max-w-[80%] rounded-3xl rounded-br-md bg-blue-500 px-5 py-4">
                                        CF10 1AA
                                        <p className="mt-2 text-xs text-blue-100/70">Customer • 18:44</p>
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-3xl rounded-bl-md border border-white/10 bg-[#0b1220] px-5 py-4">
                                        Perfect. I’ve flagged this as urgent and sent it to the engineer. We can hold 7:30pm for you.
                                        <p className="mt-2 text-xs text-white/40">TradeConnectAI • 18:44</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                                <button className="rounded-2xl bg-blue-500 px-5 py-3 font-bold text-white hover:bg-blue-400">
                                    Confirm Booking
                                </button>
                                <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10">
                                    Human Takeover
                                </button>
                                <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10">
                                    Send Quote
                                </button>
                            </div>
                        </div>

                        <aside className="space-y-6">
                            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                                <h3 className="text-2xl font-black">AI Qualification</h3>

                                <div className="mt-6 space-y-4">
                                    <div className="rounded-2xl bg-[#0b1220] p-4">
                                        <p className="text-sm text-white/40">Urgency</p>
                                        <p className="mt-2 font-bold text-red-300">High</p>
                                    </div>

                                    <div className="rounded-2xl bg-[#0b1220] p-4">
                                        <p className="text-sm text-white/40">Job Type</p>
                                        <p className="mt-2 font-bold text-blue-300">Electrical Fault</p>
                                    </div>

                                    <div className="rounded-2xl bg-[#0b1220] p-4">
                                        <p className="text-sm text-white/40">Recommended Action</p>
                                        <p className="mt-2 text-white/70">
                                            Confirm 7:30pm booking and notify engineer immediately.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[32px] border border-blue-500/20 bg-blue-500/10 p-6">
                                <h3 className="text-xl font-black text-blue-100">
                                    AI Summary
                                </h3>
                                <p className="mt-4 leading-relaxed text-white/75">
                                    Customer needs urgent electrician support tonight. Issue appears to be repeated circuit tripping downstairs. Postcode captured and booking slot offered.
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        </main>
    );
}