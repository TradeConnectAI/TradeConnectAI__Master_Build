import Link from "next/link";

const stats = [
["Revenue","£4,820"],
["Jobs","21"],
["Skips Out","38"],
["Drivers","6"],
["Collections","14"],
["Invoices","18"]
];

const jobs = [
["8 Yard Skip","Barry","10:30","Paid"],
["Grab Hire","Penarth","On Route","Invoice"],
["Hardcore","Cardiff","Permit"],
["Aggregates","Dinas Powys","Assigned"]
];

const links = [
["Dashboard","#"],
["Jobs","/operations-demo/driver-jobs"],
["Collections","/operations-demo/collections"],
["Drivers","/operations-demo/drivers"],
["Driver Phone","/operations-demo/driver-phone"],
["AI Chat","/operations-demo/ai-webchat"],
["Invoices","/operations-demo/invoice-receipts"]
];

export default function Page(){

return(

<div className="bg-black text-white min-h-screen">

<div className="grid lg:grid-cols-[260px_1fr]">

<aside className="border-r border-white/10 bg-[#05070d] p-5">

<div className="mb-8 flex items-center gap-3">

<div className="h-14 w-14 rounded-full bg-orange-500 grid place-items-center font-black">
I
</div>

<div>
<div className="text-2xl font-black">
INSTALL
</div>

<div className="text-orange-500 text-xs font-bold">
INTEGRATED SKIPS
</div>

</div>

</div>

<div className="space-y-2">

{links.map(([title,url])=>(

<Link
key={title}
href={url}
className="block rounded-2xl bg-white/[0.04] px-4 py-4 font-bold hover:bg-orange-500"
>

{title}

</Link>

))}

</div>

<div className="mt-8 rounded-3xl bg-white/[0.04] p-4">

<div className="text-lg font-bold">
AI Assistant
</div>

<div className="text-lime-400">
● Online
</div>

<button
className="mt-4 w-full rounded-2xl bg-orange-500 p-4 font-bold"
>

Open Chat

</button>

</div>

<div className="mt-5 rounded-3xl bg-black p-4 border border-white/10">

<div className="font-bold">
Dean Horgan
</div>

<div className="text-slate-400">
Operations Manager
</div>

</div>

</aside>

<main className="p-6">

<div className="flex items-center justify-between">

<div>

<h1 className="text-4xl font-black">
Operations Control Room
</h1>

<p className="text-slate-400">
AI booking • permits • payments • dispatch
</p>

</div>

<button
className="rounded-2xl bg-orange-500 px-6 py-4 font-black"
>

+ New Job

</button>

</div>

<div className="mt-6 grid gap-4 xl:grid-cols-6">

{stats.map(([a,b])=>(

<div
key={a}
className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
>

<div className="text-slate-400">
{a}
</div>

<div className="mt-3 text-3xl font-black">
{b}
</div>

</div>

))}

</div>

<div className="mt-6 grid gap-5 xl:grid-cols-[1fr_420px]">

<div className="rounded-3xl bg-white/[0.04] p-6">

<div className="text-2xl font-black">
Live Jobs
</div>

<div className="mt-5 space-y-3">

{jobs.map((x,i)=>(

<div
key={i}
className="grid rounded-2xl bg-black p-4 md:grid-cols-4"
>

{x.map((y,j)=>(

<div key={j}>
{y}
</div>

))}

</div>

))}

</div>

</div>

<div className="rounded-3xl bg-white/[0.04] p-6">

<div className="text-2xl font-black">
AI Activity
</div>

<div className="mt-5 space-y-3">

<div className="rounded-2xl bg-slate-900 p-4">
Customer booked 8 yard skip
</div>

<div className="rounded-2xl bg-orange-500 p-4">
Permit automatically checked
</div>

<div className="rounded-2xl bg-slate-900 p-4">
Invoice + receipt generated
</div>

<div className="rounded-2xl bg-slate-900 p-4">
Driver task sent
</div>

</div>

</div>

</div>

</main>

</div>

</div>

)

}
