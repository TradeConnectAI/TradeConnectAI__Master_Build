import Link from "next/link";

const actions = [
    {
        title: "New Job",
        href: "/dashboard/jobs",
    },
    {
        title: "New Quote",
        href: "/dashboard/quotes",
    },
    {
        title: "Add Customer",
        href: "/dashboard/customers",
    },
    {
        title: "Create Invoice",
        href: "/dashboard/invoices",
    },
    {
        title: "Run AI",
        href: "/dashboard/ai",
    },
];

export default function QuickActions() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-slate-400">
                        Quick Actions
                    </p>

                    <h2 className="mt-1 text-2xl font-semibold">
                        Operations Shortcuts
                    </h2>
                </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {actions.map((action) => (
                    <Link
                        key={action.title}
                        href={action.href}
                        className="rounded-xl border border-slate-700 bg-slate-950 p-5 text-center text-sm font-semibold transition hover:border-cyan-400 hover:bg-slate-900"
                    >
                        {action.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}