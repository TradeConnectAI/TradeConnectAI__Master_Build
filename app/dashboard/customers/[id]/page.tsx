import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import BackButton from "@/components/dashboard/BackButton";

export default function CustomerDetailPage() {
    return (
        <DashboardShell>
            <div className="p-6">
                <div className="mb-6">
                    <BackButton />
                </div>

                <DashboardPageHeader
                    eyebrow="Customer Management"
                    title="Steve Johnson"
                    description="View customer details, job history and recent activity."
                />

                <div className="mt-8 grid gap-6 xl:grid-cols-3">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Email</p>
                        <h2 className="mt-3 text-xl font-bold text-white">
                            steve@example.com
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Phone</p>
                        <h2 className="mt-3 text-xl font-bold text-white">
                            +44 7700 900123
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Customer ID</p>
                        <h2 className="mt-3 text-xl font-bold text-white">TC-1024</h2>
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                    <p className="text-sm text-slate-400">Customer Timeline</p>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                        Recent Activity
                    </h2>

                    <div className="mt-6 space-y-4">
                        {[
                            "Quote #1042 sent to customer.",
                            "Customer approved heating repair quote.",
                            "Invoice #2232 generated.",
                            "Engineer Sarah Collins assigned.",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}