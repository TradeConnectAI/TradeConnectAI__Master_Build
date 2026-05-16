import PortalHeader from "../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalMessagesPage() {
    return (
        <>
            <PortalHeader title="Messages" subtitle="Customer Portal" />

            <div className="p-6">
                <SectionCard
                    title="Support Chat"
                    subtitle="Customer messages and engineer updates"
                >
                    <div className="max-w-3xl">
                        <div className="space-y-4">
                            <div className="rounded-2xl bg-slate-950 p-4">
                                <p className="text-sm text-slate-400">
                                    TradeConnectAI Support
                                </p>

                                <p className="mt-2">
                                    Hi Steve, your engineer has been assigned and will arrive
                                    between 08:00 and 10:00.
                                </p>
                            </div>

                            <div className="ml-auto max-w-md rounded-2xl bg-cyan-400 p-4 text-slate-950">
                                <p>Perfect, thank you.</p>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <input
                                className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none"
                                placeholder="Type your message..."
                            />

                            <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
                                Send
                            </button>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </>
    );
}