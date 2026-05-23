export const dynamic = "force-dynamic";
export const revalidate = 0;
import Link from "next/link";
import { getConversations } from "@/lib/ai/conversations/getConversations";

type ConversationRecord = {
  id?: string;
  customer_name?: string;
  customer?: string;
  name?: string;
  last_message?: string;
  status?: string;
  channel?: string;
  updated_at?: string;
};

function formatTimestamp(value?: string) {
  if (!value) return "Recently updated";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently updated";

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default async function ConversationsPage() {
  const conversations = (await getConversations()) as ConversationRecord[];
  const liveConversations = conversations.slice(0, 4);

  const nav = [
    ["Dashboard", "/dashboard"],
    ["Leads Inbox", "/dashboard/leads"],
    ["Bookings", "/dashboard/bookings"],
    ["AI Conversations", "/dashboard/conversations"],
    ["Customers", "/dashboard/customers"],
    ["Payments", "/dashboard/payments"],
    ["Settings", "/dashboard/settings"],
  ];

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="flex">
        <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-[#061226] p-6 lg:block">
          <div className="mb-12">
            <h1 className="text-2xl font-black text-blue-400">
              TradeConnectAI
            </h1>
            <p className="mt-2 text-sm text-white/50">AI toolbox</p>
          </div>

          <nav className="space-y-3">
            {nav.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`block rounded-2xl px-4 py-3 ${
                  label === "AI Conversations"
                    ? "bg-blue-500 font-semibold text-white"
                    : "text-white/70 hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="flex-1 p-6 md:p-10">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                AI Conversations
              </p>
              <h2 className="mt-2 text-4xl font-black">
                Emergency Electrician Lead
              </h2>
              <p className="mt-2 text-white/50">
                AI qualified the customer and offered a booking slot
                automatically.
              </p>
            </div>

            <Link
              href="/dashboard/leads"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              Back to Leads
            </Link>
          </div>

          <div className="mb-8 rounded-[32px] border border-blue-500/20 bg-blue-500/10 p-6 backdrop-blur-xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-200">
                  Supabase beta
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  Live conversation feed
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-white/70">
                  This section is now pulled from Supabase so the beta has a real
                  data source behind the dashboard.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Records
                </p>
                <p className="mt-1 text-2xl font-black">{conversations.length}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {liveConversations.length ? (
                liveConversations.map((conversation) => {
                  const title =
                    conversation.customer_name ??
                    conversation.customer ??
                    conversation.name ??
                    conversation.id ??
                    "Conversation";

                  const status = conversation.status ?? "Active";

                  return (
                    <div
                      key={conversation.id ?? title}
                      className="rounded-3xl border border-white/10 bg-[#0b1220] p-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold text-blue-200">
                            {conversation.channel ?? "Web chat"}
                          </p>
                          <h4 className="mt-2 text-lg font-black">{title}</h4>
                        </div>

                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-300">
                          {status}
                        </span>
                      </div>

                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/70">
                        {conversation.last_message ?? "No recent message stored."}
                      </p>

                      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                        {formatTimestamp(conversation.updated_at)}
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="rounded-3xl border border-dashed border-white/20 bg-[#0b1220] p-6 text-sm text-white/60 md:col-span-2 xl:col-span-4">
                  No conversations have been synced to Supabase yet. Once rows
                  exist in the conversations table, they will appear here
                  automatically.
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <h3 className="text-2xl font-black">Mark Williams</h3>
                  <p className="mt-1 text-sm text-white/50">
                    Cardiff â€¢ Residential â€¢ Web Chat
                  </p>
                </div>

                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300">
                  Qualified
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex justify-end">
                  <div className="max-w-full rounded-3xl rounded-br-md bg-blue-500 px-5 py-4 lg:w-auto">
                    Need an emergency electrician in Cardiff tonight.
                    <p className="mt-2 text-xs text-blue-100/70">
                      Customer â€¢ 18:42
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-full rounded-3xl rounded-bl-md border border-white/10 bg-[#0b1220] px-5 py-4 lg:w-auto">
                    Hi â€” we can help with that. Is this residential or commercial?
                    <p className="mt-2 text-xs text-white/40">
                      TradeConnectAI â€¢ 18:42
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-full rounded-3xl rounded-br-md bg-blue-500 px-5 py-4 lg:w-auto">
                    Residential. Power keeps tripping downstairs.
                    <p className="mt-2 text-xs text-blue-100/70">
                      Customer â€¢ 18:43
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-full rounded-3xl rounded-bl-md border border-white/10 bg-[#0b1220] px-5 py-4 lg:w-auto">
                    Thanks â€” we've got availability tonight between 7pmâ€“9pm.
                    What's the property postcode?
                    <p className="mt-2 text-xs text-white/40">
                      TradeConnectAI â€¢ 18:43
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-full rounded-3xl rounded-br-md bg-blue-500 px-5 py-4 lg:w-auto">
                    CF10 1AA
                    <p className="mt-2 text-xs text-blue-100/70">
                      Customer â€¢ 18:44
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-full rounded-3xl rounded-bl-md border border-white/10 bg-[#0b1220] px-5 py-4 lg:w-auto">
                    Perfect. I've flagged this as urgent and sent it to the
                    engineer. We can hold 7:30pm for you.
                    <p className="mt-2 text-xs text-white/40">
                      TradeConnectAI â€¢ 18:44
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <button className="rounded-2xl bg-blue-500 px-5 py-3 font-bold text-white hover:bg-blue-400">
                  Confirm Booking
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10">
                  Human Takeover
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10">
                  Send Quote
                </button>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-2xl font-black">AI Qualification</h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-[#0b1220] p-4">
                    <p className="text-sm text-white/40">Urgency</p>
                    <p className="mt-2 font-bold text-red-300">High</p>
                  </div>

                  <div className="rounded-2xl bg-[#0b1220] p-4">
                    <p className="text-sm text-white/40">Job Type</p>
                    <p className="mt-2 font-bold text-blue-300">
                      Electrical Fault
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#0b1220] p-4">
                    <p className="text-sm text-white/40">Recommended Action</p>
                    <p className="mt-2 text-white/70">
                      Confirm 7:30pm booking and notify engineer immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-blue-500/20 bg-blue-500/10 p-6">
                <h3 className="text-xl font-black text-blue-100">
                  AI Summary
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Customer needs urgent electrician support tonight. Issue appears
                  to be repeated circuit tripping downstairs. Postcode captured
                  and booking slot offered.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

