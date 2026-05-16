import PortalHeader from "../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalDocumentsPage() {
    const documents = [
        "Invoice-April.pdf",
        "Gas-Certificate.pdf",
        "Service-Report.pdf",
    ];

    return (
        <>
            <PortalHeader title="Documents" subtitle="Customer Portal" />

            <div className="space-y-6 p-6">
                <SectionCard
                    title="Secure Documents"
                    subtitle="Invoices, certificates and job reports"
                >
                    <div className="grid gap-4 lg:grid-cols-3">
                        {documents.map((file) => (
                            <div key={file} className="rounded-xl bg-slate-950 p-5">
                                <p className="text-lg font-semibold">{file}</p>

                                <p className="mt-2 text-sm text-slate-400">
                                    Secure customer document
                                </p>

                                <button className="mt-6 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950">
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </SectionCard>

                <SectionCard
                    title="Upload a file"
                    subtitle="Customers can upload access photos, certificates or job images"
                >
                    <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center">
                        <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                            Upload File
                        </button>
                    </div>
                </SectionCard>
            </div>
        </>
    );
}