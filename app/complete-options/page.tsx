"use client";

import { useMemo, useState } from "react";

type TabId =
  | "dashboard"
  | "ai"
  | "jobs"
  | "quotes"
  | "customers"
  | "calendar"
  | "messages"
  | "payments"
  | "settings";

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "ai", label: "AI Receptionist", icon: "☎️" },
  { id: "jobs", label: "Jobs", icon: "🛠️" },
  { id: "quotes", label: "Quotes", icon: "🧾" },
  { id: "customers", label: "Customers", icon: "👥" },
  { id: "calendar", label: "Calendar", icon: "📅" },
  { id: "messages", label: "Messages", icon: "💬" },
  { id: "payments", label: "Payments", icon: "💳" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

const stats = [
  ["Jobs Today", "14", "+5 from yesterday"],
  ["Missed Calls Saved", "9", "AI captured every one"],
  ["Quotes Sent", "£8,420", "6 awaiting approval"],
  ["Revenue This Week", "£18,760", "Demo trading data"],
];

const jobs = [
  {
    id: "CO-1048",
    customer: "Mason & Reed Properties",
    contact: "Claire Mason",
    phone: "07700 901214",
    job: "Emergency roof leak inspection",
    status: "Booked",
    priority: "High",
    time: "Today 09:30",
    assigned: "Dean",
    value: "£385",
    address: "Plympton, Plymouth",
  },
  {
    id: "CO-1049",
    customer: "Harbour View Flats",
    contact: "Gareth Lewis",
    phone: "07700 901889",
    job: "Bathroom extractor replacement",
    status: "In Progress",
    priority: "Medium",
    time: "Today 11:00",
    assigned: "Sam",
    value: "£240",
    address: "Mutley, Plymouth",
  },
  {
    id: "CO-1050",
    customer: "Oakridge Lettings",
    contact: "Nina Patel",
    phone: "07700 902441",
    job: "End of tenancy repair list",
    status: "Quoted",
    priority: "Medium",
    time: "Today 14:15",
    assigned: "Awaiting approval",
    value: "£1,180",
    address: "Saltash",
  },
  {
    id: "CO-1051",
    customer: "Westfield Homes",
    contact: "Tom Haines",
    phone: "07700 903121",
    job: "Kitchen splashback and small works",
    status: "New AI Lead",
    priority: "Low",
    time: "Tomorrow 08:30",
    assigned: "Unassigned",
    value: "£690",
    address: "Ivybridge",
  },
];

const calls = [
  {
    time: "08:12",
    caller: "Claire Mason",
    summary: "Emergency leak. Water coming through upstairs ceiling after heavy rain.",
    action: "AI booked inspection slot and flagged high priority.",
    result: "Job CO-1048 created",
  },
  {
    time: "09:04",
    caller: "Nina Patel",
    summary: "Tenant moving out. Needs repair list quoted before new tenant arrives.",
    action: "AI collected address, access notes, photos request, and preferred date.",
    result: "Quote Q-2208 sent",
  },
  {
    time: "10:31",
    caller: "Tom Haines",
    summary: "Asked about small works availability for kitchen finish.",
    action: "AI captured scope and sent confirmation text.",
    result: "New lead CO-1051",
  },
];

const quotes = [
  ["Q-2208", "Oakridge Lettings", "End of tenancy repairs", "£1,180", "Sent"],
  ["Q-2209", "Mason & Reed Properties", "Roof leak remedial work", "£1,940", "Draft"],
  ["Q-2210", "Harbour View Flats", "Ventilation upgrade pack", "£860", "Approved"],
];

const customers = [
  ["Mason & Reed Properties", "Property Manager", "18 jobs", "£14,880"],
  ["Oakridge Lettings", "Lettings Agency", "11 jobs", "£8,240"],
  ["Harbour View Flats", "Facilities", "7 jobs", "£4,920"],
  ["The Green Room Cafe", "Commercial", "4 jobs", "£1,360"],
];

const calendar = [
  ["09:30", "Roof leak inspection", "Dean", "Plympton"],
  ["11:00", "Extractor replacement", "Sam", "Mutley"],
  ["14:15", "Repair list survey", "Unassigned", "Saltash"],
  ["16:30", "Quote follow-up calls", "AI Assistant", "Remote"],
];

const messages = [
  [
    "Claire Mason",
    "SMS",
    "Hi Claire, Complete Options has booked your emergency inspection for today at 09:30. Dean will attend and update you after assessment.",
    "Delivered",
  ],
  [
    "Nina Patel",
    "Email",
    "Thanks Nina. We have received the repair list request and your quote has been prepared for review.",
    "Opened",
  ],
  [
    "Tom Haines",
    "SMS",
    "Thanks Tom. We have logged your kitchen small works enquiry and will confirm availability shortly.",
    "Delivered",
  ],
];

function badgeClass(status: string) {
  if (status.includes("Approved") || status.includes("Delivered") || status.includes("Opened")) {
    return "border-green-300/20 bg-green-300/10 text-green-200";
  }

  if (status.includes("Progress") || status.includes("Booked")) {
    return "border-blue-300/20 bg-blue-300/10 text-blue-200";
  }

  if (status.includes("Quoted") || status.includes("Sent") || status.includes("Draft")) {
    return "border-yellow-300/20 bg-yellow-300/10 text-yellow-100";
  }

  return "border-purple-300/20 bg-purple-300/10 text-purple-200";
}

function Panel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20 sm:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-black text-white">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm leading-6 text-slate-400">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function CompleteOptionsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const [selectedJobId, setSelectedJobId] = useState("CO-1048");

  const selectedJob = useMemo(() => {
    return jobs.find((job) => job.id === selectedJobId) || jobs[0];
  }, [selectedJobId]);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <header className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-xl font-black text-slate-950">
              CO
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                TradeConnectAI beta demo
              </p>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Complete Options Operations Hub
              </h1>
            </div>
          </div>

          <a
            href="#demo-flow"
            className="rounded-2xl bg-cyan-300 px-5 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-cyan-300/20"
          >
            View AI Flow
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 lg:sticky lg:top-5">
          <div className="mb-3 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4">
            <p className="text-sm font-black text-cyan-100">Complete Options</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Demo account with safe fake data.
            </p>
          </div>

          <nav className="grid gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  activeTab === tab.id
                    ? "flex items-center gap-3 rounded-2xl bg-cyan-300 px-4 py-3 text-left text-sm font-black text-slate-950"
                    : "flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-black text-slate-300 hover:bg-white/10 hover:text-white"
                }
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="grid gap-5">
          {activeTab === "dashboard" ? (
            <>
              <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-6 shadow-2xl shadow-black/30">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                  Today’s command centre
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Calls become jobs. Jobs become quotes. Customers stay updated.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                  Complete Options uses TradeConnectAI to answer missed calls, capture job details,
                  build quotes, assign work, and send customer updates without the office becoming
                  a paper tornado.
                </p>
              </section>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map(([label, value, note]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-3 text-4xl font-black">{value}</p>
                    <p className="mt-2 text-sm text-cyan-200">{note}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
                <Panel title="Live job board" subtitle="Click a job to change the detail panel.">
                  <div className="grid gap-3">
                    {jobs.map((job) => (
                      <button
                        key={job.id}
                        onClick={() => setSelectedJobId(job.id)}
                        className={
                          selectedJobId === job.id
                            ? "rounded-3xl border border-cyan-300/40 bg-cyan-300/10 p-4 text-left"
                            : "rounded-3xl border border-white/10 bg-slate-950/50 p-4 text-left hover:bg-white/10"
                        }
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                              {job.id}
                            </p>
                            <h3 className="mt-1 text-lg font-black">{job.job}</h3>
                            <p className="mt-1 text-sm text-slate-400">
                              {job.customer} · {job.address}
                            </p>
                          </div>
                          <span className={`w-fit rounded-full border px-3 py-1 text-xs font-black ${badgeClass(job.status)}`}>
                            {job.status}
                          </span>
                        </div>

                        <div className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-4">
                          <p>Time: {job.time}</p>
                          <p>Assigned: {job.assigned}</p>
                          <p>Priority: {job.priority}</p>
                          <p>Value: {job.value}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </Panel>

                <Panel title="Selected job" subtitle="Operator detail view after the AI creates or updates a job.">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-sm text-slate-400">{selectedJob.id}</p>
                    <h3 className="mt-1 text-2xl font-black">{selectedJob.job}</h3>
                    <span className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-black ${badgeClass(selectedJob.status)}`}>
                      {selectedJob.status}
                    </span>

                    <div className="mt-5 grid gap-3 text-sm">
                      <p>Customer: {selectedJob.customer}</p>
                      <p>Contact: {selectedJob.contact}</p>
                      <p>Phone: {selectedJob.phone}</p>
                      <p>Address: {selectedJob.address}</p>
                      <p>Engineer: {selectedJob.assigned}</p>
                      <p>Estimated value: {selectedJob.value}</p>
                    </div>

                    <div className="mt-5 grid gap-3">
                      <button className="rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950">
                        Send customer update
                      </button>
                      <button className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black">
                        Create quote
                      </button>
                    </div>
                  </div>
                </Panel>
              </div>
            </>
          ) : null}

          {activeTab === "ai" ? (
            <Panel title="AI Receptionist" subtitle="The killer demo flow: missed call to booked job.">
              <div id="demo-flow" className="grid gap-5 xl:grid-cols-[1fr_380px]">
                <div className="grid gap-4">
                  {calls.map((call, index) => (
                    <div key={call.time} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                        Step {index + 1} · {call.time}
                      </p>
                      <h3 className="mt-1 text-xl font-black">{call.caller}</h3>
                      <p className="mt-4 leading-7 text-slate-300">{call.summary}</p>
                      <div className="mt-4 rounded-2xl bg-white/8 p-4 text-sm leading-6 text-slate-300">
                        <strong className="text-cyan-100">AI action:</strong> {call.action}
                      </div>
                      <p className="mt-3 text-sm font-black text-yellow-100">{call.result}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <h3 className="text-2xl font-black text-cyan-100">Demo transcript</h3>
                  <div className="mt-5 grid gap-3 text-sm leading-6">
                    <p className="rounded-2xl bg-slate-950/60 p-4">
                      <strong>AI:</strong> Thanks for calling Complete Options. What do you need help with today?
                    </p>
                    <p className="rounded-2xl bg-white/10 p-4">
                      <strong>Customer:</strong> We have water coming through the ceiling after last night’s rain.
                    </p>
                    <p className="rounded-2xl bg-slate-950/60 p-4">
                      <strong>AI:</strong> I’ll mark this as urgent. Can I confirm the address and access?
                    </p>
                    <p className="rounded-2xl bg-white/10 p-4">
                      <strong>Customer:</strong> Yes, someone is there now. It’s in Plympton.
                    </p>
                    <p className="rounded-2xl bg-slate-950/60 p-4">
                      <strong>AI:</strong> Thank you. I’ve booked an inspection for 09:30 and sent confirmation by text.
                    </p>
                  </div>
                </div>
              </div>
            </Panel>
          ) : null}

          {activeTab === "jobs" ? (
            <Panel title="Jobs" subtitle="Operational job list for Complete Options.">
              <div className="grid gap-3">
                {jobs.map((job) => (
                  <div key={job.id} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-black text-cyan-200">{job.id}</p>
                        <h3 className="mt-1 text-xl font-black">{job.job}</h3>
                        <p className="mt-1 text-sm text-slate-400">{job.customer}</p>
                      </div>
                      <span className={`w-fit rounded-full border px-3 py-1 text-xs font-black ${badgeClass(job.status)}`}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          ) : null}

          {activeTab === "quotes" ? (
            <Panel title="Quotes" subtitle="Quotes created or assisted by the AI workflow.">
              <div className="grid gap-4 md:grid-cols-3">
                {quotes.map(([id, customer, title, total, status]) => (
                  <div key={id} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-sm font-black text-cyan-200">{id}</p>
                    <h3 className="mt-4 text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{customer}</p>
                    <p className="mt-5 text-4xl font-black">{total}</p>
                    <span className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-black ${badgeClass(status)}`}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </Panel>
          ) : null}

          {activeTab === "customers" ? (
            <Panel title="Customers" subtitle="A simple CRM view for repeat trade customers.">
              <div className="grid gap-4 md:grid-cols-2">
                {customers.map(([name, type, jobCount, spend]) => (
                  <div key={name} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                    <h3 className="text-xl font-black">{name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{type}</p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/8 p-4">
                        <p className="text-xs text-slate-400">Jobs</p>
                        <p className="mt-1 text-2xl font-black">{jobCount}</p>
                      </div>
                      <div className="rounded-2xl bg-white/8 p-4">
                        <p className="text-xs text-slate-400">Spend</p>
                        <p className="mt-1 text-2xl font-black">{spend}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          ) : null}

          {activeTab === "calendar" ? (
            <Panel title="Calendar" subtitle="Today’s work schedule and AI-assisted follow-ups.">
              <div className="grid gap-4">
                {calendar.map(([time, title, person, location]) => (
                  <div key={`${time}-${title}`} className="grid gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-5 sm:grid-cols-[90px_1fr_140px_140px] sm:items-center">
                    <p className="text-2xl font-black text-cyan-200">{time}</p>
                    <p className="font-black">{title}</p>
                    <p className="text-sm text-slate-400">{person}</p>
                    <p className="text-sm text-slate-400">{location}</p>
                  </div>
                ))}
              </div>
            </Panel>
          ) : null}

          {activeTab === "messages" ? (
            <Panel title="Messages" subtitle="Customer updates sent from the operations workflow.">
              <div className="grid gap-4">
                {messages.map(([to, channel, body, status]) => (
                  <div key={`${to}-${channel}`} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-sm text-slate-400">{channel} to</p>
                    <h3 className="text-xl font-black">{to}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{body}</p>
                    <span className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-black ${badgeClass(status)}`}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </Panel>
          ) : null}

          {activeTab === "payments" ? (
            <Panel title="Payments" subtitle="Demo payment and invoice status.">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["Paid this week", "£11,420", "12 invoices paid"],
                  ["Awaiting payment", "£4,860", "5 invoices open"],
                  ["Deposits collected", "£2,480", "4 jobs secured"],
                ].map(([label, value, note]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-3 text-4xl font-black">{value}</p>
                    <p className="mt-2 text-sm text-cyan-200">{note}</p>
                  </div>
                ))}
              </div>
            </Panel>
          ) : null}

          {activeTab === "settings" ? (
            <Panel title="Settings" subtitle="Demo configuration for the AI assistant.">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Business name", "Complete Options"],
                  ["AI answer mode", "Answer missed calls and collect job details"],
                  ["Escalation rule", "Urgent leaks, safety issues, complaints"],
                  ["Customer updates", "SMS and email enabled"],
                  ["Quote mode", "Draft quotes for approval"],
                  ["Demo status", "Safe fake data"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-lg font-black">{value}</p>
                  </div>
                ))}
              </div>
            </Panel>
          ) : null}
        </section>
      </div>
    </main>
  );
}
