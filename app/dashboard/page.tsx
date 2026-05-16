import Link from "next/link";

import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import PageContainer from "@/components/dashboard/PageContainer";
import BackButton from "@/components/dashboard/BackButton";
import StatusBadge from "@/components/ui/StatusBadge";
import { jobs } from "@/data/mock/jobs";

export default function JobsPage() {
    return (
        <DashboardShell>
            <PageContainer>
                <div className="mb-6">
                    <BackButton />
                </div>

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
                            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                        >
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="text-sm text-slate-400">Job #{job.id}</p>

                                    <h2 className="mt-1 text-2xl font-semibold text-white">
                                        {job.title}
                                    </h2>

                                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                                        <span className="rounded-full bg-slate-950 px-3 py-1 text-slate-300">
                                            Customer: {job.customer}
                                        </span>

                                        <span className="rounded-full bg-slate-950 px-3 py-1 text-slate-300">
                                            Engineer: {job.engineer}
                                        </span>

                                        <StatusBadge status={job.status} />
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
            </PageContainer>
        </DashboardShell>
    );
}