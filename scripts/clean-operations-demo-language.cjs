const fs = require("fs");
const path = require("path");

const root = "app/operations-demo";
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
  ["access check needs", "job detail needs"],
  ["access checks", "job checks"],
  ["access check", "job detail"],
  ["driver jobs", "team tasks"],
  ["Driver Jobs", "Team Tasks"],
  ["driver phones", "team phones"],
  ["driver phone", "team phone"],
  ["Driver phone", "Team phone"],
  ["drivers", "team members"],
  ["Drivers", "Team Members"],
  ["driver", "team member"],
  ["Driver", "Team Member"],
  ["tacho awareness", "job notes"],
  ["Fake live map view", "Demo live map view"],
  ["collections", "follow-ups"],
  ["Collections", "Follow-ups"],
  ["collection", "follow-up"],
  ["Collection", "Follow-up"],
  ["skip", "job"],
  ["Skip", "Job"],
  ["lorry", "team"],
  ["Lorry", "Team"],
  ["lorries", "teams"],
  ["Lorries", "Teams"],
  ["waste transfer record", "job completion record"],
  ["Mixed Waste", "Priority"],
];

let changed = [];

for (const file of walk(root)) {
  let text = fs.readFileSync(file, "utf8");
  let next = text;

  for (const [from, to] of replacements) {
    next = next.split(from).join(to);
  }

  if (next !== text) {
    fs.writeFileSync(file, next, "utf8");
    changed.push(file);
  }
}

console.log("Cleaned operations demo files:");
console.log(changed.length ? changed.join("\n") : "None");
