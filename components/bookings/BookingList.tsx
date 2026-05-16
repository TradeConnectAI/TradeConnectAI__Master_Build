// components/bookings/BookingList.tsx
type Booking = {
    id: string;
    customerName: string;
    jobType: string;
    date: string;
    status: "New" | "Scheduled" | "Completed" | "Cancelled";
};

const statusColors: Record<Booking["status"], string> = {
    New: "bg-emerald-100 text-emerald-700",
    Scheduled: "bg-blue-100 text-blue-700",
    Completed: "bg-slate-100 text-slate-700",
    Cancelled: "bg-rose-100 text-rose-700",
};

export default function BookingList({ bookings }: { bookings: Booking[] }) {
    return (
        <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th className="text-left px-4 py-2 text-xs font-semibold text-slate-500">
                            Customer
                        </th>
                        <th className="text-left px-4 py-2 text-xs font-semibold text-slate-500">
                            Job type
                        </th>
                        <th className="text-left px-4 py-2 text-xs font-semibold text-slate-500">
                            Date
                        </th>
                        <th className="text-left px-4 py-2 text-xs font-semibold text-slate-500">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((b) => (
                        <tr key={b.id} className="border-b border-slate-100">
                            <td className="px-4 py-2 text-slate-800">{b.customerName}</td>
                            <td className="px-4 py-2 text-slate-600">{b.jobType}</td>
                            <td className="px-4 py-2 text-slate-600">
                                {new Date(b.date).toLocaleDateString("en-GB")}
                            </td>
                            <td className="px-4 py-2">
                                <span
                                    className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] font-medium ${statusColors[b.status]}`}
                                >
                                    {b.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
