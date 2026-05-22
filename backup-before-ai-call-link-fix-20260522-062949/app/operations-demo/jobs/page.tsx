import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

export default function JobsPage() {
    const jobs = [
        {
            id: "2048",
            title: "Kitchen Rewire",
            customer: "Steve Johnson",
            status: "In Progress",
            engineer: "Sarah Collins",
        },
        {
            id: "2049",
            title: "Boiler Installation",
            customer: "Michael Brown",
            status: "Scheduled",
            engineer: "Mike Reynolds",
        },
        {
            id: "2050",
            title: "Emergency Callout",
            customer: "Laura Smith",
            status: "Awaiting Engineer",
            engineer: "Unassigned",
        },
    ];

    return (
        <DashboardShell>
            <div className="p-6">
                <DashboardPageHeader
                    eyebrow="Jobs Management"
                    title="Active Jobs"
                    description="Track active work, engineer assignments and live job status."
                    actionLabel="Create Job"
                />

                <div className="mt-8 space-y-4">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                        >
                            <div className="flex flex-col gap-6 lg:flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="text-sm text-slate-400">Job #{job.id}</p>

                                    <h2 className="mt-1 text-2xl font-semibold">{job.title}</h2>

                                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                                        <span className="rounded-full bg-slate-950 px-3 py-1 text-slate-300">
                                            Customer: {job.customer}
                                        </span>

                                        <span className="rounded-full bg-slate-950 px-3 py-1 text-slate-300">
                                            Engineer: {job.engineer}
                                        </span>

                                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-400">
                                            {job.status}
                                        </span>
                                    </div>
                                </div>

                                <Link
                                    href={`/dashboard/jobs/${job.id}`}
                                    className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
                                >
                                    Open Job
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardShell>
    );
}

