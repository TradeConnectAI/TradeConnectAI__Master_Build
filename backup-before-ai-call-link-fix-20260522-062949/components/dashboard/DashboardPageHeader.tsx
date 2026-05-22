type DashboardPageHeaderProps = {
    eyebrow: string;
    title: string;
    description?: string;
    actionLabel?: string;
};

export default function DashboardPageHeader({
    eyebrow,
    title,
    description,
    actionLabel,
}: DashboardPageHeaderProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <p className="text-sm font-medium text-cyan-400">{eyebrow}</p>

                <h1 className="mt-2 text-4xl font-bold">{title}</h1>

                {description ? (
                    <p className="mt-3 max-w-2xl text-slate-400">{description}</p>
                ) : null}
            </div>

            {actionLabel ? (
                <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
                    {actionLabel}
                </button>
            ) : null}
        </div>
    );
}