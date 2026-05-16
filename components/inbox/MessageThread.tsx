// components/inbox/MessageThread.tsx
"use client";

import { useState } from "react";

type Message = {
    id: string;
    from: "customer" | "agent";
    text: string;
    time: string;
};

export default function MessageThread({ messages }: { messages: Message[] }) {
    const [input, setInput] = useState("");

    return (
        <section className="flex-1 flex flex-col">
            <div className="border-b border-slate-200 px-4 py-2">
                <h3 className="text-sm font-semibold text-slate-800">
                    John Smith
                </h3>
                <p className="text-xs text-slate-500">WhatsApp • +44 7000 000000</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-slate-50">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex ${m.from === "agent" ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div
                            className={`max-w-xs rounded-lg px-3 py-2 text-sm ${m.from === "agent"
                                    ? "bg-emerald-500 text-white"
                                    : "bg-white border border-slate-200 text-slate-800"
                                }`}
                        >
                            <p>{m.text}</p>
                            <span className="block text-[10px] text-slate-400 mt-1 text-right">
                                {m.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <form
                className="border-t border-slate-200 px-3 py-2 flex gap-2 bg-white"
                onSubmit={(e) => {
                    e.preventDefault();
                    setInput("");
                }}
            >
                <input
                    className="flex-1 text-sm border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Type a reply…"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
                >
                    Send
                </button>
            </form>
        </section>
    );
}
