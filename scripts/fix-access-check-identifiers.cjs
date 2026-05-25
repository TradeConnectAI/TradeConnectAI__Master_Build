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

let changed = [];

for (const root of roots) {
  for (const file of walk(root)) {
    let text = fs.readFileSync(file, "utf8");
    let next = text;

    // Fix broken identifiers caused by replacing "permit" with "access check"
    next = next.replace(/\bconst access check\b/g, "const accessCheck");
    next = next.replace(/\blet access check\b/g, "let accessCheck");
    next = next.replace(/\bvar access check\b/g, "var accessCheck");

    next = next.replace(/\baccess check\?:/g, "accessCheck?:");
    next = next.replace(/\baccess check:/g, "accessCheck:");
    next = next.replace(/\baccess check\]/g, "accessCheck]");
    next = next.replace(/\baccess check\)/g, "accessCheck)");
    next = next.replace(/\baccess check,/g, "accessCheck,");
    next = next.replace(/\baccess check;/g, "accessCheck;");
    next = next.replace(/\baccess check \+/g, "accessCheck +");
    next = next.replace(/\+ access check\b/g, "+ accessCheck");
    next = next.replace(/\baccess check \?/g, "accessCheck ?");
    next = next.replace(/\baccess check =/g, "accessCheck =");

    // Fix common object/key cases
    next = next.replace(/(\s)access check(\s*:)/g, "$1accessCheck$2");

    // Keep visible text readable
    next = next.replace(/Road accessCheck Required/g, "Road access check required");
    next = next.replace(/Council accessCheck included/g, "Access check included");
    next = next.replace(/accessCheck included/g, "access check included");
    next = next.replace(/AccessCheck/g, "Access Check");

    if (next !== text) {
      fs.writeFileSync(file, next, "utf8");
      changed.push(file);
    }
  }
}

console.log("Fixed files:");
console.log(changed.length ? changed.join("\n") : "None");
