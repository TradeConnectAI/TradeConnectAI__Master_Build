const fs = require("fs");
const path = require("path");

const roots = ["app", "components", "lib", "data"];
const exts = new Set([".tsx", ".ts", ".jsx", ".js"]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) files = files.concat(walk(full));
    if (item.isFile() && exts.has(path.extname(item.name))) files.push(full);
  }

  return files;
}

const replacements = [
  [/\uFFFD/g, "'"],
  [/\u00EF\u00BF\u00BD/g, "'"],
  [/\u00E2\u20AC\u2122/g, "'"],
  [/\u00E2\u20AC\u0153/g, '"'],
  [/\u00E2\u20AC\u009D/g, '"'],
  [/\u00E2\u20AC\u201C/g, "-"],
  [/\u00E2\u20AC\u201D/g, "-"],
  [/what's happening/g, "what is happening"],
  [/Customers can see what's happening/g, "Customers can see what is happening"],
  [/Customers can see what'''s happening/g, "Customers can see what is happening"],
  [/"I'm on my way now\. I'll check the leak first and confirm parts before any work starts\."/g, '"I am on my way now. I will check the leak first and confirm parts before any work starts."'],
  [/'I''m on my way now\. I''ll check the leak first and confirm parts before any work starts\.'/g, '"I am on my way now. I will check the leak first and confirm parts before any work starts."'],
];

let changed = [];

for (const root of roots) {
  for (const file of walk(root)) {
    let text = fs.readFileSync(file, "utf8");
    let next = text;

    for (const [from, to] of replacements) {
      next = next.replace(from, to);
    }

    if (next !== text) {
      fs.writeFileSync(file, next, "utf8");
      changed.push(file);
    }
  }
}

console.log("Changed files:");
console.log(changed.length ? changed.join("\n") : "None");
