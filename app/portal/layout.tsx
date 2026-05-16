import PortalSidebar from "./PortalSidebar";

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-screen bg-slate-950 text-white">
            <PortalSidebar />
            <section className="flex-1">{children}</section>
        </main>
    );
}