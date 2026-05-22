import DashboardShell from "@/components/dashboard/DashboardShell";

export default function QuoteDetailPage() {
    return (
        <DashboardShell>
            <div className="space-y-6 p-6">
                <div>
                    <p className="text-sm font-medium text-cyan-400">
                        Quotes Management
                    </p>

                    <h1 className="mt-2 text-4xl font-bold">
                        Heating Repair Quote
                    </h1>
                </div>

                <div className="grid gap-6 xl:grid-cols-1 md:grid-cols-1 md:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Customer
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold">
                            Steve Johnson
                        </h2>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Status
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold text-yellow-400">
                            Awaiting Approval
                        </h2>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <p className="text-sm text-slate-400">
                            Total
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold">
                            £420.00
                        </h2>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <div className="flex flex-wrap items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-400">
                                Quote Breakdown
                            </p>

                            <h2 className="mt-1 text-2xl font-semibold">
                                Pricing Details
                            </h2>
                        </div>

                        <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm">
                            Edit Quote
                        </button>
                    </div>

                    <div className="mt-6 rounded-xl bg-slate-950 p-5">
                        <div className="flex flex-wrap justify-between">
                            <span className="text-slate-400">
                                Parts
                            </span>

                            <span>£160.00</span>
                        </div>

                        <div className="mt-3 flex justify-between">
                            <span className="text-slate-400">
                                Labour
                            </span>

                            <span>£260.00</span>
                        </div>

                        <div className="mt-4 flex justify-between border-t border-slate-800 pt-4 text-xl font-bold">
                            <span>Total</span>

                            <span>£420.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}