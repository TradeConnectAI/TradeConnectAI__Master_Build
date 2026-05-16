import PortalHeader from "../PortalHeader";
import StatCard from "@/components/ui/StatCard";
import SectionCard from "@/components/ui/SectionCard";
import ActivityTimeline from "@/components/ui/ActivityTimeline";

export default function PortalDashboardPage() {
    const activity = [
        {
            title: "Quote approved",
            detail: "Heating Repair quote was approved by the customer.",
            time: "Today",
        },
        {
            title: "Engineer assigned",
            detail: "Sarah Collins assigned to Kitchen Rewire.",
            time: "Yesterday",
        },
        {
            title: "Invoice created",
            detail: "Invoice #2232 generated for Heating Repair.",
            time: "2 days ago",
        },
    ];

    return (
        <>
            <PortalHeader title="Dashboard" subtitle="Customer Portal" />

            <div className="space-y-6 p-6">
                <div className="grid gap-6 lg:grid-cols-3">
                    <StatCard
                        label="Upcoming Appointment"
                        value="Boiler Inspection"
                        helper="15 May 2026 · 08:00 - 10:00"
                    />

                    <StatCard
                        label="Outstanding Quote"
                        value="£420.00"
                        helper="Heating Repair"
                    />

                    <StatCard
                        label="Documents"
                        value="3 Files"
                        helper="Invoices, certificates and reports"
                    />
                </div>

                <SectionCard
                    title="Recent Activity"
                    subtitle="Latest portal updates and customer actions"
                >
                    <ActivityTimeline items={activity} />
                </SectionCard>
            </div>
        </>
    );
}