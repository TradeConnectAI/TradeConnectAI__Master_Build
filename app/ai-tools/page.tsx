export default function AIToolsPage() {
    const tools = [
        {
            name: "AI Quote Generator",
            href: "/dashboard/ai/quote",
        },
        {
            name: "AI Job Sheet Creator",
            href: "/dashboard/ai/jobsheet",
        },
        {
            name: "AI Customer Reply",
            href: "/dashboard/ai/reply",
        },
        {
            name: "AI Lead Assistant",
            href: "/dashboard/ai/quote",
        },
        {
            name: "AI Marketing Writer",
            href: "/dashboard/ai/quote",
        },
        {
            name: "AI Follow-up Generator",
            href: "/dashboard/ai/quote",
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white p-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">
                    TradeConnectAI
                </h1>

                <p className="text-gray-400 mb-10 text-lg">
                    AI powered tools for trades businesses.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500 transition"
                        >
                            <h2 className="text-xl font-semibold mb-3">
                                {tool.name}
                            </h2>

                            <p className="text-gray-400 mb-5">
                                Generate professional outputs instantly using AI.
                            </p>

                            <a
                                href={tool.href}
                                className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-xl font-medium"
                            >
                                Open Tool
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}