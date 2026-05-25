import Link from "next/link";

const messages = [
  {
    from: "customer",
    text: "Hi, I need a skip for General job in Barry. Maybe 8 yard.",
  },
  {
    from: "ai",
    text: "No problem. I can help with that. Is it household waste, Urgent job, soil, or mixed General job?",
  },
  {
    from: "customer",
    text: "Mixed General job. It’s for a house clear out.",
  },
  {
    from: "ai",
    text: "Great. An 8 yard skip is usually right for that. I’ve checked availability and we can deliver today between 10:30 and 12:00.",
  },
  {
    from: "ai",
    text: "Because this is going on the road, I’ve added a council access check check. The system will flag it to the office if approval is needed.",
  },
  {
    from: "customer",
    text: "Can I pay now?",
  },
  {
    from: "ai",
    text: "Yes. The total is £294 including VAT. Once paid, I’ll send the receipt and job details to the driver phone app.",
  },
];

export default function AIWebchatPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-300">
              TradeConnectAI Operations Demo
            </p>
            <h1 className="text-4xl font-bold tracking-tight">
              AI job booking Webchat
            </h1>
            <p className="mt-2 max-w-3xl text-slate-300">
              Customer asks for a skip. AI checks waste type, access check needs, availability,
              payment and driver scheduling.
            </p>
          </div>

          <Link
            href="/operations-demo"
            className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-semibold hover:bg-white/15"
          >
            Back to Operations
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Live Booking Result</h2>

            <div className="mt-5 space-y-4">
              {[
                ["Waste type", "Mixed General job"],
                ["Skip size", "8 yard skip"],
                ["Location", "Barry, South Wales"],
                ["access check", "Road access check check required"],
                ["Delivery slot", "Today 10:30 - 12:00"],
                ["Payment", "£294 inc VAT"],
                ["Driver", "Dean Horgan"],
                ["Status", "Ready to dispatch"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                >
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Chat Transcript</h2>
              <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-300">
                AI handled
              </span>
            </div>

            <div className="mt-6 max-h-[650px] space-y-4 overflow-y-auto pr-2">
              {messages.map((message, index) => (
                <div
                  key={`${message.from}-${index}`}
                  className={`flex ${message.from === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-relaxed shadow-lg ${
                      message.from === "customer"
                        ? "bg-blue-500 text-white"
                        : "bg-slate-800 text-slate-100"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3 rounded-2xl border border-white/10 bg-slate-900 p-3">
              <input
                value="Customer reply..."
                readOnly
                className="min-w-0 flex-1 bg-transparent px-3 text-slate-400 outline-none"
              />
              <button className="rounded-xl bg-blue-500 px-5 py-3 font-semibold">
                Send
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
