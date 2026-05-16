"use client";

export default function JobPresetApply({ presets, onApply }) {
    return (
        <div className="space-y-2">
            <h2 className="font-semibold">Apply Preset</h2>

            <div className="flex gap-2 flex-wrap">
                {presets.map((preset) => (
                    <button
                        key={preset.title}
                        onClick={() => onApply(preset)}
                        className="px-3 py-1 bg-gray-200 rounded"
                    >
                        {preset.title}
                    </button>
                ))}
            </div>
        </div>
    );
}
