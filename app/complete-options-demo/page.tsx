import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const stats = [
  ["Live enquiries", "18", "+4 today"],
  ["Quotes out", "£28,450", "9 awaiting reply"],
  ["Jobs booked", "12", "next 7 days"],
  ["AI calls handled", "37", "92% answered"],
  ["Customer updates", "64", "sent this week"],
  ["Revenue pipeline", "£74,200", "warm + booked"],
];

const jobs = [
  {
    customer: "Mrs Jenkins",
    type: "Kitchen refit enquiry",
    status: "AI booked survey",
    value: "£14,500",
    time: "Today 10:30",
  },
  {
    customer: "Tom Richards",
    type: "Bathroom quote follow-up",
    status: "Customer wants callback",
    value: "£6,800",
    time: "Today 11:15",
  },
  {
    customer: "Angela Morris",
    type: "Extension planning visit",
    status: "Survey assigned",
    value: "£32,000",
    time: "Tomorrow 09:00",
  },
  {
    customer: "David Price",
    type: "Window and door package",
    status: "Quote sent",
    value: "£8,950",
    time: "Friday 14:00",
  },
];

const aiCalls = [
  {
    caller: "New lead",
    summary:
      "Customer asked about a garage conversion. AI captured postcode, budget range, preferred callback time and photos requested.",
    outcome: "Survey request created",
  },
  {
    caller: "Existing customer",
    summary:
      "Customer wanted update on bathroom start date. AI checked schedule and sent polite SMS update.",
    outcome: "Customer updated",
  },
  {
    caller: "Missed call",
    summary:
      "Caller wanted new kitchen estimate. AI qualified job and offered two survey slots.",
    outcome: "Lead saved",
  },
];

const tasks = [
  "Call Tom Richards about bathroom quote",
  "Send finance option email to Mrs Jenkins",
  "Confirm installer availability for next Monday",
  "Request before photos for garage conversion",
  "Prepare quote pack for Angela Morris",
];

export default async function CompleteOptionsDemoPage() {
  const cookieStore = await cookies();
  const authed = cookieStore.get("complete_options_auth")?.value === "1";

  if (!authed) {
    redirect("/complete-options-login");
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-44 rounded-2xl bg-white p-2">
              <Image
                src="/complete-options-logo.jpeg"
                alt="Complete Options"
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
                Beta Operations Portal
              </p>
              <h1 className="text-xl font-black">Complete Options Dashboard</h1>
            </div>
          </div>

          <form action="/api/complete-options-logout" method="post">
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-200 hover:bg-white/10">
              Logout
            </button>
          </form>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(83,183,223,0.25),transparent_35%),linear-gradient(135deg,rgba(11,99,189,0.34),rgba(7,17,31,1))] p-6 shadow-2xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
                AI Receptionist + Job Control
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Every enquiry captured, quoted and followed up.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
                This demo shows how Complete Options could manage calls, qualify
                leads, book surveys, chase quotes, update customers and keep the team
                aligned from one clean operations screen.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#ai"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#0b4f9c]"
                >
                  View AI calls
                </a>
                <a
                  href="#jobs"
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white"
                >
                  View live jobs
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                Today&apos;s AI Summary
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <b className="text-cyan-100">09:12</b>
                  <p className="mt-1 text-sm text-slate-200">
                    AI answered missed kitchen enquiry and booked survey request.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <b className="text-cyan-100">10:44</b>
                  <p className="mt-1 text-sm text-slate-200">
                    Customer update sent for bathroom installation schedule.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <b className="text-cyan-100">11:26</b>
                  <p className="mt-1 text-sm text-slate-200">
                    Quote follow-up reminder created for admin team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(([label, value, note]) => (
            <div
              key={label}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                {label}
              </p>
              <p className="mt-3 text-3xl font-black text-white">{value}</p>
              <p className="mt-2 text-sm text-cyan-200">{note}</p>
            </div>
          ))}
        </section>

        <section id="jobs" className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                  Live Workboard
                </p>
                <h3 className="mt-2 text-2xl font-black">Jobs and quote flow</h3>
              </div>
              <span className="rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-bold text-cyan-100">
                Live demo data
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead className="bg-white/10 text-xs uppercase tracking-[0.2em] text-slate-300">
                  <tr>
                    <th className="px-4 py-4">Customer</th>
                    <th className="px-4 py-4">Job</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-4 py-4">Value</th>
                    <th className="px-4 py-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={`${job.customer}-${job.time}`} className="border-t border-white/10">
                      <td className="px-4 py-4 font-bold text-white">{job.customer}</td>
                      <td className="px-4 py-4 text-slate-300">{job.type}</td>
                      <td className="px-4 py-4">
                        <span className="rounded-full bg-blue-500/15 px-3 py-2 text-xs font-bold text-cyan-100">
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-black text-white">{job.value}</td>
                      <td className="px-4 py-4 text-slate-300">{job.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Team Tasks
            </p>
            <h3 className="mt-2 text-2xl font-black">Next actions</h3>

            <div className="mt-5 space-y-3">
              {tasks.map((task, index) => (
                <label
                  key={task}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm text-slate-200"
                >
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-cyan-400" />
                  <span>
                    <b className="mr-2 text-cyan-200">#{index + 1}</b>
                    {task}
                  </span>
                </label>
              ))}
            </div>
          </aside>
        </section>

        <section id="ai" className="mt-8 grid gap-6 lg:grid-cols-3">
          {aiCalls.map((call) => (
            <details
              key={call.summary}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 open:bg-white/[0.07]"
            >
              <summary className="cursor-pointer list-none">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
                  {call.caller}
                </p>
                <h3 className="mt-3 text-xl font-black">{call.outcome}</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Click to open call summary
                </p>
              </summary>

              <div className="mt-5 rounded-2xl bg-black/20 p-4 text-sm leading-7 text-slate-200">
                {call.summary}
              </div>
            </details>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Customer Messages
            </p>
            <h3 className="mt-2 text-2xl font-black">Automated updates</h3>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <b className="text-cyan-100">SMS sent</b>
                <p className="mt-2 text-sm text-slate-300">
                  Hi Angela, your survey is booked for tomorrow at 9:00. Complete Options will call before arrival.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <b className="text-cyan-100">Email drafted</b>
                <p className="mt-2 text-sm text-slate-300">
                  Quote pack prepared with payment options, timeline and next-step confirmation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Sales Pipeline
            </p>
            <h3 className="mt-2 text-2xl font-black">Quote movement</h3>

            <div className="mt-6 space-y-4">
              {[
                ["New enquiries", "18", "w-[72%]"],
                ["Survey booked", "12", "w-[58%]"],
                ["Quotes sent", "9", "w-[44%]"],
                ["Awaiting deposit", "4", "w-[28%]"],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">{label}</span>
                    <b>{value}</b>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full bg-cyan-300 ${width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
          Complete Options Home Improvements demo, powered by TradeConnectAI
        </footer>
      </section>
    </main>
  );
}
