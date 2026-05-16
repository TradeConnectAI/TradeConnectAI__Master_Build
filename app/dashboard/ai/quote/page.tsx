"use client";

import { useState } from "react";

export default function AIQuotePage() {
    const [jobDetails, setJobDetails] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    async function generateQuote() {
        setLoading(true);
        setResult("");

        const res = await fetch("/api/ai/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: `Create a professional trade quote from these job details: ${jobDetails}`,
            }),
        });

        const data = await res.json();

        setResult(data.result || "No quote generated.");
        setLoading(false);
    }

    return (
        <main className="p-10">
            <div className="max-w-4xl mx-auto">
                <a href="/ai-tools" className="text-cyan-400 mb-6 inline-block">
                    ← Back to AI Tools
                </a>

                <h1 className="text-5xl font-bold mb-4">AI Quote Generator</h1>

                <p className="text-gray-400 mb-8">
                    Enter the job details and generate a professional customer-ready quote.
                </p>

                <textarea
                    value={jobDetails}
                    onChange={(e) => setJobDetails(e.target.value)}
                    placeholder="Example: Replace faulty socket in kitchen, supply materials, test circuit, customer in Cardiff..."
                    className="w-full h-48 bg-zinc-900 border border-zinc-700 rounded-2xl p-5 text-white mb-5 outline-none focus:border-cyan-500"
                />

                <button
                    onClick={generateQuote}
                    disabled={loading || !jobDetails}
                    className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-700 disabled:text-zinc-400 text-black px-6 py-3 rounded-xl font-semibold"
                >
                    {loading ? "Generating..." : "Generate Quote"}
                </button>

                {result && (
                    <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">Generated Quote</h2>

                        <p className="text-gray-300 whitespace-pre-wrap leading-7">
                            {result}
                        </p>
                    </section>
                )}
            </div>
        </main>
    );
}