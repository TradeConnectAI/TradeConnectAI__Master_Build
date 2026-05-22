import Link from "next/link"

export default function InstallQuickActions(){

const items=[
["Invoices","/operations-demo/invoice-receipts"],
["AI Chat","/operations-demo/ai-webchat"],
["Collections","/operations-demo/collections"],
["Drivers","/operations-demo/drivers"]
]

return(
<div className="grid gap-3">
{items.map(([name,url])=>(
<Link
key={url}
href={url}
className="rounded-2xl bg-orange-500 px-4 py-3 font-bold text-white hover:opacity-90"
>
{name}
</Link>
))}
</div>
)

}
