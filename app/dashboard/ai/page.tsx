import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import PageContainer from "@/components/dashboard/PageContainer";
import BackButton from "@/components/dashboard/BackButton";

import { aiAutomations, aiSuggestions } from "@/data/mock/ai";

export default function AIAssistantPage() {
    return (
        <DashboardShell>
            <PageContainer>
                <div className="mb-6">
                    <BackButton />
                </div>

                <DashboardPageHeader
                    eyebrow="AI Assistant"
                    title="Trade AI Copilot"
                    description="Automate customer messages, quote follow-ups, job sheets, reminders and admin tasks."
                />

                <div className="mt-8 grid gap-6 xl:grid-cols-3">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 xl:col-span-2">
                        <p className="text-sm text-slate-400">AI Command Centre</p>

                        <h2 className="mt-1 text-2xl font-semibold text-white">
                            What should the AI do?
                        </h2>

                        <textarea
                            className="mt-6 min-h-40 w-full rounded-2xl border border-slate-700 bg-slate-950/70 p-4 text-sm text-white outline-none"
                            placeholder="Example: Follow up all quotes older than 3 days..."
                        />

                        <button className="mt-4 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
                            Run AI Task
                        </button>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Suggested Actions</p>

                        <h2 className="mt-1 text-2xl font-semibold text-white">
                            Quick Automations
                        </h2>

                        <div className="mt-6 space-y-3">
                            {aiAutomations.map((item) => (
                                <button
                                    key={item}
                                    className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-left text-sm text-slate-300 transition hover:border-cyan-400 hover:text-white"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                    <p className="text-sm text-slate-400">AI Activity</p>

                    <h2 className="mt-1 text-2xl font-semibold text-white">
                        Recent AI Suggestions
                    </h2>

                    <div className="mt-6 space-y-4">
                        {aiSuggestions.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </PageContainer>
        </DashboardShell>
    );
}