export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const links = [
        {
            name: "AI Tools",
            href: "/ai-tools",
        },
        {
            name: "Quote Generator",
            href: "/dashboard/ai/quote",
        },
        {
            name: "Job Sheet Creator",
            href: "/dashboard/ai/jobsheet",
        },
        {
            name: "Customer Reply",
            href: "/dashboard/ai/reply",
        },
    ];

    return (
        <div className="flex min-h-screen bg-black text-white">
            <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6">
                <h1 className="text-3xl font-bold mb-10">
                    TradeConnectAI
                </h1>

                <nav className="space-y-3">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl px-4 py-3 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="mt-10 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
                    <p className="text-sm text-gray-400 mb-2">
                        Platform Status
                    </p>

                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />

                        <p className="text-sm">
                            AI Systems Online
                        </p>
                    </div>
                </div>
            </aside>

            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}