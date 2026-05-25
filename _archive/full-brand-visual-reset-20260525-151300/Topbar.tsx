import TradeConnectLogo from "@/components/TradeConnectLogo";

// components/dashboard/Topbar.tsx
"use client";

export default function Topbar() {
    return (
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6">
            <h1 className="text-sm font-semibold text-slate-800">
                TradeConnectAI Dashboard
            </h1>
            <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500">Early Access</span>
                <div className="w-8 h-8 rounded-full bg-slate-300" />
            </div>
        </header>
    );
}



