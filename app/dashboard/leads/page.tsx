export default function LeadsPage() {
    return (
        <main className="min-h-screen bg-[#020817] text-white">
            <div className="flex">
                <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-[#061226] p-6 lg:block">
                    <div className="mb-12">
                        <h1 className="text-2xl font-black text-blue-400">
                            TradeConnectAI
                        </h1>
                        <p className="mt-2 text-sm text-white/50">
                            AI toolbox
                        </p>
                    </div>

                    <nav className="space-y-3">
                        <a
                            href="/dashboard"
                            className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                            Dashboard
                        </a>

                        <div className="rounded-2xl bg-blue-500 px-4 py-3 font-semibold text-white">
                            Leads Inbox
                        </div>

                        <div className="rounded-2xl px-4 py-3 text-white/70">
                            Bookings
                        </div>

                        <div className="rounded-2xl px-4 py-3 text-white/70">
                            AI Conversations
                        </div>

                        <div className="rounded-2xl px-4 py-3 text-white/70">
                            Customers
                        </div>

                        <div className="rounded-2xl px-4 py-3 text-white/70">
                            Payments
                        </div>

                        <div className="rounded-2xl px-4 py-3 text-white/70">
                            Settings
                        </div>
                    </nav>
                </aside>

                <section className="flex-1 p-6 md:p-10">
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                                Leads Inbox
                            </p>
                            <h2 className="mt-2 text-4xl font-black">
                                AI Qualified Leads
                            </h2>
                            <p className="mt-2 text-white/50">
                                Every enquiry captured, summarised and prioritised automatically.
                            </p>
                        </div>

                        <a
                            href="/dashboard"
                            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                        >
                            ← Back To Dashboard
                        </a>
                    </div>

                    <div className="grid gap-6 xl:grid-cols-1 md:grid-cols-1 md:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                        <div className="space-y-5 xl:col-span-2">
                            {[
                                {
                                    title: "Emergency Electrician Needed",
                                    customer: "Mark Williams",
                                    location: "Cardiff",
                                    urgency: "High",
                                    status: "Qualified",
                                    summary:
                                        "Customer has power tripping downstairs and needs an electrician tonight between 7pm–9pm.",
                                    action: "Booking slot offered",
                                },
                                {
                                    title: "Boiler Repair Enquiry",
                                    customer: "Sarah Jenkins",
                                    location: "Newport",
                                    urgency: "Medium",
                                    status: "Pending",
                                    summary:
                                        "Customer reports boiler losing pressure. AI collected postcode and asked for photos.",
                                    action: "Waiting for customer reply",
                                },
                                {
                                    title: "Bathroom Renovation Quote",
                                    customer: "Tom Evans",
                                    location: "Caerphilly",
                                    urgency: "Low",
                                    status: "Follow-up",
                                    summary:
                                        "Customer wants a quote for a full bathroom refit. AI scheduled a follow-up for Friday.",
                                    action: "Follow-up scheduled",
                                },
                            ].map((lead) => (
                                <div
                                    key={lead.title}
                                    className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-400/30"
                                >
                                    <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-black">{lead.title}</h3>
                                            <p className="mt-2 text-white/50">
                                                {lead.customer} • {lead.location}
                                            </p>
                                        </div>

                                        <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
                                            {lead.status}
                                        </span>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 md:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                                        <div className="rounded-2xl bg-[#0b1220] p-4">
                                            <p className="text-sm text-white/40">Urgency</p>
                                            <p className="mt-2 font-bold text-blue-300">
                                                {lead.urgency}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-[#0b1220] p-4">
                                            <p className="text-sm text-white/40">AI Action</p>
                                            <p className="mt-2 font-bold text-blue-300">
                                                {lead.action}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-[#0b1220] p-4">
                                            <p className="text-sm text-white/40">Source</p>
                                            <p className="mt-2 font-bold text-blue-300">
                                                Web Chat
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                                        <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                                            AI Summary
                                        </p>
                                        <p className="mt-3 leading-relaxed text-white/80">
                                            {lead.summary}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <button className="rounded-2xl bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-400">
                                            Book Job
                                        </button>
                                        <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10">
                                            Send Reply
                                        </button>
                                        <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10">
                                            View Conversation
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <h3 className="text-2xl font-black">AI Lead Insights</h3>

                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl bg-[#0b1220] p-5">
                                    <p className="text-sm text-white/40">Highest Value Lead</p>
                                    <p className="mt-2 font-bold text-blue-300">
                                        Bathroom Renovation Quote
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-[#0b1220] p-5">
                                    <p className="text-sm text-white/40">Most Urgent</p>
                                    <p className="mt-2 font-bold text-blue-300">
                                        Emergency Electrician
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-[#0b1220] p-5">
                                    <p className="text-sm text-white/40">AI Recommendation</p>
                                    <p className="mt-2 leading-relaxed text-white/70">
                                        Prioritise urgent evening jobs. These convert fastest when
                                        replied to within 60 seconds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

