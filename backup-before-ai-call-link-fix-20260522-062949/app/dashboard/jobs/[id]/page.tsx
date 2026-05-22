import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import BackButton from "@/components/dashboard/BackButton";

export default function JobDetailPage() {
    return (
        <DashboardShell>
            <div className="p-6">
                <div className="mb-6">
                    <BackButton />
                </div>

                <DashboardPageHeader
                    eyebrow="Jobs Management"
                    title="Kitchen Rewire"
                    description="Track engineer progress, notes and customer updates."
                />

                <div className="mt-8 grid gap-6 xl:grid-cols-1 md:grid-cols-1 md:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Status</p>

                        <h2 className="mt-3 text-2xl font-bold text-emerald-400">
                            In Progress
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Engineer</p>

                        <h2 className="mt-3 text-2xl font-bold text-white">
                            Sarah Collins
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Customer</p>

                        <h2 className="mt-3 text-2xl font-bold text-white">
                            Steve Johnson
                        </h2>
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                    <div className="flex flex-wrap items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-400">Engineer Notes</p>

                            <h2 className="mt-2 text-2xl font-bold text-white">
                                Site Activity
                            </h2>
                        </div>

                        <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">
                            Add Note
                        </button>
                    </div>

                    <div className="mt-6 space-y-4">
                        {[
                            "Engineer arrived on-site.",
                            "Materials unloaded and inspection completed.",
                            "Customer approved additional work.",
                        ].map((note) => (
                            <div
                                key={note}
                                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                            >
                                {note}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}