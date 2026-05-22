"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const stats = [
  ["Today Revenue", "£3,840", "+18%"],
  ["Open Jobs", "27", "Live"],
  ["Quotes Sent", "14", "6 accepted"],
  ["AI Calls", "42", "91% handled"],
  ["Jobs Assigned", "19", "5 crews"],
  ["Payments", "£2,260", "Captured"],
];

const liveJobs = [
  {
    id: "CO-1047",
    customer: "Sarah Jenkins",
    type: "Bathroom refurb quote",
    status: "AI qualified",
    time: "09:12",
    value: "£4,800 est.",
    owner: "Dean",
  },
  {
    id: "CO-1048",
    customer: "M. Roberts",
    type: "Kitchen install follow-up",
    status: "Customer updated",
    time: "10:05",
    value: "£9,400",
    owner: "Alex",
  },
  {
    id: "CO-1049",
    customer: "North Road Lettings",
    type: "Maintenance callout",
    status: "Engineer assigned",
    time: "11:20",
    value: "£180",
    owner: "Sam",
  },
  {
    id: "CO-1050",
    customer: "Joanna Evans",
    type: "Whole-house options survey",
    status: "Deposit requested",
    time: "12:35",
    value: "£12,700 est.",
    owner: "Dean",
  },
];

const aiTranscript = [
  ["Customer", "Hi, I missed your call. I need someone to price a bathroom and maybe flooring too."],
  ["AI", "No problem. I can help get that booked. Is this for your home or a rental property?"],
  ["Customer", "My home. I’m in Cardiff and free Friday afternoon."],
  ["AI", "Great. I’ve checked the diary and there is a survey slot Friday at 2:30pm. Would you like me to reserve it?"],
  ["Customer", "Yes please."],
  ["AI", "Done. I’ll send confirmation now. I’ve also added notes for bathroom, flooring and budget options."],
];

const pipeline = [
  ["New enquiry", "AI answered missed call", "Complete"],
  ["Qualification", "Budget, postcode, urgency captured", "Complete"],
  ["Booking", "Survey slot reserved", "Complete"],
  ["Quote", "Draft quote being prepared", "In progress"],
  ["Payment", "Deposit link ready if approved", "Ready"],
];

const crewTasks = [
  ["Dean", "Survey: Cardiff bathroom + flooring", "2:30pm", "Phone sent"],
  ["Alex", "Kitchen snagging follow-up", "1:00pm", "On route"],
  ["Sam", "Lettings maintenance callout", "3:45pm", "Assigned"],
  ["Liam", "Collect materials from supplier", "4:30pm", "Pending"],
];

const customerMessages = [
  "Hi Sarah, your Complete Options survey is booked for Friday at 2:30pm. We’ll confirm before arrival.",
  "Thanks for approving the quote. Your deposit link is ready and your job file has been updated.",
  "Your engineer is on the way. Live ETA: 24 minutes.",
];

export default function CompleteOptionsDemoPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedJob, setSelectedJob] = useState(liveJobs[0]);
  const [message, setMessage] = useState(customerMessages[0]);

  useEffect(() => {
    const access = localStorage.getItem("complete-options-beta-access");
    if (access !== "true") {
      router.push("/complete-options-login");
    }
  }, [router]);

  const selectedPanel = useMemo(() => {
    if (activeTab === "calls") return "AI call handling, transcripts and job qualification";
    if (activeTab === "jobs") return "Live job board, crew allocation and status tracking";
    if (activeTab === "quotes") return "Quote creation, approvals, payments and customer nudges";
    if (activeTab === "messages") return "Automated customer updates by SMS and email";
    return "Business overview, live activity and operating pulse";
  }, [activeTab]);

  function logout() {
    localStorage.removeItem("complete-options-beta-access");
    router.push("/complete-options-login");
  }

  return (
    <main className="min-h-screen bg-[#050814] text-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-20 -mx-4 border-b border-white/10 bg-[#050814]/90 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                Complete Options Beta
              </p>
              <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-4xl">
                AI Receptionist & Operations Dashboard
              </h1>
              <p className="mt-2 text-sm text-slate-400">{selectedPanel}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["overview", "calls", "jobs", "quotes", "messages"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-black capitalize transition ${
                    activeTab === tab
                      ? "bg-cyan-300 text-slate-950"
                      : "border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.1]"
                  }`}
                >
                  {tab}
                </button>
              ))}

              <button
                onClick={logout}
                className="rounded-full border border-red-300/30 bg-red-500/10 px-4 py-2 text-sm font-black text-red-200 hover:bg-red-500/20"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(([label, value, note]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
              <p className="mt-3 text-3xl font-black">{value}</p>
              <p className="mt-2 text-sm font-bold text-cyan-300">{note}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-black">Live Job Board</h2>
                <p className="text-sm text-slate-400">
                  Click a job to update the side panel.
                </p>
              </div>
              <div className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
                Live demo data
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {liveJobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`rounded-3xl border p-4 text-left transition ${
                    selectedJob.id === job.id
                      ? "border-cyan-300 bg-cyan-300/10"
                      : "border-white/10 bg-slate-950/50 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-black text-white">{job.customer}</p>
                      <p className="mt-1 text-sm text-slate-400">{job.type}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-sm font-black text-cyan-300">{job.status}</p>
                      <p className="mt-1 text-xs text-slate-500">{job.id} · {job.time}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
            <h2 className="text-2xl font-black">Selected Job</h2>
            <div className="mt-5 rounded-3xl bg-slate-950/80 p-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                {selectedJob.id}
              </p>
              <h3 className="mt-3 text-3xl font-black">{selectedJob.customer}</h3>
              <p className="mt-3 text-slate-300">{selectedJob.type}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.05] p-4">
                  <p className="text-xs text-slate-500">Status</p>
                  <p className="font-black">{selectedJob.status}</p>
                </div>
                <div className="rounded-2xl bg-white/[0.05] p-4">
                  <p className="text-xs text-slate-500">Value</p>
                  <p className="font-black">{selectedJob.value}</p>
                </div>
                <div className="rounded-2xl bg-white/[0.05] p-4">
                  <p className="text-xs text-slate-500">Owner</p>
                  <p className="font-black">{selectedJob.owner}</p>
                </div>
                <div className="rounded-2xl bg-white/[0.05] p-4">
                  <p className="text-xs text-slate-500">Next step</p>
                  <p className="font-black">Send update</p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 hover:bg-white">
                Send customer update
              </button>
            </div>
          </aside>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 lg:col-span-2">
            <h2 className="text-2xl font-black">AI Call Transcript</h2>
            <p className="mt-2 text-sm text-slate-400">
              Shows how the AI captures job details before handing over to the team.
            </p>

            <div className="mt-5 space-y-3">
              {aiTranscript.map(([speaker, text], index) => (
                <div
                  key={`${speaker}-${index}`}
                  className={`rounded-3xl p-4 ${
                    speaker === "AI"
                      ? "ml-6 bg-cyan-300 text-slate-950"
                      : "mr-6 bg-slate-950/80 text-white"
                  }`}
                >
                  <p className="text-xs font-black uppercase tracking-wider opacity-70">{speaker}</p>
                  <p className="mt-2 font-semibold">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
            <h2 className="text-2xl font-black">Pipeline</h2>
            <div className="mt-5 space-y-3">
              {pipeline.map(([title, text, status]) => (
                <div key={title} className="rounded-3xl bg-slate-950/70 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-black">{title}</p>
                      <p className="mt-1 text-sm text-slate-400">{text}</p>
                    </div>
                    <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-300">
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
            <h2 className="text-2xl font-black">Crew & Task Dispatch</h2>
            <p className="mt-2 text-sm text-slate-400">
              Fake phone dispatch view for showing job allocation.
            </p>

            <div className="mt-5 overflow-hidden rounded-3xl border border-white/10">
              {crewTasks.map(([name, task, time, status]) => (
                <div key={`${name}-${task}`} className="grid gap-2 border-b border-white/10 bg-slate-950/60 p-4 last:border-b-0 sm:grid-cols-[0.7fr_1.4fr_0.5fr_0.7fr]">
                  <p className="font-black">{name}</p>
                  <p className="text-sm text-slate-300">{task}</p>
                  <p className="text-sm font-bold text-cyan-300">{time}</p>
                  <p className="text-sm text-slate-400">{status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
            <h2 className="text-2xl font-black">Customer Message Builder</h2>
            <p className="mt-2 text-sm text-slate-400">
              Pick a message and preview what the AI sends.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {customerMessages.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setMessage(item)}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-black hover:bg-cyan-300 hover:text-slate-950"
                >
                  Template {index + 1}
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-3xl bg-slate-950/80 p-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                SMS Preview
              </p>
              <p className="mt-4 text-lg font-semibold leading-8">{message}</p>
            </div>

            <button className="mt-5 w-full rounded-2xl bg-white px-5 py-4 font-black text-slate-950 hover:bg-cyan-300">
              Send demo message
            </button>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-slate-500">
          Complete Options private beta powered by TradeConnectAI.
        </footer>
      </div>
    </main>
  );
}
