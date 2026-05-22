export default function Founder() {
    return (
        <section className="bg-[#020817] px-6 py-24 text-white md:px-12 lg:px-20">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

                {/* LEFT */}
                <div>
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-300">
                        BUILT FOR TRADES
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        Designed By Someone Who Understands The Industry
                    </h2>

                    <p className="mt-8 text-lg leading-relaxed text-white/70">
                        TradeConnectAI wasn’t built by a Silicon Valley startup trying to
                        learn trades businesses from a spreadsheet.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-white/70">
                        It was built from real experience working in engineering, field
                        operations and customer environments where missed calls and slow
                        response times lose real money.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-white/70">
                        The goal is simple: help trades capture more work, automate admin
                        and stay focused on the tools.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

                    <div className="grid gap-6 sm:grid-cols-2">

                        <div className="rounded-2xl bg-[#0b1220] p-6">
                            <div className="text-4xl font-black text-blue-400">
                                24/7
                            </div>

                            <div className="mt-2 text-white/70">
                                AI Lead Capture
                            </div>
                        </div>

                        <div className="rounded-2xl bg-[#0b1220] p-6">
                            <div className="text-4xl font-black text-blue-400">
                                AI
                            </div>

                            <div className="mt-2 text-white/70">
                                Smart Booking System
                            </div>
                        </div>

                        <div className="rounded-2xl bg-[#0b1220] p-6">
                            <div className="text-4xl font-black text-blue-400">
                                SMS
                            </div>

                            <div className="mt-2 text-white/70">
                                Instant Notifications
                            </div>
                        </div>

                        <div className="rounded-2xl bg-[#0b1220] p-6">
                            <div className="text-4xl font-black text-blue-400">
                                CRM
                            </div>

                            <div className="mt-2 text-white/70">
                                Organised Dashboard
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}