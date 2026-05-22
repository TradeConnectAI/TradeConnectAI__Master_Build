const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = process.cwd();

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      if (!["node_modules", ".next", ".git", ".vercel"].includes(item)) {
        walk(full, out);
      }
    } else if (/\.(tsx|ts|jsx|js|css)$/.test(full)) {
      out.push(full);
    }
  }

  return out;
}

function hasInvalidUtf8(buffer) {
  const decoder = new TextDecoder("utf-8", { fatal: true });

  try {
    decoder.decode(buffer);
    return false;
  } catch {
    return true;
  }
}

console.log("?? Scanning source files for invalid UTF-8...");

const files = [
  ...walk(path.join(root, "app")),
  ...walk(path.join(root, "components")),
  ...walk(path.join(root, "lib")),
  ...walk(path.join(root, "hooks")),
  ...walk(path.join(root, "context")),
];

let fixed = 0;

for (const file of files) {
  const buffer = fs.readFileSync(file);

  if (hasInvalidUtf8(buffer)) {
    console.log("?? fixing encoding:", path.relative(root, file));

    const backup = `${file}.bad-encoding-backup`;
    fs.copyFileSync(file, backup);

    // Decode as Windows/Latin fallback, remove replacement junk, rewrite clean UTF-8
    let text = buffer.toString("latin1");

    text = text
      .replace(/\uFFFD/g, "")
      .replace(/[^\x09\x0A\x0D\x20-\x7E£€–—‘’“”•…]/g, "");

    fs.writeFileSync(file, text, "utf8");
    fixed++;
  }
}

console.log(`? Encoding fixes applied: ${fixed}`);

console.log("?? Clearing Next cache...");
fs.rmSync(path.join(root, ".next"), { recursive: true, force: true });

console.log("?? Running build...");
execSync("npm run build", { stdio: "inherit" });

console.log("? Build passed");

console.log("?? Committing and pushing...");
try {
  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "Fix invalid UTF8 source encoding"', { stdio: "inherit" });
  execSync("git push", { stdio: "inherit" });
  console.log("?? Pushed to GitHub");
} catch {
  console.log("Nothing to commit or git failed. Showing status:");
  execSync("git status", { stdio: "inherit" });
}

console.log("?? Done");
