type ActivityItem = {
    title: string;
    detail: string;
    time: string;
};

type ActivityTimelineProps = {
    items: ActivityItem[];
};

export default function ActivityTimeline({ items }: ActivityTimelineProps) {
    return (
        <div className="space-y-4">
            {items.map((item) => (
                <div key={`${item.title}-${item.time}`} className="flex gap-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400" />

                    <div className="flex-1 rounded-xl bg-slate-950 p-4">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="font-medium text-white">{item.title}</p>
                                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                            </div>

                            <p className="text-xs text-slate-500">{item.time}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}