export default function BookingsPage() {
    return (
        <main className="min-h-screen bg-[#020817] text-white">
            <div className="flex">

                {/* SIDEBAR */}
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

                        <a
                            href="/dashboard"
                            className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                            Dashboard
                        </a>

                        <a
                            href="/dashboard/leads"
                            className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                            Leads Inbox
                        </a>

                        <div className="rounded-2xl bg-blue-500 px-4 py-3 font-semibold text-white">
                            Bookings
                        </div>

                        <a
                            href="/dashboard/conversations"
                            className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                            AI Conversations
                        </a>

                        <a
                            href="/dashboard/customers"
                            className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                            Customers
                        </a>

                        <a
                            href="/dashboard/payments"
                            className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                            Payments
                        </a>

                        <a
                            href="/dashboard/settings"
                            className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                            Settings
                        </a>

                    </nav>
                </aside>

                {/* MAIN CONTENT */}
                <section className="flex-1 p-6 md:p-10">

                    {/* TOP BAR */}
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">

                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                                Booking System
                            </p>

                            <h2 className="mt-2 text-4xl font-black">
                                Upcoming Jobs
                            </h2>

                            <p className="mt-2 text-white/50">
                                AI scheduled jobs automatically synced to your calendar.
                            </p>
                        </div>

                        <button className="rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-400">
                            + New Booking
                        </button>

                    </div>

                    {/* BOOKINGS GRID */}
                    <div className="grid gap-6 lg:grid-cols-2">

                        {[
                            {
                                title: "Fuse Board Investigation",
                                time: "Today • 7:00pm",
                                location: "Cardiff",
                                engineer: "Steve",
                                status: "Confirmed",
                            },

                            {
                                title: "Leak Investigation",
                                time: "Tomorrow • 10:30am",
                                location: "Newport",
                                engineer: "Lewis",
                                status: "Scheduled",
                            },

                            {
                                title: "Bathroom Renovation Quote",
                                time: "Friday • 2:00pm",
                                location: "Bristol",
                                engineer: "Steve",
                                status: "Pending",
                            },

                            {
                                title: "Emergency Boiler Repair",
                                time: "Saturday • 8:00am",
                                location: "Swansea",
                                engineer: "Mike",
                                status: "Urgent",
                            },

                        ].map((booking) => (

                            <div
                                key={booking.title}
                                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-400/30"
                            >

                                <div className="flex items-start justify-between gap-4">

                                    <div>
                                        <h3 className="text-2xl font-black">
                                            {booking.title}
                                        </h3>

                                        <p className="mt-2 text-white/50">
                                            {booking.time}
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300">
                                        {booking.status}
                                    </span>

                                </div>

                                <div className="mt-6 grid gap-4 md:grid-cols-2">

                                    <div className="rounded-2xl bg-[#0b1220] p-4">
                                        <p className="text-sm text-white/40">
                                            Location
                                        </p>

                                        <p className="mt-2 font-bold text-blue-300">
                                            {booking.location}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#0b1220] p-4">
                                        <p className="text-sm text-white/40">
                                            Assigned Engineer
                                        </p>

                                        <p className="mt-2 font-bold text-blue-300">
                                            {booking.engineer}
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-6 flex flex-wrap gap-3">

                                    <button className="rounded-2xl bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-400">
                                        View Job
                                    </button>

                                    <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10">
                                        Message Customer
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>
            </div>
        </main>
    );
}