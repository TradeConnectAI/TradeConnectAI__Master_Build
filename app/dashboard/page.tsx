import {
  Activity,
  Bell,
  Bot,
  CalendarClock,
  CheckCircle2,
  FileText,
  MessageSquare,
  PoundSterling,
  Sparkles,
  Users,
} from "lucide-react";

const kpis = [
  {
    label: "New Leads",
    value: "18",
    change: "+12%",
    icon: Users,
  },
  {
    label: "Jobs Due Today",
    value: "7",
    change: "3 urgent",
    icon: CalendarClock,
  },
  {
    label: "Quotes Sent",
    value: "£12.4k",
    change: "+£2.1k",
    icon: FileText,
  },
  {
    label: "Paid This Week",
    value: "£8.9k",
    change: "6 invoices",
    icon: PoundSterling,
  },
];

const recentActivity = [
  "New quote requested by GreenBuild Ltd",
  "Invoice INV-1024 marked as paid",
  "AI drafted a follow-up for Carter Roofing",
  "Job sheet created for tomorrow morning",
];

const jobsDueToday = [
  {
    title: "Skip delivery",
    customer: "GreenBuild Ltd",
    time: "09:30",
    status: "Urgent",
  },
  {
    title: "Waste collection",
    customer: "Carter Roofing",
    time: "12:00",
    status: "Booked",
  },
  {
    title: "Customer callback",
    customer: "Mason Electrical",
    time: "15:30",
    status: "Pending",
  },
];

const notifications = [
  "2 quotes need chasing",
  "1 invoice overdue",
  "3 unread customer messages",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 flex items-center gap-2 text-sm text-cyan-300">
                <Sparkles size={16} />
                TradeConnectAI Command Centre
              </p>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Morning Steve, here’s today’s pulse.
              </h1>
              <p className="mt-2 max-w-2xl text-slate-400">
                Leads, jobs, quotes, messages and AI actions in one live cockpit.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
              <p className="font-semibold">System status</p>
              <p className="text-cyan-300">Online • Dashboard active</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-xl backdrop-blur"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    {item.change}
                  </span>
                </div>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-1 text-3xl font-bold">{item.value}</p>
              </div>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <CalendarClock className="text-cyan-300" size={22} />
                Jobs due today
              </h2>
              <span className="text-sm text-slate-400">Live schedule</span>
            </div>

            <div className="space-y-3">
              {jobsDueToday.map((job) => (
                <div
                  key={`${job.title}-${job.time}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <div>
                    <p className="font-semibold">{job.title}</p>
                    <p className="text-sm text-slate-400">{job.customer}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-mono text-sm text-cyan-300">{job.time}</p>
                    <p className="mt-1 text-xs text-slate-400">{job.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold">
              <Bell className="text-amber-300" size={22} />
              Notifications
            </h2>

            <div className="space-y-3">
              {notifications.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-amber-400/10 bg-amber-400/5 p-4 text-sm text-amber-100"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold">
              <Activity className="text-emerald-300" size={22} />
              Recent activity
            </h2>

            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 text-emerald-300" size={18} />
                  <p className="text-sm text-slate-300">{activity}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <Bot className="text-cyan-300" size={24} />
              AI assistant panel
            </h2>

            <p className="mb-5 text-sm text-slate-300">
              Suggested actions based on today’s workload.
            </p>

            <div className="space-y-3">
              <button className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/15">
                Draft follow-up messages for open quotes
              </button>
              <button className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/15">
                Generate job sheets for tomorrow
              </button>
              <button className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left text-sm transition hover:bg-white/15">
                Summarise customer conversations
              </button>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950/60 p-4">
              <p className="flex items-center gap-2 text-sm text-cyan-200">
                <MessageSquare size={16} />
                AI note
              </p>
              <p className="mt-2 text-sm text-slate-300">
                You have 2 warm leads that should be chased before 4pm.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}