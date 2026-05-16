"use client";

import { useState } from "react";

export default function CustomerMessageGenerator() {
    const [form, setForm] = useState({
        type: "booking_confirmation",
        customerName: "",
        jobTitle: "",
        date: "",
        time: "",
        extra: ""
    });

    const [generated, setGenerated] = useState("");

    async function generateMessage() {
        const res = await fetch("/api/generate-customer-message", {
            method: "POST",
            body: JSON.stringify(form)
        });

        const data = await res.json();

        if (data.message) {
            setGenerated(data.message);
        }
    }

    return (
        <div className="space-y-4 border p-4 rounded">
            <h2 className="text-xl font-bold">AI Customer Message Generator</h2>

            <select
                className="border p-2 rounded w-full"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
                <option value="booking_confirmation">Booking Confirmation</option>
                <option value="arrival_notice">Arrival Notice</option>
                <option value="job_update">Job Update</option>
                <option value="job_complete">Job Complete</option>
                <option value="quote_message">Quote Message</option>
                <option value="follow_up">Follow Up</option>
            </select>

            <input
                className="border p-2 rounded w-full"
                placeholder="Customer Name"
                value={form.customerName}
                onChange={(e) => setForm({ ...form, customerName: e.target.value })}
            />

            <input
                className="border p-2 rounded w-full"
                placeholder="Job Title"
                value={form.jobTitle}
                onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
            />

            <input
                className="border p-2 rounded w-full"
                placeholder="Date (optional)"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <input
                className="border p-2 rounded w-full"
                placeholder="Time (optional)"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
            />

            <textarea
                className="border p-2 rounded w-full"
                placeholder="Extra notes (optional)"
                value={form.extra}
                onChange={(e) => setForm({ ...form, extra: e.target.value })}
            />

            <button
                type="button"
                onClick={generateMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Generate Customer Message
            </button>

            {generated && (
                <div className="border p-3 rounded bg-gray-50">
                    <h3 className="font-semibold mb-2">Generated Message</h3>
                    <p>{generated}</p>
                </div>
            )}
        </div>
    );
}
