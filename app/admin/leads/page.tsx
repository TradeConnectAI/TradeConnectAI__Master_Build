import Link from "next/link";
import { getBetaLeads, hasLeadStorage, type BetaLead } from "@/lib/beta-leads";

const fallbackLeads: BetaLead[] = [
  {
    id: "demo-1",
    source: "demo",
    name: "Demo Lead",
    business: "Example Plumbing & Heating",
    trade: "Plumber",
    teamSize: "2-5 people",
    phone: "07123 456789",
    email: "demo@example.com",
    needs: ["Missed calls", "Quotes", "Customer updates"],
    help: "I miss calls while I am out working, then forget to call people back after a long day. I need help capturing job details and following up quotes.",
    status: "New",
    createdAt: new Date().toISOString(),
  },
];

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function countByStatus(leads: BetaLead[], status: BetaLead["status"]) {
  return leads.filter((lead) => lead.status === status).length;
}

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const storageReady = hasLeadStorage();
  const savedLeads = await getBetaLeads();
  const leads = savedLeads.length ? savedLeads : fallbackLeads;

  const cards = [
    ["Total leads", leads.length],
    ["New", countByStatus(leads, "New")],
    ["Contacted", countByStatus(leads, "Contacted")],
    ["Demo booked", countByStatus(leads, "Demo booked")],
    ["Won", countByStatus(leads, "Won")],
  ];

  return (
    <main className="min-h-screen bg-[#020817] p-6 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              TradeConnectAI Admin
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-[-0.05em]">
              Beta Leads
            </h1>
            <p className="mt-4 max-w-3xl text-slate-400">
              View beta demo requests from the website. Leads are emailed and saved into Supabase.
            </p>

            <div className="mt-5 rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                First 15 free beta places
              </p>
              <p className="mt-2 text-sm leading-6">
                Founding beta offer: free access for the first 15 suitable trade businesses that sign up and give honest feedback.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/book-demo"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black"
            >
              Open form
            </Link>
            <Link
              href="/"
              className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950"
            >
              Homepage
            </Link>
          </div>
        </div>

        {!storageReady ? (
          <div className="mt-8 rounded-[2rem] border border-amber-300/30 bg-amber-300/10 p-6 text-amber-100">
            <h2 className="text-2xl font-black">Storage not connected yet</h2>
            <p className="mt-3 text-sm leading-6">
              Lead emails are working. To save leads here permanently, connect
              Supabase and add NEXT_PUBLIC_SUPABASE_URL plus SUPABASE_SERVICE_ROLE_KEY in Vercel environment variables.
            </p>
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {cards.map(([label, value]) => (
            <div
              key={label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5"
            >
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-3 text-4xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5">
          {leads.map((lead) => (
            <article
              key={lead.id}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                    {lead.status}
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    {lead.business || "No business name"}
                  </h2>
                  <p className="mt-1 text-slate-400">
                    {lead.name} · {lead.trade || "Trade not set"} ·{" "}
                    {lead.teamSize || "Team size not set"}
                  </p>
                </div>

                <p className="rounded-full bg-black/30 px-4 py-2 text-sm text-slate-300">
                  {formatDate(lead.createdAt)}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-black/30 p-4">
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-1 font-bold">{lead.phone || "Not provided"}</p>
                </div>
                <div className="rounded-2xl bg-black/30 p-4">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 font-bold">{lead.email || "Not provided"}</p>
                </div>
                <div className="rounded-2xl bg-black/30 p-4">
                  <p className="text-xs text-slate-500">Source</p>
                  <p className="mt-1 font-bold">{lead.source}</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-black/30 p-4">
                <p className="text-xs text-slate-500">Needs</p>
                <p className="mt-1 text-sm text-slate-200">
                  {lead.needs.length ? lead.needs.join(", ") : "Not specified"}
                </p>
              </div>

              <div className="mt-5 rounded-2xl bg-black/30 p-4">
                <p className="text-xs text-slate-500">Message</p>
                <p className="mt-1 text-sm leading-6 text-slate-200">
                  {lead.help || "No message provided."}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

