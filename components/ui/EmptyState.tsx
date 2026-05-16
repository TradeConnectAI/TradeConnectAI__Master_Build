type EmptyStateProps = {
    title: string;
    description: string;
    actionLabel?: string;
};

export default function EmptyState({
    title,
    description,
    actionLabel,
}: EmptyStateProps) {
    return (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl">
                +
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-white">
                {title}
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
                {description}
            </p>

            {actionLabel ? (
                <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
                    {actionLabel}
                </button>
            ) : null}
        </div>
    );
}