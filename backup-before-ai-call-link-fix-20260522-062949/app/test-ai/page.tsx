"use client";

import { useState } from "react";

export default function TestAIPage() {
    const [message, setMessage] = useState("Write a polite customer update for a plumber running 30 minutes late.");
    const [reply, setReply] = useState("");
    const [loading, setLoading] = useState(false);

    async function testAI() {
        setLoading(true);
        setReply("");

        const res = await fetch("/api/ai/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        const data = await res.json();
        setReply(data.reply || data.error || "No response");
        setLoading(false);
    }

    return (
        <main className="min-h-screen bg-black text-white p-10">
            <h1 className="text-4xl font-bold mb-6">TradeConnectAI Test</h1>

            <textarea
                className="w-full max-w-2xl min-h-32 rounded-xl bg-zinc-900 border border-zinc-700 p-4 mb-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <br />

            <button
                onClick={testAI}
                className="rounded-xl bg-cyan-400 text-black px-6 py-3 font-bold"
            >
                {loading ? "Thinking..." : "Test AI"}
            </button>

            {reply && (
                <div className="mt-8 max-w-2xl rounded-xl border border-zinc-700 bg-zinc-900 p-6">
                    {reply}
                </div>
            )}
        </main>
    );
}
