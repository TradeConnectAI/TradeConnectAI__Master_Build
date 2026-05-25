import DemoSidebar from "@/components/DemoSidebar";

const messages = [
  {
    from: "Trade Connect AI",
    text: "Your engineer has been assigned and is preparing to leave.",
    time: "08:46",
    type: "system",
  },
  {
    from: "Tom Hughes",
    text: "I'm on my way now. ETA is around 09:55.",
    time: "09:20",
    type: "trade",
  },
  {
    from: "Customer",
    text: "Thanks, side gate is unlocked.",
    time: "09:24",
    type: "customer",
  },
];

export default function MessagesPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 text-white md:flex">
      <DemoSidebar />

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Customer Messages
        </p>

        <h1 className="mt-2 text-4xl font-black md:text-5xl">
          Simple updates in one place.
        </h1>

        <p className="mt-3 max-w-3xl leading-8 text-slate-400">
          Customers do not need to chase when updates are clear and easy to find.
        </p>

        <div className="mt-8 max-w-3xl space-y-4">
          {messages.map((message) => (
            <div
              key={`${message.from}-${message.time}`}
              className={`rounded-2xl border p-6 ${
                message.type === "customer"
                  ? "border-cyan-400/20 bg-cyan-400/10"
                  : "border-slate-800 bg-slate-900/70"
              }`}
            >
              <div className="flex justify-between gap-4">
                <div className="text-sm font-bold text-cyan-300">{message.from}</div>
                <div className="text-xs text-slate-500">{message.time}</div>
              </div>

              <p className="mt-3 leading-7 text-slate-300">{message.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-xl font-black">Why this helps</h2>
          <p className="mt-3 leading-7 text-slate-400">
            Simple updates reduce chasing calls and make the business feel more professional without creating extra admin.
          </p>
        </div>
      </section>
    </main>
  );
}


