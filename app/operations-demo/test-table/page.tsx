import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DataTable from "@/components/ui/DataTable";

export default function TestTablePage() {
    const columns = [
        { key: "customer", label: "Customer" },
        { key: "job", label: "Job" },
        { key: "status", label: "Status" },
        { key: "value", label: "Value" },
    ];

    const rows = [
        {
            customer: "Steve Johnson",
            job: "Kitchen Rewire",
            status: "In Progress",
            value: "£1,250",
        },
        {
            customer: "Laura Smith",
            job: "Emergency Callout",
            status: "Awaiting Engineer",
            value: "£180",
        },
        {
            customer: "Michael Brown",
            job: "Boiler Installation",
            status: "Scheduled",
            value: "£2,400",
        },
    ];

    return (
        <DashboardShell>
            <div className="space-y-6 p-6">
                <DashboardPageHeader
                    eyebrow="Test Page"
                    title="Data Table Preview"
                    description="Reusable table component for jobs, customers, quotes and invoices."
                />

                <DataTable columns={columns} rows={rows} />
            </div>
        </DashboardShell>
    );
}

