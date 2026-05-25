const fs = require("fs");

const fixes = [
  {
    file: "app/api/voice-beta/calls/route.ts",
    replacements: [
      ["booking.access check", "booking.accessCheck"],
    ],
  },
  {
    file: "app/book-skip/page.tsx",
    replacements: [
      ['${access check}', '${accessCheck}'],
      ['label={`${jobsize} Skip / Service`}', 'label={`${jobsize} Service`}'],
    ],
  },
  {
    file: "app/complete-options-beta/admin/voice-beta/jobs/page.tsx",
    replacements: [
      ["job.access check", "job.accessCheck"],
      ['label="access check"', 'label="Access check"'],
    ],
  },
  {
    file: "app/operations-demo/invoice-receipts/page.tsx",
    replacements: [
      ["invoice.access check", "invoice.accessCheck"],
      ['service: "8 Yard Mixed Waste Skip"', 'service: "Priority site clearance job"'],
    ],
  },
];

let changed = [];

for (const fix of fixes) {
  if (!fs.existsSync(fix.file)) {
    console.log("Missing:", fix.file);
    continue;
  }

  let text = fs.readFileSync(fix.file, "utf8");
  let next = text;

  for (const [from, to] of fix.replacements) {
    next = next.split(from).join(to);
  }

  if (next !== text) {
    fs.writeFileSync(fix.file, next, "utf8");
    changed.push(fix.file);
  }
}

console.log("Changed files:");
console.log(changed.length ? changed.join("\n") : "None");
