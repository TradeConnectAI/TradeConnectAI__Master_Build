const fs = require("fs");
const path = require("path");

const roots = ["app", "components", "lib", "data"];
const exts = new Set([".tsx", ".ts", ".jsx", ".js"]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  let out = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) out = out.concat(walk(full));
    if (item.isFile() && exts.has(path.extname(item.name))) out.push(full);
  }
  return out;
}

const replacements = [
  [/Install Integrated Skips Demo/g, "TradeConnectAI Operations Demo"],
  [/Install Skips Demo/g, "TradeConnectAI Operations Demo"],
  [/Install Integrated Skips/g, "TradeConnectAI"],
  [/Install Skips/g, "TradeConnectAI"],

  [/skip movements/gi, "job movements"],
  [/Skips out/g, "Jobs active"],
  [/skips out/gi, "jobs active"],
  [/skips,/gi, "jobs,"],
  [/skips\./gi, "jobs."],
  [/skips /gi, "jobs "],
  [/skips/gi, "jobs"],

  [/skip collections/gi, "job collections"],
  [/skip collection/gi, "job collection"],
  [/skip stock/gi, "team availability"],
  [/skip hire/gi, "trade service"],
  [/skip booking/gi, "job booking"],
  [/book skips/gi, "book jobs"],
  [/AI books skips/gi, "AI books jobs"],
  [/Permit \/ Access Check/g, "Access Check"],
  [/permits/gi, "access checks"],
  [/permit/gi, "access check"],

  [/Lorries out/g, "Teams out"],
  [/lorries out/gi, "teams out"],
  [/lorries/gi, "teams"],
  [/lorry/gi, "team"],

  [/grab hire/gi, "trade services"],
  [/aggregate delivery/gi, "material delivery"],
  [/aggregate deliveries/gi, "material deliveries"],
  [/aggregates/gi, "materials"],

  [/General waste/gi, "General job"],
  [/Hardcore/gi, "Urgent job"],
  [/waste removal/gi, "site clearance"],
];

let changed = [];

for (const root of roots) {
  for (const file of walk(root)) {
    let text = fs.readFileSync(file, "utf8");
    let next = text;

    for (const [from, to] of replacements) {
      next = next.replace(from, to);
    }

    // Fix homepage bad characters while we're here.
    next = next.replace(/whatï¿½s/g, "what is");
    next = next.replace(/ï¿½Iï¿½m on my way now\. Iï¿½ll check the leak first and confirm parts before any work starts\.ï¿½/g, '"I am on my way now. I will check the leak first and confirm parts before any work starts."');
    next = next.replace(/Iï¿½m/g, "I am");
    next = next.replace(/Iï¿½ll/g, "I will");
    next = next.replace(/youï¿½re/g, "you're");
    next = next.replace(/donï¿½t/g, "don't");
    next = next.replace(/ï¿½/g, "£");

    if (next !== text) {
      fs.writeFileSync(file, next, "utf8");
      changed.push(file);
    }
  }
}

console.log("Changed files:");
console.log(changed.length ? changed.join("\n") : "None");
