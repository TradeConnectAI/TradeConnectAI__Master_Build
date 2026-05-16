"use client";

import { useState } from "react";

export default function AIJobSheetPage() {
    const [jobDetails, setJobDetails] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    async function generateJobSheet() {
        setLoading(true);
        setResult("");

        const res = await fetch("/api/ai/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: `Create a professional engineer job sheet from these details: ${jobDetails}`,
            }),
        });

        const data = await res.json();

        setResult(data.result || "No job sheet generated.");
        setLoading(false);
    }

    return (
        <main className="p-10">
            <div className="max-w-4xl mx-auto">
                <a href="/ai-tools" className="text-cyan-400 mb-6 inline-block">
                    ← Back to AI Tools
                </a>

                <h1 className="text-5xl font-bold mb-4">AI Job Sheet Generator</h1>

                <p className="text-gray-400 mb-8">
                    Turn rough job notes into a clean engineer job sheet.
                </p>

                <textarea
                    value={jobDetails}
                    onChange={(e) => setJobDetails(e.target.value)}
                    placeholder="Example: Arrived on site, replaced faulty socket, tested circuit, customer satisfied..."
                    className="w-full h-48 bg-zinc-900 border border-zinc-700 rounded-2xl p-5 text-white mb-5 outline-none focus:border-cyan-500"
                />

                <button
                    onClick={generateJobSheet}
                    disabled={loading || !jobDetails}
                    className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-700 disabled:text-zinc-400 text-black px-6 py-3 rounded-xl font-semibold"
                >
                    {loading ? "Generating..." : "Generate Job Sheet"}
                </button>

                {result && (
                    <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Generated Job Sheet
                        </h2>

                        <p className="text-gray-300 whitespace-pre-wrap leading-7">
                            {result}
                        </p>
                    </section>
                )}
            </div>
        </main>
    );
}