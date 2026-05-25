const fs = require("fs");

const file = "app/page.tsx";
let text = fs.readFileSync(file, "utf8");

// Make main hero grid less cramped on mobile
text = text.replace(
  'className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24 md:pt-16"',
  'className="mx-auto grid max-w-7xl items-start gap-8 px-4 pb-12 pt-6 sm:px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pb-24 md:pt-16"'
);

// Shrink main headline properly on mobile
text = text.replace(
  'className="mt-7 max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.06em] text-white md:text-8xl"',
  'className="mt-6 max-w-5xl text-[3.35rem] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl md:mt-7 md:text-8xl"'
);

// Make paragraph better on mobile
text = text.replace(
  'className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl"',
  'className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:mt-7 md:text-xl"'
);

// Button row mobile full width
text = text.replace(
  'className="mt-9 flex flex-wrap gap-3"',
  'className="mt-8 grid gap-3 sm:flex sm:flex-wrap"'
);

text = text.replace(
  'className="rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-2xl shadow-black/30"',
  'className="w-full rounded-full bg-white px-6 py-4 text-center text-sm font-black text-slate-950 shadow-2xl shadow-black/30 sm:w-auto"'
);

text = text.replace(
  'className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur hover:bg-white/15"',
  'className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-sm font-black text-white backdrop-blur hover:bg-white/15 sm:w-auto"'
);

// Header logo and CTA mobile sizing
text = text.replace(
  'className="h-14 w-auto rounded-2xl object-contain md:h-16"',
  'className="h-11 w-auto rounded-2xl object-contain sm:h-14 md:h-16"'
);

text = text.replace(
  'className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30"',
  'className="rounded-full bg-cyan-300 px-4 py-3 text-xs font-black text-slate-950 shadow-xl shadow-cyan-950/30 sm:px-5 sm:text-sm"'
);

// Hide large desktop visual on mobile, show from tablet upwards
text = text.replace(
  '<section className="relative">',
  '<section className="relative hidden md:block">'
);

// Insert a clean mobile-only summary card after hero text/stats section before desktop visual
const marker = `
          </section>

          <section className="relative hidden md:block">`;

const mobileCard = `
          </section>

          <section className="rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-4 shadow-2xl shadow-cyan-950/20 md:hidden">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Demo snapshot
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              New enquiry captured
            </h2>
            <div className="mt-4 grid gap-2">
              {[
                "Customer details saved",
                "Job card created",
                "Quote draft ready",
                "Customer update prepared",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="relative hidden md:block">`;

if (text.includes(marker) && !text.includes("Demo snapshot")) {
  text = text.replace(marker, mobileCard);
}

fs.writeFileSync(file, text, "utf8");
console.log("Targeted homepage mobile fix applied.");
