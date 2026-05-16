import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import PageContainer from "@/components/dashboard/PageContainer";
import BackButton from "@/components/dashboard/BackButton";

import {
    analyticsStats,
    leadChannels,
    revenueData,
} from "@/data/mock/analytics";

export default function AnalyticsPage() {
    return (
        <DashboardShell>
            <PageContainer>
                <div className="mb-6">
                    <BackButton />
                </div>

                <DashboardPageHeader
                    eyebrow="Analytics"
                    title="Business Performance"
                    description="Track revenue, win rate, lead sources and operational trends."
                />

                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {analyticsStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                        >
                            <p className="text-sm text-slate-400">{stat.label}</p>

                            <h2 className="mt-3 text-3xl font-bold text-white">
                                {stat.value}
                            </h2>

                            <p className="mt-3 text-sm text-emerald-400">
                                {stat.helper}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-2">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Revenue Trend</p>

                        <h2 className="mt-1 text-2xl font-semibold text-white">
                            Monthly Growth
                        </h2>

                        <div className="mt-6 flex h-72 items-end gap-4 rounded-2xl bg-slate-950/70 p-5">
                            {revenueData.map((height, index) => (
                                <div
                                    key={index}
                                    className="flex flex-1 flex-col items-center justify-end gap-3"
                                >
                                    <div
                                        className="w-full rounded-t-xl bg-cyan-400"
                                        style={{ height: `${height}%` }}
                                    />

                                    <span className="text-xs text-slate-500">
                                        M{index + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Lead Sources</p>

                        <h2 className="mt-1 text-2xl font-semibold text-white">
                            Acquisition Channels
                        </h2>

                        <div className="mt-6 space-y-4">
                            {leadChannels.map((channel) => (
                                <div
                                    key={channel.name}
                                    className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                                >
                                    <span className="font-medium text-white">
                                        {channel.name}
                                    </span>

                                    <span className="text-cyan-400">
                                        {channel.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PageContainer>
        </DashboardShell>
    );
}