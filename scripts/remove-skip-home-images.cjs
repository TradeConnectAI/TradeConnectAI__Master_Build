const fs = require("fs");
const path = require("path");

const pageFile = "app/page.tsx";
const publicDir = "public";

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  let out = [];

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) out = out.concat(walk(full));
    if (item.isFile()) out.push(full);
  }

  return out;
}

function toPublicPath(file) {
  return "/" + file.replace(/^public[\\/]/, "").replace(/\\/g, "/");
}

const imageExts = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);

const banned = [
  "skip",
  "skips",
  "install",
  "lorry",
  "lorries",
  "scania",
  "waste",
  "grab",
  "aggregate",
  "hardcore",
];

const preferred = [
  "trade",
  "trades",
  "worker",
  "engineer",
  "tools",
  "builder",
  "electric",
  "plumb",
  "van",
  "job",
  "site",
  "construction",
];

const allAssets = walk(publicDir).filter((file) =>
  imageExts.has(path.extname(file).toLowerCase())
);

const logoCandidates = allAssets.filter((file) => {
  const lower = file.toLowerCase();
  return (
    lower.includes("logo") ||
    lower.includes("tradeconnect") ||
    lower.includes("trade-connect") ||
    lower.includes("tca")
  );
});

const safePhotos = allAssets.filter((file) => {
  const lower = file.toLowerCase();

  if (lower.endsWith(".svg")) return false;
  if (lower.includes("logo")) return false;

  return !banned.some((word) => lower.includes(word));
});

const preferredPhotos = safePhotos.filter((file) => {
  const lower = file.toLowerCase();
  return preferred.some((word) => lower.includes(word));
});

const finalPhotos = preferredPhotos.length ? preferredPhotos : safePhotos;

const logo = logoCandidates[0] ? toPublicPath(logoCandidates[0]) : "";
const heroImages = finalPhotos.slice(0, 4).map(toPublicPath);

const heroImage = heroImages[0] || "";
const cardImageOne = heroImages[1] || "";
const cardImageTwo = heroImages[2] || "";

console.log("Logo:", logo || "No logo found");
console.log("Safe homepage images:");
console.log(heroImages.length ? heroImages.join("\n") : "No safe photos found, using gradient/cards only.");

let text = fs.readFileSync(pageFile, "utf8");

text = text.replace(
  /const logoPath = ".*?";/,
  `const logoPath = ${JSON.stringify(logo)};`
);

text = text.replace(
  /const heroImage = ".*?";/,
  `const heroImage = ${JSON.stringify(heroImage)};`
);

text = text.replace(
  /const cardImageOne = ".*?";/,
  `const cardImageOne = ${JSON.stringify(cardImageOne)};`
);

text = text.replace(
  /const cardImageTwo = ".*?";/,
  `const cardImageTwo = ${JSON.stringify(cardImageTwo)};`
);

fs.writeFileSync(pageFile, text, "utf8");
