import Link from "next/link";

export default function InstallSkipsLogo() {
  return (
    <Link href="/install-skips-demo" className="group inline-flex items-center gap-4">
      <div className="relative flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-[#f2f2e8] shadow-2xl shadow-black/40">
        <div className="absolute bottom-0 left-0 h-5 w-full bg-black" />
        <div className="absolute bottom-0 right-0 h-16 w-7 -skew-x-[24deg] bg-yellow-400" />
        <div className="absolute bottom-0 right-5 h-16 w-5 -skew-x-[24deg] bg-red-600" />
        <span className="relative z-10 text-xl font-black tracking-tight text-black">
          INSTALL
        </span>
      </div>

      <div className="leading-none">
        <div className="text-3xl font-black uppercase tracking-[0.08em] text-white sm:text-4xl">
          INSTALL
        </div>
        <div className="mt-1 text-sm font-black tracking-[0.28em] text-yellow-300">
          01446 421072
        </div>
        <div className="mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-slate-300 sm:text-xs">
          Integrated Skips Limited
        </div>
      </div>
    </Link>
  );
}
