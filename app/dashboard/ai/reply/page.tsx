"use client";

import { useState } from "react";

export default function AICustomerReplyPage() {
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    async function generateReply() {
        setLoading(true);
        setResult("");

        const res = await fetch("/api/ai/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt: `Write a professional, friendly customer reply for this message: ${message}`,
            }),
        });

        const data = await res.json();

        setResult(data.result || "No reply generated.");
        setLoading(false);
    }

    return (
        <main className="p-10">
            <div className="max-w-4xl mx-auto">
                <a href="/ai-tools" className="text-cyan-400 mb-6 inline-block">
                    ← Back to AI Tools
                </a>

                <h1 className="text-5xl font-bold mb-4">AI Customer Reply</h1>

                <p className="text-gray-400 mb-8">
                    Turn rough customer messages into professional replies.
                </p>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Example: Customer says the quote is too expensive and asks if you can do it cheaper..."
                    className="w-full h-48 bg-zinc-900 border border-zinc-700 rounded-2xl p-5 text-white mb-5 outline-none focus:border-cyan-500"
                />

                <button
                    onClick={generateReply}
                    disabled={loading || !message}
                    className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-700 disabled:text-zinc-400 text-black px-6 py-3 rounded-xl font-semibold"
                >
                    {loading ? "Generating..." : "Generate Reply"}
                </button>

                {result && (
                    <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">Generated Reply</h2>

                        <p className="text-gray-300 whitespace-pre-wrap leading-7">
                            {result}
                        </p>
                    </section>
                )}
            </div>
        </main>
    );
}