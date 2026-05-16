type StatCardProps = {
    label: string;
    value: string;
    helper?: string;
};

export default function StatCard({ label, value, helper }: StatCardProps) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">{label}</p>

            <h2 className="mt-3 text-2xl font-semibold text-white">{value}</h2>

            {helper ? <p className="mt-3 text-sm text-slate-400">{helper}</p> : null}
        </div>
    );
}