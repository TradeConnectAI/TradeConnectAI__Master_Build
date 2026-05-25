import TradeConnectLogo from "@/components/TradeConnectLogo";
import Link from "next/link";

export default function DashboardHeader() {
    return (
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6">
                <div>
                    <h1 className="text-xl font-bold text-white md:text-2xl">
                        TradeConnectAI
                    </h1>

                    <p className="hidden text-sm text-slate-400 sm:block">
                        AI Trade Business Operating System
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <input
                        placeholder="Search jobs, quotes, customers..."
                        className="hidden w-72 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white outline-none transition focus:border-cyan-400 lg:block"
                    />

                    <Link
                        href="/portal/dashboard"
                        className="hidden rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white transition hover:border-cyan-400 hover:bg-slate-800 md:inline-flex"
                    >
                        Portal
                    </Link>

                    <button className="hidden rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white transition hover:border-cyan-400 hover:bg-slate-800 sm:inline-flex">
                        Notifications
                    </button>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950 md:h-11 md:w-11">
                        S
                    </div>
                </div>
            </div>
        </header>
    );
}

