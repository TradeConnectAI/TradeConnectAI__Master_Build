"use client";

import { useState } from "react";

export default function AIToolsPage() {
    const [type, setType] = useState("quote");
    const [jobType, setJobType] = useState("Electrical");
    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const [reply, setReply] = useState("");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    async function handleGenerate() {
        setLoading(true);
        setReply("");
        setCopied(false);

        const fullMessage = `
Customer name: ${customerName || "Not provided"}
Address: ${address || "Not provided"}
Trade/job type: ${jobType}

Job details:
${message}
`;

        try {
            const res = await fetch("/api/ai/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type, message: fullMessage }),
            });

            const data = await res.json();
            setReply(data.reply || data.error || "No response.");
        } catch {
            setReply("Something went wrong.");
        }

        setLoading(false);
    }

    async function copyReply() {
        await navigator.clipboard.writeText(reply);
        setCopied(true);
    }

    return (
        <main className="min-h-screen bg-black text-white p-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold mb-8">TradeConnectAI Tools</h1>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Customer name"
                        className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                    />

                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Customer address / postcode"
                        className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                    >
                        <option>Electrical</option>
                        <option>Plumbing</option>
                        <option>Roofing</option>
                        <option>Telecoms</option>
                        <option>Cleaning</option>
                        <option>Landscaping</option>
                        <option>General Maintenance</option>
                    </select>

                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                    >
                        <option value="quote">AI Quote Generator</option>
                        <option value="jobSheet">AI Job Sheet Generator</option>
                        <option value="leadFollowUp">AI Lead Follow-up</option>
                        <option value="email">AI Email Writer</option>
                        <option value="whatsapp">AI WhatsApp Update</option>
                        <option value="dashboardChat">Dashboard Chat</option>
                    </select>
                </div>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the job, customer request or message..."
                    className="w-full h-48 bg-zinc-900 border border-zinc-700 rounded-xl p-4 mb-6"
                />

                <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl mb-8 disabled:opacity-60"
                >
                    {loading ? "Generating..." : "Generate"}
                </button>

                <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 whitespace-pre-wrap">
                    <div className="flex justify-between gap-4 mb-4">
                        <h2 className="text-xl font-bold">AI Output</h2>

                        {reply && (
                            <button
                                onClick={copyReply}
                                className="bg-white text-black px-4 py-2 rounded-lg font-bold"
                            >
                                {copied ? "Copied" : "Copy"}
                            </button>
                        )}
                    </div>

                    {reply || "AI response will appear here."}
                </div>
            </div>
        </main>
    );
}