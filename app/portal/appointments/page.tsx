import Link from "next/link";
import PortalHeader from "../PortalHeader";
import SectionCard from "@/components/ui/SectionCard";

export default function PortalAppointmentsPage() {
    const appointments = [
        {
            id: "2047",
            title: "Boiler Inspection",
            engineer: "Mike Reynolds",
            date: "15 May 2026",
            time: "08:00 - 10:00",
            status: "Scheduled",
        },
        {
            id: "2048",
            title: "Kitchen Rewire",
            engineer: "Sarah Collins",
            date: "17 May 2026",
            time: "12:00 - 14:00",
            status: "Engineer Assigned",
        },
    ];

    return (
        <>
            <PortalHeader title="Appointments" subtitle="Customer Portal" />

            <div className="p-6">
                <SectionCard
                    title="Upcoming Appointments"
                    subtitle="View engineer visits and arrival windows"
                >
                    <div className="space-y-4">
                        {appointments.map((appointment) => (
                            <div
                                key={appointment.id}
                                className="rounded-xl bg-slate-950 p-5"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {appointment.title}
                                        </h2>

                                        <p className="mt-2 text-sm text-slate-400">
                                            Engineer: {appointment.engineer}
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-400">
                                        {appointment.status}
                                    </span>
                                </div>

                                <div className="mt-5 grid gap-3 text-sm text-slate-300 md:grid-cols-1 md:grid-cols-1 md:grid-cols-1 md:grid-cols-1 md:grid-cols-2">
                                    <div className="rounded-xl bg-slate-900 p-4">
                                        <p className="text-slate-500">Date</p>
                                        <p className="mt-1 font-medium text-white">
                                            {appointment.date}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-slate-900 p-4">
                                        <p className="text-slate-500">Arrival Window</p>
                                        <p className="mt-1 font-medium text-white">
                                            {appointment.time}
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href={`/portal/jobs/${appointment.id}`}
                                    className="mt-5 inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </SectionCard>
            </div>
        </>
    );
}
