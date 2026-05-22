const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = process.cwd();
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

function walk(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!["node_modules", ".next", ".git", ".vercel"].includes(item)) walk(full, exts, out);
    } else if (exts.includes(path.extname(full))) {
      out.push(full);
    }
  }
  return out;
}

console.log("?? TradeConnectAI final mobile fix starting...");

const globals = path.join(root, "app", "globals.css");
if (!fs.existsSync(globals)) {
  console.error("Cannot find app/globals.css");
  process.exit(1);
}

fs.copyFileSync(globals, path.join(root, "app", `globals.backup.final-mobile-${stamp}.css`));

const css = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background: #020617;
  color: white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

img,
video,
iframe,
canvas,
svg {
  max-width: 100%;
  height: auto;
}

main,
section,
article,
aside,
header,
footer,
nav,
div {
  min-width: 0;
}

a,
button {
  touch-action: manipulation;
}

input,
select,
textarea,
button {
  font-size: 16px;
}

table {
  width: 100%;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

pre,
code {
  max-width: 100%;
  overflow-x: auto;
}

@media (max-width: 768px) {
  html,
  body {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
  }

  main {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  section,
  article,
  header,
  footer,
  nav,
  aside,
  div {
    max-width: 100% !important;
  }

  .container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  .grid,
  [class*="grid-cols-"],
  [class*="sm:grid-cols-"],
  [class*="md:grid-cols-"],
  [class*="lg:grid-cols-"],
  [class*="xl:grid-cols-"],
  [class*="2xl:grid-cols-"] {
    grid-template-columns: 1fr !important;
  }

  .flex,
  [class*="sm:flex"],
  [class*="md:flex"],
  [class*="lg:flex"],
  [class*="xl:flex"] {
    flex-wrap: wrap !important;
  }

  [class*="w-["],
  [class*="min-w-["],
  [class*="max-w-["],
  .w-screen,
  .min-w-full {
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
  }

  .text-4xl,
  .text-5xl,
  .text-6xl,
  .text-7xl,
  .text-8xl {
    font-size: 2rem !important;
    line-height: 2.35rem !important;
  }

  .text-3xl {
    font-size: 1.65rem !important;
    line-height: 2rem !important;
  }

  .p-6,
  .p-8,
  .p-10,
  .p-12,
  .p-14,
  .p-16 {
    padding: 1rem !important;
  }

  .px-6,
  .px-8,
  .px-10,
  .px-12,
  .px-14,
  .px-16 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .py-8,
  .py-10,
  .py-12,
  .py-16,
  .py-20,
  .py-24 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .gap-6,
  .gap-8,
  .gap-10,
  .gap-12 {
    gap: 1rem !important;
  }

  button,
  a {
    white-space: normal !important;
  }

  nav {
    overflow-x: auto !important;
  }

  nav a,
  nav button {
    white-space: nowrap !important;
  }

  aside {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    min-height: auto !important;
    max-height: none !important;
    overflow-x: auto !important;
  }

  .dashboard,
  .panel,
  .card,
  .map,
  .stats,
  .jobs,
  .drivers,
  .revenue,
  .quotes,
  .invoices {
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
  }

  .map,
  [class*="map"],
  [class*="Map"] {
    min-height: 340px !important;
    height: auto !important;
  }

  .desktop-only,
  .hidden-on-mobile {
    display: none !important;
  }
}
`;

fs.writeFileSync(globals, css, "utf8");
console.log("? globals.css replaced");

const files = [
  ...walk(path.join(root, "app"), [".tsx", ".ts", ".jsx", ".js"]),
  ...walk(path.join(root, "components"), [".tsx", ".ts", ".jsx", ".js"])
];

let patched = 0;

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  const before = s;

  // Clean repeated grid damage from earlier scripts
  s = s.replace(/(?:grid-cols-1 md:grid-cols-3 xl:)+grid-cols-6/g, "grid-cols-1 md:grid-cols-3 xl:grid-cols-6");
  s = s.replace(/(?:grid-cols-1 md:grid-cols-3 xl:)+grid-cols-5/g, "grid-cols-1 md:grid-cols-3 xl:grid-cols-5");
  s = s.replace(/(?:grid-cols-1 md:grid-cols-2 xl:)+grid-cols-4/g, "grid-cols-1 md:grid-cols-2 xl:grid-cols-4");
  s = s.replace(/(?:grid-cols-1 md:)+grid-cols-3/g, "grid-cols-1 md:grid-cols-3");
  s = s.replace(/(?:grid-cols-1 md:)+grid-cols-2/g, "grid-cols-1 md:grid-cols-2");

  // Hard widths
  s = s.replace(/w-\[(?:1[0-9]{3}|[6-9][0-9]{2})px\]/g, "w-full max-w-7xl");
  s = s.replace(/min-w-\[(?:1[0-9]{3}|[4-9][0-9]{2})px\]/g, "min-w-0");
  s = s.replace(/max-w-\[(?:1[0-9]{3}|[4-9][0-9]{2})px\]/g, "max-w-full");

  // Unsafe desktop-only grids
  s = s.replace(/(?<![:\w-])grid-cols-6/g, "grid-cols-1 md:grid-cols-3 xl:grid-cols-6");
  s = s.replace(/(?<![:\w-])grid-cols-5/g, "grid-cols-1 md:grid-cols-3 xl:grid-cols-5");
  s = s.replace(/(?<![:\w-])grid-cols-4/g, "grid-cols-1 md:grid-cols-2 xl:grid-cols-4");
  s = s.replace(/(?<![:\w-])grid-cols-3/g, "grid-cols-1 md:grid-cols-3");
  s = s.replace(/(?<![:\w-])grid-cols-2/g, "grid-cols-1 md:grid-cols-2");

  // Safer height and nowrap
  s = s.replace(/(?<!min-)h-screen/g, "min-h-screen");
  s = s.replace(/(?<!md:)whitespace-nowrap/g, "whitespace-normal md:whitespace-nowrap");

  if (s !== before) {
    fs.writeFileSync(file, s, "utf8");
    patched++;
    console.log("? patched", path.relative(root, file));
  }
}

console.log(`? patched files: ${patched}`);

const report = [];
const checks = [
  /w-\[[0-9]+px\]/,
  /min-w-\[[0-9]+px\]/,
  /max-w-\[[0-9]+px\]/,
  /grid-cols-6/,
  /grid-cols-7/,
  /grid-cols-8/,
  /h-screen/,
  /fixed/,
  /absolute/,
  /whitespace-nowrap/,
  /overflow-hidden/
];

for (const file of [...files, globals]) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    if (checks.some(rx => rx.test(line))) {
      report.push(`${path.relative(root, file)}:${i + 1}: ${line.trim()}`);
    }
  });
}

const reportPath = path.join(root, `mobile-layout-report-node-${stamp}.txt`);
fs.writeFileSync(reportPath, report.join("\n"), "utf8");
console.log("?? report:", path.basename(reportPath));

console.log("?? running build...");
execSync("npm run build", { stdio: "inherit" });

console.log("? build passed");

try {
  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "Final mobile responsive repair"', { stdio: "inherit" });
  execSync("git push", { stdio: "inherit" });
  console.log("?? pushed to GitHub");
} catch (err) {
  console.log("Git commit/push had nothing to do or failed. Showing status:");
  execSync("git status", { stdio: "inherit" });
}

console.log("?? done");
