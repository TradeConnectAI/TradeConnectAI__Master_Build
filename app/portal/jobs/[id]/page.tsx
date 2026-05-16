import PortalHeader from "../../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalJobDetailPage() {
    const timeline = [
        "Quote Approved",
        "Engineer Assigned",
        "Work In Progress",
        "Completion Pending",
    ];

    return (
        <>
            <PortalHeader title="Kitchen Rewire" subtitle="Job #JOB-2048" />

            <div className="space-y-6 p-6">
                <SectionCard
                    title="Job Overview"
                    subtitle="Live customer-facing job information"
                >
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-xl bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Status</p>
                            <p className="mt-1 font-medium text-emerald-400">
                                In Progress
                            </p>
                        </div>

                        <div className="rounded-xl bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Engineer</p>
                            <p className="mt-1 font-medium text-white">Sarah Collins</p>
                        </div>

                        <div className="rounded-xl bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Appointment</p>
                            <p className="mt-1 font-medium text-white">
                                17 May 2026 · 12:00 - 14:00
                            </p>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard
                    title="Job Timeline"
                    subtitle="Progress updates visible to the customer"
                >
                    <div className="grid gap-4 md:grid-cols-4">
                        {timeline.map((step, index) => (
                            <div key={step} className="rounded-xl bg-slate-950 p-5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
                                    {index + 1}
                                </div>

                                <p className="mt-4 font-medium text-white">{step}</p>
                                <p className="mt-2 text-sm text-slate-400">
                                    Customer update logged.
                                </p>
                            </div>
                        ))}
                    </div>
                </SectionCard>

                <SectionCard
                    title="Customer Notes"
                    subtitle="Helpful job details shared with the engineer"
                >
                    <div className="rounded-xl bg-slate-950 p-5">
                        <p className="text-slate-300">
                            Customer has requested the engineer to call 30 minutes before
                            arrival. Access is through the side gate.
                        </p>
                    </div>
                </SectionCard>
            </div>
        </>
    );
}