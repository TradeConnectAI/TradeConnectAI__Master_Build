export default function PortalHeader({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="border-b border-slate-800 bg-slate-900/60 px-6 py-5 backdrop-blur">
            <p className="text-sm text-cyan-400">
                {subtitle}
            </p>

            <h1 className="mt-1 text-3xl font-bold">
                {title}
            </h1>
        </div>
    );
}