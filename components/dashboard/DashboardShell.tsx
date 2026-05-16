import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardShell({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-screen bg-slate-950 text-white">
            <DashboardSidebar />

            <div className="flex min-w-0 flex-1 flex-col">
                <DashboardHeader />

                <section className="mx-auto w-full max-w-7xl flex-1">
                    {children}
                </section>
            </div>
        </main>
    );
}