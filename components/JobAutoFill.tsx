"use client";

import { useState } from "react";
import JobPresetSelect from "./JobPresetSelect";

export default function JobAutoFill() {
    const [form, setForm] = useState({
        duration: "",
        priceRange: "",
        materials: "",
        description: ""
    });

    function applyPreset(preset) {
        if (!preset) return;

        setForm({
            duration: preset.default_duration,
            priceRange: preset.price_range,
            materials: preset.materials.join(", "),
            description: preset.description
        });
    }

    return (
        <div className="space-y-4">
            <JobPresetSelect onSelect={applyPreset} />

            <input
                className="border p-2 w-full rounded"
                placeholder="Duration (minutes)"
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
            />

            <input
                className="border p-2 w-full rounded"
                placeholder="Price Range"
                value={form.priceRange}
                onChange={(e) => setForm({ ...form, priceRange: e.target.value })}
            />

            <input
                className="border p-2 w-full rounded"
                placeholder="Materials"
                value={form.materials}
                onChange={(e) => setForm({ ...form, materials: e.target.value })}
            />

            <textarea
                className="border p-2 w-full rounded"
                placeholder="Job Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
            />

            <div className="border p-4 rounded bg-gray-50">
                <h3 className="font-semibold mb-2">Preview</h3>
                <p><strong>Duration:</strong> {form.duration} minutes</p>
                <p><strong>Price Range:</strong> {form.priceRange}</p>
                <p><strong>Materials:</strong> {form.materials}</p>
                <p><strong>Description:</strong> {form.description}</p>
            </div>
        </div>
    );
}
