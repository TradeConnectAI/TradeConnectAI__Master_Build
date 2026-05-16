type SectionCardProps = {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
};

export default function SectionCard({
    title,
    subtitle,
    children,
}: SectionCardProps) {
    return (
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            {(title || subtitle) && (
                <div className="mb-6">
                    {title ? (
                        <h2 className="text-2xl font-semibold text-white">{title}</h2>
                    ) : null}

                    {subtitle ? (
                        <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
                    ) : null}
                </div>
            )}

            {children}
        </section>
    );
}