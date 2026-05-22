import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import EmptyState from "@/components/ui/EmptyState";

export default function TestEmptyPage() {
    return (
        <DashboardShell>
            <div className="space-y-6 p-6">
                <DashboardPageHeader
                    eyebrow="Test Page"
                    title="Empty State Preview"
                    description="Reusable empty state component for blank dashboard areas."
                />

                <EmptyState
                    title="No jobs found"
                    description="Once jobs are created, they will appear here for tracking and management."
                    actionLabel="Create Job"
                />
            </div>
        </DashboardShell>
    );
}

