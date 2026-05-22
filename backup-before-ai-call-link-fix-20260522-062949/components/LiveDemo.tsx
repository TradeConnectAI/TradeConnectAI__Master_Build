import FadeIn from "@/components/FadeIn";

export default function LiveDemo() {
    return (
        <section
            id="demo"
            className="relative overflow-hidden bg-[#030b18] px-6 py-24 text-white md:px-12 lg:px-20"
        >
            <FadeIn>
                <div className="mx-auto max-w-6xl">

                    {/* HEADER */}
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-300">
                            LIVE AI DEMO
                        </p>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                            See How TradeConnectAI Handles Leads
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
                            Your AI assistant replies instantly, qualifies customers and turns
                            missed enquiries into booked work.
                        </p>
                    </div>

                    {/* CHAT DEMO */}
                    <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-blue-500/10">

                        {/* CUSTOMER MESSAGE */}
                        <div className="mb-6 flex justify-end">
                            <div className="max-w-[80%] rounded-3xl rounded-br-md bg-blue-500 px-6 py-4 text-lg font-medium text-white shadow-lg shadow-blue-500/20">
                                Need an emergency electrician in Cardiff tonight.
                            </div>
                        </div>

                        {/* AI MESSAGE */}
                        <div className="mb-6 flex justify-start">
                            <div className="max-w-[80%] rounded-3xl rounded-bl-md border border-white/10 bg-white/10 px-6 py-4 text-lg text-white">
                                Hi 👋 We can help with that.
                                <br />
                                <br />
                                Is this residential or commercial?
                            </div>
                        </div>

                        {/* CUSTOMER */}
                        <div className="mb-6 flex justify-end">
                            <div className="max-w-[80%] rounded-3xl rounded-br-md bg-blue-500 px-6 py-4 text-lg font-medium text-white shadow-lg shadow-blue-500/20">
                                Residential. Power keeps tripping downstairs.
                            </div>
                        </div>

                        {/* AI */}
                        <div className="flex justify-start">
                            <div className="max-w-[80%] rounded-3xl rounded-bl-md border border-white/10 bg-white/10 px-6 py-4 text-lg text-white">
                                Thanks — we’ve got availability tonight between 7pm–9pm.
                                <br />
                                <br />
                                What’s the property postcode?
                            </div>
                        </div>

                    </div>

                    {/* STATS */}
                    <div className="mt-14 grid gap-6 md:grid-cols-3">

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                            <div className="text-4xl font-black text-blue-400">
                                24/7
                            </div>

                            <div className="mt-2 text-white/70">
                                Instant AI Replies
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                            <div className="text-4xl font-black text-blue-400">
                                3x
                            </div>

                            <div className="mt-2 text-white/70">
                                Faster Lead Response
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                            <div className="text-4xl font-black text-blue-400">
                                0
                            </div>

                            <div className="mt-2 text-white/70">
                                Missed Enquiries
                            </div>
                        </div>

                    </div>
                </div>
            </FadeIn>
        </section>
    );
}