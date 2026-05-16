type DataTableColumn = {
    key: string;
    label: string;
};

type DataTableProps = {
    columns: DataTableColumn[];
    rows: Record<string, string>[];
};

export default function DataTable({ columns, rows }: DataTableProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">
                    <thead className="border-b border-slate-800 bg-slate-950 text-slate-400">
                        <tr>
                            {columns.map((column) => (
                                <th key={column.key} className="px-5 py-4 font-medium">
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b border-slate-800 last:border-b-0"
                            >
                                {columns.map((column) => (
                                    <td key={column.key} className="px-5 py-4 text-slate-200">
                                        {row[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}