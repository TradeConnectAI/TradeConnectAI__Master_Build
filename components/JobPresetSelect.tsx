"use client";

import useJobPresets from "@/hooks/useJobPresets";

export default function JobPresetSelect({ onSelect }) {
    const presets = useJobPresets();

    return (
        <div className="space-y-2">
            <h2 className="font-semibold">Choose a Preset</h2>

            <select
                className="border p-2 rounded w-full"
                onChange={(e) => {
                    const preset = presets.find((p) => p.title === e.target.value);
                    if (preset) onSelect(preset);
                }}
            >
                <option value="">Select preset...</option>
                {presets.map((preset) => (
                    <option key={preset.title} value={preset.title}>
                        {preset.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
