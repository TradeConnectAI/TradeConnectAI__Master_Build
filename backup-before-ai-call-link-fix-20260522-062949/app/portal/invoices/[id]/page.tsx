import PortalHeader from "../../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalInvoiceDetailPage() {
    return (
        <>
            <PortalHeader title="Heating Repair Invoice" subtitle="Invoice #2232" />

            <div className="space-y-6 p-6">
                <SectionCard
                    title="Invoice Summary"
                    subtitle="Review payment status and invoice details"
                >
                    <div className="rounded-xl bg-slate-950 p-5">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Parts</span>
                            <span>£160.00</span>
                        </div>

                        <div className="mt-3 flex justify-between">
                            <span className="text-slate-400">Labour</span>
                            <span>£260.00</span>
                        </div>

                        <div className="mt-4 flex justify-between border-t border-slate-800 pt-4 text-xl font-bold">
                            <span>Total Due</span>
                            <span>£420.00</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
                            Pay Invoice
                        </button>

                        <button className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold">
                            Download PDF
                        </button>
                    </div>
                </SectionCard>

                <SectionCard title="Payment Status" subtitle="Customer invoice state">
                    <div className="rounded-xl bg-yellow-500/10 p-5 text-yellow-300">
                        Payment pending
                    </div>
                </SectionCard>
            </div>
        </>
    );
}