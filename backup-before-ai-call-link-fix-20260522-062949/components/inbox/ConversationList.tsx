// components/inbox/ConversationList.tsx
type Conversation = {
    id: string;
    name: string;
    lastMessage: string;
    updatedAt: string;
    unread: boolean;
};

export default function ConversationList({ conversations }: { conversations: Conversation[] }) {
    return (
        <aside className="w-72 border-r border-slate-200 bg-slate-50 flex flex-col">
            <div className="p-3 border-b border-slate-200">
                <h2 className="text-sm font-semibold text-slate-800">Inbox</h2>
                <p className="text-xs text-slate-500">All conversations</p>
            </div>
            <div className="flex-1 overflow-y-auto">
                {conversations.map((c) => (
                    <button
                        key={c.id}
                        className="w-full text-left px-3 py-2 border-b border-slate-100 hover:bg-slate-100"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-900">{c.name}</span>
                            <span className="text-[10px] text-slate-500">{c.updatedAt}</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-slate-500 truncate max-w-[160px]">
                                {c.lastMessage}
                            </span>
                            {c.unread && (
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </aside>
    );
}
