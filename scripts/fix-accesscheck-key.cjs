const fs = require("fs");

const file = "app/complete-options-beta/ai-call-beta/page.tsx";

if (!fs.existsSync(file)) {
  console.log("Missing:", file);
  process.exit(1);
}

let text = fs.readFileSync(file, "utf8");
let next = text;

next = next.replace(/key:\s*"access check"/g, 'key: "accessCheck"');
next = next.replace(/label:\s*"access check"/g, 'label: "Access check"');
next = next.replace(/where a access check/g, "where an access check");
next = next.replace(/a access check/g, "an access check");

if (next !== text) {
  fs.writeFileSync(file, next, "utf8");
  console.log("Fixed:", file);
} else {
  console.log("No changes needed");
}
