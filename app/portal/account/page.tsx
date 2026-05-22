import PortalHeader from "../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalAccountPage() {
    return (
        <>
            <PortalHeader title="Account" subtitle="Customer Portal" />

            <div className="space-y-6 p-6">
                <SectionCard
                    title="Customer Details"
                    subtitle="Customer profile and contact information"
                >
                    <div className="grid gap-4 md:grid-cols-1 md:grid-cols-2">
                        <div className="rounded-xl bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Name</p>
                            <p className="mt-1 font-medium text-white">Steve Johnson</p>
                        </div>

                        <div className="rounded-xl bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Email</p>
                            <p className="mt-1 font-medium text-white">steve@example.com</p>
                        </div>

                        <div className="rounded-xl bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Phone</p>
                            <p className="mt-1 font-medium text-white">+44 7700 900123</p>
                        </div>

                        <div className="rounded-xl bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Customer ID</p>
                            <p className="mt-1 font-medium text-white">TC-1024</p>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard
                    title="Service Address"
                    subtitle="Default customer job location"
                >
                    <div className="rounded-xl bg-slate-950 p-4">
                        <p className="font-medium text-white">24 Riverside View</p>
                        <p className="mt-1 text-slate-400">Cardiff</p>
                        <p className="mt-1 text-slate-400">CF10 1AA</p>
                    </div>
                </SectionCard>

                <SectionCard
                    title="Portal Preferences"
                    subtitle="How the customer receives updates"
                >
                    <div className="grid gap-4 md:grid-cols-1 md:grid-cols-1 md:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                        {["Email Updates", "SMS Reminders", "Invoice Alerts"].map(
                            (setting) => (
                                <div
                                    key={setting}
                                    className="flex items-center justify-between rounded-xl bg-slate-950 p-4"
                                >
                                    <span className="text-sm font-medium text-white">
                                        {setting}
                                    </span>

                                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                                        On
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </SectionCard>
            </div>
        </>
    );
}
