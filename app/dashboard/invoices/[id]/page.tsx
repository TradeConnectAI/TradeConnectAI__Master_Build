import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import BackButton from "@/components/dashboard/BackButton";

export default function InvoiceDetailPage() {
    return (
        <DashboardShell>
            <div className="p-6">
                <div className="mb-6">
                    <BackButton />
                </div>

                <DashboardPageHeader
                    eyebrow="Invoices Management"
                    title="Heating Repair Invoice"
                    description="Track payments, reminders and invoice totals."
                />

                <div className="mt-8 grid gap-6 xl:grid-cols-3">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Customer</p>

                        <h2 className="mt-3 text-2xl font-bold text-white">
                            Steve Johnson
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Status</p>

                        <h2 className="mt-3 text-2xl font-bold text-yellow-400">
                            Due
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                        <p className="text-sm text-slate-400">Total</p>

                        <h2 className="mt-3 text-2xl font-bold text-white">
                            £420.00
                        </h2>
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-400">Invoice Breakdown</p>

                            <h2 className="mt-2 text-2xl font-bold text-white">
                                Payment Details
                            </h2>
                        </div>

                        <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">
                            Send Reminder
                        </button>
                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Parts</span>
                            <span className="text-white">£160.00</span>
                        </div>

                        <div className="mt-3 flex justify-between">
                            <span className="text-slate-400">Labour</span>
                            <span className="text-white">£260.00</span>
                        </div>

                        <div className="mt-5 flex justify-between border-t border-slate-800 pt-5 text-xl font-bold text-white">
                            <span>Total</span>
                            <span>£420.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}