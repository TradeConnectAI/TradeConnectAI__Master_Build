export default function DashboardPage() {
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
                        {[
                            "Dashboard",
                            "Leads Inbox",
                            "Bookings",
                            "AI Conversations",
                            "Customers",
                            "Payments",
                            "Settings",
                        ].map((item, index) => (
                            <div
                                key={item}
                                className={
                                    index === 0
                                        ? "rounded-2xl bg-blue-500 px-4 py-3 font-semibold text-white"
                                        : "rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                                }
                            >
                                {item}
                            </div>
                        ))}
                    </nav>
                </aside>

                <section className="flex-1 p-6 md:p-10">
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                                Dashboard Overview
                            </p>
                            <h2 className="mt-2 text-4xl font-black">
                                Welcome Back 👋
                            </h2>
                            <p className="mt-2 text-white/50">
                                Your AI assistant is actively handling leads.
                            </p>
                        </div>

                        <a
                            href="/"
                            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                        >
                            ← Back To Site
                        </a>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {[
                            ["New Leads", "18", "+12% this week"],
                            ["Jobs Booked", "7", "+5 this week"],
                            ["AI Reply Time", "4s", "Instant response"],
                            ["Revenue", "£4.2k", "+18% this month"],
                        ].map(([label, value, note]) => (
                            <div
                                key={label}
                                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30"
                            >
                                <p className="text-sm text-white/50">{label}</p>
                                <div className="mt-4 text-5xl font-black text-blue-400">
                                    {value}
                                </div>
                                <p className="mt-3 text-sm text-green-400">{note}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 grid gap-8 xl:grid-cols-3">
                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:col-span-2">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-2xl font-black">Latest Leads</h3>
                                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300">
                                    Live
                                </span>
                            </div>

                            <div className="space-y-4">
                                {[
                                    ["Emergency Electrician", "Cardiff • Residential", "Qualified", "green"],
                                    ["Boiler Repair", "Newport • Urgent", "Pending", "yellow"],
                                    ["Bathroom Quote", "Caerphilly • Quote Requested", "Follow-up", "blue"],
                                ].map(([title, location, status, colour]) => (
                                    <div key={title} className="rounded-2xl bg-[#0b1220] p-5">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="font-bold">{title}</p>
                                                <p className="mt-1 text-sm text-white/50">
                                                    {location}
                                                </p>
                                            </div>

                                            <span
                                                className={
                                                    colour === "green"
                                                        ? "rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300"
                                                        : colour === "yellow"
                                                            ? "rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-300"
                                                            : "rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                                                }
                                            >
                                                {status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-2xl font-black">AI Activity</h3>
                                <span className="h-3 w-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                            </div>

                            <div className="space-y-5">
                                {[
                                    ["AI qualified emergency electrician lead", "2 mins ago"],
                                    ["AI offered booking slot for boiler repair", "12 mins ago"],
                                    ["Customer details captured successfully", "24 mins ago"],
                                    ["Reminder sent for quote follow-up", "1 hour ago"],
                                    ["Missed call recovered via SMS", "2 hours ago"],
                                ].map(([activity, time]) => (
                                    <div
                                        key={activity}
                                        className="border-l-2 border-blue-500/40 pl-4"
                                    >
                                        <p className="font-semibold text-white/90">{activity}</p>
                                        <p className="mt-1 text-sm text-white/40">{time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8 xl:grid-cols-2">
                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-2xl font-black">Upcoming Bookings</h3>
                                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300">
                                    Synced
                                </span>
                            </div>

                            <div className="space-y-4">
                                {[
                                    ["Fuse Board Investigation", "Today • 7:00pm • Cardiff"],
                                    ["Leak Investigation", "Tomorrow • 10:30am • Newport"],
                                    ["Property Maintenance Quote", "Friday • 2:00pm • Bristol"],
                                ].map(([title, detail]) => (
                                    <div key={title} className="rounded-2xl bg-[#0b1220] p-5">
                                        <p className="font-bold">{title}</p>
                                        <p className="mt-2 text-sm text-white/50">{detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <h3 className="mb-6 text-2xl font-black">AI Insights</h3>

                            <div className="space-y-4">
                                <div className="rounded-2xl bg-blue-500/10 p-5 text-blue-100">
                                    You are receiving most urgent enquiries between 6pm and 9pm.
                                </div>

                                <div className="rounded-2xl bg-white/5 p-5 text-white/70">
                                    Weekend enquiries have a 42% lower response rate without AI.
                                </div>

                                <div className="rounded-2xl bg-white/5 p-5 text-white/70">
                                    Missed call recovery could add an estimated £850/month in extra booked work.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}