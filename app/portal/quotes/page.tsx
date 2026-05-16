import Link from "next/link";
import PortalHeader from "../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalQuotesPage() {
    const quotes = [
        {
            id: "1042",
            title: "Heating Repair",
            amount: "£420.00",
            status: "Awaiting Approval",
        },
        {
            id: "1043",
            title: "Boiler Service",
            amount: "£365.00",
            status: "Approved",
        },
    ];

    return (
        <>
            <PortalHeader title="Quotes" subtitle="Customer Portal" />

            <div className="p-6">
                <SectionCard
                    title="Your Quotes"
                    subtitle="Review, approve or ask questions about quotes"
                >
                    <div className="space-y-4">
                        {quotes.map((quote) => (
                            <div
                                key={quote.id}
                                className="flex items-center justify-between rounded-xl bg-slate-950 p-5"
                            >
                                <div>
                                    <p className="text-sm text-slate-400">Quote #{quote.id}</p>
                                    <h2 className="mt-1 text-xl font-semibold">{quote.title}</h2>
                                    <p className="mt-1 text-sm text-cyan-400">{quote.status}</p>
                                </div>

                                <div className="text-right">
                                    <p className="text-xl font-bold">{quote.amount}</p>

                                    <Link
                                        href={`/portal/quotes/${quote.id}`}
                                        className="mt-3 inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
                                    >
                                        View Quote
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