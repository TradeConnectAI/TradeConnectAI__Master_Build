import Link from "next/link";

export default function InstallSkipsLogo() {
  return (
    <Link href="/install-skips-demo" className="group flex items-center gap-3">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-300/40 bg-yellow-300 text-black shadow-xl shadow-yellow-950/40">
        <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border border-black/20 bg-emerald-500" />
        <span className="text-2xl font-black leading-none">IS</span>
      </div>

      <div className="leading-none">
        <div className="text-lg font-black tracking-tight text-white sm:text-xl">
          Install Skips
        </div>
        <div className="mt-1 text-[10px] font-black uppercase tracking-[0.28em] text-yellow-300">
          AI Demo Control Room
        </div>
      </div>
    </Link>
  );
}
