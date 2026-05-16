type StatusBadgeProps = {
    status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    const normalized = status.toLowerCase();

    const styles =
        normalized.includes("paid") ||
            normalized.includes("approved") ||
            normalized.includes("won") ||
            normalized.includes("progress")
            ? "bg-emerald-500/10 text-emerald-400"
            : normalized.includes("due") ||
                normalized.includes("awaiting") ||
                normalized.includes("draft") ||
                normalized.includes("scheduled")
                ? "bg-yellow-500/10 text-yellow-300"
                : normalized.includes("overdue") ||
                    normalized.includes("lost") ||
                    normalized.includes("declined")
                    ? "bg-red-500/10 text-red-300"
                    : "bg-cyan-400/10 text-cyan-400";

    return (
        <span className={`rounded-full px-3 py-1 text-sm font-medium ${styles}`}>
            {status}
        </span>
    );
}