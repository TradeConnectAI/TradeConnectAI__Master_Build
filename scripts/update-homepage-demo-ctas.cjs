const fs = require("fs");

const file = "app/page.tsx";
let text = fs.readFileSync(file, "utf8");

text = text.replaceAll('href="/operations-demo"\n            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30"\n          >\n            View demo', 'href="/book-demo"\n            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30"\n          >\n            Book demo');

text = text.replaceAll('href="/ai-call-demo"\n                className="rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-2xl shadow-black/30"\n              >\n                Try AI call demo', 'href="/book-demo"\n                className="rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-2xl shadow-black/30"\n              >\n                Request beta access');

text = text.replaceAll('href="/operations-demo"\n                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur hover:bg-white/15"\n              >\n                Open operations demo', 'href="/operations-demo"\n                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur hover:bg-white/15"\n              >\n                Open operations demo');

text = text.replaceAll('href="#beta"', 'href="/book-demo"');

fs.writeFileSync(file, text, "utf8");
console.log("Homepage CTAs updated.");
