import Link from "next/link";

import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import PageContainer from "@/components/dashboard/PageContainer";
import BackButton from "@/components/dashboard/BackButton";
import StatusBadge from "@/components/ui/StatusBadge";
import { customers } from "@/data/mock/customers";

export default function CustomersPage() {
    return (
        <DashboardShell>
            <PageContainer>
                <div className="mb-6">
                    <BackButton />
                </div>

                <DashboardPageHeader
                    eyebrow="Customers Management"
                    title="Customers"
                    description="Manage customer profiles, communication and service history."
                    actionLabel="Add Customer"
                />

                <div className="mt-8 space-y-4">
                    {customers.map((customer) => (
                        <div
                            key={customer.id}
                            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                        >
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="text-sm text-slate-400">
                                        Customer #{customer.id}
                                    </p>

                                    <h2 className="mt-1 text-2xl font-semibold text-white">
                                        {customer.name}
                                    </h2>

                                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                                        <span className="rounded-full bg-slate-950 px-3 py-1 text-slate-300">
                                            {customer.email}
                                        </span>

                                        <span className="rounded-full bg-slate-950 px-3 py-1 text-slate-300">
                                            {customer.phone}
                                        </span>

                                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-400">
                                            {customer.jobs}
                                        </span>

                                        <StatusBadge status={customer.status} />
                                    </div>
                                </div>

                                <Link
                                    href={`/dashboard/customers/${customer.id}`}
                                    className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
                                >
                                    Open Customer
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </PageContainer>
        </DashboardShell>
    );
}