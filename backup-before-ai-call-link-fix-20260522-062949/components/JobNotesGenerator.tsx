"use client";

import { useState } from "react";

export default function JobNotesGenerator() {
    const [form, setForm] = useState({
        title: "",
        materials: "",
        description: "",
        duration: "",
        issues: ""
    });

    const [generated, setGenerated] = useState("");

    async function generateNotes() {
        const res = await fetch("/api/generate-job-notes", {
            method: "POST",
            body: JSON.stringify(form)
        });

        const data = await res.json();

        if (data.notes) {
            setGenerated(data.notes);
        }
    }

    return (
        <div className="space-y-4 border p-4 rounded">
            <h2 className="text-xl font-bold">AI Job Notes Generator</h2>

            <input
                className="border p-2 rounded w-full"
                placeholder="Job Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <input
                className="border p-2 rounded w-full"
                placeholder="Materials Used"
                value={form.materials}
                onChange={(e) => setForm({ ...form, materials: e.target.value })}
            />

            <textarea
                className="border p-2 rounded w-full"
                placeholder="Work Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
            />

            <input
                className="border p-2 rounded w-full"
                placeholder="Duration (minutes)"
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
            />

            <textarea
                className="border p-2 rounded w-full"
                placeholder="Issues Found (optional)"
                value={form.issues}
                onChange={(e) => setForm({ ...form, issues: e.target.value })}
            />

            <button
                type="button"
                onClick={generateNotes}
                className="px-4 py-2 bg-orange-600 text-white rounded"
            >
                Generate Job Notes with AI
            </button>

            {generated && (
                <div className="border p-3 rounded bg-gray-50">
                    <h3 className="font-semibold mb-2">Generated Job Notes</h3>
                    <p>{generated}</p>
                </div>
            )}
        </div>
    );
}
