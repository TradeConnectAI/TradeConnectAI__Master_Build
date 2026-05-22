import Link from "next/link";
import { calls, callStats, callFlow } from "@/data/mock/calls";

export default function AIReceptionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-cyan-300 font-semibold">Business Demo</p>
            <h1 className="text-4xl font-bold">AI Call Reception</h1>
            <p className="text-slate-300 mt-2">
              AI answers calls, qualifies leads, books real jobs, and filters tyre kickers before they waste the engineer’s day.
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="/operations-demo/calls/live" className="rounded-xl bg-cyan-400 px-4 py-2 font-bold text-slate-950">
              Live Call View
            </Link>
            <Link href="/operations-demo/calls/settings" className="rounded-xl border border-slate-700 px-4 py-2 font-bold">
              Settings
            </Link>
          </div>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <Stat title="Calls answered" value={callStats.answeredToday} />
          <Stat title="Bookings made" value={callStats.bookingsMade} />
          <Stat title="Tyre kickers filtered" value={callStats.tyreKickersFiltered} />
          <Stat title="Revenue captured" value={callStats.estimatedRevenue} />
          <Stat title="Missed calls recovered" value={callStats.missedCallsRecovered} />
          <Stat title="Urgent escalations" value={callStats.urgentEscalations} />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-xl font-bold mb-4">Call Outcomes</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="text-left py-3">Caller</th>
                    <th className="text-left py-3">Issue</th>
                    <th className="text-left py-3">Postcode</th>
                    <th className="text-left py-3">Intent</th>
                    <th className="text-left py-3">Status</th>
                    <th className="text-left py-3">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {calls.map((call) => (
                    <tr key={call.id} className="border-b border-slate-800">
                      <td className="py-4">
                        <div className="font-semibold">{call.caller}</div>
                        <div className="text-slate-400">{call.phone}</div>
                      </td>
                      <td className="py-4">{call.issue}</td>
                      <td className="py-4">{call.postcode}</td>
                      <td className="py-4">
                        <span className={`rounded-full px-3 py-1 font-bold ${
                          call.intentScore >= 80 ? "bg-emerald-400 text-slate-950" :
                          call.intentScore >= 50 ? "bg-amber-300 text-slate-950" :
                          "bg-red-400 text-white"
                        }`}>
                          {call.intentScore}%
                        </span>
                      </td>
                      <td className="py-4">{call.status}</td>
                      <td className="py-4 font-semibold">{call.estimatedValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-xl font-bold mb-4">AI Call Flow</h2>
            <div className="space-y-3">
              {callFlow.map((step, index) => (
                <div key={step} className="flex gap-3 items-center">
                  <div className="h-8 w-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="text-2xl font-black mt-2">{value}</p>
    </div>
  );
}

