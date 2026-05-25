const callSteps = [
  {
    time: "08:42",
    title: "Missed call captured",
    text: "Customer calls while the trader is on a job. The AI answers instantly and asks what they need.",
  },
  {
    time: "08:43",
    title: "Job details collected",
    text: "The AI captures name, address, issue, urgency, access notes and preferred time.",
  },
  {
    time: "08:44",
    title: "Job created",
    text: "A new job card appears in the dashboard ready to accept, quote or assign.",
  },
  {
    time: "08:45",
    title: "Customer updated",
    text: "Customer receives a professional confirmation message so they know they have been heard.",
  },
];

const transcript = [
  ["Customer", "Hi, I need someone to look at a leak under the kitchen sink."],
  ["AI", "No problem. Is water currently coming through or is it contained?"],
  ["Customer", "It is contained, but getting worse."],
  ["AI", "Got it. I will mark that as urgent. What is the best address and contact number?"],
  ["Customer", "14 Harbour View, Barry. This number is fine."],
  ["AI", "Thanks. I have logged the job and someone will confirm the slot shortly."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-16">
        <div>
          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            AI Call Helper Demo
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            See how missed calls become booked jobs.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            This demo shows the practical flow for a small trade business:
            answer the call, collect the job details, create the task and keep
            the customer updated.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Answer rate", "100%"],
              ["Average capture time", "90 sec"],
              ["Jobs logged today", "14"],
              ["Customer updates sent", "22"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-cyan-950/20"
              >
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-2 text-3xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/40">
          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-black/40 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-400">Live call</p>
                <h2 className="text-2xl font-black">Kitchen sink leak</h2>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-bold text-emerald-300">
                Captured
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {transcript.map(([speaker, line], index) => (
                <div
                  key={`${speaker}-${index}`}
                  className={`rounded-2xl border p-4 ${
                    speaker === "AI"
                      ? "border-cyan-400/20 bg-cyan-400/10"
                      : "border-white/10 bg-white/[0.05]"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    {speaker}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {callSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-sm font-black text-cyan-300">{step.time}</p>
              <h3 className="mt-3 text-xl font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}