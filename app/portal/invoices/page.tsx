import Link from "next/link";
import PortalHeader from "../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalInvoicesPage() {
    const invoices = [
        {
            id: "2231",
            title: "Boiler Service",
            amount: "£365.00",
            status: "Paid",
        },
        {
            id: "2232",
            title: "Heating Repair",
            amount: "£420.00",
            status: "Due",
        },
    ];

    return (
        <>
            <PortalHeader title="Invoices" subtitle="Customer Portal" />

            <div className="p-6">
                <SectionCard
                    title="Your Invoices"
                    subtitle="View invoice status and payment history"
                >
                    <div className="space-y-4">
                        {invoices.map((invoice) => (
                            <div
                                key={invoice.id}
                                className="flex items-center justify-between rounded-xl bg-slate-950 p-5"
                            >
                                <div>
                                    <p className="text-sm text-slate-400">
                                        Invoice #{invoice.id}
                                    </p>

                                    <h2 className="mt-1 text-xl font-semibold">
                                        {invoice.title}
                                    </h2>

                                    <p className="mt-1 text-sm text-cyan-400">
                                        {invoice.status}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-xl font-bold">{invoice.amount}</p>

                                    <Link
                                        href={`/portal/invoices/${invoice.id}`}
                                        className="mt-3 inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
                                    >
                                        View Invoice
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionCard>
            </div>
        </>
    );
}