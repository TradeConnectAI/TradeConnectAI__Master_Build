import { callTranscripts } from "@/data/mock/transcripts";

export default function TranscriptDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <p className="text-cyan-300 font-semibold">AI Reception Demo</p>
          <h1 className="text-4xl font-bold">AI Call Transcripts</h1>
          <p className="text-slate-300 mt-2">
            Realistic AI conversations showing bookings, lead qualification, emergency handling, and tyre kicker filtering.
          </p>
        </div>

        <div className="space-y-6">
          {callTranscripts.map((call) => (
            <section
              key={call.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{call.type}</h2>
                  <p className="text-slate-400">{call.outcome}</p>
                </div>

                <div className="flex gap-3">
                  <div className="rounded-xl bg-cyan-400 px-4 py-2 text-slate-950 font-black">
                    Intent {call.intentScore}%
                  </div>

                  <div className="rounded-xl border border-slate-700 px-4 py-2 font-bold">
                    {call.estimatedValue}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {call.transcript.map((line, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-4 ${
                      line.speaker === "AI"
                        ? "bg-slate-950 border border-cyan-800"
                        : "bg-slate-800"
                    }`}
                  >
                    <p className="text-sm text-cyan-300 font-bold mb-1">
                      {line.speaker}
                    </p>

                    <p className="text-slate-200 leading-relaxed">
                      {line.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

