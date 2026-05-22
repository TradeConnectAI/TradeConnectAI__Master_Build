import PortalHeader from "../../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalQuoteDetailPage() {
    return (
        <>
            <PortalHeader title="Heating Repair Quote" subtitle="Quote #1042" />

            <div className="space-y-6 p-6">
                <SectionCard
                    title="Quote Summary"
                    subtitle="Review the work and approve when ready"
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
                            <span>Total</span>
                            <span>£420.00</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white">
                            Approve Quote
                        </button>

                        <button className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold">
                            Ask Question
                        </button>

                        <button className="rounded-xl border border-red-500/40 px-5 py-3 text-sm font-semibold text-red-300">
                            Decline Quote
                        </button>
                    </div>
                </SectionCard>

                <SectionCard
                    title="Scope of Work"
                    subtitle="Customer-visible description"
                >
                    <div className="rounded-xl bg-slate-950 p-5 text-slate-300">
                        Diagnose heating fault, replace failed part, test system operation
                        and confirm heating performance before completion.
                    </div>
                </SectionCard>
            </div>
        </>
    );
}