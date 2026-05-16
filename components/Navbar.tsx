import Image from "next/image";

const calendlyLink = "https://calendly.com/stevenneilsonvoda/30min";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#020817]/75 px-5 py-3 text-white shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="TradeConnectAI"
            width={52}
            height={52}
            priority
            className="h-auto w-[44px] object-contain"
          />

          <span className="hidden text-sm font-bold uppercase tracking-[0.25em] text-white/90 sm:block">
            TradeConnectAI
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
          <a href="#demo" className="transition hover:text-white">
            Demo
          </a>

          <a href="#how-it-works" className="transition hover:text-white">
            How It Works
          </a>

          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
        </div>

        <a
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
        >
          Book Demo
        </a>
      </nav>
    </header>
  );
}